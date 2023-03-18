const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    //On click event listener to add class 'active' from images
    panel.addEventListener('click', () => {
        removeActiveClass();
        panel.classList.add('active');
    })
});


//Function to remove class 'active' from images
function removeActiveClass() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}