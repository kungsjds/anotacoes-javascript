function menuToggle() {
    let menu = {
        show: '200px',
        hidden: '0px'
    };  
    
    let element = document.getElementById('menu-area');
    let width = element.style.width;

    if (width == '200px') {
        element.style.width = menu.hidden;
        
    } else {
        element.style.width = menu.show;
    }
}