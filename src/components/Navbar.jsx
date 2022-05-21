import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'; 

const Navbar = () => {
    const thali=useSelector(state=>state.counter.thali)

    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed navbar-black bg-black">
                <div className="container-fluid">
                    <h3 style={{fontFamily: " Sofia"}}>Prisha Restaurant</h3>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    < ul className = "navbar-nav me-auto mb-2 mb-lg-0" style={{marginLeft:"4%",fontSize:"20px"  ,fontFamily: "Sofia"}}>
                            <li className="nav-item" style={{color:"aqua"}}>
                                <Link 
                                 className="nav-link" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li
                            className="nav-item" style={{color:"bisque"}}>
                            <Link className="nav-link" to="/Menu">Menu</Link>
                            </li>
                            
                                <li 
                            className="nav-item">
                            <Link className="nav-link" to="/About">About</Link>
                            </li>
                            <li 
                            className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                            </li>

                            <li
                            className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/cart"><p><i className="fa-solid fa-cart-arrow-down fa-lg" style={{width:"50px",marginRight:"0px"}}></i><sup style={{color:'white',marginLeft:"-10px"}}>{thali.length}</sup>
   </p> </Link>
                            </li>
                            <li className="blink" style={{fontFamily:'cursive',fontSize:'25px',marginl:'5px' }} 
                            >
                            <Link className="nav-link active" aria-current="page" to="/login"><i className="fa-solid fa-user-plus" style={{marginLeft:"10px",width:"50px" ,color:"red"}}></i></Link>
                            </li>
                            
                            
        
                       
                           


            </ul >
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar


