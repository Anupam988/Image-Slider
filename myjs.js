let  slides =document.querySelectorAll(".slide");
let count=0;
let len= slides.length;
let img=0;
slides.forEach(
    (slide,index)=>{
        slide.style.left=` ${index*100}%`
    }
)
function prev(){
    count--;
    if(count>=0){
        slideImg()
    }
    else{
        golast()
        count=len-1
    }
}
function next(){
    count++;
    if(count<len){
        slideImg()
    }
    else{
        gofirst()
        count=0
    }
}

function slideImg(){
    slides.forEach(
        (slide)=>{
            slide.style.transform=`translateX( -${count * 100}% )`
        }
    )
}
function gofirst(){

    slides.forEach(
        (slide)=>{
            slide.style.transform=`translateX( -${0 * 100}% )`
        }
    )
}
function golast(){

    slides.forEach(
        (slide)=>{
            slide.style.transform=`translateX( -${(len-1) * 100}% )`
        }
    )
}
