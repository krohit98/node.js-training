import { render, screen } from '@testing-library/react';
import App from './App';
import Navbar from '../src/components/navbar/navbar.component';
import HomePage from './pages/home-page/homePage.component';
import RestaurantPage from './pages/restaurants-page/restaurantsPage.component';
import QueryPage from './pages/query-page/queryPage.component';
import RegisterPage from './pages/register-page/registerPage.component';
import LoginPage from './pages/login-page/loginPage.component';
import Footer from './components/footer/footer.component';
import { MemoryRouter } from 'react-router';

// MOCKING CHILD COMPONENTS
jest.mock('../src/components/navbar/navbar.component')
jest.mock('./pages/home-page/homePage.component')
jest.mock('./pages/restaurants-page/restaurantsPage.component')
jest.mock('./pages/query-page/queryPage.component')
jest.mock('./pages/register-page/registerPage.component')
jest.mock('./pages/login-page/loginPage.component')
jest.mock('./components/footer/footer.component')

describe("Testing the App component",()=>{

  // TEST TO CHECK IF HOMEPAGE, NAVBAR AND FOOTER COMPONENTS ARE RENDERED FROM APP COMPONENT
  test("should render HomePage with Header and Footer", ()=>{
    Navbar.mockImplementation(()=><div>HeaderMock</div>);
    HomePage.mockImplementation(()=><div>HomePageMock</div>);
    Footer.mockImplementation(()=><div>FooterMock</div>);

    render(<MemoryRouter><App /></MemoryRouter>);

    expect(screen.getByText("HeaderMock")).toBeInTheDocument();
    expect(screen.getByText("HomePageMock")).toBeInTheDocument();
    expect(screen.getByText("FooterMock")).toBeInTheDocument();
  })

  // TEST TO CHECK IF LOGINPAGE, NAVBAR AND FOOTER COMPONENTS ARE RENDERED FROM APP COMPONENT
  test("should render LoginPage with Header and Footer", ()=>{
    Navbar.mockImplementation(()=><div>HeaderMock</div>);
    LoginPage.mockImplementation(()=><div>LoginPageMock</div>);
    Footer.mockImplementation(()=><div>FooterMock</div>);

    render(<MemoryRouter initialEntries={['/signin']}><App /></MemoryRouter>);

    expect(screen.getByText("HeaderMock")).toBeInTheDocument();
    expect(screen.getByText("LoginPageMock")).toBeInTheDocument();
    expect(screen.getByText("FooterMock")).toBeInTheDocument();
  })

  // TEST TO CHECK IF REGISTERPAGE, NAVBAR AND FOOTER COMPONENTS ARE RENDERED FROM APP COMPONENT
  test("should render RegisterPage with Header and Footer", ()=>{
    Navbar.mockImplementation(()=><div>HeaderMock</div>);
    RegisterPage.mockImplementation(()=><div>RegisterPageMock</div>);
    Footer.mockImplementation(()=><div>FooterMock</div>);

    render(<MemoryRouter initialEntries={['/signup']}><App /></MemoryRouter>);

    expect(screen.getByText("HeaderMock")).toBeInTheDocument();
    expect(screen.getByText("RegisterPageMock")).toBeInTheDocument();
    expect(screen.getByText("FooterMock")).toBeInTheDocument();
  })

  // TEST TO CHECK IF RESTAURANTSPAGE, NAVBAR AND FOOTER COMPONENTS ARE RENDERED FROM APP COMPONENT
  test("should render RestaurantPage with Header and Footer", ()=>{
    Navbar.mockImplementation(()=><div>HeaderMock</div>);
    RestaurantPage.mockImplementation(()=><div>RestaurantPageMock</div>);
    Footer.mockImplementation(()=><div>FooterMock</div>);

    render(<MemoryRouter initialEntries={['/discovery']}><App /></MemoryRouter>);

    expect(screen.getByText("HeaderMock")).toBeInTheDocument();
    expect(screen.getByText("RestaurantPageMock")).toBeInTheDocument();
    expect(screen.getByText("FooterMock")).toBeInTheDocument();
  })

  // TEST TO CHECK IF QUERYPAGE, NAVBAR AND FOOTER COMPONENTS ARE RENDERED FROM APP COMPONENT
  test("should render QueryPage with Header and Footer", ()=>{
    Navbar.mockImplementation(()=><div>HeaderMock</div>);
    QueryPage.mockImplementation(()=><div>QueryPageMock</div>);
    Footer.mockImplementation(()=><div>FooterMock</div>);

    render(<MemoryRouter initialEntries={['/discovery/abc']}><App /></MemoryRouter>);

    expect(screen.getByText("HeaderMock")).toBeInTheDocument();
    expect(screen.getByText("QueryPageMock")).toBeInTheDocument();
    expect(screen.getByText("FooterMock")).toBeInTheDocument();
  })

})

