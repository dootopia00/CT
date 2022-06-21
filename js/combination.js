
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

