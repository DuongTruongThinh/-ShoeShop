let initialState = { soLuong: 1 };
export let numberReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TANG": {
      state.soLuong++;
      return { ...state };
    }
    case "GIAM": {
      state.soLuong = state.soLuong - action.payload;
      return { ...state };
    }
    default:
      return state;
  }
};
