const hyperHTML = require('hyperhtml');
hyperHTML.Component = function () {
  const newTarget = this.__proto__.constructor;
  return Reflect.construct(HTMLElement, arguments, newTarget);
}

Object.setPrototypeOf(hyperHTML.Component, HTMLElement);
Object.setPrototypeOf(hyperHTML.Component.prototype, HTMLElement.prototype);

// lazy load body
Object.defineProperty(hyperHTML, 'body', { get() { return hyperHTML.bind(document.body) } });
