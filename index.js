//alert("working")
let randomNumber1 = Math.floor(Math.random() * 6) + 1
let randomDiceImg = "dice"+randomNumber1+".png"
let randomImgSrc = "./images/"+randomDiceImg
let image1 = document.querySelectorAll("img")[0]
image1.setAttribute("src",randomImgSrc)




let randomNumber2 = Math.floor(Math.random()*6 +1)
//let randomDiceImg2 = "dice"+randomNumber1+".png"
let randomImgSrc2 = "./images/dice"+randomNumber2+".png"
document.querySelectorAll("img")[1].setAttribute("src",randomImgSrc2)



if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Veda❤️ wins!"
    }
    else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML= "Vijesh wins!"
    }
    else{
    document.querySelector("h1").innerHTML ="Draw!"    
    }