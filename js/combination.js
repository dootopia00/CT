/*
    (조합 version)
    소수 만들기
    문제 설명
    주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

    제한사항
    nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.
    nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.
*/

const combinations = function (arr, selectNumber) {
    
    const results = [];

    if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

    
    arr.forEach((fixed, index, array ) => {

        const remain = array.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
        const combination = combinations(remain, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
        const attached = combination.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
        results.push(...attached); // 배열 spread syntax 로 모두 다 push

    });

    return results; // 결과가 담긴 results를 return
};

const factorization = function(){

    const res = combinations(array, 3);
    console.log('res : ', res);
    let count = 0;

    for(let i=0;i<res.length;i++){
        
        let sum = 0;
        for(let j=0;j<res[i].length;j++){
            sum += res[i][j];
        }
        
        // 소수인지 확인
        console.log('sum : ', sum);
        count += check(sum);
    }

    return count;
}

const check = function(num){
    
    for(let k=2;k<num;k++){
        if(num % k === 0){
            return 0;
        }
    }

    return 1; 
}


const array = [1, 2, 3, 4, 5];
const result = factorization(array, 3);
console.log(result);

