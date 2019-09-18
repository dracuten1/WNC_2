import React from 'react';
import './square.css';

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        console.log(this.props.value)
        const value=this.props.value;
        let mark='';
        if(value===1){
            mark='X';
        }else if(value===2){
            mark='O';
        }

        return (
            <button
                className="square"
                onClick={() => this.props.onClick()}
            >
                {mark}
            </button>
        );
    }
}
export default Square;