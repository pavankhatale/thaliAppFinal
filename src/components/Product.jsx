import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import {addTothali} from "../redux/slice";
import "./pro.css"


const Product = ({data}) => {
  const [quantity,setQuantity]=useState(1);

const dispatch=useDispatch();
const add=(item)=>{
  item = JSON.parse(JSON.stringify(item));
  item.quantity=quantity;
  item.totalPrice=Number(item.quantity)*Number(item.price)
  dispatch(addTothali(item));
console.log(addTothali(item))
}

const increment=()=>{
  setQuantity(quantity+1)

}

const decrement=()=>{
  if(quantity>1)
  {
    setQuantity(quantity-1)
  } 
}

  return (
<div className='col-3' >
    <div className='card'>
 <img width="70px" height="130px" src={data.image} className="card-img-top" alt="..."/>
   
  <div className="card-body" style={{height:"3%`"}}>
    <h5 className="card-title">{data.name}</h5>
<h4 className='text-center'>$ {data.price}</h4>
    <a href="#" className="btn btn-primary " onClick={()=>add(data)}>Add To Thali</a>

    <div >
       

    <div class="input-group plus-minus-input">
  <div class="input-group-button">
    <button type="button" class="button hollow circle"   >


    <i class="fa fa-plus" aria-hidden="true" onClick={increment} style={{color:"green"}}></i>  
    </button>
  </div>
  <input class="input-group-field" type="number" name="quantity" value={quantity} style={{height:"5%",width:"60%",marginLeft:"2%",marginTop:"2%"}}/>
  <div class="input-group-button">
    <button type="button" class="button hollow circle"   onClick={decrement} >
    <i class="fa fa-minus" aria-hidden="true"  style={{color:"red"}}></i>
    
    </button>
  </div>
</div>












    </div>
  </div>
</div>


    </div>
  )
}

export default Product





