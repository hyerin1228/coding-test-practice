function solution(n) {
    var answer = n;
    let numArr = [];
    
    let i = 0;
    while(answer > 0){
        // console.log('nNum', answer );
        // console.log('nNum%3', answer%3);
        numArr.push(answer%3);
        answer = Math.floor(answer/3);
        
        i++;
    }
    
    numArr.reverse();

    for(let i=0; i<numArr.length; i++){
        answer += (Math.pow(3,i) * numArr[i]);
    }
    
    return answer;
}


// 1. 임의의 수n을 3으로 나눈다.
// 2. 3으로 나누어 떨어지지 않을 때까지 나누어보기.


