const dropdown = document.querySelector(".dropdown");
const menuLinks = document.querySelectorAll(".dropdown a");

function hamburg(){
    dropdown.classList.toggle("active");
}

// auto close saat klik menu
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        dropdown.classList.remove("active");
    });
});
// TYPEWRITER
const texts = ["CONTENT CREATOR","DIGITAL MARKETER","WEB CREATOR"];
let i=0,j=0,current="",isDeleting=false;

function type(){
    current=texts[i];
    if(!isDeleting){
        document.querySelector(".typewriter-text").innerHTML=current.substring(0,j++);
        if(j>current.length){isDeleting=true;setTimeout(type,1000);return;}
    }else{
        document.querySelector(".typewriter-text").innerHTML=current.substring(0,j--);
        if(j==0){isDeleting=false;i=(i+1)%texts.length;}
    }
    setTimeout(type,100);
}
type();

// SKILL
window.addEventListener("scroll", ()=>{
    document.querySelectorAll(".skill-fill").forEach(el=>{
        el.style.width = el.dataset.width;
    });
});
