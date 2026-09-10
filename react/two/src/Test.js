import React from "react";

class Test extends React.Component{
    constructor(props){
        super(props);
        console.log("constructor");
        this.state = {
            sl: 0
        }
    }

    buttonHandler = () => {
        console.log("work");    
        let val = this.state.sl;
        val++;
        this.setState({sl: val});    
    }

    componentDidMount(){
        console.log("Component Did Mount");        
    }

    componentDidUpdate(){
        console.log("Component Did Update");        
    }

    render(){
        console.log("render 1");
        return (
            <>
                {
                    console.log("return 1")                
                }
                <div>
                    <button onClick={this.buttonHandler}>Push</button>
                </div>
                <div>
                    {
                        this.state.sl
                    }
                </div>
            </>
        )
    }
}

export default Test;