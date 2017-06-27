export default function (babel) {
  const { types: t } = babel;

  const removeFromBody = path => path.parent.body = path.parent.body.filter(x => x != path.node)
  
  const moveOther = path => {
    const set = babel.transform(`this.${path.node.key.name} = 0`);
    const assignment = set.ast.program.body[0]
    // easier to override like this ;)
    assignment.expression.right = path.node.value

    const ctr = path.parent.body.find(x => x.kind === 'constructor')
    ctr.body.body.splice(ctr.body.body.length -1, 0, assignment)

    removeFromBody(path)
  }
  
  const appendDefine = path => {
    const name = path.node.id.name
    const register = babel.transform(`customElements.define('hyper-${name.toLowerCase()}', ${name})`);
    path.parent.body.splice(path.parent.body.findIndex(x => x === path.node) + 1, 0, register.ast.program.body[0])
  }
  
  const moveRender = path => {
    const isFragment = path.node.value.openingElement.name.name === 'fragment'
    path.path.traverse({
      JSXExpressionContainer(path, context){
        if(!path.inList){
          let code = babel.transformFromAst(t.file(t.program([t.expressionStatement(path.node.expression)]))).code;        
          code = code.substring(0, code.length - 1)
          path.parent.value = t.stringLiteral('${'+code.replace(/\n/g,'')+'}')
        }
      }
    })
    let code = babel.transformFromAst(t.file(t.program([t.expressionStatement(path.node.value)]))).code
    
    // TODO: if name=fragment ... else
    code = code.substring(0, code.length - 1);
    if (isFragment) {
    	code = code.substring(10, code.length -11);
    }
    path.parent.body.push(
      babel.transform('class _{render(){ return this._render`'+code+'`}}')
    	.ast.program.body[0].body.body[0]
    )
    
    // remove node
    removeFromBody(path)
  }
  const params = [
  	t.restElement(t.identifier('rest'))
  ]
  
  const addConstructor = path => {
    path.node.body.body.push(
       babel.transform('class X{constructor(...args){super(...args); this._render = hyperHTML.bind(this); this.render()}}')
    	.ast.program.body[0].body.body[0]
    )
  }
  
  return {
    name: "ast-transform", // not required
    visitor: {
      
      ClassDeclaration(path) {
        const sc = path.node.superClass;
        if (
          sc && 
          sc.property.name === 'Component' &&
          sc.object.name === 'hyperHTML'
        ) {
          addConstructor(path)
          path.traverse({
            ClassProperty(p){
              const item = p.node
              if (item.type === 'ClassProperty') {
                if(item.key.name === 'render') {
                  moveRender({node: item, parent: path.node.body, path: p })
                } else {
                  moveOther({node: item, parent: path.node.body })
                }
              }
            }
          })
          path.node.body.body.forEach(item => {
            if (item.type === 'ClassProperty') {
              if(item.key.name === 'render') {
                moveRender({node: item, parent: path.node.body })
              } else {
                moveOther({node: item, parent: path.node.body })
              }
            }
          })
          path.node.body.body.push(
            babel.transform('class _{setState(state){ Object.assign(this.state, state); this.render()}}')
              .ast.program.body[0].body.body[0]
          )
          appendDefine(path)
        }
      }
    }
  };
}

