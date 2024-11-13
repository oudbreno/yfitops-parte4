// Função para carregar as músicas salvas
function loadMusics() {
  const musicList = JSON.parse(localStorage.getItem('musics')) || [];
  const musicContainer = document.getElementById('musicList');
  musicContainer.innerHTML = ''; // Limpa o container antes de adicionar novas músicas

  if (musicList.length === 0) {
    const noMusicMessage = document.createElement('p');
    noMusicMessage.textContent = 'Nenhuma música cadastrada.';
    musicContainer.appendChild(noMusicMessage);
    return;
  }

  musicList.forEach((music, index) => {
    const musicCard = document.createElement('div');
    musicCard.classList.add('music-card');

    const musicImg = document.createElement('img');
    musicImg.src = music.image;
    musicImg.alt = music.title;

    const musicInfo = document.createElement('p');
    musicInfo.textContent = `${music.title} - ${music.artist}`;

    const playButton = document.createElement('button');
    playButton.textContent = 'Tocar';
    playButton.onclick = function() {
      playMusic(music.src); // Passa a URL da música para a função de tocar
    };

    musicCard.appendChild(musicImg);
    musicCard.appendChild(musicInfo);
    musicCard.appendChild(playButton);

    musicContainer.appendChild(musicCard);
  });
}

// Função para tocar a música
function playMusic(musicSrc) {
  const audioPlayer = document.getElementById('audioPlayer');
  audioPlayer.src = musicSrc;  // Atualiza o src do áudio
  audioPlayer.play();  // Toca a música
}

window.onload = function() {
  loadMusics(); // Carrega as músicas quando a página é carregada
};
