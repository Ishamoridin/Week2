function reverseString(string){
    let reverseString=""
    for (i=0;i<string.length;i++){
        reverseString+=string.charAt(string.length-i-1)
    }
    return reverseString
}
console.log(reverseString("alphabet")) 

const shoppingList = [
    [
        `Organic Eggs`,
        `Factory Farmed Eggs`,
        `Discout Eggs`
    ],
    [
        `Pasteurised Milk`,
        `Skimmed Milk`,
        `Semi-skimmed Milk`
    ],
    [
        `White Sliced Bread`,
        `Brown Sliced Bread`,
        `Garlic Bread, Unsliced`
    ]
]
console.log(shoppingList[1][2])