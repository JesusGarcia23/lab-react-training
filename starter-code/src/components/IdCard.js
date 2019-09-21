import React from 'react';

class IdCard extends React.Component {

    render(){
        return(
            <div>
            <span>
            <img src={this.props.picture} alt="profile-img" width="100px" height="100px"/>
            </span>
            <span>
            <div><span>First name:</span> {this.props.firstName}</div>
            <div><span>Last name:</span> {this.props.lastName}</div>
            <div><span>Gender:</span> {this.props.gender}</div>
            <div><span>Height</span> {this.props.height}</div>
            <div><span>Birth:</span> {this.props.birth}</div>
            </span>
            </div>
        )
    }
}


export default IdCard