// import readlineSyncModule from 'readline-sync';

// // 1번 과제
// const input = readlineSyncModule.question("숫자입력 : ");

// function 구구단(number) {
//     for(var i=1; i<10; i++) {
//         console.log(`${input} * ${i} = ${input*i}`)
//     }
// }

// if(input < 2) {
//     console.log("2 이상의 숫자를 입력하세요.");
// } else {
//     구구단(input);
// }

// 2번 과제
function calc(firstNumber, operator, secondNumber) {
    console.log(`첫 번째 숫자 : ${firstNumber}`);
    console.log(`연산자 : ${operator}`);
    console.log(`두 번째 숫자 : ${secondNumber}`);

    let result = 0;
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
            if(parseInt(secondNumber) === 0) {
                console.log("나누는 수가 0이면 나눌 수 없습니다.")
                return;
            }
            result = firstNumber / secondNumber;
            break;
        default:
            result = '유효하지 않은 연산자입니다.';
    }
    
    console.log(`${firstNumber} ${operator} ${secondNumber} = ${result}`);
    return result;
}
calc(5, "/", 0);


