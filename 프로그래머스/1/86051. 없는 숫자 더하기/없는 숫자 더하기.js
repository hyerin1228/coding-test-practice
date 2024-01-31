function solution(numbers) {
    var answer = 0;
    
    // 0부터 9까지의 수를 찾을 반복문
    for(let i=0; i<=9; i++){
        // numbers에 해당하는 수가 없으면 answer에 더하기
        if(numbers.indexOf(i) === -1) answer += i;
    }
    
    return answer;
}



/* 24.2.1(목)

- 변수명 :
- 문제 풀이 과정 : 
            1) 이중 포문을 쓰면 일단 될 것 같긴 하다.
            2) 일단 생각해보는 거는.. 음.... 그 뭐시냐?
            3) 0부터 9까지 순차적으로 증감하는 for문을 사용해서 indexof로 찾아본다~
            4) 만약에 없으면 -1을 반환한다는데.. 없는 그 수를 어디다 더하면 될듯!
        
- 알게된 사실 : 
        
*/
