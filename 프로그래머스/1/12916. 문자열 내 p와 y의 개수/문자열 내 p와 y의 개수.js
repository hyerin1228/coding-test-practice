function solution(s){
    var answer = true;
    
    let strCountEquls = {
        "strPCount" : 0,
        "strYCount" : 0,
    }
    
    for(let i=0; i<s.length; i++){
        if(s[i] === "Y" || s[i] === "y") strCountEquls.strYCount++;
        if(s[i] === "P" || s[i] === "p") strCountEquls.strPCount++;
    }
    
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('s = ${s}')

    return strCountEquls.strPCount === strCountEquls.strYCount;
}






/*
24.1.26(금)

- 변수명 :
- 문제 풀이 과정 : 
        1) 반복문을 사용해서 하나씩 확인하면서 해당 문자열을 찾으면 각각 count 해주면 될 것 같다.
        2) 비교한 값을 반환하면 되겠다.
- 알게된 사실 : 정규식(?)을 응용하는 방법도 있는 것 같ㅌ은데 정규식 표현이 이해하기가 어렵다..


*/