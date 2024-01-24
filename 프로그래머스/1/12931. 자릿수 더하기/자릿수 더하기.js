function solution(n)
{   
    const stringN = n+"";
    let strValueSplit = [...stringN];
    
    var answer = 0;

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript');
    // 배열에 요소가 없을 때까지 pop 해보는 걸로..
    
    var n = 0;
    while(strValueSplit.length !== 0){
        answer += Number(strValueSplit.shift())
        console.log(answer)
        n++;
    }

    return answer;
}



/*
24.1.24

1) 변수에 대한 생각:
    - n은 문자열인가? 문자열로 바꿔야겠네.. 뭔지 모르겠다 타입이.. 변환이 필요할듯! string으로.

    
2) 문제풀이전 생각해보기:
    - 앞자리부터 연산을 하면서 꺼낸다.
    - 뭔가 배열의 pop 메서드가 생각난다. 배열 메서드 맞나? 배열로 바꿔보면 되나 그럼?
    - js string pop 이란 키워드로 구글링해봄!
    - 가장 간단하게 string 을 한글자씩 배열로 만들고.. 그 배열을 pop해오면서 answer 연산을 하는 것이 어떨까?
    - [spread 연산자] 라는 것도 있다.
    
    /*
        const strValue = "ABCDE😋";
        const strValueSplit = [...strValue];

        console.log(strValueSplit); // ['A', 'B', 'C', 'D', 'E', '😋']
        출처: https://developer-talk.tistory.com/808 [DevStory:티스토리]
    
    
3) 
    
*/