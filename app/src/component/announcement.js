import React, {Component} from 'react';



class Announcement extends Component {

	 render () {
     return (
     	  <div className="announcement">
     	     <div className="announcement_blue">
              <h1>Add your announcement now< /h1>
              <div className="btn_announcement_blue btn_hover">
                  <p  className="p_1">ADD NOW< /p>
              </div>
              <img className="img_announcement" src="images/png/car.png" alt="img_announcement"/>
           </div>
           <div className="announcement_white clearfix">
              <div className="mercedes_dark">
                 <div className="btn_fresh btn_hover">
                    <p  className="p_2">FRESH< /p>
                 </div>
                 <div className="price">
                    <p  className="p_3">15.000$< /p>
                 </div>
                 <div className="btn_more_info btn_hover">
                    <p  className="p_4">MORE INFO< /p>
                 </div>
              </div>
              <div className="mercedes_light">
                   <div className="price_mercedes_light">
                      <p  className="p_4">15.000$< /p>
                   </div>
                   <div className="btn_fresh_mercedes_light btn_hover">
                    <p  className="p_5">FRESH< /p>
                  </div>
                  <div className="btn_order_car btn_hover">
                    <p  className="p_6">ORDER CAR< /p>
                  </div>
                  <div className="pagination">
                    
                  </div>
              </div>
           </div>
        </div>
     	);
   }
};



export default  Announcement ;