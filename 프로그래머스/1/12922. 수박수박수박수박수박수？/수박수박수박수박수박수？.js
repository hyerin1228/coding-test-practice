function solution(n) {
    var answer = '';
    
    for(let i=0; i<n; i++){
        (i%2=== 0) ? answer += "수" :
                     answer += "박"
    }
    return answer;
}


/* 24.2.7(수)

- 변수명 :
- 문제 풀이 과정 : 쉽게 생각해봤을 때, 반복문 사용해서 n-1 만큼 반복하고, n이 짝수일때 수, 홀수일때 박 넣으면 될 것 같다..
    1) 
- 알게된 사실 : 

*/