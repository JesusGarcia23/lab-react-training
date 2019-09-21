import React from 'react';

class Greetings extends React.Component {

    render(){
        let greet = "Hello";
if(this.props.lang === "de"){
greet = "Holla";
}else if(this.props.lang === "fr"){
greet = "Bonjour";
}


        return(
            <p lang={this.props.lang} >{greet}  {this.props.children} </p>
        )
    }
}

export default Greetings;