function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();
function mondayWork(work ="go to the office"){
    return `This Monday, I will ${work}.`;
}
mondayWork();

function wrapAdjective(visual="*"){
    return function(grade="special"){
        return `You are ${visual}${grade}${visual}!`;
    }
   
}
wrapAdjective("|");
