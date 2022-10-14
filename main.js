function myFunction() {
     x = document.getElementById("allitems");
     y=document.getElementById("mnu");
    if(y.style.opacity==0){
      y.style.opacity=1; 
      y.style.transition = "opacity 1s linear 0s";
    }
    else{
      y.style.opacity=0; 
      y.style.transition = "opacity 1s linear 0s";
    }
  }
//   btn=document.getElementById("btn");
//   btn.addEventListener('click',function(){
//     console.log(x.style.opacity);  
// });