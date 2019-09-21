import React from 'react';

class Random extends React.Component {

    render(){

        let numRandom = Math.floor(Math.random() * this.props.max) + this.props.min;
        return(
            <div>
Random value between {this.props.min} and {this.props.max} => {numRandom}
      </div>
        )
    }
}

export default Random;