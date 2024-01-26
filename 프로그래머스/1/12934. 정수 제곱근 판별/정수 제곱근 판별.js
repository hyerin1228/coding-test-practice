function solution(n) {
    var rootNum = Math.sqrt(n); // 제곱근을 구한다.                      
                               // 음수이거나 실수이면...
    console.log(rootNum)
    
    return (rootNum === NaN || (rootNum%1 !== 0 )) ? -1 : Math.pow(rootNum+1,2);
}




/*
24.1.26(금)

- 변수명 :
- 문제 풀이 과정 : 
        문제) 제곱근을 구해서 음수이면 -1을 리턴한다. 그게 아니면 제곱근을 제곱한 값을 리턴한다.
        1) Math.squrt() 함수를 사용하여 반환값이 NaN이면 -1을 리턴하고, 
        2) 그게 아니면 x+1 을 제곱해서 뭐 해봐라~
- 알게된 사실 : 
        1) 제곱근을 구하는 공식
            - Math.sqrt() 함수는 숫자의 제곱근을 반환합니다.
            - 만약 x 가 음수라면 Math.sqrt() 함수는 NaN를 반환합니다.
        2) 제곱을 구하는 공식
            - Math.pow(x, 2) 혹은 x*x


*/