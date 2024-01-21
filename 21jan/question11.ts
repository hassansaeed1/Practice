//Q11
function averageSum(num: number[]) {
    var sum: number = 0;
    for (let index = 0; index < num.length; index++) {
      (sum += num[index]), 10;
    }
    return sum / 10;
  }
  let averagesum: number[] = [20, 90, 80, 60, 66];
  console.log(averageSum(averagesum));
  