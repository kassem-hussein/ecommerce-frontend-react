import './App.css';
import Layout from './layout/Layout';
import store from './redux/store';
import { Provider } from 'react-redux'
function App() {
  return (
    <Provider store={store}>
        <Layout/>
    </Provider>
  );
}

export default App;
