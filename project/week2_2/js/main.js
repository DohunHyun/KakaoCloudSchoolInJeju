document.getElementById('header-img').addEventListener('click', function() {
    let drop = document.getElementById('drop-down');

    if(drop.style.display == 'none') {
        drop.style.display = 'block';
    } else {
        drop.style.display = 'none';
    }
})

document.getElementById('prev-btn').style.display = none;

document.getElementById('profile-header')