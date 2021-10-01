import { render, screen } from "@testing-library/react";
import Navbar from "../navbar.component";
import * as reactRedux from 'react-redux';

describe("Unit testing Navbar Component",()=>{

    beforeEach(()=>{
        jest.spyOn(reactRedux, "useDispatch").mockReturnValue(jest.fn());
        jest.spyOn(reactRedux, "useSelector").mockReturnValue([]);
    })

    test("Should render Navbar component correctly",()=>{
        render(<Navbar/>);
        const homeLink = screen.getByText("Home");
        const registerLink = screen.getByText("Sign Up");
        const loginLink = screen.getByText("Sign In");
        expect(homeLink).toBeInTheDocument();
        expect(registerLink).toBeInTheDocument();
        expect(loginLink).toBeInTheDocument();
    })
})