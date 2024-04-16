
// 1번 과제
console.log("1번 과제");
const numbers = [1, 2, 3, 4, 5];

let sum = 0;
for(var i=0; i<numbers.length; i++) {
    console.log(`현재 합계 : ${sum += numbers[i]} (${numbers[i]}를 더함)`);
}
console.log(`최종 합계 : ${sum}`);


// 2번 과제
console.log("");
console.log("2번 과제");
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum2 = 0;
for(var i=0; i<numbers2.length; i++) {
    if(numbers2[i] % 2 === 0) {
        console.log(`짝수 발견 : ${numbers2[i]}`);
        sum2 += numbers2[i];
    }
}
console.log(`짝수 합계 : ${sum2}`);