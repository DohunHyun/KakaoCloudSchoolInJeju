// 변수 선언
const firstNumber = 10;
const secondNumber = 5;
const operator = '+';

let result;

switch (operator) { // 사칙연산 진행 스위치문.
    case '+':
        result = firstNumber + secondNumber;
        break;
    case '-':
        result = firstNumber - secondNumber;
        break;
    case '*':
        result = firstNumber * secondNumber;
        break;
    case '/':
        result = firstNumber / secondNumber;
        break;
    default:
        result = '유효하지 않은 연산자입니다.';
}

console.log(`결과: ${result}`); // 결과 출력