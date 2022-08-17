/*
배열의 회정
4,3,2,1
1,4,3,2
2,1,4,3
3,2,1,4

arrayA arrayB

*/


function solution(arrA, arrB) {
  
  var answer = false;

  let arr = arrA;

  for(let i=0;i<arrA.length;i++){
    
    let last = arr[arr.length - 1]

    // 마지막 인덱스 제거
    arr.pop();
    
    //  맨앞에 추가
    arr.unshift(last);

    if(JSON.stringify(arr) === JSON.stringify(arrB)){
      answer = true; 
    }
  }

  return answer;

}
let arrA = [1,2,3];
let arrB = [1,2,3];
// let arrA;
// let arrB;
const result = solution(arrA, arrB);
console.log(result);
