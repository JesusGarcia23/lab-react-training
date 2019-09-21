import React from 'react';

class BoxColor extends React.Component {

    render(){
        const divStyle = {
            border: '1px solid black',
            backgroundColor: `rgb(${this.props.r},${this.props.g},${this.props.b})`
        }
        return (
            <div className="theBoxColor" style={divStyle} >
           <div> rgb({this.props.r},{this.props.g},{this.props.b}) </div>
            
            </div>
           
        )
    }
}

export default BoxColor;