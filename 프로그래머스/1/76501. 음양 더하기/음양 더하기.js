function solution(absolutes, signs) {
    var answer = 0;
    
    for(let i=0; i<absolutes.length; i++){
        if(signs[i]){
            answer += absolutes[i];
        }else{
            //answer += -(absolutes[i]);
            answer -= absolutes[i];
        }
    }
    
    return answer;
}



/* 24.1.30(화)

- 변수명 :
- 문제 풀이 과정 : 
        문제) 배열을 순회하면서 합을 구하면 되겠다.
            1) true이면 + 연산을 하고.. false이면 - 연산을 하도록 해보자.
- 알게된 사실 : 
        1) 

*/