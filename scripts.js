function toggleBranch(node) {
    const branch = node.nextElementSibling; // Prend le prochain élément cousin (branche enfant)
    if (branch && branch.classList.contains('arbre-branche')) {
        branch.style.display = branch.style.display === 'none' ? 'flex' : 'none';
    }
}



// Back to top
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

