import { Provider } from 'react-redux';
import { store } from './store/index';
import Profile from './components/Profile/Profile';
function App() {
  return (
    <Provider store={store}>
      <Profile />
    </Provider>
  );
}

export default App;
