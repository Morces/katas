function perms(string){
    if (!!string.length && string.length < 2){
        return [string]
    }
    let permArr = [];
    for (let i = 0; i< string.length; i++){
        let charAt = string[i]
        // if (string.indexOf(charAt) !=i){
        //     continue;
        // }
        let rem = string.slice(0,1) + string.slice(i + 1, string.length);

        for (let perm of perms(rem)){
            permArr.push(charAt + perm)
        }
    }
    return permArr;
}

console.log(perms('ab'))
console.log(perms('aabb'))