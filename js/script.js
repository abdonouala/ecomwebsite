let img = document.getElementById('img1');
function phone(phone){
    img.src = phone;
}
document.querySelector('.menu-icon').addEventListener('click', function() {
    const menu = document.querySelector('.list ul');
    if (menu.style.display === 'flex' || menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
});
