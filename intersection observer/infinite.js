  const container = document.getElementById('container');
    const loader = document.getElementById('loader');

    const photos = [
        '1.jpg',
        '2.jpg',
        '3.jpg',
        '4.jpg',
        '5.jpg',
        '6.jpg',
        '7.jpg',
        '8.jpg',
        '9.jpg',
        '10.jpg',
        '11.jpg',
        '12.jpg',
        '13.jpg',
        '14.jpg',
    ];

    let index = 0;

    function loadPhotos() {
      for (let i = 0; i < 3; i++) {
        if (index >= photos.length) return;

        const img = document.createElement('img');
        img.src = photos[index];
        container.appendChild(img);
        index++;
      }
    }

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        loadPhotos();
      }
    });

    observer.observe(loader);
    loadPhotos(); 