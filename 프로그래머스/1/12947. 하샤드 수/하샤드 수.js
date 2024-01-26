function solution(x) {
    numStr = [...String(x)].map(Number); // 일단 배열로 한자리씩 가져오기
    allSum = 0;
    numStr.map( (n) => {
        allSum += n;    
    })
    
    console.log(`${x} = ${allSum}`)
    return (x%allSum === 0) ? true : false;
}



/*
24.1.26(금)

- 변수명 :
- 문제 풀이 과정 : 
        문제) 자리수로 또 배열로 갖고오셈 ㅋㅋ 갖고와서 더하고 더한수로 나눠서 나머지 0나오면 하샤드랜다!
            1) 
            2) 
- 알게된 사실 : 
        1) 
        2) 

*/