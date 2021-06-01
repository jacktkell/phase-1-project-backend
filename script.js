const jsonData = "http://localhost:3000/music"

fetch("http://localhost:3000/music")
.then(r => r.json())
.then(data => renderMusic(data))

function renderMusic(music) {
    let artistSlide = document.createElement('span')
    let artistName = document.createElement('p')
    artistName = music.artist
    let albumTitle = document.createElement('p')
    let track = document.createElement('p')
    let albumImage = document.createElement('img')
    artistSlide.append(artistName, albumImage, albumTitle, track)
    console.log(artistSlide)
}
renderMusic()