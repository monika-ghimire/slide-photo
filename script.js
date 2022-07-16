
let showSlide=document.getElementById('showSlide')

let imageList=[
  "./images/img1.png",
  "./images/img2.png",
  "./images/img3.png",
  "./images/img4.png",
]
x=0;
const  BtnNextSlide = () => {

  // console.log(`<img src=${imageList[x]}`);
  var img=`<img src="${imageList[x]}">`;
  
  showSlide.innerHTML=img;
    if(x===imageList.length-1)
    {
      x=0;
    } 
      x++;
} 

const BtnPreviousSlide =()=>{
  var img=`<img src="${imageList[x]}">`;
  console.log(`<img src="${imageList[x]}">`);
  showSlide.innerHTML=img;
    if(x===0) x=imageList.length-1;
    x--;

    
   
}

