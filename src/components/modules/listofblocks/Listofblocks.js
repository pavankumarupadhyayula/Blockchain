import React, { Component } from "react";
import doAsyncRequest from "./../../../services/httpRequestService";

class Listofblocks extends Component {
    URL_PATH = "blocks";
    FORMAT = "format=json&cors=true";

    constructor(props) {
        super(props);
        this.state = {
            block: null,
            isBlockLoaded: false
        };
    }

    async componentDidMount() {
        const timestamp = new Date().getTime();
        doAsyncRequest(`${this.URL_PATH}/${timestamp}?${this.FORMAT}`)
            .then(response => {
                this.setState({ block: response.blocks, isBlockLoaded: true });
            })
    }

    getListofblocks (value, index) {

        if (value !== undefined || value !== null) {
            const template = <React.Fragment key={index}>
                <li className="list-group-item">
                    <label className="no-margin">Hash</label>
                    <p className="no-margin">{value.hash}</p>
                    <a href={"/"+value.hash} >View Single Transaction</a>
                </li>
            </React.Fragment>
            return template;
        }

    }
    

    render() {
        const { isBlockLoaded, block } = this.state;
        const limit = this.props.limit;
        let count = 0;

        if (!isBlockLoaded) {
            return (<div>Loading...</div>)
        } else {
            return (<div className="card">
                    <div className={limit > 1 ? "card-header bg-primary active-text-color" :" card-header bg-dark active-text-color"}> {limit > 1? 'Blocks':'Single Block'} </div>
                     <ul className="list-group list-group-flush">
                                { block.map((value,index)=>{
                                   const template = count < limit ? this.getListofblocks(value,index) : false
                                   count ++;
                                   return template
                                })}
                            </ul>
                        </div>);
        }
    }
}

export default Listofblocks;