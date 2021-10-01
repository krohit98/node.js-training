import './App.css';
import {Route } from 'react-router-dom'
import HomePage from './pages/home-page/home-page.component'
function App() {

  return (
    <div className="App container">
      <Route exact path="/" component={HomePage} />
    </div>
  );
}
export default App;
