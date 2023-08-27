import React,{useState,Component} from "react"
import ClassCompo from "./ClassCompo"
import FuncCompo from "./FuncCompo"
import "./style.css"

function DisplayData(){
    const[count,SetCount]=useState(true);
    return(
      
            <div>
             <button  className="btn1" onClick={()=>{
            SetCount(!count)
        }} >Styling using Function Component</button>

        {count?<FuncCompo/>:" "}
        </div>  
    )

}

export default DisplayData

class ABC extends Component{
    constructor (){
super();
this.state={
    val:true,
};
console.log(this.state.val);
}
    
   render() {
    
    return(
        <div>
              <button  className="btn2" onClick={()=>{
                this.setState({val:!this.state.val})
            }}>Styling using classCompo</button>
        

        {this.state.val?<ClassCompo/>:" "}
        </div>
    )
        }
    }
    


export  {ABC}