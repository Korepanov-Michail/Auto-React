import React, {Component} from 'react';



class Header extends Component {

	 render () {
   return (
   	<div className="header">
   	  <div className="logo">
         <img src="images/png/logo.png" alt="logo"/>
         <div className="contacts  clearfix">
             
             <div className="btn btn_hover">
                 <p className="p_1">LOG IN< /p>
             </div>
             <p className="p_2">+48&nbsp;605&nbsp;320&nbsp;091</p>
             <img className="phone" src="images/png/phone.png" alt="phone"/>
             <p className="p_3">contact@furie.co</p>
             <img className="email" src="images/png/mail.png" alt="mail"/>
         </div>
      </div>
      <img className="mersedes_1" src="images/png/mersedes_1.png" alt="mersedes_1"/>
      <div  className="buying" >
         <p className="p_4">Car buying made simple</p>
         <div  className="search" >
            <div  className="make" >
                <p className="p_5">Make</p>
                <div  className="line" ></div>
                
            </div>
            <div  className="model" >
                <p className="p_5">Model</p>
                <div  className="line" ></div>
                
            </div>
            <div  className="city" >
                <p className="p_5">City</p>
                <div  className="line" ></div>
                
            </div>
            <div  className="header_search_btn btn_hover" >
                <p className="p_5">SEARCH</p>
                
            </div>
         </div>
      </div>
   	</div>
   	);
 }
};



export default  Header ;

