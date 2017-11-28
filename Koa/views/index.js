import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './src/App';
import {Calculator} from './src/TemperatureInput';
import { BrowserRouter,Route,Link,HashRouter,hasHistory } from 'react-router-dom'

class NavComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <ul className='navbar'>
                    <li><Link to='/'>Index</Link></li>
                </ul>
                <div>
                    {this.props.children}
                </div>
            </div>
            
        )
    }
}

ReactDOM.render((
    <HashRouter history={hasHistory}>
        <NavComponent>
            <Route path='/app' component={Calculator} />
        </NavComponent>
        
    </HashRouter>
), document.getElementById('root'));

