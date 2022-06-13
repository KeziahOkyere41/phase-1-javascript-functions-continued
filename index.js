// code your solution here
function saturdayFun(special){
    if (special === undefined){
        return ("This Saturday, I want to roller-skate!");
    }
    else {
        return (`This Saturday, I want to ${special}!`);
    }
}

function mondayWork(work){
    if (work === undefined){
        return ("This Monday, I will go to the office.");
    }
    else{
        return (`This Monday, I will ${work}.`);
    }
}

function wrapAdjective(result = '*') {
let emphasis = 'You are'
return function(inner = "handsome"){
 return `You are ${result}${inner}${result}!`
}
}