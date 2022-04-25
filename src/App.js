import './App.css';
import React from 'react';
import Clock from './Clock';




export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            player: 1
        }
    }
    change = () => {
        this.setState({
            player: 3 - this.state.player
        });
    }
    getPlayer = () => {
        return this.state.player;
    }
    render () {
        return (
            <div className='App'>
                <div className='clock'>
                    <Clock color='green' player="1"
                    turn={this.change}
                    active={this.getPlayer}/>
                </div>
                <div className='clock'>
                    <Clock color='red' player="2"
                    turn={this.change}
                    active={this.getPlayer}/>
                </div>

            </div>

        )
    }
}
