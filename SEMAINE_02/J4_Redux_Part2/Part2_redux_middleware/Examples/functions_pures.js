
/**
 * La fonction suivante n'est pas pure
 */

let perc = .001;

function add(a, b){

    return (a + b)*perc ; 
}

console.log(add(1, 2));

// même valeur en entrée cette fonction donnera-t-elle le même résultat
console.log(add(1, 2));

perc = .01;

console.log(add(1, 2));


// Une fonction pure c'est une fonction qui pour des valeurs d'entrée identique donnera un résultat identique

function addPur(a, b){
    
    return a + b ;
}