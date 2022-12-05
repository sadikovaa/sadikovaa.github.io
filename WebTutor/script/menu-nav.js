
const pageMap = {
    'index2.html': 'second-page-nav',
    'index.html': 'main-page-nav',
};
document.addEventListener('DOMContentLoaded', _ => {

    const nav = document.getElementById('nav-highlight');

    for (const child of nav.children) {
        if (child.pathname === document.location.pathname) {
            child.style.background = '#FFFFFF';
            child.style.color = '#B3AD4D';
            break;
        }
    }
});