const tombolno = document.getElementById('tombol-no');
        const maxX = window.innerWidth -tombolno.offsetWidth;
        const maxY = window.innerHeight - tombolno.offsetHeight;

        tombolno.addEventListener('click', function() {
            const randomX = Math.floor(Math.random() * maxX);
            const randomY = Math.floor(Math.random() * maxY);

            tombolno.style.left = randomX + 'px';
            tombolno.style.top = randomY + 'px';
        });