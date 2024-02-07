function solution(s) {
    var answer = '';
    // 1, 짝수인지 홀수인지 판단한다.
    if(s.length%2 === 0){
        // 짝수 일때
        answer = s[(s.length/2)-1]+s[s.length/2]
    }else{
        // 홀수 일때 - 몫만 가져온다.
        answer = s[Math.floor(s.length/2)];
    }
    return answer;
}




/* 24.2.7(수)

- 변수명 :
- 문제 풀이 과정 : 문자도 length 를 이용해서,
    1) 짝수 인지, 홀수인지 판단한다.
    ex) 홀수인경우 : abcde 01234 5개, 5를 2로 나누면 2.5 나오지않나? 버림을 하나? 아무튼 몫만 가져오면 될거같은데 
        짝수인경우 : qwer 0123 4개, 2로 나누면 몫이 2로 떨어질거고 단어 두개 반환하랬으니까 2랑 앞글자랑 가져옴 될듯
- 알게된 사실 : 

*/