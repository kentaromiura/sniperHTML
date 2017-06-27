export default function (babel) {
  const { types: t } = babel;
  
  const getTemplateFor = string => {
    const template = t.templateElement({raw: string})
    template.value = {raw: string}
    return template
  }
  
  return {
    name: "jsxtohyperhtmlwire",
    visitor: {
      JSXElement(path, context) {
        const isFragment = path.node.openingElement.name.name === 'fragment';
        
        path.traverse({
          JSXExpressionContainer(path, context){
            if(!path.inList){
              console.log(path)
              const code = babel.transformFromAst(t.file(t.program([t.expressionStatement(path.node.expression)]))).code;
        
              path.parent.value = t.stringLiteral('${'+code.replace(/\n/g,'')+'}')
            }
          }
        })
        
        const code = babel.transformFromAst(t.file(t.program([t.expressionStatement(path.node)]))).code;
        
        
        // Hack instead of using a switch just make a dirty ast.
        path.parent.init =
        path.parent.body =
        path.parent.expression = (
          t.expressionStatement(
          	t.taggedTemplateExpression(
            	t.identifier('hyperHTML.wire()'),
                t.templateLiteral([
                  getTemplateFor(
                  isFragment?
                    code.substring(10,code.length -12):
                    code)
                ],[])
            )
          ).expression
        );
        
      }
    }
  };
}
