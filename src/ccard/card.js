import React, { Component } from 'react';
import "./card.css"
class Card extends Component {
 
  render() { 
    return ( 
    <div>
   
        
        <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
                <div className="flipper">
                    <div className="front">
                        <img src="http://backgroundcheckall.com/wp-content/uploads/2017/12/visiting-card-background-black-10.jpg" alt="frontcard" className="frontc"/>
                      
                        <h4 className="title">CREDIT CARD</h4>
                        <img src="../puce-elec.jpg" alt="puce" className="puce"/>
                        <img src="https://cdn.freebiesupply.com/logos/large/2x/visa-5-logo-png-transparent.png" alt="visa" className="visa"/>
                        <p className="numb">1234 5678 1234 5678</p>
                        <p className="date">12/20</p>
                        <p className="val">valid <br/> thru </p>
                        <h5 className="name">Tony STARK</h5>
                        
                    </div>
                    <div className="back">
                        
                        <img src="http://walldiskpaper.com/wp-content/uploads/2014/11/Black-Background-High-Resolution.jpg" alt="backcard" className="backc"/>
                        <textarea name="black" className="black" cols="30" rows="3"></textarea>

                    </div>
                </div>
            </div>







    </div>
     );
  }
}
 
export default Card;