// On clicking remove button the item should be removed from DOM as well as localstorage.


function append(){
    let boxes=JSON.parse(localStorage.getItem("box")) || [];
    let bucket=document.getElementById("bucket");
    bucket.innerHTML=null;


    data.forEach(function(el,index){
        let div=document.createElement("div")

        let image=document.createElement("img")
       //  img.class=pic;
        image.src=(res.menu.data)[i].image;
        
        let title=document.createElement("p")
        title.innerText=(res.menu.data)[i].title;
        
        let price=document.createElement("p")
        price.innerText=(res.menu.data)[i].price;
   
        let btn=document.createElement("button")
        btn.innerText="Remove"; 
       btn.setAttribute("click",function(){
        remove(index);
       });
        
        div.append(image,title,price,btn);
        bucket.append(div);
    });
}
append()

function remove(index){
    let boxes=JSON.parse(localStorage.getItem("box")) || [];

    let n
}