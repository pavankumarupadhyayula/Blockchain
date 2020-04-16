import React, { Component } from "react";
import Header from "./../../header/Header";
import doAsyncRequest from "./../../../services/httpRequestService";

function BlockDetails ({value}) {
    if(value !== undefined || value !== null){
       const template = <React.Fragment>
           <li className="list-group-item">
               <h4>Selected Hash</h4>
               <p className="hash-break">{value.hash}</p>
           </li>
           <li className="list-group-item">
               <h6>No of Transactions</h6>
               <p>{value.n_tx}</p>
           </li>
           <li className={value.n_tx > 0 ? "list-group-item show":"list-group-item hide"} >
                <h6>Single Transaction Details</h6>
                <p className="no-margin">Hash: {value.tx[0].hash}</p>
                <p className="no-margin">Size: {value.tx[0].size}</p>
                <p className="no-margin">Weight: {value.tx[0].weight}</p>
           </li>
       </React.Fragment>
       return  template;
    }
}

class Blockinfo extends Component {
    URL_PATH = "rawblock";
    constructor(props){
        super(props);
        this.state = {
            block: null,
            isBlockLoaded: false
        };
    }

    async componentDidMount() {
        const block_hash = this.props.match.params.id
        const url = `${this.URL_PATH}/${block_hash}`;
        doAsyncRequest(url)
            .then(response => {
                this.setState({ block: response, isBlockLoaded: true });
            })
    }


    render() {
        const {isBlockLoaded, block} = this.state;
        if(!isBlockLoaded){
            return (<div>
                       <Header />
                       <div className="container">Loading....</div>
                   </div>)
        }else{
            return (<div>
                        <Header />
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-sm-12">
                                    <li className="list-group-item active">
                                        <h4>Block Details</h4>
                                    </li>
                                    <ul className="list-group">
                                    <BlockDetails value={block}/>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>)
        }
    }
}

export default Blockinfo;