/*

123456789101112131415...

5     5
15    2

1     1
2     2
3     3
4     4
5     5
6     6
7     7
8     8
9     9

10    1           20    1           30    2           40    2           50    3           60    3               70        4             80        4   
11    0           21    5           31    0           41    5           51    0           61    5               71        0             81        5   
12    1           22    1           32    2           42    2           52    3           62    3               72        4             82        4   
13    1           23    6           33    1           43    6           53    1           63    6               73        1             83        6   
14    1           24    1           34    2           44    2           54    3           64    3               74        4             84        4   
15    2           25    7           35    2           45    7           55    2           65    7               75        2             85        7   
16    1           26    1           36    2           46    2           56    3           66    3               76        4             86        4   
17    3           27    8           37    3           47    8           57    3           67    8               77        3             87        8   
18    1           28    1           38    2           48    2           58    3           68    3               78        4             88        4   
19    4           29    9           39    4           49    9           59    4           69    9               79        4             89        9 
  


90        5


*/

function makeNum(n){

  str = '';
  for(let i=1;i<n+1;i++){
    str += String(i);
    if(str.length >= n ){
      return str;
    }
  }
}

function solution(n) {
  
  var answer = -1;
  
  let num = makeNum(n)
  console.log('n: ', n)
  console.log('num length: ', num.length)

  answer = num.substr(n-1, 1) 

  // console.log('answer : ', answer);
  // console.log('str.length : ', str.length);
  return answer;
}

// 68888889
// 228888889
// 388888889
// 388888889

let n = 1000;

const result = solution(n);
console.log(result);
