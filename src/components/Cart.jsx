import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RemoveItem } from '../redux/slice';
import mini6 from "../Imgpro/mini6.jpg";


const Cart = () => {
  const thali = useSelector(state => state.counter.thali)
  console.log(thali)
  const despatch = useDispatch()
  const Remove = (id) => {
    despatch(RemoveItem(id))

  }
  const order = () => {



    if (thali.length < 2) {
      alert("Add more than two items")
    } else {

alert("'Ordered sucessfully,Enjoy your food")

      thali.length = 0
    }

  }

  var sum = 0
  for (const item of thali) {
    sum = sum + item.totalPrice
  }
  
  return (
    <div
    
    style={{
      backgroundImage: `url(${mini6})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "100vw",
      height: "100vh",
     backgroundAttachment: "fixed",
    
    }}
    
    
    >
    <div className='container mx-3' >
      <h1 className='text-center ' style={{fontFamily:"Sofia"}}> <span style={{color:"Aqua"}}>Enjoy Your Food</span></h1>
      <div className='row'>
        {
          thali.map((ele, ind) => (
            <div className='col-4'>
              <div className="card " key={ind} >
                <img src={ele.image} className="card-img-top" alt="..." width="100px" height="200px" />
                <div className="card-body">
                  <h5 className="card-title">{ele.name}</h5>
                  <p className="card-text">Quantity: {ele.quantity}</p>
                  <p>Price: $ {ele.price}</p>
                  <p>TotalPrice: $ {ele.totalPrice}</p>
                  <button onClick={() => Remove(ind)} className="btn btn-primary">Remove</button>

                </div>
              </div>
            </div>



          )
          )
        }
        <div className='container text-center  m-2 p-2'>
          <button className='ordernow'  onClick={order}>Order Now <span className='text-warning'> ${sum}</span></button>
        </div>
      </div>
    </div>
    </div>)
}

export default Cart