import { Provider } from "react-redux";
import { render } from "react-dom";
import App from "./components/app/App";
import store from "./store";

const rootElement = document.getElementById("root");

render(
  <Provider store={store}>
    <App />
  </Provider>,

  rootElement
);
