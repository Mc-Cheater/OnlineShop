let good="💛";
let bad="🤍";
let ratings=new Object();
/*
function rank(emoji){
    if (emoji==="💛")
    return -1;
    else return 1;
}*/



for(let i=0;i<6;i++){
    ratings[i]=new Array();
    for (let j=5-i;j>0;j--){
    ratings[i].push(bad);
        
}
while(ratings[i].length<5){
    ratings[i].push(good);
}

}

console.log(ratings);

for(let i=0;i<6;i++){
    ratings[i].reverse();
}
console.log(ratings)

