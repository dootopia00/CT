/*

    이 전화 키패드에서 왼손과 오른손의 엄지손가락만을 이용해서 숫자만을 입력하려고 합니다.
    맨 처음 왼손 엄지손가락은 * 키패드에 오른손 엄지손가락은 # 키패드 위치에서 시작하며, 엄지손가락을 사용하는 규칙은 다음과 같습니다.

    엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.
    왼쪽 열의 3개의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용합니다.
    오른쪽 열의 3개의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용합니다.
    가운데 열의 4개의 숫자 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.
    
    만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용합니다.
    순서대로 누를 번호가 담긴 배열 numbers, 왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand가 매개변수로 주어질 때, 
    각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 return 하도록 solution 함수를 완성해주세요.

    [제한사항]
        numbers 배열의 크기는 1 이상 1,000 이하입니다.
        numbers 배열 원소의 값은 0 이상 9 이하인 정수입니다.
        hand는 "left" 또는 "right" 입니다.
        "left"는 왼손잡이, "right"는 오른손잡이를 의미합니다.
        왼손 엄지손가락을 사용한 경우는 L, 오른손 엄지손가락을 사용한 경우는 R을 순서대로 이어붙여 문자열 형태로 return 해주세요.
    

    ex)
        [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]	"right"	"LRLLLRLLRRL"
        [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]	"left"	"LRLLRRLLLRR"
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]	    "right"	"LLRLLRLLRL"

*/

let position = {
    "1":[0,0],
    "2":[0,1],
    "3":[0,2],
    "4":[1,0],
    "5":[1,1],
    "6":[1,2],
    "7":[2,0],
    "8":[2,1],
    "9":[2,2],
    "*":[3,0],
    "0":[3,1],
    "#":[3,2],
  };

const action = function(numbers, hand){

    let answer = '';
    let value = '';
    let currentLeft = '*';
    let currentRight = '#';

    for(let i=0;i<numbers.length;i++){

        
        // console.log(numbers[i]);
        console.log('currentLeft : ', currentLeft, 'currentRight : ', currentRight, 'inputNum : ', numbers[i]);

        if(numbers[i] == 1 || numbers[i] == 4 || numbers[i] == 7){
            value = "L";
            answer += value;
            currentLeft = numbers[i];
            console.log('answer : ', value);


        }else if(numbers[i] == 3 || numbers[i] == 6 || numbers[i] == 9){
            value = "R";
            answer += value;
            currentRight = numbers[i];
            console.log('answer : ', value);

        }
        else{

            value = calculation(currentLeft, currentRight, numbers[i], hand);

            if(value['answer'] == 'L') currentLeft = value['currentLeft'];
            else currentRight = value['currentRight'];
            
            answer += value['answer'];
            // console.log(numbers[i]);
            // console.log(value);

        }
    }

    return answer;
}

// 연산 함수
const calculation = function(currentLeft, currentRight, inputNum, hand){

    // 눌러야할 값이랑 손가락 위치값이랑 비교해서 차이가 덜 나는 곳으로 클릭
    let value = 0;
    let data = {
        answer: value,
        currentLeft: '',
        currentRight: ''
      };
    
    let inputDisX = 0;
    let inputDisY = 0;
    let leftDisX = 0;
    let leftDisY = 0;
    let rightDisX = 0;
    let rightDisY = 0;
    let leftDiffDis = 0;
    let rightDiffDis = 0;

    inputDisX = position[inputNum][0];
    inputDisY = position[inputNum][1];

    leftDisX = position[currentLeft][0];
    leftDisY = position[currentLeft][1];

    rightDisX = position[currentRight][0];
    rightDisY = position[currentRight][1];

    leftDiffDis = Math.abs((inputDisX-leftDisX))+Math.abs((inputDisY-leftDisY));
    rightDiffDis = Math.abs((inputDisX-rightDisX))+Math.abs((inputDisY-rightDisY));

    console.log('inputDisX : ', inputDisX, ' inputDisY : ', inputDisY, ' leftDisX : ', leftDisX, ' leftDisY : ', leftDisY, ' rightDisX : ', rightDisX, ' rightDisY : ', rightDisY);
    console.log('leftDiffDis : ', leftDiffDis, ' rightDiffDis : ', rightDiffDis);

    if(leftDiffDis == rightDiffDis){

        if(hand == 'left'){
            value = 'L';
            currentLeft = inputNum;
        }else{
            value = 'R';
            currentRight = inputNum;
        }
    }
    else if( leftDiffDis < rightDiffDis ){
        value = 'L';
        currentLeft = inputNum;
    }else if(leftDiffDis > rightDiffDis){
        value = 'R';
        currentRight = inputNum;
    }

    // console.log('currentLeft : ', currentLeft, 'currentRight : ', currentRight, 'inputNum : ', inputNum);
    // const sum = num10.reduce((a,b) => (a+b));
    

    data = {
        answer: value,
        currentLeft: currentLeft,
        currentRight: currentRight
      };
    
    console.log('answer : ', value);
    return data;
}

/*
    실행함수
    계산 함수
    left, right inputNum
 */


const array = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
const result = action(array, "right");
console.log(result);


// node keypad.js
// 13458214595
// LRLLLRLLRRL
// LRLLLRLLRRL