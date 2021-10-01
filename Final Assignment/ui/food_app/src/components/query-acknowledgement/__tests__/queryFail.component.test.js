import { render, screen } from '@testing-library/react';
import QueryFail from '../queryFail.component';

describe("Unit testing QueryFail component",()=>{

    test("Should render QueryFail component correctly",()=>{
        render(<QueryFail/>);
        const mainText = screen.getByText("Query cannot be created!");
        const errorMsg = screen.getByText("Error");
        expect(mainText).toBeInTheDocument();
        expect(errorMsg).toBeInTheDocument();
    })
})