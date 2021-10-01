import { render, screen } from '@testing-library/react';
import ShallowRenderer from 'react-test-renderer/shallow';
import RestaurantsPage from '../restaurantsPage.component';
import RestaurantTable from '../../../components/restaurant-table/restaurantTable.component';

jest.mock('../../../components/restaurant-table/restaurantTable.component');

describe("Unit testing RestaurantsPage component",()=>{

    test("Snapshot testing",()=>{
        const renderer = new ShallowRenderer();
        renderer.render(<RestaurantsPage />);
        const result = renderer.getRenderOutput();

        expect(result).toMatchSnapshot();
    })

    test("Should render RestaurantsPage correctly",()=>{
        RestaurantTable.mockImplementation(()=><div>RestaurantTableComponent</div>);
        render(<RestaurantsPage />);
        const heading = screen.getByText("List of Places");
        const restaurantTable = screen.getByText("RestaurantTableComponent");
        expect(heading).toBeInTheDocument();
        expect(restaurantTable).toBeInTheDocument();
    })
})