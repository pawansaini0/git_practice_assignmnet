let str="naman";
let bag="";
for(let i=str.length-1;i>=0;i--){
bag+=str[i];
}
if(bag%2==0){
console.log("Yes");
}else{
console.log("No")
}