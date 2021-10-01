import { render, screen } from '@testing-library/react';
import QuerySuccess from '../querySuccess.component';

describe("Unit testing QuerySuccess component",()=>{

    test("Should render QuerySuccess component correctly",()=>{
        const queryObject={
            _id:"123",
            user:"abc",
            restaurant:"xyz",
            query:"pqrst",
            __v:0
        }
        render(<QuerySuccess queryObject={queryObject}/>);
        const mainText = screen.getByText("Query created successfully!");
        const queryId = screen.getByText("Query Id");
        const userName = screen.getByText("User Name");
        const contact = screen.getByText("User Contact");
        const query = screen.getByText("Query");
        const acknowledgement = screen.getByText("We will get to you ASAP!");
        expect(mainText).toBeInTheDocument();
        expect(queryId).toBeInTheDocument();
        expect(userName).toBeInTheDocument();
        expect(contact).toBeInTheDocument();
        expect(query).toBeInTheDocument();
        expect(acknowledgement).toBeInTheDocument();
    })
})