import React,{Component} from "react"
import "./style.css"

class ClassCompo extends Component{
    
  render(){
    console.log("class component");
  return(
    <div className="classdiv">  
    <h1 >This is Created using Class Component</h1>
    <h5>This is done using external CSS</h5>
    <p style={{color:"blue"}}>This is done using inline CSS</p>
    </div>

    
    
  );}
   
}
export default ClassCompo