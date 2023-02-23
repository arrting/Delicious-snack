let header = document.querySelector("header");
let headerH1 = document.querySelector("header h1");
let headerAnchor = document.querySelectorAll("header nav ul li a");
console.log(headerH1);
console.log(headerAnchor);

//console.log(header);

window.addEventListener("scroll",() => {
    if(window.pageYOffset != 0){
        header.style.backgroundColor = "rgba(90, 50, 30, 0.8)";
        headerH1.style.color = "#DECDB7"; 
        headerAnchor.forEach(a =>{
            a.style.color = "#DECDB7";
        })
    }else{
        header.style = "";
        headerH1.style = "";
        headerAnchor.forEach(a =>{
            a.style.color = "";
        });
    }
    //console.log(window.pageYOffset);
    //console.log(typeof header.style.backgroundColor);
})