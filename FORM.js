document.querySelectorAll('.toggle-slide').forEach(e => e.addEventListener('click', toggle));

document.querySelectorAll('form').forEach(f => f.addEventListener('submit', (e) => e.preventDefault()) )

function toggle(e) {
    e.preventDefault();
    document.querySelector('.form').classList.toggle('slide');
}