const jsonData = "http://localhost:3000/music"

fetch("http://localhost:3000/music")
.then(r => r.json())
.then(data => data.forEach(renderMusic))

function renderMusic(music) {
    console.log(music)
    let artistSlide = document.createElement('span')
    let artistName = document.createElement('p')
    artistName.innerText = music.artist
    let albumTitle = document.createElement('p')
    albumTitle.innerText = music.album
    let track = document.createElement('p')
    track.innerText = music.tracklist
    let albumImage = document.createElement('img')
    albumImage.src = music.album_art
    artistSlide.append(artistName, albumImage, albumTitle, track)
    document.querySelector('#music-bar').appendChild(artistSlide)
}
<<<<<<< HEAD
//renderMusic()
// test
=======
>>>>>>> e7b7baa5c8677de6b8248c44ac55439374f3eaa1


document.querySelector('.add-music-form').addEventListener('submit', (e) => {
    e.preventDefault()
})