// import the function sum from the app.js file
const { fromEuroToDollar, fromDollarToYen, fromYenToPound} = require('./app.js');


test('coverts euro to USD', () => {

    // we expect the sum of those 2 numbers to be 23
    expect(fromEuroToDollar(9)).toBe(10.8);
});

test('coverts dollar to yen', () => {

    expect(fromDollarToYen(7)).toBe(1047.13);
});


test('coverts yen to pound', () => {

    expect(fromYenToPound(8)).toBe(0.044);
});


