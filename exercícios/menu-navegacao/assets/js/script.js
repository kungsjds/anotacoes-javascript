function showHidden() {
    let menu = {
        show: '200px',
        hidden: '0px'
    };  
    
    let element = document.getElementById('menu-area');
    let width = document.getElementById('menu-area').clientWidth;

    if (width == 200) {
        element.style.width = menu.hidden;
        
    } else {
        element.style.width = menu.show;
    }
}