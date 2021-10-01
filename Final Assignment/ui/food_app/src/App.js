import './App.css';
import RestaurantPage from './pages/restaurants-page/restaurantsPage.component';
import {Route} from 'react-router-dom';
import HomePage from './pages/home-page/homePage.component';
import QueryPage from './pages/query-page/queryPage.component';
import LoginPage from './pages/login-page/loginPage.component';
import RegisterPage from './pages/register-page/registerPage.component';
import Navbar from './components/navbar/navbar.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <div className="App container" data-testid="appDiv">
      <Navbar />
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/discovery" component={RestaurantPage}/>
      <Route exact path="/discovery/:name" component={QueryPage}/>
      <Route exact path="/signin" component={LoginPage}/>
      <Route exact path="/signup" component={RegisterPage}/>
      <Footer />
    </div>
  );
}

export default App;
