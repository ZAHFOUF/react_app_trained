var items = Array.from(document.querySelectorAll("#streaming-active > ul li"))
var allow = true
var queue = false
var index = 4

window.addEventListener("scroll",isvisible)


function isvisible (){
    var containerSize = window.innerHeight - document.querySelector("body > header").offsetHeight
    var itemtop = items[2].getBoundingClientRect().top
    if(itemtop<containerSize && allow === true){
        setTimeout(()=>{items[3].click()},500)
        Slide()
        allow =false
    }
      
}

function Slide(){


    window.interval= setInterval( ()=>{
         
        items[index].click()
        index === items.length - 1 ? index = 0 : index++
    },2500)



    items.forEach(e => {
        e.addEventListener("mousedown",(e)=>{queue === false ?waitUser(e):NaN})
        function waitUser (e){
                console.log("stop");
                clearInterval(window.interval)
                window.setTimeout(()=> { 
                    console.log("continue");
                    queue = false
                
                window.interval =setInterval( ()=>{

                    
                    items[index].click()
                    index === items.length - 1 ? index = 0 : index++
                },2000)
            
                
                }, 12000)
                queue=true
        }
    });

}