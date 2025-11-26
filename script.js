function toggleMenu(){
    document.getElementById("nav-links").classList.toggle("show");
}

window.addEventListener("resize", () => {
    if(window.innerWidth > 768){
        document.getElementById("nav-links").classList.remove("show");
    }
});
