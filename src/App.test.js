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
        expect( sumString("1265478")).toEqual(0); 
    });
    it("Test 3.1 - sum two numbers by guion",() => {
        expect( sumString("1-5")).toEqual(6); 
    });
    it("Test 4.1 - sum numbers",() => {
        expect( sumString("1-5,1,1-5-5")).toEqual(18); 
    });
    it("Test 4.2 - sum numbers",() => {
        expect( sumString("1-5,,1,1---5-5")).toEqual(18); 
    });
    it("Test 5.1 - especify delimiter",() => {
        expect( sumString("//[;]\n 6;7;4")).toEqual(17); 
    });
    it("Test 6.1 - especify delimiter",() => {
        expect( sumString("//[;]\n 6;7;4;1001")).toEqual(17); 
    });
    it("Test 7.1 - especify delimiter",() => {
        expect( sumString("//[***]\n 6***1")).toEqual(7); 
    });
    it("Test 7.2 - especify delimiter",() => {
        expect( sumString("//[***]\n 6***1-1,5,2")).toEqual(15); 
    });
    it("Test 8.1 - correct format",() => {
        expect( sumString("//[***]\n 6**1-1,5,2")).toEqual("Formato incorrecto"); 
    });
    it("Test 9.1 - any delimiter",() => {
        expect( sumString("//[***][;]\n 6***1-1,5;2")).toEqual(15); 
    })
    it("Test 9.2 - any delimiter",() => {
        expect( sumString("//[*][;]\n 1*2;3,7-9")).toEqual(22); 
    })
    it("Test 9.3 - any delimiter",() => {
        expect( sumString("//[*][;][o]\n 1*2;3,7-9o1")).toEqual(23); 
    })
    it("Test 9.4 - any delimiter",() => {
        expect( sumString("//[*][;][%][...]\n 1*2;3,7-9%1...2")).toEqual(25); 
    })
    it("Test 9.5 - any delimiter",() => {
        expect( sumString("//[*][%]\n 1*2%3,7-9")).toEqual(22); 
    })
    it("Test 9.6 - any delimiter",() => {
        expect( sumString("//[*][%]\n 1*2%m3,7-9")).toEqual("Formato incorrecto"); 
    })
} )