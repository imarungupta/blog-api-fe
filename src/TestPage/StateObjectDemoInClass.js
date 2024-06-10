import React from "react";

class StateObjectDemoInClass extends React.Component {
    constructor(){
        super();
        this.state={
            data:"Arun",
            number:1
        }
    }
    updateData(){
        this.setState({data:"Bunty"})
        this.setState({number:this.state.number+1})
        console.log(this.state.data)
        console.log(this.state.number)
    }
    render(){
        return(
            <div>
                <h1>{this.state.data}</h1>
                <h1>{this.state.number}</h1>
                <button onClick={()=>this.updateData()}>Update</button>
            </div>
        )
    }
}

export default StateObjectDemoInClass;