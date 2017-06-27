const hyperHTML = require('hyperhtml');
hyperHTML.Component = function () {
  const newTarget = this.__proto__.constructor;
  return Reflect.construct(HTMLElement, arguments, newTarget);
}

Object.setPrototypeOf(hyperHTML.Component, HTMLElement);
Object.setPrototypeOf(hyperHTML.Component.prototype, HTMLElement.prototype);