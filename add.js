let addButton = document.querySelector("main.form form button");

addButton.addEventListener("click", e =>{
    e.preventDefault();

    let form = e.target.parentElement;
    //console.log(form.children[1]);
    let name = form.children[1].value;
    let ingredients = form.children[3].value;
    let method = form.children[5].value;

    let newMenu = {
        snackName: name,
        ingredients: ingredients,
        method:method
    }
    // console.log(name);
    // console.log(ingredients);
    // console.log(method);

    if(newMenu.snackName=="" && newMenu.ingredients=="" && newMenu.method==""){
        alert("輸入有錯誤，請重新輸入");
    }else{
        
        let menu = JSON.parse(localStorage.getItem("menus"));
        console.log(newMenu);
        console.log(menu);
        menu.push(newMenu);
        console.log(menu);
        localStorage.setItem("menus",JSON.stringify(menu));
        alert("菜單以新增!");
    }
})
