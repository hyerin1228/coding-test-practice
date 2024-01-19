function solution(num) {
    var answer = (num % 2 === 0)? "Even" : "Odd";
    return answer;
}






/*

24.1.19

정수를 입력하면, 
짝수일 때 Even을 반환하고
홀수일 때 Odd를 반환한다.

간단하게 나머지 연산자(%)로 해겷할 수 있을 것 같다.
2로 나누어서 나머지가 0이면 짝수이고 아니면 홀수라고 수식을 적어보면 될 것 같다.

if(num % 2 === 0) 짝수
if(num % 2 !== 0) 아니면 홀수

*/