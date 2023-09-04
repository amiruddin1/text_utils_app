import React, {useState} from 'react'
import MyAlert from './myAlert';


export default function Bodypart() {
  const [status,setStatus] = useState("");

  var checkUser = ()=>{
    if(document.getElementById('input1').value === "Admin" && document.getElementById('input2').value === "Admin"){
        setStatus("Authenticated");
        setTimeout(() => {
          setStatus("")
          document.getElementById('input1').value ="";
          document.getElementById('input2').value ="";
        }, 3000);
    }
    else{
        setStatus("Not Authenticated");
        setTimeout(() => {
            setStatus("")
            document.getElementById('input1').value ="";
            document.getElementById('input2').value ="";
          }, 3000);
    }
  }
  return (
    <div className="container">
        <MyAlert alert={status}/>
        <div>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="text" className="form-control" id="input1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="text" className="form-control" id="input2"/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={checkUser}>Submit</button>
        </div>
    </div>
  )
}
