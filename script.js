const checkbox =
document.getElementById('toggle--daynight');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
})

