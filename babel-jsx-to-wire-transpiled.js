'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (babel) {
  var t = babel.types;


  var getTemplateFor = function getTemplateFor(string) {
    var template = t.templateElement({ raw: string });
    template.value = { raw: string };
    return template;
  };

  return {
    name: "jsxtohyperhtml", // not required
    visitor: {
      JSXElement: function JSXElement(path, context) {
        var isFragment = path.node.openingElement.name.name === 'fragment';

        path.traverse({
          JSXExpressionContainer: function JSXExpressionContainer(path, context) {
            if (!path.inList) {
              var _code = babel.transformFromAst(t.file(t.program([t.expressionStatement(path.node.expression)]))).code;
              _code = _code.substring(0, _code.length - 1)
              path.parent.value = t.stringLiteral('${' + _code.replace(/\n/g,'') + '}');
            }
          }
        });

        var code = babel.transformFromAst(t.file(t.program([t.expressionStatement(path.node)]))).code;

        // Hack instead of using a switch just make a dirty ast.
        path.parent.init = path.parent.body = path.parent.expression = t.expressionStatement(t.taggedTemplateExpression(t.identifier('hyperHTML.wire()'), t.templateLiteral([getTemplateFor(isFragment ? code.substring(10, code.length - 12) : code)], []))).expression;
      }
    }
  };
};