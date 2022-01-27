const drawerBtn = document.querySelector(".drawer-btn");
const drawerSection = document.querySelector(".drawer-section--dismissible");
let flag = 1;

drawerBtn.addEventListener("click", ()=> {
    if(flag) 
    {
        drawerSection.style.display = "none";
        flag = 0;

    }else { 
        drawerSection.style.display = "block";
        flag = 1;
    }
});