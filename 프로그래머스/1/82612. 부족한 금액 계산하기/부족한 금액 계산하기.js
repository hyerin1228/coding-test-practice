function solution(price, money, count) {
    var 창렬 = 0 // 놀이기구 금액, 몇 번탈건지. 그래서 총 얼마드는지..
    
    for(let i=0; i<=count; i++){
        창렬 += (price * i)
    }
    
    return (money - 창렬 > 0) ? 0 
                             : 창렬 - money;
}





/* 24.2.7(수)

- 변수명 :
- 문제 풀이 과정 : 놀이기구를 타는 횟수만큼 금액이 배로 뛴단다. 창렬이네~ 안감 ㅅㄱ 글니까 내가 가진돈하고, 필요한 금액 비교해서 안 부족하면 0이고 부족하면 부족한 금액이 얼마인지 표시해라~ 인듯
        1) price : 놀이기구비, money : 가진 돈, count : 타고 싶은 횟수
        2) 반복문 사용해서 최초 금액에서 횟수랑 곱한거 더해서 넣어야될듯..
- 알게된 사실 : 

*/