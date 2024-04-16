import readlineSyncModule from 'readline-sync';

// 사용자에게 입력받은 내용을 10진수 정수형(int)으로 변환하고 그 데이터를 userInput 변수에 할당
// const userInput = parseInt(readlineSyncModule.question('사용자입력 : '), 10);

// 1번 과제
const input = readlineSyncModule.question();
console.log("나: " + input);
console.log("앵무새: " + input);


// 2번 과제
let isCorrect = false;
const sentence = "열심히 배워서 최고의 개발자가 되어보자!";
console.log("열심히 배워서 최고의 개발자가 되어보자!");
isCorrect = readlineSyncModule.question("문장 입력 : ") === sentence ? true : false;

if(isCorrect) {
    console.log("정답입니다.");
} else {
    console.log("실패입니다.");
}


