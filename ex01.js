function howManyCamelCase ( str =''){
    let sentence = ''
    let count = 0
    for( let i; str.length; i++){
        const letter = str.charCodeAt(i);
        
        if (letter =>65 && letter<=90){
            count += 1
        }
        else {
            count = count 
        }
    }
}


console.log(howManyCamelCase('jeMangeDuChocolat'))