import './App.css';
import Navbar from "./components/Navbar";
import ISPList from "./components/ISPList/ISPList";
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <ISPList />
      </Provider>
    </div>
  );
}

export default App;
