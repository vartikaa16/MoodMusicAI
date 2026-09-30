/* =====================================================
   MOODTUNE
   Mood Based Music Recommendation System
   ===================================================== */


/* =====================================================
   MUSIC DATABASE

   Each mood contains:
   10 Hindi songs
   10 English songs
   ===================================================== */

const music = {

    Happy: {

        Hindi: [

            ["Ilahi", "Arijit Singh"],
            ["Love You Zindagi", "Amit Trivedi"],
            ["Badtameez Dil", "Benny Dayal"],
            ["Gallan Goodiyaan", "Yashita Sharma, Manish Kumar Tipu & others"],
            ["London Thumakda", "Labh Janjua, Sonu Kakkar & Neha Kakkar"],
            ["Ainvayi Ainvayi", "Salim Merchant & Sunidhi Chauhan"],
            ["Senorita", "Farhan Akhtar, Hrithik Roshan & Abhay Deol"],
            ["Ude Dil Befikre", "Benny Dayal"],
            ["Khaabon Ke Parinday", "Mohit Chauhan & Alyssa Mendonsa"],
            ["Patakha Guddi", "Nooran Sisters"]

        ],

        English: [

            ["Happy", "Pharrell Williams"],
            ["Uptown Funk", "Mark Ronson ft. Bruno Mars"],
            ["Can't Stop the Feeling!", "Justin Timberlake"],
            ["Shake It Off", "Taylor Swift"],
            ["On Top of the World", "Imagine Dragons"],
            ["Good Time", "Owl City & Carly Rae Jepsen"],
            ["Best Day of My Life", "American Authors"],
            ["Walking on Sunshine", "Katrina and the Waves"],
            ["Dynamite", "Taio Cruz"],
            ["Firework", "Katy Perry"]

        ]

    },


    Sad: {

        Hindi: [

            ["Channa Mereya", "Arijit Singh"],
            ["Agar Tum Saath Ho", "Alka Yagnik & Arijit Singh"],
            ["Hamari Adhuri Kahani", "Arijit Singh"],
            ["Tujhe Kitna Chahne Lage", "Arijit Singh"],
            ["Phir Bhi Tumko Chaahunga", "Arijit Singh & Shashaa Tirupati"],
            ["Ae Dil Hai Mushkil", "Arijit Singh"],
            ["Bhula Dena", "Mustafa Zahid"],
            ["Sach Keh Raha Hai Deewana", "KK"],
            ["Tune Jo Na Kaha", "Mohit Chauhan"],
            ["Mann Bharryaa 2.0", "B Praak"]

        ],

        English: [

            ["Lovely", "Billie Eilish & Khalid"],
            ["Someone Like You", "Adele"],
            ["The Night We Met", "Lord Huron"],
            ["Let Her Go", "Passenger"],
            ["Arcade", "Duncan Laurence"],
            ["When I Was Your Man", "Bruno Mars"],
            ["Another Love", "Tom Odell"],
            ["Dancing With Your Ghost", "Sasha Alex Sloan"],
            ["Before You Go", "Lewis Capaldi"],
            ["All I Want", "Kodaline"]

        ]

    },


    Calm: {

        Hindi: [

            ["Iktara", "Kavita Seth"],
            ["Kun Faya Kun", "A.R. Rahman, Javed Ali & Mohit Chauhan"],
            ["Shaam", "Amit Trivedi & Nikhil D'Souza"],
            ["Aaj Jaane Ki Zid Na Karo", "Farida Khanum"],
            ["Kho Gaye Hum Kahan", "Jasleen Royal & Prateek Kuhad"],
            ["Phir Le Aaya Dil", "Arijit Singh"],
            ["Aahista", "Arijit Singh & Jonita Gandhi"],
            ["Kabira", "Tochi Raina & Rekha Bhardwaj"],
            ["Saibo", "Shreya Ghoshal & Tochi Raina"],
            ["Tu Bin Bataye", "Madhushree & Naresh Iyer"]

        ],

        English: [

            ["Perfect", "Ed Sheeran"],
            ["Photograph", "Ed Sheeran"],
            ["Dandelions", "Ruth B."],
            ["Golden Hour", "JVKE"],
            ["Ocean Eyes", "Billie Eilish"],
            ["Until I Found You", "Stephen Sanchez"],
            ["Yellow", "Coldplay"],
            ["A Thousand Years", "Christina Perri"],
            ["Lovely", "Billie Eilish & Khalid"],
            ["All of Me", "John Legend"]

        ]

    },


    Energetic: {

        Hindi: [

            ["Malhari", "Vishal Dadlani"],
            ["Zinda", "Siddharth Mahadevan"],
            ["Jai Jai Shivshankar", "Vishal Dadlani & Benny Dayal"],
            ["Apna Time Aayega", "Ranveer Singh"],
            ["Sultan Title Track", "Sukhwinder Singh & Shadab Faridi"],
            ["Brothers Anthem", "Ajay-Atul"],
            ["Kar Har Maidaan Fateh", "Sukhwinder Singh & Shreya Ghoshal"],
            ["Chak De India", "Sukhwinder Singh"],
            ["Dhan Te Nan", "Sukhwinder Singh & Vishal Dadlani"],
            ["Aarambh Hai Prachand", "Piyush Mishra"]

        ],

        English: [

            ["Believer", "Imagine Dragons"],
            ["Thunder", "Imagine Dragons"],
            ["Whatever It Takes", "Imagine Dragons"],
            ["Don't Start Now", "Dua Lipa"],
            ["Levitating", "Dua Lipa"],
            ["Titanium", "David Guetta ft. Sia"],
            ["Eye of the Tiger", "Survivor"],
            ["Counting Stars", "OneRepublic"],
            ["Centuries", "Fall Out Boy"],
            ["The Nights", "Avicii"]

        ]

    },


    Romantic: {

        Hindi: [

            ["Tum Se Hi", "Mohit Chauhan"],
            ["Raabta", "Arijit Singh"],
            ["Hawayein", "Arijit Singh"],
            ["Apna Bana Le", "Arijit Singh"],
            ["Tum Kya Mile", "Arijit Singh & Shreya Ghoshal"],
            ["Tera Ban Jaunga", "Akhil Sachdeva & Tulsi Kumar"],
            ["Pehli Dafa", "Atif Aslam"],
            ["Tera Hone Laga Hoon", "Atif Aslam & Alisha Chinai"],
            ["Mast Magan", "Arijit Singh & Chinmayi"],
            ["Nazm Nazm", "Arko"]

        ],

        English: [

            ["Perfect", "Ed Sheeran"],
            ["All of Me", "John Legend"],
            ["A Thousand Years", "Christina Perri"],
            ["Love Story", "Taylor Swift"],
            ["Until I Found You", "Stephen Sanchez"],
            ["Photograph", "Ed Sheeran"],
            ["Just the Way You Are", "Bruno Mars"],
            ["Adore You", "Harry Styles"],
            ["Lover", "Taylor Swift"],
            ["Say You Won't Let Go", "James Arthur"]

        ]

    },


    Focus: {

        Hindi: [

            ["Zinda", "Siddharth Mahadevan"],
            ["Lakshya", "Shankar Mahadevan"],
            ["Kar Har Maidaan Fateh", "Sukhwinder Singh & Shreya Ghoshal"],
            ["Aashayein", "KK & Salim Merchant"],
            ["Roobaroo", "A.R. Rahman & Naresh Iyer"],
            ["Aarambh Hai Prachand", "Piyush Mishra"],
            ["Besabriyaan", "Armaan Malik"],
            ["Parwah Nahin", "Siddharth Basrur"],
            ["Sultan Title Track", "Sukhwinder Singh & Shadab Faridi"],
            ["Chak De India", "Sukhwinder Singh"]

        ],

        English: [

            ["Believer", "Imagine Dragons"],
            ["Whatever It Takes", "Imagine Dragons"],
            ["Hall of Fame", "The Script ft. will.i.am"],
            ["Unstoppable", "Sia"],
            ["Rise", "The Glitch Mob"],
            ["The Climb", "Miley Cyrus"],
            ["Fight Song", "Rachel Platten"],
            ["Stronger", "Kelly Clarkson"],
            ["Lose Yourself", "Eminem"],
            ["On Top of the World", "Imagine Dragons"]

        ]

    },


    Chill: {

        Hindi: [

            ["Kasoor", "Prateek Kuhad"],
            ["cold/mess", "Prateek Kuhad"],
            ["Kho Gaye Hum Kahan", "Jasleen Royal & Prateek Kuhad"],
            ["Iktara", "Kavita Seth"],
            ["Shaam", "Amit Trivedi & Nikhil D'Souza"],
            ["Aaj Jaane Ki Zid Na Karo", "Farida Khanum"],
            ["Khaabon Ke Parinday", "Mohit Chauhan & Alyssa Mendonsa"],
            ["Phir Le Aaya Dil", "Arijit Singh"],
            ["Alag Aasmaan", "Anuv Jain"],
            ["Baarishein", "Anuv Jain"]

        ],

        English: [

            ["Sunflower", "Post Malone & Swae Lee"],
            ["Golden Hour", "JVKE"],
            ["Ocean Eyes", "Billie Eilish"],
            ["Lovely", "Billie Eilish & Khalid"],
            ["Until I Found You", "Stephen Sanchez"],
            ["Yellow", "Coldplay"],
            ["Sweater Weather", "The Neighbourhood"],
            ["As It Was", "Harry Styles"],
            ["Daylight", "David Kushner"],
            ["Line Without a Hook", "Ricky Montgomery"]

        ]

    },


    Party: {

        Hindi: [

            ["Kala Chashma", "Amar Arshi, Badshah & Neha Kakkar"],
            ["Nashe Si Chadh Gayi", "Arijit Singh"],
            ["Badtameez Dil", "Benny Dayal"],
            ["Gallan Goodiyaan", "Yashita Sharma, Manish Kumar Tipu & others"],
            ["London Thumakda", "Labh Janjua, Sonu Kakkar & Neha Kakkar"],
            ["Abhi Toh Party Shuru Hui Hai", "Aastha Gill"],
            ["Kar Gayi Chull", "Badshah, Fazilpuria, Sukriti Kakar & Neha Kakkar"],
            ["The Breakup Song", "Arijit Singh, Badshah, Jonita Gandhi & Nakash Aziz"],
            ["Aankh Marey", "Neha Kakkar, Mika Singh & Kumar Sanu"],
            ["Saturday Saturday", "Shaarib-Toshi, Badshah & others"]

        ],

        English: [

            ["Uptown Funk", "Mark Ronson ft. Bruno Mars"],
            ["Party Rock Anthem", "LMFAO"],
            ["Dance Monkey", "Tones and I"],
            ["Levitating", "Dua Lipa"],
            ["Don't Start Now", "Dua Lipa"],
            ["Dynamite", "Taio Cruz"],
            ["I Gotta Feeling", "The Black Eyed Peas"],
            ["Shake It Off", "Taylor Swift"],
            ["Tik Tok", "Kesha"],
            ["On The Floor", "Jennifer Lopez ft. Pitbull"]

        ]

    }

};


/* =====================================================
   VARIABLES
   ===================================================== */

let selectedMood = null;
let selectedLanguage = null;

let currentSongs = [];
let currentIndex = -1;
let currentSong = null;

let favorites = JSON.parse(
    localStorage.getItem("moodtuneFavorites") || "[]"
);

let playlists = JSON.parse(
    localStorage.getItem("moodtunePlaylists") || "{}"
);

let songForPlaylist = null;


/* =====================================================
   SELECT MOOD
   ===================================================== */

function selectMood(mood, button) {

    selectedMood = mood;

    document.querySelectorAll(".mood-btn").forEach(btn => {
        btn.classList.remove("selected");
    });

    button.classList.add("selected");

    document.getElementById("languageSection")
        .classList.remove("hidden");

    document.getElementById("recommendationSection")
        .classList.add("hidden");

    document.querySelectorAll(".category-btn").forEach(btn => {
        btn.classList.remove("selected");
    });

    document.getElementById("languageSection")
        .scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
}


/* =====================================================
   SELECT LANGUAGE
   ===================================================== */

function selectLanguage(language, button) {

    selectedLanguage = language;

    document.querySelectorAll(".category-btn").forEach(btn => {
        btn.classList.remove("selected");
    });

    button.classList.add("selected");

    showRecommendations();
}


/* =====================================================
   SHOW RECOMMENDATIONS
   ===================================================== */

function showRecommendations() {

    /*
       STRICT FILTERING:

       If Hindi is selected:
       only music.Happy.Hindi etc.

       If English is selected:
       only music.Happy.English etc.
    */

    const songArray =
        music[selectedMood][selectedLanguage];

    currentSongs = songArray.map(song => {

        return {
            title: song[0],
            artist: song[1],
            language: selectedLanguage,
            search: song[0] + " " + song[1]
        };

    });

    currentIndex = -1;

    document.getElementById("recommendationSection")
        .classList.remove("hidden");

    document.getElementById("recommendationTitle")
        .textContent =
        `${selectedMood} • ${selectedLanguage} 🎶`;

    displaySongs(currentSongs);

    document.getElementById("recommendationSection")
        .scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
}


/* =====================================================
   DISPLAY SONGS
   ===================================================== */

function displaySongs(songs) {

    const container =
        document.getElementById("songList");

    container.innerHTML = "";


    songs.forEach((song, index) => {

        const isFavorite =
            favorites.some(
                fav => fav.title === song.title
            );


        const card =
            document.createElement("div");

        card.className = "song-card";


        card.innerHTML = `

            <div class="song-number">
                ${index + 1}
            </div>

            <div class="song-info">

                <h3>${song.title}</h3>

                <p>${song.artist}</p>

                <div class="song-tags">

                    <span class="song-tag">
                        ${song.language}
                    </span>

                </div>

            </div>


            <div class="song-actions">

                <button onclick="playSong(${index})">
                    ▶
                </button>

                <button
                    class="favorite ${isFavorite ? "active" : ""}"
                    onclick="toggleFavorite('${escapeQuotes(song.title)}')"
                >
                    ${isFavorite ? "❤️" : "♡"}
                </button>

                <button
                    onclick="openPlaylistModal('${escapeQuotes(song.title)}')"
                >
                    ➕
                </button>

            </div>

        `;

        container.appendChild(card);

    });

}


/* =====================================================
   PLAY SONG
   ===================================================== */

function playSong(index) {

    if (!currentSongs[index]) {
        return;
    }

    currentIndex = index;

    currentSong = currentSongs[index];

    document.getElementById("currentTitle")
        .textContent = currentSong.title;

    document.getElementById("currentArtist")
        .textContent = currentSong.artist;

    openCurrentSong();
}


/* =====================================================
   OPEN YOUTUBE
   ===================================================== */

function openCurrentSong() {

    if (!currentSong) {

        alert(
            "Please select a mood and language first."
        );

        return;
    }

    const url =
        "https://www.youtube.com/results?search_query=" +
        encodeURIComponent(currentSong.search);

    window.open(url, "_blank");
}


/* =====================================================
   PLAYER
   ===================================================== */

function playCurrentSong() {

    if (currentSong) {

        openCurrentSong();

    }
    else if (currentSongs.length > 0) {

        playSong(0);

    }
    else {

        alert(
            "Please select a mood and language first."
        );

    }
}


function nextSong() {

    if (currentSongs.length === 0) {
        return;
    }

    currentIndex++;

    if (currentIndex >= currentSongs.length) {
        currentIndex = 0;
    }

    playSong(currentIndex);
}


function previousSong() {

    if (currentSongs.length === 0) {
        return;
    }

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex =
            currentSongs.length - 1;
    }

    playSong(currentIndex);
}


/* =====================================================
   FAVORITES
   ===================================================== */

function toggleFavorite(title) {

    const song =
        findSong(title);

    if (!song) {
        return;
    }


    const index =
        favorites.findIndex(
            fav => fav.title === title
        );


    if (index !== -1) {

        favorites.splice(index, 1);

    }
    else {

        favorites.push(song);

    }


    localStorage.setItem(
        "moodtuneFavorites",
        JSON.stringify(favorites)
    );


    if (selectedMood && selectedLanguage) {
        showRecommendations();
    }

}


/* =====================================================
   FIND SONG
   ===================================================== */

function findSong(title) {

    for (const mood in music) {

        for (const language in music[mood]) {

            const found =
                music[mood][language].find(
                    song => song[0] === title
                );

            if (found) {

                return {
                    title: found[0],
                    artist: found[1],
                    language: language,
                    search: found[0] + " " + found[1]
                };

            }

        }

    }

    return null;
}


/* =====================================================
   FAVORITES PAGE
   ===================================================== */

function showFavorites() {

    hideAllSections();

    document.getElementById("favoritesSection")
        .classList.remove("hidden");

    const container =
        document.getElementById("favoritesList");

    container.innerHTML = "";


    if (favorites.length === 0) {

        container.innerHTML = `
            <div class="song-card">

                <div class="song-info">

                    <h3>
                        No favorite songs yet ❤️
                    </h3>

                    <p>
                        Tap the heart button on a song
                        to add it here.
                    </p>

                </div>

            </div>
        `;

        return;
    }


    favorites.forEach((song, index) => {

        const card =
            document.createElement("div");

        card.className = "song-card";


        card.innerHTML = `

            <div class="song-number">
                ${index + 1}
            </div>

            <div class="song-info">

                <h3>${song.title}</h3>

                <p>${song.artist}</p>

                <div class="song-tags">

                    <span class="song-tag">
                        ${song.language}
                    </span>

                </div>

            </div>


            <div class="song-actions">

                <button
                    onclick="playFavorite('${escapeQuotes(song.title)}')">
                    ▶
                </button>

                <button
                    class="favorite active"
                    onclick="toggleFavorite('${escapeQuotes(song.title)}')">
                    ❤️
                </button>

                <button
                    onclick="openPlaylistModal('${escapeQuotes(song.title)}')">
                    ➕
                </button>

            </div>

        `;

        container.appendChild(card);

    });

}


function playFavorite(title) {

    const song =
        findSong(title);

    if (!song) {
        return;
    }

    currentSong = song;

    document.getElementById("currentTitle")
        .textContent = song.title;

    document.getElementById("currentArtist")
        .textContent = song.artist;

    openCurrentSong();
}


/* =====================================================
   PLAYLISTS
   ===================================================== */

function createPlaylist() {

    const input =
        document.getElementById("playlistName");

    const name =
        input.value.trim();


    if (!name) {

        alert(
            "Please enter a playlist name."
        );

        return;
    }


    if (playlists[name]) {

        alert(
            "A playlist with this name already exists."
        );

        return;
    }


    playlists[name] = [];

    savePlaylists();

    input.value = "";

    showPlaylists();
}


function showPlaylists() {

    hideAllSections();

    document.getElementById("playlistsSection")
        .classList.remove("hidden");

    const container =
        document.getElementById("playlistsList");

    container.innerHTML = "";


    const names =
        Object.keys(playlists);


    if (names.length === 0) {

        container.innerHTML = `
            <div class="song-card">

                <div class="song-info">

                    <h3>
                        No playlists yet 🎵
                    </h3>

                    <p>
                        Create your first playlist above.
                    </p>

                </div>

            </div>
        `;

        return;
    }


    names.forEach(name => {

        const card =
            document.createElement("div");

        card.className =
            "playlist-card";


        let songsHTML = "";


        if (playlists[name].length === 0) {

            songsHTML = `
                <p style="color:#777;">
                    This playlist is empty.
                </p>
            `;

        }
        else {

            playlists[name].forEach(song => {

                songsHTML += `

                    <div class="playlist-song">

                        <div>

                            <strong>
                                ${song.title}
                            </strong>

                            <br>

                            <small>
                                ${song.artist}
                            </small>

                        </div>

                        <div class="song-actions">

                            <button
                                onclick="playFavorite('${escapeQuotes(song.title)}')">
                                ▶
                            </button>

                            <button
                                onclick="removeFromPlaylist('${escapeQuotes(name)}','${escapeQuotes(song.title)}')">
                                ✕
                            </button>

                        </div>

                    </div>

                `;

            });

        }


        card.innerHTML = `

            <div class="playlist-card-header">

                <h3>
                    🎵 ${name}
                </h3>

                <button
                    class="delete-playlist"
                    onclick="deletePlaylist('${escapeQuotes(name)}')">
                    🗑️ Delete
                </button>

            </div>

            ${songsHTML}

        `;


        container.appendChild(card);

    });

}


function openPlaylistModal(title) {

    songForPlaylist =
        findSong(title);


    if (!songForPlaylist) {
        return;
    }


    const modal =
        document.getElementById("playlistModal");

    const choices =
        document.getElementById("playlistChoices");

    choices.innerHTML = "";


    const names =
        Object.keys(playlists);


    if (names.length === 0) {

        choices.innerHTML = `
            <p>
                Create a playlist first.
            </p>
        `;

    }
    else {

        names.forEach(name => {

            const button =
                document.createElement("button");

            button.className =
                "playlist-choice";

            button.textContent =
                "🎵 " + name;

            button.onclick =
                function () {

                    addToPlaylist(name);

                };


            choices.appendChild(button);

        });

    }


    modal.classList.remove("hidden");
}


function closePlaylistModal() {

    document.getElementById("playlistModal")
        .classList.add("hidden");

    songForPlaylist = null;
}


function addToPlaylist(name) {

    if (!songForPlaylist) {
        return;
    }


    const exists =
        playlists[name].some(
            song =>
                song.title ===
                songForPlaylist.title
        );


    if (exists) {

        alert(
            "This song is already in the playlist."
        );

        return;
    }


    playlists[name].push(
        songForPlaylist
    );

    savePlaylists();

    closePlaylistModal();

    alert(
        `"${songForPlaylist.title}" added to ${name}!`
    );

}


function removeFromPlaylist(name, title) {

    if (!playlists[name]) {
        return;
    }


    playlists[name] =
        playlists[name].filter(
            song =>
                song.title !== title
        );


    savePlaylists();

    showPlaylists();
}


function deletePlaylist(name) {

    if (!confirm(
        `Delete playlist "${name}"?`
    )) {
        return;
    }


    delete playlists[name];

    savePlaylists();

    showPlaylists();
}


function savePlaylists() {

    localStorage.setItem(
        "moodtunePlaylists",
        JSON.stringify(playlists)
    );

}


/* =====================================================
   SEARCH
   ===================================================== */

function searchSongs() {

    const query =
        document.getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();

    const results =
        document.getElementById("searchResults");

    results.innerHTML = "";


    if (!query) {
        return;
    }


    const matches = [];


    for (const mood in music) {

        for (const language in music[mood]) {

            music[mood][language].forEach(song => {

                if (
                    song[0].toLowerCase()
                        .includes(query) ||

                    song[1].toLowerCase()
                        .includes(query)
                ) {

                    const alreadyAdded =
                        matches.some(
                            item =>
                                item.title === song[0]
                        );


                    if (!alreadyAdded) {

                        matches.push({

                            title: song[0],
                            artist: song[1],
                            language: language,
                            search:
                                song[0] +
                                " " +
                                song[1]

                        });

                    }

                }

            });

        }

    }


    if (matches.length === 0) {

        results.innerHTML = `
            <div class="song-card">

                <div class="song-info">

                    <h3>
                        No matching songs found.
                    </h3>

                </div>

            </div>
        `;

        return;
    }


    matches.forEach((song, index) => {

        const card =
            document.createElement("div");

        card.className =
            "song-card";


        card.innerHTML = `

            <div class="song-number">
                ${index + 1}
            </div>

            <div class="song-info">

                <h3>${song.title}</h3>

                <p>${song.artist}</p>

                <div class="song-tags">

                    <span class="song-tag">
                        ${song.language}
                    </span>

                </div>

            </div>


            <div class="song-actions">

                <button
                    onclick="playSearchSong('${escapeQuotes(song.title)}')">
                    ▶
                </button>

                <button
                    class="favorite"
                    onclick="toggleFavorite('${escapeQuotes(song.title)}')">
                    ♡
                </button>

            </div>

        `;


        results.appendChild(card);

    });

}


function playSearchSong(title) {

    const song =
        findSong(title);

    if (!song) {
        return;
    }

    currentSong = song;

    document.getElementById("currentTitle")
        .textContent = song.title;

    document.getElementById("currentArtist")
        .textContent = song.artist;

    openCurrentSong();
}


/* =====================================================
   NAVIGATION
   ===================================================== */

function showHome() {

    hideAllSections();

    document.getElementById("homeSection")
        .classList.remove("hidden");
}


function showAbout() {

    hideAllSections();

    document.getElementById("aboutSection")
        .classList.remove("hidden");
}


function hideAllSections() {

    document.getElementById("homeSection")
        .classList.add("hidden");

    document.getElementById("favoritesSection")
        .classList.add("hidden");

    document.getElementById("playlistsSection")
        .classList.add("hidden");

    document.getElementById("aboutSection")
        .classList.add("hidden");
}


function resetSelection() {

    selectedMood = null;
    selectedLanguage = null;

    currentSongs = [];
    currentIndex = -1;

    document.querySelectorAll(".mood-btn")
        .forEach(btn =>
            btn.classList.remove("selected")
        );

    document.querySelectorAll(".category-btn")
        .forEach(btn =>
            btn.classList.remove("selected")
        );

    document.getElementById("languageSection")
        .classList.add("hidden");

    document.getElementById("recommendationSection")
        .classList.add("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =====================================================
   ESCAPE QUOTES
   ===================================================== */

function escapeQuotes(text) {

    return text
        .replace(/\\/g, "\\\\")
        .replace(/'/g, "\\'")
        .replace(/"/g, '\\"');

}


/* =====================================================
   START
   ===================================================== */

showHome();