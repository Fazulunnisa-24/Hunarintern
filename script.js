fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const movieList = document.getElementById('movie-list');
    data.forEach(movie => {
      const movieCard = document.createElement('div');
      movieCard.className = 'movie-card';

      movieCard.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}" width="200">
        <h2>${movie.title}</h2>
        <p>${movie.description}</p>
      `;

      movieList.appendChild(movieCard);
    });
  })
  .catch(error => console.error('Error loading JSON:', error));
