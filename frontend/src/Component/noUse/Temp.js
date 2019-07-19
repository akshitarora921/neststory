import React from 'react'
import axios from 'axios'

class Temp extends React.Component{
    state={
        temps:[]
    }
    componentDidMount(){
        axios.get("http://localhost:3001/banner/data")
        .then(res=>{
            var data = res.data;
            this.setState({
                temps:data
            })
        })
    }
    render(){
     
        return(
            <div>
              this.state.temps.map();
               
            
                
            </div>
        )
    }
}

export default Temp