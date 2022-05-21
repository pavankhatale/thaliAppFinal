
import React from "react";
import mini3 from "../Imgpro/mini3.jpg";
export const Login = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${mini3})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          marginRight: "70%",
          marginLeft: "5%",
        }}
      >
        <h1 className="sign" style={{ marginLeft: "20%" }}>SignUp</h1>

        <div className="container" style={{ color: "cyan", fontSize: "12px" }}>
          <form>
            <div className="mb-2">
              <label htmlfor="firstname" className="form-label">
                First Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="firstname"
                style={{ width: "80% " }}
              />
            </div>

            <div className="mb-2">
              <label htmlfor="Lastname" className="form-label">
                Last Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="Lastname"
                style={{ width: "80% " }}
              />
            </div>

            <div className="mb-2">
              <label htmlfor="Number" className="form-label">
                Mobile Number:
              </label>
              <input
                type="tel"
                className="form-control"
                id="Number"
                style={{ width: "80% " }}
              />
            </div>

            <div className="mb-2">
              <label htmlfor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type=""
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                style={{ width: "80% " }}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-2">
              <label htmlfor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                style={{ width: "80% " }}
              />
            </div>
            <div className="mb-2 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlfor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button  onClick={()=>{alert("successfully login")}} type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
