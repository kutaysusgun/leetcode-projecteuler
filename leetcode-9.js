/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0){
        return false
    }
    let str = Math.abs(x).toString()
    if((str.length) % 2==0){
        if(str.slice(0,str.length/2)==str.slice(str.length/2,str.length).split('').reverse().join('')){
            return true
        }
    }else{
        let temp = str.split(str[parseInt(str.length/2)])
        if(temp[0] == temp[1].split('').reverse().join('')){
            return true
        }
    }
    return false
};