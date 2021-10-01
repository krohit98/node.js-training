import { render, screen } from "@testing-library/react";
import RestaurantTable from '../restaurantTable.component';
import * as reactRedux from 'react-redux';

describe("Unit testing RestaurantTable component",()=>{

    beforeEach(()=>{
        jest.spyOn(reactRedux, "useDispatch").mockReturnValue(jest.fn());
        jest.spyOn(reactRedux, "useSelector").mockReturnValue({restaurants:[{_id:"a"},{_id:"b"},{_id:"c"}]});
    })

    test("Should render RestaurantTable component correctly",()=>{
        const result = render(<RestaurantTable />);
        const table = result.container.querySelector('table');
        const nameColumn = screen.getByText("Name");
        const locationColumn = screen.getByText("Location");
        const priceColumn = screen.getByText("Price for Two");
        const ratingColumn = screen.getByText("Rating(5)");
        const servesColumn = screen.getByText("Serves");
        expect(table).toBeInTheDocument();
        expect(nameColumn).toBeInTheDocument();
        expect(locationColumn).toBeInTheDocument();
        expect(priceColumn).toBeInTheDocument();
        expect(ratingColumn).toBeInTheDocument();
        expect(servesColumn).toBeInTheDocument();
    })
})