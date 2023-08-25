import React,{useState} from "react"
import ClassCompo from "./ClassCompo"
import FuncCompo from "./FuncCompo"
import "./style.css"

function DisplayData(){
    const[count,SetCount]=useState(true);
    const[count2,SetCount2]=useState(true);

    return(
        <div className="outerdiv" >
            <div>
             <button onClick={()=>{
            SetCount(!count)
        }} >Styling using Function Component</button>

        {count?<FuncCompo/>:" "}
        </div>

        <div >
            <button onClick={()=>{
                SetCount2(!count2)
            }}>Styling using classCompo</button>
        

        {count2?<ClassCompo/>:" "}
        </div>
        </div>
       
    )

}
export default DisplayData