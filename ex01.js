function howManyCamelCase ( str =''){
    let sentence = '';
    let count = 0;

    // la condition tu t'es trompé, là tu a juste écrit str.length il faut dire i < str.length, i inférieur à ...
    //oh oui la honte 
    for(i = 0; i < str.length; i++){
        const letter = str.charCodeAt(i);
        
        if (letter >= 65 && letter <= 90){
            count += 1;
        }
    }
    
    return count
}


console.log(howManyCamelCase('jeMangeDuChocolat'))