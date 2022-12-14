//sum of positive numbers only

let length=parseInt(prompt("total numbers"));
let c=0;
for(i=1;i<=length;i++){
    b=parseInt(prompt("enter the number"));
    document.write(b+", ")
    if(b>0){
        c=c+b;
    }
}
document.write("<br>"+c)
