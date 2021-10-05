import {sumString} from "./Functions";

describe("--- SUM STRING --- ",() =>  {
    it("Test 1.1 - calculate one number",() => {
        expect( sumString("2")).toEqual(2); 
    } );
    it("Test 1.2 - calculate one number - empty",() => {
        expect( sumString("")).toEqual("Formato incorrecto"); 
    } );
    it("Test 2.1 - sum two numbers by comma",() => {
        expect( sumString("2,1")).toEqual(3); 
    });
    it("Test 2.2 - sum two numbers by comma",() => {
        expect( sumString("123")).toEqual(123); 
    });
    it("Test 2.2 - sum two numbers by comma",() => {
        expect( sumString("1265478")).toEqual(1265478); 
    });
} )