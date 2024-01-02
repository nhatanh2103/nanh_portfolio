var typed =new Typed(".auto",{
    strings: ["web developer"],
    typeSpeed: 50,
    loop: false
})

let home=document.getElementById("home_btn")
let about=document.getElementById("about_btn")
let exp=document.getElementById("exp_btn")
let contact=document.getElementById("contact_btn")

$("#about").addClass("text_hide")
$("#exp").addClass("text_hide")
$("#contact").addClass("text_hide")

home.onclick=function(){
    $("#home").removeClass("text_hide")
    $("#about").addClass("text_hide")
    $("#exp").addClass("text_hide")
    $("#contact").addClass("text_hide")
}

about.onclick=function(){
    $("#home").addClass("text_hide")
    $("#about").removeClass("text_hide")
    $("#exp").addClass("text_hide")
    $("#contact").addClass("text_hide")
}

exp.onclick=function(){
    $("#home").addClass("text_hide")
    $("#about").addClass("text_hide")
    $("#exp").removeClass("text_hide")
    $("#contact").addClass("text_hide")
}

contact.onclick=function(){
    $("#home").addClass("text_hide")
    $("#about").addClass("text_hide")
    $("#exp").addClass("text_hide")
    $("#contact").removeClass("text_hide")
}
