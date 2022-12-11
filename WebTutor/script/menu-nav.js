document.addEventListener('DOMContentLoaded', _ => {

    const nav = document.getElementById('nav-highlight');

    for (const child of nav.children) {
        if (child.pathname === document.location.pathname) {
            child.className = 'selected-item'
            break;
        }
    }
});