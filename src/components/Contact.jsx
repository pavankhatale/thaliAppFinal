import React from 'react'
import contact1 from "../Imgpro/contact1.webp";
import mini4 from "../Imgpro/mini4.jpg";
import "../components/Contactt.css"
export const Contact = () => {
  return (
    <div >
   <div className='contact'
      style={{
        backgroundImage: `url(${mini4})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
       backgroundAttachment: "fixed",
      
      }}
    ><br/>


<div className="con" >
  <div style={{textAlign:"center"}}>
    <h2 style={{color:"aqua" , fontFamily: "Sofia"}}>Contact Us</h2>
    <p style={{color:"red"}}> welcome</p>
  </div>
  <div className="row">
    <div className="column">
    <img src={contact1} style={{width:"80%" }}/> 
    </div>
    <div className="column">
      <form >
        <label htmlFor="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
        <label htmlFor="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
        <label htmlFor="country">Country</label>
        <select id="country" name="country">
          <option value="australia">PUNE</option>
          <option value="canada">AMRAVATI</option>
          <option value="usa">NAGPUR</option>
        </select>
        <label htmlFor="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"50px"}}></textarea>
        <input type="submit" value="Submit" onClick={()=>{
            alert("thanks for contact...we reach reach within 2 hr")
        }}/>
      </form>
    </div>
  </div>
</div>

</div>



    </div>
    
  )
}
