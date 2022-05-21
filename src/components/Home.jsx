



import React from 'react'
import home11 from "../Imgpro/home11.jpg";
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigate = useNavigate()
  return (
    <div  style={{
        backgroundImage: `url(${home11})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        backgroundAttachment: "fixed",
      }}><br/>
      <br/>
      <br/>
      <h1 style={{marginLeft:"3%",color:"pink",fontFamily: "Roboto Slab"}}>Welcome</h1>
<h4 style={{marginLeft:"3%",color:"aqua",fontFamily: "Sofia"}}>food may be essential 
              as fuel for the body but 
                      good food is fuel for the soul</h4>
<div className='hom'>
    <h3 style={{marginTop:"5%",marginLeft:"4%",fontFamily: "Sofia",color:"red"}}>Sign up</h3>
<form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label" style={{marginTop:"4%",marginLeft:"4%"}}>Email address:</label>
    <input placeholder='Enter your email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{width:"80%",marginLeft:"4%"}}/>

  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label" style={{marginLeft:"4%"}}>Password:</label>
    <input placeholder='Enter your password' type="password" className="form-control" id="exampleInputPassword1" style={{width:"80%",marginLeft:"4%"}}/>
  </div>
  <div className="mb-3 form-check "style={{marginLeft:"3%"}}>
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" style={{marginLeft:"3%"}}>Submit</button>
</form>
</div>
<div>

<button  onClick={() => { navigate("/menu") }} className='ordernow' style={{ marginLeft:"80%",marginTop:"5%" ,width:"200px",height:"50px" }}>Order now</button>

</div>
    </div>
  )
}
