/*


*/

function solution(day, k) {
  
  // day 1월 1일 요일
  // k   매달 내야하는 날짜 
  // k 가 평일이면 0, 주말이면 1 배열에 푸시해서 12개 인덱스 리턴

  let answer = [];
  let mon = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  for(let i=0; i<mon;i++){
    
    answer.push(makeMonth('1일의 요일', mon[i], k));
  }
  return answer;
}

function makeMonth(firstDay, day, k){
  
  // firstDay 매달 1일 요일
  // day      그 달의 최대 일수


  return 
}


function makeMonth2(firstDay, day, k){
  
  // firstDay 매달 1일 요일
  // day      그 달의 최대 일수


  return 
}
let n = 1000;

const result = solution(n);
console.log(result);
