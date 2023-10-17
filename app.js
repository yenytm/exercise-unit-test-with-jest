// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
    function fromEuroToDollar  (euro) {
        if(euro < 0) {
            console.log("You can't have a negative value")
            return 
        }
        return +(euro * 1.2).toFixed(2)
    }
    console.log(fromEuroToDollar ())

    function fromDollarToYen (dollar) {
        if(dollar < 0) {
            console.log("You can't have a negative value")
            return 
        }
        return +(dollar * 149.59).toFixed(2)
    }
    console.log(fromDollarToYen())

    function fromYenToPound (yen) {
        if(yen < 0) {
            console.log("You can't have a negative value")
            return 
        }
        return +(yen * 0.0055).toFixed(3)
    }
    console.log(fromYenToPound())


module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound};
