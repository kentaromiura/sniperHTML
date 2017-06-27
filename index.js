const hyperHTML = require('hyperhtml');
require('./hyperHTML.Component');

class Foo extends hyperHTML.Component {
  render = <button>${this.state.name}</button>
  state = { name: '> Click me <' }
}

onload = () => {
    const body = (
        <fragment>
            Hello,
            <hyper-foo onclick={
                e => e.currentTarget.setState({name:'Clicked!'})
            } />
        </fragment>
    );
    hyperHTML.body`${body}`;
};
