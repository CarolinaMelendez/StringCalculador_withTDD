import {sumString} from "./Functions";

describe("--- SUM STRING --- ",() =>  {
    it("Test 1.1 - calculate one number",() => {
        expect( sumString("2.1")).toEqual(2.1); 
    } );
    it("Test 1.2 - calculate one number",() => {
        expect( sumString("")).toEqual("Formato incorrecto"); 
    } );
} )