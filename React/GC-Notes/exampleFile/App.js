import React from "react"; // import react library so we can build components
import "./App.css"; // importing style sheet
import Info from "./components/info/info.component";
import Form from "./components/form/form.component";
import Color from "./components/colors/color.component";
import { updateMyInfo } from "./actions/actions";
import { useDispatch, useSelector } from "react-redux";

let App = () => {
  let state = useSelector(state => ({
    myInfo: state.myInfo,
    colors: state.colors
  }));
  console.log(state);

  let dispatch = useDispatch();

  let handleUpdate = event => {
    dispatch(updateMyInfo(event));
  };

  return (
    <div>
      <div>
        <Form updateInfo={handleUpdate}></Form>
        <Info myInfo={state.myInfo}></Info>
        {state.myInfo.age > 60 ? <p>You're an old man</p> : null}
      </div>
      <Color theseColors={state.colors}></Color>
    </div>
  );
};

export default App;
