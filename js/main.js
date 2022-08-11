        let intialone=true
        let initialtwo=true
        let initialthree=true
        let initialfour=true
window.onscroll=function(){
let workcontain=document.getElementById("workcontain");
    console.log(window.scrollY)
    if(window.scrollY>=500){
  
    workcontain.style.position="relative"
        workcontain.style.right=0+"px"
    }
    if(window.scrollY>=2450){
        let num=document.getElementById("num");
        let numtwo=document.getElementById("numtwo");
        let numthree=document.getElementById("numthree");
        let numfour=document.getElementById("numfour");
         let numbers=document.getElementById("numbers")
        numbers.style.display="block"
        
        let count1=0;
        let count2=0;
        let count3=0;
        let count4=0
        if(intialone){    
            let clear=setInterval(function(){
                count1++           
                num.innerHTML=count1
                if(count1>=10 ){
                    clearInterval(clear)
                }
            },100);
            intialone=false
        }
        if(initialtwo){
        let clear2=setInterval(function(){
            count2++
            numtwo.innerHTML=count2
            if(count2==15){
                clearInterval(clear2)
            }
        },200);
        initialtwo=false
    }
    if(initialthree){
        let clear3=setInterval(function(){
            count3++
            numthree.innerHTML=count3
            if(count3==20){
                clearInterval(clear3)
            }
        },250);
        initialthree=false
    }
    if(initialfour){
        let clear4=setInterval(function(){
            count4++
            numfour.innerHTML=count4
            if(count4==25){
                clearInterval(clear4)
            }
        },300)
        initialfour=false;
    }
}
}
let serp=this.document.getElementById("serp");
let servoneagain=document.getElementById("servoneagain");
let serh1=document.getElementById("serh1")
servoneagain.onmouseover=function(){
    serp.style.opacity="1"
    serp.style.marginTop="40px"
    servoneagain.style.paddingTop="70px"
}
servoneagain.onmouseleave=function(){
    serp.style.opacity="0"
    servoneagain.style.paddingTop="100px"
    serp.style.marginTop="20px"
}
let servoneagain1=document.getElementById("servoneagain1");
let serh11=document.getElementById("serh11");
let serp11=document.getElementById("serp11");
servoneagain1.onmouseover=function(){
    serp11.style.opacity="1"
    serp11.style.marginTop="40px"
    servoneagain1.style.paddingTop="70px"
}
servoneagain1.onmouseleave=function(){
    serp11.style.opacity="0"
    servoneagain1.style.paddingTop="100px"
    serp11.style.marginTop="20px"
}
let servoneagain12=document.getElementById("servoneagain12");
let serh112=document.getElementById("serh112");
let serp112=document.getElementById("serp112");
servoneagain12.onmouseover=function(){
    serp112.style.opacity="1"
    serp112.style.marginTop="40px"
    servoneagain12.style.paddingTop="70px"
}
servoneagain12.onmouseleave=function(){
    serp112.style.opacity="0"
    servoneagain12.style.paddingTop="100px"
    serp112.style.marginTop="20px"
}
let servoneagain123=document.getElementById("servoneagain123");
let serh1123=document.getElementById("serh1123");
let serp1123=document.getElementById("serp1123");
servoneagain123.onmouseover=function(){
    serp1123.style.opacity="1"
    serp1123.style.marginTop="40px"
    servoneagain123.style.paddingTop="70px"
}
servoneagain123.onmouseleave=function(){
    serp1123.style.opacity="0"
    servoneagain123.style.paddingTop="100px"
    serp1123.style.marginTop="20px"
}