window.addEventListener('DOMContentLoaded', ()=>{
    let btnMenu = document.querySelector('.btn_toggle_menu');
    let mobMenu = document.querySelector('.mob-menu');
    document.addEventListener('click', (e)=>{
        if (e.target === btnMenu) {
            e.preventDefault();
            mobMenu.classList.toggle('open');
        } else if (e.target.tagName == "UL") {
            return;
        } else if (!e.target.classList.contains('mob-menu')) {
            mobMenu.classList.remove('open');
        } 
    });
})
