fetch("http://localhost:3000/music")
  .then((r) => r.json())
  .then((data) => data.forEach(renderMusic));

function renderMusic(music) {
  let artistSlide = document.createElement("span");

  let artistName = document.createElement("h2");
  artistName.innerText = music.artist;

  let albumTitle = document.createElement("h2");
  albumTitle.innerText = music.album;

  let albumImage = document.createElement("img");
  albumImage.src = music.album_art;

  let likes = document.createElement("p");
  likes.innerText = 0;
  let likesButton = document.createElement("button");
  likesButton.innerText = "❤";
  likesButton.addEventListener("click", () => {
    likes.innerText++;
  });

  let deleteButton = document.createElement('button')
  deleteButton.innerText = "Delete"
  deleteButton.addEventListener("click", () => {
    artistSlide.remove()
    deleteMusic(music.id)
  })
    

  artistSlide.append(
    artistName,
    albumImage,
    albumTitle,
    likesButton,
    likes,
    deleteButton
  );
  document.querySelector("#music-bar").appendChild(artistSlide);
}

function handleNewMusic() {
  document.querySelector(".add-music-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const newMusic = {};
    newMusic.artist = e.target.name.value;
    newMusic.album_art = e.target.image.value;
    newMusic.album = e.target.title.value;

    const reqObj = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(newMusic),
    };

    fetch("http://localhost:3000/music", reqObj)
      .then((r) => r.json())
      .then(renderMusic);
  });
}
handleNewMusic();

function deleteMusic (id) {
  fetch(`http://localhost:3000/music/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })
  .catch(error => console.error("Error:", error))
}