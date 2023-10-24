import React,{useState} from "react";
import "./reguser.css";

function RegUser() {
  let initialInfo = {
    fname:'',
    lname : '',
    mail: '',
    dial : '',
    number : '',
    pass : '',
    confPass : '',
    checked : false
  }

  const [userBio, setUserBio] = useState(initialInfo);
  const [post, setPost] = useState(false);

  const handleSubmit = (e)=>{
    e.preventDefault();
    try {
      console.log(userBio)
      
    } catch (error) {
      console.log(error)
      
    }
  }
  

  
  return (
    <div style={{ display:'flex',minHeight: "100vh", justifyContent:'center', alignItems:'center' }}>
      <form
      onSubmit={(e)=>handleSubmit(e)}
        style={{
          display:'flex',
          flexDirection:'column',
          backgroundColor: "white",
          boxShadow: '1px 1px 5px #084982',
            justifyContent: "center",
            alignItems: "center",
          padding: "2em",
          minWidth:'25em',
          borderRadius:'1em',
        }}
      >
        <h3 style={{ textAlign: "center", color:'#084982' }}>Register new user</h3>

        <div
          style={{
            display: "flex",
            padding:5,
            gap: 10,
            flexDirection: "column",
            minWidth:"20em",
            maxWidth: "20em",
            alignItems:'center',
          }}
        
          className="inputFields"
        >
          <div className="inputContainer">
          <label htmlFor='fname' >First name</label>
          <input type='text' id="fname" required onChange={(e)=>setUserBio({...userBio, fname : e.target.value})}/> 
          </div>
          
          <div className="inputContainer">
          <label htmlFor='lname' >Last name</label>
          <input type='text' id="lname"required onChange={(e)=>setUserBio({...userBio, lname : e.target.value})} /> 
          </div>
          <div className="inputContainer">
          <label htmlFor='email' >Email</label>
          <input type='email' id="email" required onChange={(e)=>setUserBio({...userBio, mail : e.target.value})}/> 
          </div>
          <div className="inputContainer">
          <label htmlFor='number' >Phone</label>
          <div style={{display:'flex', gap:4}}>
            <select 
            required
            onChange={(e)=>setUserBio({...userBio, dial : e.target.value})}
            style={{outline:'none', borderRadius:5, borderColor:'#1CAAD7'}}
            defaultValue={+234}
            
            >
              <option>+234</option>
              <option>+1</option>
            </select>
            <input type='number' required id="number" style={{minWidth:'75%'}} 
            onChange={(e)=>setUserBio({...userBio, number : e.target.value})}/>
          </div> 
          </div>
          <div className="inputContainer">
          <label htmlFor='pword' >Password</label>
          <input type='password' required id="pword" onChange={(e)=>setUserBio({...userBio, pass : e.target.value})}/> 
          </div>

          <div className="inputContainer">
          <label htmlFor='cPword'>Confirm Password</label>
          <input type='password'  id="cPword"/> 
          </div>

          <div style={{ display:'flex', justifyContent:'center', alignItems:'center', width:'100%', paddingLeft:25}}>
          <input type='checkbox' id="terms" onChange={(e)=>setUserBio({...userBio, checked : e.target.value})}/> 
          <label htmlFor='terms' >I Accept terms and agreement</label>
          
          </div>

          <div style={{marginTop:10, display:'flex', justifyContent:'center', width:'100%', paddingLeft:25}}>
            <button type='submit' className="primaryButton">Register</button>
          </div>
          
          
        </div>
        
      </form>
    </div>
  );
}

export default RegUser;
