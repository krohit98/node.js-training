import { render, screen } from '@testing-library/react';
import LoginForm from '../loginForm.component';

describe("Unit testing LoginForm component",()=>{

    test("Should render LoginForm component correctly",()=>{
        const result = render(<LoginForm/>);
        const form = result.container.querySelector("#loginForm");
        const emailField = result.container.querySelector("#email");
        const passwordField = result.container.querySelector("#password");
        const button = screen.getByText("Login Now!");
        expect(button).toBeInTheDocument();
        expect(form).toBeInTheDocument();
        expect(emailField).toBeInTheDocument();
        expect(passwordField).toBeInTheDocument();
    })
})