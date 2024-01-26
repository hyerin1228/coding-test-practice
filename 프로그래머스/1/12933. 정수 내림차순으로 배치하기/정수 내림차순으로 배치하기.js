function solution(n) {
    let numStr = [...String(n)].map(Number); 
    let sortStr = [];
    console.log(numStr)
    
//     for(let i=0; i<numStr.length; i++){
//         // 비교할 수 numbStr[i] ??? numberStr[i+1] 앞에꺼랑 뒤에꺼 비교해서 i(앞에꺼가) 작으면
        
//         if(numStr[i+1] === "undefined") break;

    sortStr = numStr.sort((a, b) => {
        if(a < b){
            console.log(`1 ${a}, ${b} = ${numStr}`)
            return -1;
        }
        if(a > b) {
            console.log(`2 ${a}, ${b} = ${numStr}`)
            return 1;
        }
        if(a === b){
            console.log(`3 ${a}, ${b} = ${numStr}`)
            return 0;
        }
    });
        

    
    return Number(sortStr.reverse().join(""));
}



/*
24.1.26(금)

- 변수명 :
- 문제 풀이 과정 : 
        문제) 
            1) n을 각 자리수에 따른 숫자형 배열로 변환한다.
            2) 그래서 위치 바꿔보면 될 것 같은데. numberStr의 길이만큼 시작해서 비교하면서 바꿔가는 게 가능한가?
            3) 
- 알게된 사실 : 
        1) 
        2) 

*/