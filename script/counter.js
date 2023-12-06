const doc=window.document;
const btn=doc.querySelector("#btn")
const bt=doc.querySelector("#bt")
const btn1=doc.querySelector(".greeting")
let i=0;
btn.addEventListener("click",()=>{
    
    i++;
    btn1.textContent=i;
    console.log(i)

})


bt.addEventListener("click",function(){
    
    i--;
    btn1.textContent=i;
    console.log(i)

})