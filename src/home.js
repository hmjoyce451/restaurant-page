import { loadHomepage } from "./homepage";

function displayHome() {
    const homeButton = document.querySelector('.home-button');
    homeButton.addEventListener('click', (e) => {
        //clear page
        console.log('clicked home');
        removeAllChildNodes(content);
        //repopulate page
        loadHomepage();
    });
}
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
export { displayHome, removeAllChildNodes };
