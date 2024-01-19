function solution(arr) {
    var answer = 0;
    
    var numSum = 0; // 배열의 각 요소의 총합을 구하기 위한 변수
    
    arr.forEach((item) => {
        numSum += item // arr[] 의 각 요소(item)의 값을 numSum에 더하기
    })
    
    answer = numSum / arr.length
    
    return answer;
}







/*
24.1.19

1) 변수에 대한 생각:
answer는 평균값이 되겠다.
arr은 데이터가 담길 정수 숫자형 배열이 되겠네. number[]
return 값이 될 answer 는 소수점이 있는 걸로 봐서 실수인 것 같다.

2) 문제풀이전 생각해보기:

제한사항이 있는데 뭔가 처리를 해야되는지 잘 모르겠다.

평균값 구하는 공식이 뭐더라 총합에 총개수를 나누면 되던가?...

1. 배열의 총 합이 필요하니까 반복문으로 배열의 요소들을 더한 값의 변수가 필요하겠다.
2. 다음으로 총합을 담고있는 변수 / 배열의 길이(요소 개수)를 나누면 나올 거라고 예상됨!

반복문을 여러개 써도 되는데.. foreach 쓸건지 for문 쓸건지 잘 모르겠네
console.log(numSum) // 이거 되나? 찍어보면 제대로 되는지 알 것 같은데.
*/