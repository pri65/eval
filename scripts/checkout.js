let confirm=document.getElementById("confirm");
confirm.addEventListener("click",function(){
    alert("Your order is accepted")
    setTimeout(()=>{
        alert(" Your order is being Prepared")
    },3000)
    setTimeout(()=>{
        alert("Your order being packed")
    },8000)
    setTimeout(()=>{
        alert("Your order is out for delivery") 
    },10000)
    setTimeout(()=>{
        alert("Order deliverd")
    },12000)
})



