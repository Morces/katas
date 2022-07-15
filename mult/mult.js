function process(n){
    return n.map(i=>{
        if (i > 12){
            return (i*3)+1
        }else{
            return i*3
        }
    })
}
console.log(process([6,3,5]))

function even(i){
    for (i=0;i<10;i++){
        if (i%2 === 0){
            
        }
        console.log(i);
    }
}

function stacktest(arr){
    let newArr = arr;
    arr.pop()
    arr.splice(0,1,30);
    return newArr;
}
console.log(stacktest([10,20,5,3]))
