
/*

    문제 : JS 코드로 지폐/동전 교환기를 만드세요
    상세 : N원의 금액을 입력 받았을 때 각각 오천원, 천원, 오백원, 백원으로 교환하는 코드를 작성하세요
        
        조건
        - N의 최소 단위는 100입니다.
        - 지폐 및 동전은 가장 큰 단위 우선으로 교환 해주세요.

        입력 예시 : 14,700원
        출력 예시 : 오천원 2장 / 천원 4장 / 오백원 1개 / 백원 2개

*/


// 금액을 큰 단위부터 교환한다.
// 5000 으로 나누었을 때 몫이 1보다 작으면 교환 불가니까 다음 단위로 비교하는 식으로 타고 타고 내려가야할듯(?)

// 1. n원의 금액을 입력받는다. 최소단위가 100원이어야하며 그게 아니면 입력이 안 되는 처리가 필요할듯
// 

let moneysObj = {
    5000: 0,
    1000: 0,
    500: 0,
    100: 0
}

let moneysArr =  Object.entries(moneysObj)
moneysArr.reverse()

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (inputMoney) => {
  console.log(`입력한 돈: ${inputMoney}`);

  let leftMoney = inputMoney
  
  // 5000원, 1000원, 500원, 100원 순으로 연산해보기
  moneysArr.forEach((item) =>{
      // n원으로 나눈 값이 1이상이면  몫을 moneysObj 에 해당하는 곳에 저장하고 돈도 깎고 다음꺼 비교
      if(calStatus(leftMoney,item[0])){
          console.log("leftMoney = " + leftMoney)
          let count = calCount(leftMoney,item[0])
          leftMoney -=  (count * item[0]) // 교환 가능한 개수에 해당하는 금액만큼 빼기
          console.log("leftMoney = " + leftMoney)
          item[1] = count              // 교환 가능한 개수 추가
      }
  })

  console.log(moneysArr)

  // 나눈 값이 1 이상이면
  function calStatus(leftMoney, won){
      console.log("calStatus")
      console.log(eval( leftMoney / won ) >= 1)
      return eval(leftMoney/won) >= 1
  }

  function calCount(leftMoney, won){
      console.log("calCount")
      console.log(Math.floor(eval( leftMoney / won )))
      return Math.floor(eval( leftMoney / won ))
  }


  rl.close();
});

rl.on('close', () => {
  process.exit()
})
