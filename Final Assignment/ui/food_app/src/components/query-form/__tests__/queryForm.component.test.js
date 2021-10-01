import { render, screen } from '@testing-library/react';
import QueryForm from '../queryForm.component';

describe("Unit testing QueryForm component",()=>{

    test("Should render QueryForm component correctly",()=>{
        const result = render(<QueryForm/>);
        const form = result.container.querySelector("#queryForm");
        const nameField = result.container.querySelector("#nameField");
        const contactField = result.container.querySelector("#contactField");
        const queryField = result.container.querySelector("#queryField");
        const button = screen.getByText("Submit Query");
        expect(button).toBeInTheDocument();
        expect(form).toBeInTheDocument();
        expect(nameField).toBeInTheDocument();
        expect(contactField).toBeInTheDocument();
        expect(queryField).toBeInTheDocument();
    })
})