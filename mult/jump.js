function jump(x,y){
    if (y==0){
        return x;
    }
    else{
        return x- jump(x, y-1);
    }
}

console.log(jump(3,2))

function test(n){
    describe('general', () =>{
        if('number should be an integer')() => {
            const isNum=typeof n ==='number';
            assert.strictEqual(true);
            assert.ok(isNum, 'Number is integer');
        });
    };
