function solution(s) {
    let strArrays = s.split('');
    
    strArrays.sort((a, b) => b.codePointAt() - a.codePointAt());

    
    return strArrays.join('');
}



/* 24.2.7(수)

- 변수명 :
- 문제 풀이 과정 : 
    1) 일단 생각해봤을 때 정규식과 sort 가 생각나는데.. 그리고 뭔가 아스키코드? 그러니까 문자가 숫자값을 가지고 있다는 게 기억이 나네.
    2) 문자를 숫자로 바꾼다.
    3) 그 숫자를 큰 것부터 작은 순으로 정렬한다.
    4) 숫자를 다시 문자로 되돌린다.
- 알게된 사실 : 
        문자열.prototype.codePointAt()
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt

    /*
        
        입력값 〉	"Zbcdefg"
        기댓값 〉	"gfedcbZ"
        실행 결과 〉	테스트를 통과하였습니다.
        출력 〉	90, 98
        98, 99
        99, 100
        100, 101
        101, 102
        102, 103

        입력값 〉	"Zbcdefg"
        기댓값 〉	"gfedcbZ"
        실행 결과 〉	실행한 결괏값 ""이 기댓값 "gfedcbZ"과 다릅니다.
        출력 〉	[
          'g', 'f', 'e',
          'd', 'c', 'b',
          'Z'
        ]

    

    let answer = '';
    let strArrays = []
    
    for(let i=0; i<s.length; i++){
        strArrays.push(s[i].codePointAt()) // 문자를 숫자로 바꾼다.
    }
    
    // console.log(strArrays) // 찍어보니깐 자동 정렬이 되고 있다 왜인지는 모르겠는데..
    /*
    입력값 〉	"Zbcdefg"
    기댓값 〉	"gfedcbZ"
    실행 결과 〉	실행한 결괏값 ""이 기댓값 "gfedcbZ"과 다릅니다.
        출력 〉    [ 90,  98,  99, 100, 101, 102, 103 ]

    
    strArrays.sort((a, b) => { return a - b });
    console.log(strArrays)
    answer = strArrays.reduce( (acc, curr) => acc + String.fromCodePoint(curr), "");
    
    return answer;
}

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort





*/