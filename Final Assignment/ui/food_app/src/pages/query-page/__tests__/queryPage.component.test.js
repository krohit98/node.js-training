import { render, screen } from '@testing-library/react';
import ShallowRenderer from 'react-test-renderer/shallow';
import QueryPage from '../queryPage.component';
import QueryForm from '../../../components/query-form/queryForm.component';
import routeData from 'react-router';

jest.mock("../../../components/query-form/queryForm.component");
jest.mock("../../../components/query-acknowledgement/querySuccess.component");

describe("Unit testing QueryPage component",()=>{

    beforeEach(()=>{
        jest.spyOn(routeData, 'useParams').mockReturnValue({name:"restaurant name"});
    })

    test("Snapshot testing",()=>{
        const renderer = new ShallowRenderer();
        renderer.render(<QueryPage />);
        const result = renderer.getRenderOutput();

        expect(result).toMatchSnapshot();
    })

    test("Should render QueryPage correctly",()=>{
        QueryForm.mockImplementation(()=><div>QueryFormComponent</div>)
        render(<QueryPage />);
        const heading = screen.getByText("restaurant name");
        const mainText = screen.getByText("Ask us what's on your mind.");
        const queryForm = screen.getByText("QueryFormComponent");
        expect(heading).toBeInTheDocument();
        expect(mainText).toBeInTheDocument();
        expect(queryForm).toBeInTheDocument();
    })
}) 