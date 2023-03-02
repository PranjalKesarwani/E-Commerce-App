import { ADD_TO_CART, CHANGE_QUANTITY, CHANGE_ORDER_CART, ADD_ADDRESS, SET_SHIP_ADDRESS, PLACE_ORDER, EMPTY_CART, REMOVE_ITEM } from "../actions";

const initialStateProduct = {
  products: [
    {
      id: 1,
      name: 'Sony WX-5',
      category: 'Headpohnes',
      price: 100.75,
      rating: 3,
      color: 'black',
      size: 'S',
      details: {
        product: "",
        warranty: "",
        merchant: ""
      },
      image: 'product-1-square',
      images: ['product-1', 'product-1-2', 'product-1-3']
    },
    {
      id: 2,
      name: 'Smart Watch',
      category: 'Watch',
      price: 1000.75,
      rating: 5,
      color: 'red',
      size: 'M',
      details: {
        product: "",
        warranty: "",
        merchant: ""
      },
      image: 'product-2-square',
      images: ['product-2', 'product-2-2', 'product-2-3']
    },
    {
      id: 3,
      name: 'Apple iPhone',
      category: 'Mobile Phone',
      price: 500.75,
      rating: 2,
      color: 'green',
      size: 'L',
      details: {
        product: "",
        warranty: "",
        merchant: ""
      },
      image: 'product-3-square',
      images: ['product-3', 'product-3-2', 'product-3-3']
    },
    {
      id: 4,
      name: 'Nikon Camera',
      category: 'Camera',
      price: 600.75,
      rating: 4,
      color: 'black',
      size: 'S',
      details: {
        product: "",
        warranty: "",
        merchant: ""
      },
      image: 'product-4-square',
      images: ['product-4', 'product-4-2', 'product-4-3']
    },
    {
      id: 5,
      name: 'Apple iPad',
      category: 'Tablet',
      price: 800.75,
      rating: 3,
      color: 'black',
      size: 'M',
      details: {
        product: "",
        warranty: "",
        merchant: ""
      },
      image: 'product-5-square',
      images: ['product-5', 'product-5-2', 'product-5-3']
    },
    {
      id: 6,
      name: 'Venza II',
      category: 'Drone',
      price: 5000.75,
      rating: 1,
      color: 'red',
      size: 'L',
      details: {
        product: "",
        warranty: "",
        merchant: ""
      },
      image: 'product-6-square',
      images: ['product-6', 'product-6-2', 'product-6-3']
    },
  ]
}
const initialStateCart = {
  items: []
}
const initialStateOrder = {
  items: [],
  shipping_charge: 50,
  discount_in_percent: 10,
  shipping_address: '',
  total_items: 0,
  total_cost: 0
}

const initialStateUser = {

  name: 'Pranjal',
  email: 'pranjalkesarwani2000@gmail.com',
  addresses: [{
    id: 1,
    first_name: 'Pranjal',
    last_name: 'Kesarwani',
    address1: '123',
    address2: 'New Street',
    country: 'India',
    state: 'Uttar Pradesh',
    pin_code: 221507,
    phone: 9982520785
  },
  {
    id: 2,
    first_name: 'Sachin',
    last_name: 'Kesarwani',
    address1: '1234',
    address2: 'Lala bazar',
    country: 'India',
    state: 'Uttar Pradesh',
    pin_code: 221507,
    phone: 9982520785

  }
  ],
  orders: []

}

const productReducer = (state = initialStateProduct, action) => {
  return state;
}
const cartReducer = (state = initialStateCart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.items.find(item => item.id === action.payload.id)) {
        return state;
      }
      else {
        return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] }
      }
    case CHANGE_QUANTITY:
      const oldItem = state.items.find(item => item.id === action.payload.id)
      const index = state.items.indexOf(oldItem)
      const newItems = [...state.items];
      newItems[index] = action.payload;
      return { ...state, items: newItems };

    case REMOVE_ITEM:
        const item = action.payload;
    const i =    state.items.findIndex(elem=>elem.id===item.id);
    const itemsArray = [...state.items];
    itemsArray.splice(i,1);
    console.log(itemsArray);
    return {...state,items:itemsArray}

    case EMPTY_CART:
      return { ...state, items: [] }

    default: return state; //ye toh hota hi hai
  }
}


const orderReducer = (state = initialStateOrder, action) => {
  switch (action.type) {
    case CHANGE_ORDER_CART:
      const items = action.payload;
      const total_items = items.reduce((total, item) => total + (item.quantity * 1), 0);
      const total_cost = items.reduce((total, item) => total + item.price * item.quantity, 0);
      return { ...state, items: action.payload, total_items, total_cost };

    case SET_SHIP_ADDRESS:
      return { ...state, shipping_address: action.payload };


    default: return state; //ye toh hota hi hai
  }
}
const userReducer = (state = initialStateUser, action) => {
  switch (action.type) {
    case ADD_ADDRESS:

      return { ...state, addresses: [...state.addresses, action.payload] };

    case PLACE_ORDER:
      return { ...state, orders: [...state.orders, action.payload] };



    default: return state;
  }
}





export { productReducer, cartReducer, orderReducer, userReducer }


