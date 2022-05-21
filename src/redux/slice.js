import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',

  products:[
    {
      id: 1,
      image:"https://ministryofcurry.com/wp-content/uploads/2020/01/roti-1-500x500.jpg", 
      name: "Roti",
     price: "12",
       },
       {
        id: 2,
        image:"https://pipingpotcurry.com/wp-content/uploads/2020/09/Methi-Aloo-Recipe-Piping-Pot-Curry.jpg", 
        name: "Alloo methi",
       price: "60",
         },
         {
          id: 3,
          image:"https://www.whiskaffair.com/wp-content/uploads/2018/10/Egg-Masala-2-3.jpg", 
          name: "Anda kari masala",
         price: "120",
           },
           {
            id: 4,
            image:"https://c.ndtvimg.com/2020-08/n6ogafj_kebab_625x300_12_August_20.jpg", 
            name: "kababi matton",
           price: "360",
             },
             {
              id: 5,
              image:"https://www.whiskaffair.com/wp-content/uploads/2019/05/Paneer-Masala-1-3.jpg", 
              name: "Paneer",
             price: "170",
               },
               {
                id: 6,
                image:"https://i2.wp.com/www.bharatzkitchen.com/wp-content/uploads/2018/05/chicken-leg-thumb3.jpg?fit=800%2C450&ssl=1", 
                name: "Chiken fry",
               price: "140",
                 },
                
                  
                     {
                      id: 7,
                      image:"https://vismaifood.com/storage/app/uploads/public/e12/7b7/127/thumb__1200_0_0_0_auto.jpg", 
                      name: "Biryani",
                     price: "120",
                       },
                       {
                        id: 8,
                        image:"https://www.indianhealthyrecipes.com/wp-content/uploads/2021/05/soya-chunks-curry-recipe.jpg", 
                        name: "Soya carry",
                       price: "70",
                         },
                 
  
    

  ],
  thali:[
    
  ]
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
   
  
    addTothali: (state, action) => {
   
      state.thali.push(action.payload);
    },
    RemoveItem:(state,action)=>{
       state.thali.splice(action.payload,1)
    },
  },
})


export const { addTothali ,RemoveItem } = counterSlice.actions;

export default counterSlice.reducer