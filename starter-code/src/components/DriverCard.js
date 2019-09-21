import React from 'react';
import Rating from './Rating';

class DriverCard extends React.Component {

    render(){
        return (
            <div  className="driverCardLicense" width="300px" height="100px">
            <span>
            <img src={this.props.img} alt="driverProfile" width="100px"></img>
            </span>
            <div>{this.props.name}</div>
            <Rating>{this.props.rating}</Rating>
            <div>{this.props.car.model} - {this.props.car.licensePlate}</div>
            </div>
        )
    }
}

export default DriverCard;