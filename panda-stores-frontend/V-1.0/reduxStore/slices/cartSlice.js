import { createSlice } from "@reduxjs/toolkit";
// slices three  parts 
// 1) create slice
// 2) create init state
// 3) create reducer
// export reducers
// export reducer 

const initialState = [
    {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        qty:1
    
    },
]
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        // functions to manipulate the state
        showCart:((state,action) => {
            console.log('before : ' ,state);
            action.payload = action.payload ? false : true;
            console.log('after : ' ,state);
            console.log('#'.repeat(55))
            console.log('Payload:' ,action.payload)
            // console.log('State' , state)
            console.log('#'.repeat(55))

        }),
        addToCart:((state,action)=> {
            
        }),
        removeFromCart:((state,action)=> {
            
        }),
        setQty:((state,action)=>{

        }),
        incQty:((state,action)=> {
            
        }),
        decQty:((state,action)=> {
            
        })
    }

})

export const {showCart, addToCart , removeFromCart , incQty , decQty } = cartSlice.actions;
export default cartSlice.reducer;
