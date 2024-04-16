import readlineSyncModule from 'readline-sync';

// 1번 과제
while(true) {
    const input = readlineSyncModule.question("숫자입력 : ");
    if(input < 2) {
        console.log("2 이상의 숫자를 입력하세요.");
    } else {
        for(var i=1; i<10; i++) {
            console.log(`${input} * ${i} = ${input*i}`)
        }
        break;
    }
}

// 2번 과제
let line = "";
for(var i=0; i<5; i++) {
    for(var j = 4 - i; j>0; j--) {
        line += " ";
    }
    for(var j = 0; j<i*2+1; j++) {
        line += "*";
    }
    console.log(line);
    line = "";
}