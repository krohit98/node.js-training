import { render, screen } from '@testing-library/react';
import ShallowRenderer from 'react-test-renderer/shallow';
import RegisterPage from '../registerPage.component';
import RegisterForm from '../../../components/register-form/registerForm.component';
import * as reactRedux from 'react-redux';

jest.mock('../../../components/register-form/registerForm.component');

describe("Unit testing RegisterPage component",()=>{

    test("Snapshot testing",()=>{

        jest.spyOn(reactRedux, "useDispatch").mockReturnValue(jest.fn());

        const renderer = new ShallowRenderer();
        renderer.render(<RegisterPage />);
        const result = renderer.getRenderOutput();

        expect(result).toMatchSnapshot();
    })

    test("Should render RegisterPage correctly",()=>{
        RegisterForm.mockImplementation(()=><div>RegisterForm</div>);
        render(<RegisterPage />);
        const heading = screen.getByText("Sign-Up for a New Account");
        const registerForm = screen.getByText("RegisterForm");
        expect(heading).toBeInTheDocument();
        expect(registerForm).toBeInTheDocument();
    })
})