import readlineSync from 'readline-sync';
import fileSystem from 'fs';

// 사용자 입력 받기
const name = readlineSync.question('이름: ');
const age = readlineSync.question('나이: ');
const email = readlineSync.question('이메일: ');
const mobile = readlineSync.question('전화번호: ');

// 파일에 저장
fileSystem.writeFileSync(
    'myInfo.json',
    JSON.stringify({ 
        "name": name,
        "age": age,
        "email": email,
        "mobile": mobile
    }),
    'utf8',
);

console.log("myInfo.json 파일이 생성되었습니다.");

const input = readlineSync.question("myInfo.json 파일을 삭제하시겠습니까? (y/n) : ");
if(input === "y") {
    fileSystem.unlinkSync('myInfo.json');
    console.log("myInfo.json 파일이 삭제되었습니다.");
}
