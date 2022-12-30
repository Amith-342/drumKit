let i=0;
for(i=0;i<7;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function handleClick(event){
        
    var str = this.innerHTML;
    var activeButton = this.classList;
    activeButton = activeButton.add("pressed");
    console.log(str);
 
    switch(str){
        case("w"):
        var aud = new Audio("sounds2/a1.mp3");
        aud.play();
        break;

        case("a"):
        var aud = new Audio("sounds2/a2.mp3");
        aud.play();

        break;

        case("s"):
        var aud = new Audio("sounds2/a3.mp3");
        aud.play();

        break;

        case("d"):
        var aud = new Audio("sounds2/a4.mp3");
        aud.play();

        break;

        case("j"):
        var aud = new Audio("sounds2/a5.mp3");
        aud.play();

        break;

        case("k"):
        var aud = new Audio("sounds2/a6.mp3");
        aud.play();

        break;

        case("l"):
        var aud = new Audio("sounds2/a7.mp3");
        aud.play();

        
    }
    setTimeout(function (){document.querySelector("."+str).classList.remove("pressed");},100);

    

    }
    
    );
}

document.addEventListener("keypress",function handlePress(event) {

    for(let i=0;i<7;i++){
      var str=  document.querySelectorAll(".drum")[i].innerHTML;

      console.log(event.key);
        if(str === event.key){
            document.querySelector("."+event.key).classList.add("pressed");
            var ad = new Audio("sounds2/a"+(i+1)+".mp3");
            ad.play();
            setTimeout(function (){document.querySelector("."+event.key).classList.remove("pressed");},100);
            console.log(str);
        }
    }
});


