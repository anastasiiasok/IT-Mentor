import { Provider } from 'react-redux';
import { store } from './store/index';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

import Main from './components/Main/Main';
import MainPage from './components/MainPage/MainPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
// import './App.css';
function App() {
  return (
    <Provider store={store}>
      <Router exact path='/'>
        <Header />
        <MainPage />
        <Footer />

        {/* <Main /> */}
      </Router>
    </Provider>
  );
}

export default App;
