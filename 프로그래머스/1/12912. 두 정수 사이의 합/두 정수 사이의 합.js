function solution(a, b) {
    var answer = 0;
    const num = (a < b ) ? { min: a, max: b}
                         : { min: b, max: a}
    
    if(num.min === num.max) return num.min; // 값이 같은 경우
    
    for(let i=num.min; i<= num.max; i++){
        answer += i;
    }
    
    return answer;
}



/* 24.1.30(화)

- 변수명 :
- 문제 풀이 과정 : 
        문제) 두 수 사이에 있는 수를 구하고 모든 수의 총합을 구하는 문제라고 생각됨!
            1) 두 수 사이에 있는 수를 어떻게 구할건가?
                ㄴ 두개의 수 중 비교해서 큰 수를 찾는다.
                ㄴ for 문을 사용해서 초기값(작은수) -> 조건식(큰수일때까지) 로 더한다면 찾아볼 수 있을 것 같은데.
            2) 
- 알게된 사실 : 
        1) 

*/