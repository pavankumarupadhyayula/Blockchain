import React,{Component} from "react";
import doAsyncRequest from "./../../../services/httpRequestService";

function GetLatestBlock({params}) {
    if (params !== undefined || params !== null){

        const template = <div className="base-padding">
              <div className="no-margin">
                <label className="no-margin">Hash</label>
                <p className="no-margin">{params.hash}</p>
              </div> 
            <div className="no-margin">
                <label className="no-margin" >Time</label>
                <p className="no-margin">{params.time}</p>
            </div> 
            <div className="no-margin">
                <label className="no-margin" >Block Index</label>
                <p className="no-margin">{params.block_index}</p>
            </div> 
        </div>

        return template;
    }
}

class Latestblock extends Component {
    URL_PATH = "latestblock";
    
    constructor(props){
        super(props);
        this.state = {
            block: null,
            isBlockLoaded: false
        };
    }

   async componentDidMount(){
        doAsyncRequest(this.URL_PATH)
        .then(response => {
            this.setState({block:response, isBlockLoaded:true});
        })
    }



    render(){
        const {isBlockLoaded, block} = this.state;
         
        if(!isBlockLoaded){
            return(<div>Loading....</div>)
        }else{
            return (
                <div className="card border-danger mb-3">
                    <div className="card-header bg-danger active-text-color">Latest Block</div>
                        <div className="body">
                               <GetLatestBlock params={block}/>
                        </div>
                    </div>
                   );
        }
    }
}

export default Latestblock;