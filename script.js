fetch("http://localhost:3000/music")
.then(r => r.json())
.then(data => data.forEach(renderMusic))

function renderMusic(music) {
    console.log(music)
    let artistSlide = document.createElement('span')
    let artistName = document.createElement('h2')
    artistName.innerText = music.artist
    let albumTitle = document.createElement('h2')
    albumTitle.innerText = music.album
    let track = document.createElement('p')
    track.innerText = music.tracklist
    let albumImage = document.createElement('img')
    albumImage.src = music.album_art
    artistSlide.append(artistName, albumImage, albumTitle, track)
    document.querySelector('#music-bar').appendChild(artistSlide)
}

function handleNewMusic() {
    document.querySelector('.add-music-form').addEventListener('submit', (e) => {
    e.preventDefault()

    const newMusic = {}
    newMusic.artist = e.target.name.value
    newMusic.album_art = e.target.image.value

    const reqObj = {
        headers: {"Content-Type": "application/json"},
        method: "POST",
        body: JSON.stringify(newMusic)
      }
  
      fetch("http://localhost:3000/music", reqObj)
      .then(r => r.json())
      .then(renderMusic)
    })
}
handleNewMusic()