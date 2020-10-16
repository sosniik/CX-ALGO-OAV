function marsos(str=''){
    console.log("Message envoyé : ",str)
    let count = ''

    for (i = 0; i < str.length; i++){
        console.log(str[i])
        
        if(str[i] != 'S' && str[i] != 'O'){
            count ++
        }
        
    }

    return count 
}

console.log(marsos("SOFSOSSISSOW"))
//return 3

//on parcours la  chainde de caractère et quand une lettre est différents de S,O,S, on l'incrémente dans un tableau 
