import React, {Component} from 'react';



class BMW extends Component {

	 render () {
     return (
     	  <div className="bmw">
           <div className="take_your_best">
             <p  className="p_1">Take your best< /p>
           </div> 
           <div className="mini_emblem">
              <img className="emblem" src="images/png/mini_emblem.png" alt="mini_emblem"/>
           </div>
           <div className="trail"></div> 
           <img className="img_bmw" src="images/png/bmw.png" alt="mini_emblem"/>   
           <div className="bmw_series">
              <p  className="p_2">BMW Series< /p>
              <p  className="p_3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed magna arcu. Quisque in augue faucibus,<br/> 
              eleifend quam vitae, euismod enim. Donec egestas lacus ut euismod sollicitudin.< /p>
              <div className="btn_view_all_models btn_hover">
                   <p  className="p_4">VIEW ALL MODELS< /p>
                  
              </div>
           </div> 
        </div>

     );
   }
};



export default  BMW ;