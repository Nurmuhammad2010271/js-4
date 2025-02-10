const ism = "Nurmuhammad";
let bot = prompt("Ism kirit");
let harf = prompt("Harf kirit");

if(bot == ""){
    alert("Isim kriting")
}
else if(bot.toLowerCase().includes(harf)){
    alert(`${bot} ismida ${harf} harfi mavjud`)
}else{
    alert(`${bot} ismida ${harf} harfi mavjud emas`)
}