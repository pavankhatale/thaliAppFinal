import React from 'react';
// import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';  
import Product from './Product';




function Menu() {

  const productData=useSelector(state=>state.counter.products)

  return(
    <div  style={{backgroundImage:"url(https://www.cuisineofthehimalayas.com/wp-content/uploads/2018/07/1.jpg)",textAlign:"center"}}>
 <div className='container'>
      <h1 style={{fontFamily:"cursive" ,color:"Aqua"}}> Menu Card</h1>
    <div className='row my-3' > 

      {
        productData.map((ele,i)=>(

          <Product key={i} data={ele}/>

        ))
      }


    </div>

  </div>



    </div>
   

  )




}

export default Menu;