// Add the coffee to local storage with key "coffee"
let menu=document.getElementById("menu");

async function coffeeData(){
    try {
        let data=await fetch(`https://masai-mock-api.herokuapp.com/coffee/menu`)
    let res=await data.json();
    //console.log(res.menu.data); 
 for(var i=0; i<(res.menu.data).length; i++)
 { 
     let div=document.createElement("div")
    let image=document.createElement("img")
    image.src=(res.menu.data)[i].image;
     
     let title=document.createElement("p")
     title.innerText=(res.menu.data)[i].title;
     
     let price=document.createElement("p")
     price.innerText=(res.menu.data)[i].price;

     let btn=document.createElement("button")
     btn.addEventListener("click", function(event){
         console.log(event.target.parentElement)
       var coffee= localStorage.getItem("cart")
       console.log(coffee)
       var data=[]
         if(Object.keys(coffee).length===0){
           

             data.push(event.target.parentElement);
            console.log(data)
             localStorage.setItem("cart",JSON.stringify(data))
         } 
         else {
             var result=JSON.parse(localStorage.getItem("cart"))
             console.log(result)
             result.push(event.target.parentElement)
            localStorage.setItem("cart",JSON.stringify(result));

            
         }
     });
     btn.innerText="Add To Bucket";

    
     div.append(image,title,price,btn);
    menu.append(div);

 }
}
    catch (error) {
        console.log(error)
    }
}
coffeeData()

