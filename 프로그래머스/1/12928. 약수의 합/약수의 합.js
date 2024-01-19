function solution(n) {
    var answer = 0;
    var numDivisors = [];
    
    for(let i=0; i<=n; i++){
        if(n%i === 0){
            numDivisors.push(i)
            answer += i
        }
    }
    
    return answer;
}





/*
24.1.19

1) 변수에 대한 생각:
    - answer는 n(입력된 정수형 숫자)의 약수를 모두 더한 값이 되겠다.
    - 약수를 담아놓을 정수형 숫자 배열도 필요하겠다. (numDivisors으로 만들어보기)
        ㄴ let numArr(?) 약수가 영어로 뭔지..?
        ㄴ 챗지피티한테 물어보니까 약수 이름으로 이런 배열을 쓰라고 한다. (검증되지 않음)
            divisors: "약수"라는 의미를 직접적으로 나타내는 간단한 이름입니다.
            factors: 수학 용어에서 약수를 가리키는 또 다른 단어입니다.
            numberDivisors 또는 numDivisors: 해당 배열이 특정 숫자의 약수를 담고 있음을 명확히 나타내는 이름입니다.

2) 문제풀이전 생각해보기:
    - 반복문으로 i<=n 보다 작을 때까지아니구나 0포함이니까 작거나 같을때까지 1씩 증가하는 반복문 사용해야겠다.
    - 그래서 i로 n을 나누어서 나누어 떨어지면 약수가 될 거라고 생각한다.
    - 약수인 숫자를 만들어놧던 배열에 push 한다.
    - 아 그리고 answer에 저장도 해야겠다.

*/