const writeBtn = document.getElementById('write-btn');

writeBtn.addEventListener('mouseover', function() {
    writeBtn.classList.add('btn-active');
    writeBtn.classList.remove('btn-inactive');
})
writeBtn.addEventListener('mouseout', function() {
    writeBtn.classList.add('btn-inactive');
    writeBtn.classList.remove('btn-active');
})
writeBtn.addEventListener('click', function() {
    location.href='/html/postWrite.html';
})