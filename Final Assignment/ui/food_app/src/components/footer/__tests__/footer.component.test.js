import { render, screen } from '@testing-library/react';
import Footer from '../footer.component';

describe("Unit testing Footer component",()=>{

    test("Should render Footer component correctly",()=>{
        render(<Footer/>);
        const mainText = screen.getByText(/created by Kumar Rohit @ Indegene pvt. ltd./);
        expect(mainText).toBeInTheDocument();
    })
})