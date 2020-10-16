function IsAPangrams (str=''){
    let sentence = ''
    const letter = "abcdefghijklmnopqrstuvwxyz"
    
    for( let char of letter){
         if(!str.toLowerCase().includes(char)){
             return false 
         }
         return true
       
    }
    return sentence
}
console.log(IsAPangrams("The quick brown fox jumps over the lazy dog"))
console.log(IsAPangrams("Hello Efrei"))