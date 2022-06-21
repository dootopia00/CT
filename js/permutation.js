
const permutation = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]); 
    // n개중에서 1개 선택할 때(nC1), 바로 모든 배열의 원소 return

    arr.forEach((fixed, index, origin) => {

        // const rest = origin.slice(index + 1); 
        const rest = [...origin.slice(0, index), ...origin.slice(index+1)] 
        const combination = permutation(rest, selectNumber - 1); 
        const attached = combination.map((el) => [fixed, ...el]); 
        results.push(...attached); 
        // 배열 spread syntax 로 모두다 push
    });

    return results; // 결과 담긴 results return
}

const factorization = function(){

    const res = permutation(array, 3);
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

