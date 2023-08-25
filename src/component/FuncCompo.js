import "./style.css"

function FuncCompo(){
    console.log("function compo")
    return(
  <div  className="Funcdiv"> 
    <h1 >This is Created using Function Component</h1>
    <h5>This is done using external CSS</h5>
    <p style={{color:"blue"}}>This is done using inline CSS</p></div>
       
    )
}

export default FuncCompo