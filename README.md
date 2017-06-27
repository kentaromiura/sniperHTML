# sniperHTML




```js
const hyperHTML = require('hyperhtml');
require('./hyperHTML.Component');

class Foo extends hyperHTML.Component {
  render = <button>${this.state.name}</button>
  state = { name: '> Click me <' }
}

class App extends hyperHTML.Component {
    render = (
        <fragment>
            Hello,
            <hyper-foo onclick={
                e => e.currentTarget.setState({name:'Clicked!'})
            } />
        </fragment>
    )
    state = {}
}

onload = () => {
    hyperHTML.body`${<hyper-app />}`;
};
```

<a href="https://kentaromiura.github.io/sniperHTML/">Live example</a>