//problem-01 anaToVori

function anaToVori(ana) {

    if (ana < 0) {
        return 'please enter positive value';
    } else {
        const vori = ana / 16;
        return vori;
    }
}
const totalVori = anaToVori(32);
console.log(totalVori);

// problem : 2 pandaCost

function pandaCost(singaraQuantity, chomochaQuantity, jilapiQuantity) {
    // food per price
    const singaraPerPrice = 7;
    const chomochaPerPrice = 10;
    const jilapiPerPrice = 15;
    // handle errors
    if (singaraQuantity < 0 || chomochaQuantity < 0 || jilapiQuantity < 0) {
        return 'please enter positive value';
    }

    const singaraPrice = singaraQuantity * singaraPerPrice;
    const chomochaPrice = chomochaQuantity * chomochaPerPrice;
    const jilapiPrice = jilapiQuantity * jilapiPerPrice;

    const total = singaraPrice + chomochaPrice + jilapiPrice;
    return total;
}
const totalCost = pandaCost(0, 1, 1);
console.log(totalCost);

// problem : 3 picnicBudget

function picnicBudget(persons) {
    // ticket conditions
    const oneHundredCost = 5000;
    const twoHunderdCost = 4000;
    const moreThenTwoHundredCost = 3000;
    // handle errors
    if (persons < 0) {
        return 'please enter positive value';
    }
    // first hundred
    else if (persons <= 100) {
        const totalFirstHundred = persons * oneHundredCost;
        return totalFirstHundred;
    }
    // two hundred
    else if (persons <= 200) {
        const secondHundred = persons - 100;
        const twoHundred = secondHundred * twoHunderdCost;
        const firstHundred = 100 * 5000;
        const secondTotal = twoHundred + firstHundred;
        return secondTotal;
    }
    // more then two hundred
    else {
        const firstHundred = 100 * 5000;
        const secondHundreds = 100 * 4000;
        const third = persons - 200;
        const last = third * moreThenTwoHundredCost;
        const totalMoreThenTwoHundred = firstHundred + secondHundreds + last;
        return totalMoreThenTwoHundred;

    }
}
const result = picnicBudget(202);
console.log(result);

// problem : 4 oddFriend

function oddFriend(friends) {
    for (const friend of friends) {
        // find odd friend
        if (friend.length % 2 != 0) {
            return friend;
        }
    }
}
const friendss = ['jonaid', 'kamal', 'ilma', 'montaha', 'maymuna', 'sharif'];
const found = oddFriend(friendss);
console.log(found);
