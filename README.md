# sniperHTML


```js
const hyperHTML = require('hyperhtml');
require('./hyperHTML.Component');

class Foo extends hyperHTML.Component {
  render = <button>${this.state.name}</button>
  state = { name: '> Click me <' }
}

onload = () => {
    hyperHTML.bind(document.body)`Hello, <hyper-foo onclick="${
        e => e.currentTarget.setState({name:'Clicked!'})
    }"></hyper-foo>`
}
```

<a href="https://kentaromiura.github.io/sniperHTML/">Live example</a>