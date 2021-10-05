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
    it("Test 3.1 - sum two numbers by comma",() => {
        expect( sumString("1-5")).toEqual(6); 
    });
    it("Test 4.1 - sum two numbers by comma",() => {
        expect( sumString("1-5,1,1-5-5")).toEqual(18); 
    });
    it("Test 4.2 - sum two numbers by comma",() => {
        expect( sumString("1-5,,1,1---5-5")).toEqual(18); 
    });
    it("Test 5.1 - espefy delimiter",() => {
        expect( sumString("//[;]\n 6;7;4")).toEqual(17); 
    });
} )