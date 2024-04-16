/*
1번 과제

식빵과 땅콩버터와 잼과 나이프를 준비한다.
땅콩버터 뚜껑을 연다.
한 손으로 나이프를 든다.
같은 손으로 든 나이프를 이용해서 땅콩버터를 한번 퍼올린다.
다른손으로 식빵을 든다.
퍼올린 나이프로 식빵 한 큰 면에 바른다.
식빵을 든 손으로 식빵에 땅콩버터가 발린 반대면이 바닥으로 가게 내려놓는다.
나이프를 든 손으로 나이프를 내려 놓는다.
잼 뚜껑을 연다.
한 손으로 나이프를 든다.
나이프를 든 손을 사용해서 나이프로 잼을 한펀 퍼올린다.
반대손으로 식빵을 들어올린다.
식빵을 들어올릴땐 땅콩버터가 발리지 않은 면을 바치고 든다.
땅콩버터가 발려있는 면에 반대손으로 들고있는 나이프를 이용해서 나이프에 있는 잼을 바른다.
나이프를 내려놓는다.
식빵을 잼과 땅콩버터가 발려있는 면이 안으로 가게끔 반으로 접는다.
맛있게 먹는다~
*/


// 2번 과제
const hour = 20;

console.log("2번 과제");
console.log("if 문");
if(hour>=7 && hour<=9) {
    console.log("아침 식사 시간");
} else if(hour>=12 && hour<=14) {
    console.log("점심 식사 시간");
} else if(hour>=18 && hour <=20) {
    console.log("저녁 식사 시간");
} else {
    console.log("식사 금지");
}

console.log("")

console.log("switch 문")
switch (hour) {
    case 7, 8, 9:
        console.log("아침 식사 시간");
        break;
    case 12, 13, 14:
        console.log("점심 식사 시간");
        break;
    case 18, 19, 20:
        console.log("저녁 식사 시간");
        break;
    default:
        console.log("식사 금지");
}

// 3번과제
console.log("");
console.log("3번 과제");

const operator = 'ㅁ';

switch (operator) {
    case '+':
        console.log("더하기");
        break;
    case '-':
        console.log("빼기");
        break;
    case '*':
        console.log("곱하기");
        break;
    case '/':
        console.log("나누기");
        break;
    default:
        console.log("연산기호가 아님");
}
