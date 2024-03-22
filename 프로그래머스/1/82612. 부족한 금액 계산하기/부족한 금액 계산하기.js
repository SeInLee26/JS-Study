function solution(price, money, count) {
    var sum = 0;
    for (let i=1; i<=count; i++)
        sum += price * i;
    let leftMoney = money - sum;
    return leftMoney >= 0 ? 0 : -leftMoney; 
}