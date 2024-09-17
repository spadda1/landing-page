function toggleVideo() {
    const audio = document.querySelector('.audio');
    const video = document.querySelector('video');
    video.pause();
    audio.classList.toggle('active');
}

function changeBg(bg, title) {
    const banner = document.querySelector('.banner');
    const contents = document.querySelectorAll('.content');
    banner.style.background = `url("../images/${bg}")`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';

    contents.forEach(content => {
        content.classList.remove('active');
        if (content.classList.contains(title)) {
            content.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const bookContents = document.querySelectorAll('.content');

    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();

        bookContents.forEach(content => {
            const bookText = content.textContent.toLowerCase();
            if (bookText.includes(query)) {
                content.style.display = '';
            } else {
                content.style.display = 'none';
            }
        });
    });
});

