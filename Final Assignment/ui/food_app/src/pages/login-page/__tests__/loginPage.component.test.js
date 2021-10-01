import { render, screen } from '@testing-library/react';
import ShallowRenderer from 'react-test-renderer/shallow';
import LoginPage from '../loginPage.component';
import * as reactRedux from "react-redux";
import reactRouter from "react-router";
import LoginForm from '../../../components/login-form/loginForm.component';

jest.mock('../../../components/login-form/loginForm.component');

describe("Unit testing LoginPage component",()=>{

    beforeEach(()=>{
        jest.spyOn(reactRedux, "useDispatch").mockReturnValue(jest.fn());
        jest.spyOn(reactRouter, "useLocation").mockReturnValue("abcd");
        jest.spyOn(reactRedux, "useSelector").mockReturnValue([]);
    })

    test("Snapshot testing",()=>{
        const renderer = new ShallowRenderer();
        renderer.render(<LoginPage />);
        const result = renderer.getRenderOutput();
        expect(result).toMatchSnapshot();
    })

    test("Should render LoginPage correctly",()=>{
        LoginForm.mockImplementation(()=><div>LoginFormComponent</div>);
        render(<LoginPage />);
        const heading = screen.getByText("Sign-In to an Existing Account");
        const loginFormComponent = screen.getByText("LoginFormComponent");
        expect(heading).toBeInTheDocument();
        expect(loginFormComponent).toBeInTheDocument();
    })


})