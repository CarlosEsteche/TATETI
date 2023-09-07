let currentJugador = 'X';
const cells = document.querySelectorAll('.cell');

function checkWinner() {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // filas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
    [0, 4, 8], [2, 4, 6]           
  ];

  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (cells[a].textContent === cells[b].textContent && cells[b].textContent === cells[c].textContent && cells[a].textContent !== '') {
      cells[a].classList.add('winner');
      cells[b].classList.add('winner');
      cells[c].classList.add('winner');
      return true;
    }
  }

  return false;
}

function makeMove(cell) {
  if (!cell.textContent && !checkWinner()) {
    cell.textContent = currentJugador;
    cell.classList.add(currentJugador === 'X' ? 'cross' : 'circle');
    if (checkWinner()) {
      const winMessages = [
        `Victoria del Jugador ${currentJugador} 🏆🥳🎉`,
      ];
      const randomIndex = Math.floor(Math.random() * winMessages.length);
      document.getElementById('winner-message').textContent = winMessages[randomIndex];
      cells.forEach(cell => {
        cell.removeEventListener('click', makeMove);
      });
    } else {
      currentJugador = currentJugador === 'X' ? 'O' : 'X';
    }
  }
}


function resetGame() {
  cells.forEach(cell => {
    cell.textContent = '';
    cell.classList.remove('cross', 'circle', 'winner');
    cell.addEventListener('click', makeMove); // Re-enable click event listeners
  });
  currentJugador = 'X';
  document.getElementById('winner-message').textContent = '';
}


// esta es una prueba de modificacion para
//practicar con github
//Carlos: si ves este mensaje
// borralo y hace el merge para corregir este codigo.
