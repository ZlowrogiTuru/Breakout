import React, {Component} from 'react';
import {Loop, Stage} from 'react-game-kit';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Loop>
                <Stage>
                    // Game specific components go here
                </Stage>
            </Loop>
        );

    }
}

export default Main;