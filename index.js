// code your solution here
function saturdayFun(activity = `roller-skate`) {
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function (active = `go to the office`) {
  return `This Monday, I will ${active}.`;
};

function wrapAdjective(fancy) {
  return function (para = `special`) {
    return `You are ${fancy}${para}${fancy}!`;
  };
}

console.log(wrapAdjective("%")("a dedicated programmer"));
