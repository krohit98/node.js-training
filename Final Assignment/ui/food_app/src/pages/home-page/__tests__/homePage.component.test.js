import { render, screen } from '@testing-library/react';
import ShallowRenderer from 'react-test-renderer/shallow';
import HomePage from '../homePage.component';

describe("Unit testing HomePage component",()=>{

    test("Snapshot testing",()=>{
        const renderer = new ShallowRenderer();
        renderer.render(<HomePage />);
        const result = renderer.getRenderOutput();

        expect(result).toMatchSnapshot();
    })

    test("Should render HomePage correctly",()=>{
        render(<HomePage />);
        const heading = screen.getByText("Welcome to Food Service");
        const button = screen.getByText("Discover Food Joints");
        expect(heading).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    })


})

