import './App.css';
import {Route } from 'react-router-dom'
import HomePage from './pages/home-page/home-page.component'
import Signin from './pages/sigin-page/signin.component'
function App() {

  return (
    <div className="App container">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/signin" component={Signin} />
    </div>
  );
}
export default App;
