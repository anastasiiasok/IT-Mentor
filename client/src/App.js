import { Provider } from 'react-redux';
import { store } from './store/index';
import { BrowserRouter as Router } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// import './App.css';
function App() {
  return (
    <Provider store={store}>
      <Router exact path='/'>
        <Header />
        <MainPage />
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
