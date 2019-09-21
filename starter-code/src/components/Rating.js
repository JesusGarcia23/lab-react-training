import React from 'react';

class Rating extends React.Component {

    render(){
        let theRate = Number(this.props.children);
        console.log(typeof(theRate));
       let theRating = "0";
        if(theRate === 0){
            return(
                <div>&#9734;&#9734;&#9734;&#9734;&#9734;</div>
            )
        }else if(theRate >= 1 && theRate <= 1.49){
            return(
                <div>&#9733;&#9734;&#9734;&#9734;&#9734;</div>
            )
        }else if(theRate >= 1.5 && theRate <= 2.49){
            return(
                <div>&#9733;&#9733;&#9734;&#9734;&#9734;</div>
            )
        }else if(theRate >= 2.5 && theRate <= 3.49){
            return(
                <div>&#9733;&#9733;&#9733;&#9734;&#9734;</div>
            )
        }else if(theRate >= 3.5 && theRate <= 4.49){
            return(
                <div>&#9733;&#9733;&#9733;&#9733;&#9734;</div>
            )
        }else if(theRate >= 4.5 && theRate <= 5){
            return(
                <div>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            )
        }
        else{
            return(
            <div>&#9734;&#9734;&#9734;&#9734;</div>
            )
        }
     
    }
}

export default Rating;