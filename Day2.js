function dataChecker(string, rank){
if (string===`codenation` && rank===1){
    console.log(`${codenation} rank ${rank}`)
}
else if (string===`codenation`&&rank!==1){
    console.log(`${codenation} has wrong rank`)
}
else if (string!==`codenation`&&rank!==1){
    console.log(`Both arguments incorrect`)
}
} 