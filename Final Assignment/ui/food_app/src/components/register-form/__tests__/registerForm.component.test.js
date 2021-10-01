import { render, screen } from '@testing-library/react';
import RegisterForm from '../registerForm.component';

describe("Unit testing RegisterForm component",()=>{

    test("Should render RegisterForm component correctly",()=>{
        const result = render(<RegisterForm/>);
        const form = result.container.querySelector("#registerForm");
        const firstNameField = result.container.querySelector("#firstName");
        const lastNameField = result.container.querySelector("#lastName");
        const emailField = result.container.querySelector("#email");
        const passwordField = result.container.querySelector("#password");
        const button = screen.getByText("Register Now!");
        expect(button).toBeInTheDocument();
        expect(form).toBeInTheDocument();
        expect(firstNameField).toBeInTheDocument();
        expect(lastNameField).toBeInTheDocument();
        expect(emailField).toBeInTheDocument();
        expect(passwordField).toBeInTheDocument();
    })
})