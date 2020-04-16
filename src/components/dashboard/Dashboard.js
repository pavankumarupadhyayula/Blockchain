import React, {Component} from "react";
import Header from "./../header/Header";
import Latestblock from "./../modules/latestblock/Latestblock";
import Listofblocks from "./../modules/listofblocks/Listofblocks";

class Dashboard extends Component {
    render(){
        return(
            <div>
                <Header />
                 <div className="container">
                     <div className="row">
                         <div className="col-md-8 col-sm-12">
                            <Listofblocks limit="5"/>
                         </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="row">
                                   <div className="col-md-12 col-sm-12">
                                    <Latestblock />
                                   </div>
                                   <div className="col-md-12 col-sm-12">
                                    <Listofblocks  limit="1"/>
                                   </div>
                            </div>
                        </div>
                      
                     </div>
                 </div>
            </div>
        )
    }
}

export default Dashboard;