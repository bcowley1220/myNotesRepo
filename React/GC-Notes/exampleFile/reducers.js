let initialState = {
  myInfo: {
    name: "brendan",
    age: 32
  },
  colors: ["Red", "White", "Blue", "Green"]
};

//! All This is doing is logging action and returning state
let rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_MY_INFO":
      console.log(action);
      //action.payload is object that we need to update our state with
      return Object.assign({}, state, {
        myInfo: { ...action.payload }
      });

    default:
      return state;
  }
};

export default rootReducer;
