import './App.css';
import {Route} from 'react-router-dom';
import HomePage from './pages/home-page/homePage';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage}/>
    </div>
  );
}

export default App;
