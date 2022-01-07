import React, { Component } from 'react';

const MyContext = React.createContext();

class MyProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: {
                stage: 1,
                players: [],
                result: ''
            }
        }
    }

    render() {
        return(
            <MyContext.Provider value={this.state.value}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export {
    MyContext,
    MyProvider
}

//random comment!