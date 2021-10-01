import { render } from "@testing-library/react";
import RestaurantList from "../restaurantList.component";

describe("Unit testing RestaurantList component",()=>{

    test("Should render RestaurantList component correctly",()=>{
        const result = render(<table><tbody><RestaurantList /></tbody></table>);
        const baseTag = result.container.querySelector('tr');
        const button = result.container.querySelector('button');
        expect(baseTag).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    })
})