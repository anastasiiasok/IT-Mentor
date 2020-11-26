import { Provider } from "react-redux";
import { store } from "./store/index";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

import Main from "./components/Main/Main";

function App() {
  return (
    <Provider store={store}>
      <Router exact path="/">
        <Main />
      </Router>
    </Provider>
  );
}

export default App;
