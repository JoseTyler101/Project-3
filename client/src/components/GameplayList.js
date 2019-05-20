import React, { Component } from 'react';
import axios from 'axios';
import Gameplay from './Gameplay';

class GameplayList extends Component {
    state = {
        gameplayInfo:[]
    }

    componentDidMount(){
        this.getGameplays()
    }

    getGameplays = () => {
        axios.get('/api/v1/game').then((res)=>{
            this.setState({gameplayInfo: res.data})
        })
    }

    render() {
        return (
            <div>
                Im a Gameplaylist
                {this.state.gameplayInfo.map((spot, index )=>{

return ( 
    <Gameplay key={index} 
    gamertag={spot.gamertag}
    _id={spot._id}
    getGameplays={this.getGameplays}
    />
)
                })}
            </div>
        );
    }
}

export default GameplayList;