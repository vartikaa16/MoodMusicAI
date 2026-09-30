/* =====================================================
   MOODTUNE - MOOD BASED MUSIC WEBSITE
   ===================================================== */


/* -----------------------------
   MUSIC DATABASE
----------------------------- */

const music = {

    happy: [
        {
            title: "Happy",
            artist: "Pharrell Williams",
            search: "Happy Pharrell Williams"
        },
        {
            title: "Perfect",
            artist: "Ed Sheeran",
            search: "Perfect Ed Sheeran",
            video: "2Vv-BfVoq4g"
        },
        {
            title: "Count on Me",
            artist: "Bruno Mars",
            search: "Count on Me Bruno Mars"
        },
        {
            title: "Love Yourself",
            artist: "Justin Bieber",
            search: "Love Yourself Justin Bieber"
        },
        {
            title: "On Top of the World",
            artist: "Imagine Dragons",
            search: "On Top of the World Imagine Dragons"
        }
    ],

    sad: [
        {
            title: "Lovely",
            artist: "Billie Eilish",
            search: "Lovely Billie Eilish"
        },
        {
            title: "Someone Like You",
            artist: "Adele",
            search: "Someone Like You Adele"
        },
        {
            title: "Let Her Go",
            artist: "Passenger",
            search: "Let Her Go Passenger"
        },
        {
            title: "Arcade",
            artist: "Duncan Laurence",
            search: "Arcade Duncan Laurence"
        },
        {
            title: "The Night We Met",
            artist: "Lord Huron",
            search: "The Night We Met Lord Huron"
        }
    ],

    calm: [
        {
            title: "All of Me",
            artist: "John Legend",
            search: "All of Me John Legend",
            video: "450p7goxZqg"
        },
        {
            title: "Until I Found You",
            artist: "Stephen Sanchez",
            search: "Until I Found You Stephen Sanchez"
        },
        {
            title: "Yellow",
            artist: "Coldplay",
            search: "Yellow Coldplay"
        },
        {
            title: "Photograph",
            artist: "Ed Sheeran",
            search: "Photograph Ed Sheeran"
        },
        {
            title: "Ocean Eyes",
            artist: "Billie Eilish",
            search: "Ocean Eyes Billie Eilish"
        }
    ],

    energetic: [
        {
            title: "Believer",
            artist: "Imagine Dragons",
            search: "Believer Imagine Dragons"
        },
        {
            title: "Thunder",
            artist: "Imagine Dragons",
            search: "Thunder Imagine Dragons"
        },
        {
            title: "Blinding Lights",
            artist: "The Weeknd",
            search: "Blinding Lights The Weeknd"
        },
        {
            title: "Levitating",
            artist: "Dua Lipa",
            search: "Levitating Dua Lipa"
        },
        {
            title: "On My Way",
            artist: "Alan Walker",
            search: "On My Way Alan Walker"
        }
    ],

    romantic: [
        {
            title: "All of Me",
            artist: "John Legend",
            search: "All of Me John Legend",
            video: "450p7goxZqg"
        },
        {
            title: "Perfect",
            artist: "Ed Sheeran",
            search: "Perfect Ed Sheeran",
            video: "2Vv-BfVoq4g"
        },
        {
            title: "A Thousand Years",
            artist: "Christina Perri",
            search: "A Thousand Years Christina Perri"
        },
        {
            title: "Until I Found You",
            artist: "Stephen Sanchez",
            search: "Until I Found You Stephen Sanchez"
        },
        {
            title: "Die With A Smile",
            artist: "Lady Gaga Bruno Mars",
            search: "Die With A Smile Lady Gaga Bruno Mars"
        }
    ],

    focus: [
        {
            title: "Weightless",
            artist: "Marconi Union",
            search: "Weightless Marconi Union"
        },
        {
            title: "Experience",
            artist: "Ludovico Einaudi",
            search: "Experience Ludovico Einaudi"
        },
        {
            title: "River Flows in You",
            artist: "Yiruma",
            search: "River Flows in You Yiruma"
        },
        {
            title: "Comptine d'un autre été",
            artist: "Yann Tiersen",
            search: "Comptine d'un autre été Yann Tiersen"
        },
        {
            title: "Nuvole Bianche",
            artist: "Ludovico Einaudi",
            search: "Nuvole Bianche Ludovico Einaudi"
        }
    ],

    chill: [
        {
            title: "Sunflower",
            artist: "Post Malone Swae Lee",
            search: "Sunflower Post Malone Swae Lee"
        },
        {
            title: "Lovely",
            artist: "Billie Eilish",
            search: "Lovely Billie Eilish"
        },
        {
            title: "Until I Found You",
            artist: "Stephen Sanchez",
            search: "Until I Found You Stephen Sanchez"
        },
        {
            title: "Sweater Weather",
            artist: "The Neighbourhood",
            search: "Sweater Weather The Neighbourhood"
        },
        {
            title: "Golden Hour",
            artist: "JVKE",
            search: "Golden Hour JVKE"
        }
    ],

    party: [
        {
            title: "Uptown Funk",
            artist: "Mark Ronson ft. Bruno Mars",
            search: "Uptown Funk Mark Ronson Bruno Mars"
        },
        {
            title: "Dance Monkey",
            artist: "Tones and I",
            search: "Dance Monkey Tones and I"
        },
        {
            title: "Levitating",
            artist: "Dua Lipa",
            search: "Levitating Dua Lipa"
        },
        {
            title: "Don't Start Now",
            artist: "Dua Lipa",
            search: "Don't Start Now Dua Lipa"
        },
        {
            title: "Cheap Thrills",
            artist: "Sia",
            search: "Cheap Thrills Sia"
        }
    ]

};


/* -----------------------------
   VARIABLES
----------------------------- */

let currentSongs = [];
let currentIndex = 0;
let currentSong = null;


/* -----------------------------
   LOCAL STORAGE
----------------------------- */

let favorites = JSON.parse(
    localStorage.getItem("moodtuneFavorites")
) || [];

let playlists = JSON.parse(
    localStorage.getItem("moodtunePlaylists")
) || {};


/* -----------------------------
   SAVE DATA
----------------------------- */

function saveData() {

    localStorage.setItem(
        "moodtuneFavorites",
        JSON.stringify(favorites)
    );

    localStorage.setItem(
        "moodtunePlaylists",
        JSON.stringify(playlists)
    );
}


/* -----------------------------
   SECTION CONTROL
----------------------------- */

function hideSections() {

    document.getElementById("homeSection").classList.add("hidden");
    document.getElementById("searchSection").classList.add("hidden");
    document.getElementById("favoritesSection").classList.add("hidden");
    document.getElementById("playlistSection").classList.add("hidden");
    document.getElementById("aboutSection").classList.add("hidden");
}


function showHome() {

    hideSections();

    document.getElementById("homeSection")
        .classList.remove("hidden");

    document.getElementById("pageTitle").innerText =
        "Find Your Mood 🎶";

    document.getElementById("pageSubtitle").innerText =
        "Choose a mood and discover music that matches it.";
}


function showAbout() {

    hideSections();

    document.getElementById("aboutSection")
        .classList.remove("hidden");

    document.getElementById("pageTitle").innerText =
        "About MoodTune";

    document.getElementById("pageSubtitle").innerText =
        "Learn more about the project.";
}


/* -----------------------------
   MOOD SELECTION
----------------------------- */

function selectMood(mood) {

    currentSongs = music[mood];
    currentIndex = 0;

    document.getElementById("recommendationTitle").innerText =
        mood.charAt(0).toUpperCase() +
        mood.slice(1) +
        " Music For You";

    displaySongs(
        currentSongs,
        "songList"
    );
}


/* -----------------------------
   DISPLAY SONGS
----------------------------- */

function displaySongs(songs, containerId) {

    const container =
        document.getElementById(containerId);

    container.innerHTML = "";

    if (songs.length === 0) {

        container.innerHTML =
            `<p class="empty-message">
                No songs found.
            </p>`;

        return;
    }


    songs.forEach((song, index) => {

        const isFavorite =
            favorites.some(
                item =>
                    item.title === song.title &&
                    item.artist === song.artist
            );


        const card =
            document.createElement("div");

        card.className = "song-card";


        card.innerHTML = `

            <div class="song-cover">
                🎵
            </div>

            <div class="song-info">

                <h3>${song.title}</h3>

                <p>${song.artist}</p>

            </div>

            <div class="song-buttons">

                <button
                    class="play-song"
                    onclick="playSong(${index})">
                    ▶
                </button>

                <button
                    onclick="favoriteSong(${index})">
                    ${isFavorite ? "❤️" : "♡"}
                </button>

                <button
                    onclick="choosePlaylist(${index})">
                    +
                </button>

            </div>
        `;

        container.appendChild(card);

    });

}


/* -----------------------------
   PLAY SONG
----------------------------- */

function playSong(index) {

    currentIndex = index;

    currentSong = currentSongs[index];

    updatePlayer();

    document.getElementById("player")
        .classList.remove("hidden");

    openCurrentSong();
}


/* -----------------------------
   UPDATE PLAYER
----------------------------- */

function updatePlayer() {

    if (!currentSong) return;

    document.getElementById("currentTitle")
        .innerText = currentSong.title;

    document.getElementById("currentArtist")
        .innerText = currentSong.artist;
}


/* -----------------------------
   PLAY CURRENT SONG
----------------------------- */

function playCurrentSong() {

    if (!currentSong) return;

    openCurrentSong();
}


/* -----------------------------
   OPEN SONG
----------------------------- */

function openCurrentSong() {

    if (!currentSong) return;


    if (currentSong.video) {

        const frame =
            document.getElementById("youtubeFrame");

        frame.src =
            "https://www.youtube.com/embed/" +
            currentSong.video +
            "?autoplay=1&rel=0";

        document.getElementById("youtubePopup")
            .classList.remove("hidden");

    } else {

        const url =
            "https://www.youtube.com/results?search_query=" +
            encodeURIComponent(currentSong.search);

        window.open(url, "_blank");

    }

}


/* -----------------------------
   CLOSE YOUTUBE
----------------------------- */

function closeYoutube() {

    document.getElementById("youtubeFrame").src = "";

    document.getElementById("youtubePopup")
        .classList.add("hidden");
}


/* -----------------------------
   NEXT SONG
----------------------------- */

function nextSong() {

    if (currentSongs.length === 0) return;

    currentIndex++;

    if (currentIndex >= currentSongs.length) {
        currentIndex = 0;
    }

    currentSong =
        currentSongs[currentIndex];

    updatePlayer();

    openCurrentSong();
}


/* -----------------------------
   PREVIOUS SONG
----------------------------- */

function previousSong() {

    if (currentSongs.length === 0) return;

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = currentSongs.length - 1;
    }

    currentSong =
        currentSongs[currentIndex];

    updatePlayer();

    openCurrentSong();
}


/* -----------------------------
   FAVORITES
----------------------------- */

function favoriteSong(index) {

    const song = currentSongs[index];

    const existing =
        favorites.findIndex(
            item =>
                item.title === song.title &&
                item.artist === song.artist
        );


    if (existing >= 0) {

        favorites.splice(existing, 1);

    } else {

        favorites.push(song);

    }

    saveData();

    displaySongs(
        currentSongs,
        "songList"
    );
}


function toggleFavoriteCurrent() {

    if (!currentSong) return;


    const existing =
        favorites.findIndex(
            item =>
                item.title === currentSong.title &&
                item.artist === currentSong.artist
        );


    if (existing >= 0) {

        favorites.splice(existing, 1);

    } else {

        favorites.push(currentSong);

    }

    saveData();

}


/* -----------------------------
   SHOW FAVORITES
----------------------------- */

function showFavorites() {

    hideSections();

    document.getElementById("favoritesSection")
        .classList.remove("hidden");

    document.getElementById("pageTitle").innerText =
        "Your Favorites ❤️";

    document.getElementById("pageSubtitle").innerText =
        "Songs you have saved.";

    const container =
        document.getElementById("favoriteList");

    container.innerHTML = "";


    if (favorites.length === 0) {

        container.innerHTML =
            `<p class="empty-message">
                You haven't added any favorites yet.
            </p>`;

        return;
    }


    favorites.forEach((song, index) => {

        const card =
            document.createElement("div");

        card.className = "song-card";


        card.innerHTML = `

            <div class="song-cover">
                ❤️
            </div>

            <div class="song-info">

                <h3>${song.title}</h3>

                <p>${song.artist}</p>

            </div>

            <div class="song-buttons">

                <button
                    class="play-song"
                    onclick="playFavorite(${index})">
                    ▶
                </button>

                <button
                    onclick="removeFavorite(${index})">
                    🗑
                </button>

                <button
                    onclick="chooseFavoritePlaylist(${index})">
                    +
                </button>

            </div>

        `;

        container.appendChild(card);

    });

}


/* -----------------------------
   PLAY FAVORITE
----------------------------- */

function playFavorite(index) {

    currentSong =
        favorites[index];

    currentSongs =
        favorites;

    currentIndex =
        index;

    updatePlayer();

    document.getElementById("player")
        .classList.remove("hidden");

    openCurrentSong();
}


/* -----------------------------
   REMOVE FAVORITE
----------------------------- */

function removeFavorite(index) {

    favorites.splice(index, 1);

    saveData();

    showFavorites();
}


/* -----------------------------
   PLAYLIST CREATION
----------------------------- */

function createPlaylist() {

    const name =
        prompt("Enter a name for your playlist:");

    if (!name) return;


    const trimmedName =
        name.trim();

    if (trimmedName === "") return;


    if (playlists[trimmedName]) {

        alert("A playlist with this name already exists.");

        return;
    }


    playlists[trimmedName] = [];

    saveData();

    showPlaylists();
}


/* -----------------------------
   SHOW PLAYLISTS
----------------------------- */

function showPlaylists() {

    hideSections();

    document.getElementById("playlistSection")
        .classList.remove("hidden");

    document.getElementById("pageTitle").innerText =
        "My Playlists 📂";

    document.getElementById("pageSubtitle").innerText =
        "Your personal music collections.";


    const container =
        document.getElementById("playlistList");

    container.innerHTML = "";


    const names =
        Object.keys(playlists);


    if (names.length === 0) {

        container.innerHTML =
            `<p class="empty-message">
                You haven't created a playlist yet.
            </p>`;

        return;
    }


    names.forEach(name => {

        const card =
            document.createElement("div");

        card.className =
            "playlist-card";


        card.innerHTML = `

            <h3>🎵 ${name}</h3>

            <p>
                ${playlists[name].length} song(s)
            </p>

            <button
                onclick="openPlaylist('${escapeQuotes(name)}')">
                Open
            </button>

            <button
                onclick="deletePlaylist('${escapeQuotes(name)}')">
                🗑
            </button>

        `;

        container.appendChild(card);

    });

}


/* -----------------------------
   ESCAPE PLAYLIST NAME
----------------------------- */

function escapeQuotes(text) {

    return text
        .replace(/\\/g, "\\\\")
        .replace(/'/g, "\\'")
        .replace(/"/g, '\\"');

}


/* -----------------------------
   CHOOSE PLAYLIST
----------------------------- */

let songWaitingForPlaylist = null;


function choosePlaylist(index) {

    songWaitingForPlaylist =
        currentSongs[index];

    openPlaylistModal();
}


function chooseFavoritePlaylist(index) {

    songWaitingForPlaylist =
        favorites[index];

    openPlaylistModal();
}


function addCurrentToPlaylist() {

    if (!currentSong) {

        alert("Please select a song first.");

        return;
    }

    songWaitingForPlaylist =
        currentSong;

    openPlaylistModal();
}


/* -----------------------------
   PLAYLIST MODAL
----------------------------- */

function openPlaylistModal() {

    const choices =
        document.getElementById("playlistChoices");

    choices.innerHTML = "";


    const names =
        Object.keys(playlists);


    if (names.length === 0) {

        choices.innerHTML =
            `<p class="empty-message">
                Create a playlist first.
            </p>

            <button
                class="create-btn"
                onclick="closePlaylistModal(); createPlaylist();">
                + Create Playlist
            </button>`;

    } else {

        names.forEach(name => {

            const button =
                document.createElement("button");

            button.className =
                "playlist-choice";

            button.innerText =
                "📂 " + name;

            button.onclick = function() {

                addSongToPlaylist(name);

            };

            choices.appendChild(button);

        });

    }


    document.getElementById("playlistModal")
        .classList.remove("hidden");
}


function closePlaylistModal() {

    document.getElementById("playlistModal")
        .classList.add("hidden");

    songWaitingForPlaylist = null;
}


/* -----------------------------
   ADD SONG TO PLAYLIST
----------------------------- */

function addSongToPlaylist(name) {

    if (!songWaitingForPlaylist) return;


    const exists =
        playlists[name].some(
            song =>
                song.title === songWaitingForPlaylist.title &&
                song.artist === songWaitingForPlaylist.artist
        );


    if (exists) {

        alert("This song is already in the playlist.");

        closePlaylistModal();

        return;
    }


    playlists[name].push(songWaitingForPlaylist);

    saveData();

    alert(
        `"${songWaitingForPlaylist.title}" added to "${name}".`
    );

    closePlaylistModal();
}


/* -----------------------------
   OPEN PLAYLIST
----------------------------- */

function openPlaylist(name) {

    const songs =
        playlists[name];


    if (!songs) return;


    hideSections();

    document.getElementById("homeSection")
        .classList.remove("hidden");


    document.getElementById("pageTitle").innerText =
        name;

    document.getElementById("pageSubtitle").innerText =
        "Your playlist";


    currentSongs =
        songs;

    displaySongs(
        songs,
        "songList"
    );

}


/* -----------------------------
   DELETE PLAYLIST
----------------------------- */

function deletePlaylist(name) {

    const confirmDelete =
        confirm(
            `Delete the playlist "${name}"?`
        );


    if (!confirmDelete) return;


    delete playlists[name];

    saveData();

    showPlaylists();
}


/* -----------------------------
   SEARCH
----------------------------- */

function searchSongs() {

    const query =
        document.getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();


    if (query === "") {

        document.getElementById("searchSection")
            .classList.add("hidden");

        document.getElementById("homeSection")
            .classList.remove("hidden");

        return;
    }


    hideSections();

    document.getElementById("searchSection")
        .classList.remove("hidden");


    const allSongs = [];


    Object.values(music).forEach(moodSongs => {

        moodSongs.forEach(song => {

            const alreadyExists =
                allSongs.some(
                    item =>
                        item.title === song.title &&
                        item.artist === song.artist
                );


            if (!alreadyExists) {

                allSongs.push(song);

            }

        });

    });


    const results =
        allSongs.filter(song =>

            song.title
                .toLowerCase()
                .includes(query)

            ||

            song.artist
                .toLowerCase()
                .includes(query)

        );


    displaySearchResults(results);
}


/* -----------------------------
   SEARCH RESULTS
----------------------------- */

function displaySearchResults(songs) {

    const container =
        document.getElementById("searchResults");

    container.innerHTML = "";


    if (songs.length === 0) {

        container.innerHTML =
            `<p class="empty-message">
                No matching songs found.
            </p>`;

        return;
    }


    songs.forEach(song => {

        const card =
            document.createElement("div");

        card.className =
            "song-card";


        card.innerHTML = `

            <div class="song-cover">
                🔍
            </div>

            <div class="song-info">

                <h3>${song.title}</h3>

                <p>${song.artist}</p>

            </div>

            <div class="song-buttons">

                <button
                    class="play-song"
                    onclick='playSearchSong(${JSON.stringify(song)})'>
                    ▶
                </button>

                <button
                    onclick='favoriteSearchSong(${JSON.stringify(song)})'>
                    ❤️
                </button>

                <button
                    onclick='playlistSearchSong(${JSON.stringify(song)})'>
                    +
                </button>

            </div>

        `;

        container.appendChild(card);

    });

}


/* -----------------------------
   SEARCH SONG PLAY
----------------------------- */

function playSearchSong(song) {

    currentSong =
        song;

    currentSongs =
        [song];

    currentIndex =
        0;

    updatePlayer();

    document.getElementById("player")
        .classList.remove("hidden");

    openCurrentSong();
}


/* -----------------------------
   SEARCH FAVORITE
----------------------------- */

function favoriteSearchSong(song) {

    const exists =
        favorites.some(
            item =>
                item.title === song.title &&
                item.artist === song.artist
        );


    if (exists) {

        alert("Already in favorites.");

        return;
    }


    favorites.push(song);

    saveData();

    alert(
        `"${song.title}" added to favorites.`
    );
}


/* -----------------------------
   SEARCH PLAYLIST
----------------------------- */

function playlistSearchSong(song) {

    songWaitingForPlaylist =
        song;

    openPlaylistModal();
}


/* -----------------------------
   START
----------------------------- */

showHome();