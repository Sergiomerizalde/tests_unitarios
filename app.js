// one euro is:
let oneEuroIs = {
    "JPY": 127, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
function fromDollarToYen(dollar){   
    let valueDolEuro = dollar / oneEuroIs.USD;
    let valueEuroYen = valueDolEuro * oneEuroIs.JPY;
    return valueEuroYen;
}
function fromEuroToDollar(euro){
    let valueEuroDol = euro * oneEuroIs.USD;
    return valueEuroDol;
}
function fromYanToPound(yan){
    let valueYanEuro = yan / oneEuroIs.JPY;
    let valueEuroPound = valueYanEuro * oneEuroIs.GBP;
    return valueEuroPound;
}
module.exports = {
    fromDollarToYen,
    fromEuroToDollar,
    fromYanToPound
}

