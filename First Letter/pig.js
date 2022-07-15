function pig_it(str){
    let value = str.split("")
    console.log(value)

    let newVal = []
    newStr = " ";
    for (let i = 0; i < value.length; i++){
        newStr = value[i].slice(1) + value[i].charAt(0) + "ay";
        newVal.push(newStr); 
    }return newVal.join(" ")
}

console.log(pig_it('Pig latin is cool'))
console.log(pig_it('Hello world!'))