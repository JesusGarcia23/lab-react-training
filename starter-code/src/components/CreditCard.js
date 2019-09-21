import React from 'react';

class CreditCard extends React.Component {

    render(){
        let cardStyle = {
            backgroundColor: this.props.bgColor,
            color: this.props.color
        }

        //FORMAT ICON
        let cardIcon = "";
        if(this.props.type === "Master Card"){
            cardIcon = './img/master-card.svg'
        }else if(this.props.type === "Visa"){
            cardIcon = './img/visa.png'
        }


        //FORMAT TIME
        let formatNumber = this.props.number.split('');
      for(let i = 0; i < formatNumber.length; i++){
          if(i < formatNumber.length - 4){
              if(i === 3 || i === 7 || i === 11){
                formatNumber[i] = "* "
              }else{
                formatNumber[i] = "*"
              }  
          }else{
              continue;
          }
      }

      let formatMonth = this.props.expirationMonth;
     if(formatMonth < 10){
        formatMonth = "0" + this.props.expirationMonth;
     }

        return(
            <div className="cardBody" style={cardStyle}>
            <div> <img src={cardIcon} alt='cardType' width="40px"></img></div>
            <div>{formatNumber}</div>
            <span>Expires {formatMonth}/{this.props.expirationYear}</span>
            <span>{this.props.bank}</span>
            <div>{this.props.owner}</div>
            </div>
        )
    }
}

export default CreditCard;