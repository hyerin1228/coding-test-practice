function solution(arr) {
    // 오름차순 정렬
    let answer = arr;
    let minNum = arr[0];
    
    for(let i=0; i<arr.length; i++){
        // 배열 순회하며 작은 수 찾기
        if(minNum > arr[i]) minNum = arr[i];
    }
    
    // 가장 작은 수가 위치한 인덱스를 찾고, 해당 인덱스의 값을 지워야함
    answer.splice(arr.indexOf(minNum), 1);
    
    
    return answer.length > 0 ? answer : [-1];
}



/* 24.2.1(목)

- 변수명 :
- 문제 풀이 과정 :
            
        
- 알게된 사실 : 1) 배열 삭제 (맨 앞) - shift /배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환한다.
            2) sort를 하니까 원본의 형태가 틀어져서 안습되었다.ㅋㅋ
            3) splice 로 배열의 특정 인덱스를 입력하면 지울 수 있다고 한다.
*/