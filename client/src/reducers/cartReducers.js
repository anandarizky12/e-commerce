import { CART_ADD_ITEM ,REMOVE_CART } from "../constance/productConstance";

const GET_CART = "GET_CART"

export const cartReducers = (state = {cartItems:[]}, action)=>{
        switch(action.type){
            case GET_CART :
                return { cartItems:action.payload }
            case CART_ADD_ITEM:
                const item = action.payload;
                const product = state.cartItems.find(x => x.product === item.product);
                if (product) {
                  return {
                    cartItems:
                      state.cartItems.map(x => x.product === product.product ? item : x)
                  };
                }
                return { cartItems: [...state.cartItems, item] };
            case REMOVE_CART :
              return {cartItems:state.cartItems.filter(data=>data.product != action.payload)}
            default:
                return state;

        }
     
}

