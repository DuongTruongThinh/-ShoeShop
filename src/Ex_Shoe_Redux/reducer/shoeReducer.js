import {
  ADD_TO_CART,
  UPDATE_QUANTITY,
  VIEW_DETAIL,
} from "../constant/shoeConstant";
import { GIAM_SO_LUONG, TANG_SO_LUONG, shoeArr } from "../data";

const initialState = { shoeArr: shoeArr, cart: [], detail: shoeArr[0] };
export let shoeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case VIEW_DETAIL: {
      state.detail = payload;
      return { ...state };
    }
    case ADD_TO_CART: {
      let cloneCart = [...state.cart];
      let index = cloneCart.findIndex((item) => {
        return item.id == payload.id;
      });
      if (index == -1) {
        let newShoe = { ...payload, soLuong: 1 };
        cloneCart.push(newShoe);
      } else {
        cloneCart[index].soLuong++;
      }
      state.cart = cloneCart;
      return { ...state };
    }
    case UPDATE_QUANTITY: {
      let cloneCart = [...state.cart];
      let index = cloneCart.findIndex((item) => {
        return item.id == payload.id;
      });
      payload.option == TANG_SO_LUONG && cloneCart[index].soLuong++;
      payload.option == GIAM_SO_LUONG && cloneCart[index].soLuong--;
      return { ...state, cart: cloneCart };
    }
    default:
      return state;
  }
};
