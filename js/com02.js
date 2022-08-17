/*

1~7               8~14              15~21
  
1	  0,1           8	  2,3       15    4,5   나머지 1
2	  0,2           9	  2,4       16    4,6   나머지 2
3	  0,2           10	2,4       17    4,6   나머지 3
4	  0,2           11	2,4       18    4,6   나머지 4
5	  0,2           12	2,4       19    4,6   나머지 5
6	  1,2           13	3,4	      20    5,6   나머지 6
7	  2,2           14	4,4       21    6,6   나머지 0

휴일 2일;
[n일 / 7 의 몫 * 2, n일 / 7 의 몫 * 2+나머지]

*/

function solution(n) {
  
  // console.log('typeof(n) : ',typeof(n) )
  let answer = [];
  let first = 1;
  let second = 2;
  
  let value  = parseInt(n/7);
  // let value  = Math.ceil(n/7);
  let remain = n%7;
  console.log('value : ', value)
  console.log('remain : ', remain)

  // for(let i =0;)
  if(remain === 1){
    first = value*2
    second = value*2+1
  }else if(remain === 6){
    first = value*2+1
    second = value*2+2
  }else if(remain === 0){
    first = value*2
    second = value*2
  }else{
    first = value*2
    second = value*2+2
  }

  // console.log('first : ', typeof(first))
  // console.log('second : ', typeof(second))
  answer.push(first, second);

  return answer;

}

let n = 6;

const result = solution(n);
console.log(result);
