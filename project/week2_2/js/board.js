const writeBtn = document.getElementById('write-btn');
const post1 = document.getElementById('post1');

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

post1.addEventListener('click', function() {
    location.href='/html/postDetail.html';
})