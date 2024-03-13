function solution(arr)
{
    var answer = [];
    // 1. 비교할 수를 저장할 변수(prevNum)를 만든다.
    let prevNum = arr[0];
    //let prevNum = null;
    
    for(let i=0; i<arr.length; i++){
        // 2. 배열을 순회하며 prevNum 과 배열의 target이 되는 숫자를 비교한다.
        // 2-1. 숫자가 같으면 아무 액션도 취하지 않는다.
        // 2-2. 숫자가 다르면 prevNum 을 answer 에 저장하고, target은 prevNum 로 저장한다.
        if(prevNum !== arr[i]){
            //console.log(`prevNum: ${prevNum}, arr[${i}]: ${arr[i]}`);
            answer.push(prevNum);
            prevNum = arr[i];
        }
        
    }
    
    // 4. 위와 같은 조건으로는 배열의 마지막 수인 prevNum = arr[i]이 저장이 안된다.
    answer.push(prevNum);
    
    // 3. 순회가 끝나면 출력하도록 한다. (배열에 순서가 자동 정렬이 될 것 같은데, 우선 해봐야겠다.)
    return answer;
}


