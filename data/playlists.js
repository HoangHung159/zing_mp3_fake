var listPlaylist = [
    {
        name: "List Nhạc Youtube Của Hùng",
        creator: "Youtube",
        image: "./assets/img/playlists/playlist1.jpg"
    },
    {
        name: "Nhạc Tình Yêu",
        creator: "Love",
        image: "./assets/img/playlists/playlist2.jpg"
    },
    {
        name: "Nhạc Youtube",
        creator: "More and More",
        image: "./assets/img/playlists/playlist3.jpg"
    },
    {
        name: "Nhạc China",
        creator: "China",
        image: "./assets/img/playlists/playlist4.jpg"
    },
    {
        name: "Top 100 Bài Hát Nhạc Trẻ Hay Nhất",
        creator: "Zing MP3",
        image: "./assets/img/playlists/playlist5.jpg"
    },
    {
        name: "Những bản nhạc Dance hay nhất",
        creator: "Đạt Tấn",
        image: "./assets/img/playlists/playlist6.jpg"
    },
];

const PLAYLIST_STORAGE_KEY = 'VIK_PLAYLIST';

localStorage.setItem(PLAYLIST_STORAGE_KEY, JSON.stringify(listPlaylist));
