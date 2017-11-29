import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import Calculator from './src/TemperatureInput';
import { BrowserRouter,Route,Link,HashRouter,hasHistory } from 'react-router-dom'

class NavComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <ul className='navbar'>
                    <li><Link to='/app'>Index</Link></li>
                    <li><Link to='/calculator'>Calculator</Link></li>
                </ul>
                <div>
                    {this.props.children}
                </div>
            </div>
            
        )
    }
}
class Test extends React.Component{
    render(){
        return (
            <h1>adsdadasda</h1>
        )
    }
}
ReactDOM.render((
    <HashRouter history={hasHistory}>
        <NavComponent>
            <Route path='/app' component={App} />
            <Route path='/calculator' component={Calculator} />
        </NavComponent>
        
    </HashRouter>
), document.getElementById('root'));

