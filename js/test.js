function solution(x, y, n) {
    
    if(x < 1) return -1;
    if(y < 1) return -1;
    
    let c1=0,c2=0,c3=0;
    let x1=x, x2=x, x3=x;
    let y1=y, y2=y, y3=y;
    let n1=n, n2=n, n3=n;
    let arr=[];
    
    
    while(1){
        c1++;
        if(y1==x1+n1){
            arr.push(c1);
            break;            
        }else{
            x1=x1+n1;
        }
        if(x1>=y1){
            c1 = -1;
            break; 
        }
    }
    
    // 10, 40, 5, 2
    while(1){
        c2++;
        if(y2==2*x2){
            arr.push(c2);
            break;            
        }else{
            x2=2*x2;
        }
        if(x2>=y2){
            c2 = -1;
            break; 
        }
    }
    
    while(1){
        c3++;
        if(y3==3*x3){
            arr.push(c3);
            break;            
        }else{
            x3=3*x3;
        }
        if(x3>=y3){
            c3 = -1;
            break; 
        }
    }
    
    if(arr.length === 0) return -1;
        
    console.log('arr : ', arr)
    return Math.min(...arr);
}

