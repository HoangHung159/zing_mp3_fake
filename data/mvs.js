
var listMV = [
    {
        name: "Một Bước Yêu Vạn Dặm Đau",
        author: ["Mr. Siro"],
        time: "11:54",
        authorAvatar: "./assets/img/mvArtists/artist1.jpg",
        image: "./assets/img/MVs/mv1.jpg"
    },
    {
        name: "Simple Love",
        author: ["Obito", "Seachains", "Davis"],
        time: "03:54",
        authorAvatar: "./assets/img/mvArtists/artist2.jpg",
        image: "./assets/img/MVs/mv2.jpg"
    },
    {
        name: "Lời Yêu Ngây Dại",
        author: ["Kha"],
        time: "04:33",
        authorAvatar: "./assets/img/mvArtists/artist3.jpg",
        image: "./assets/img/MVs/mv3.jpg"
    },
    {
        name: "24H",
        author: ["LyLy", "Magazine"],
        time: "04:18",
        authorAvatar: "./assets/img/mvArtists/artist4.jpg",
        image: "./assets/img/MVs/mv4.jpg"
    },
    {
        name: "Nước Mắt Em Lau Bằng Tình Yêu Mới",
        author: ["Da LAB", "Tóc Tiên"],
        time: "05:45",
        authorAvatar: "./assets/img/mvArtists/artist5.jpg",
        image: "./assets/img/MVs/mv5.jpg"
    },

    {
        name: "Yêu Đơn Phương",
        author: ["OnlyC", "Karik"],
        time: "05:02",
        authorAvatar: "./assets/img/mvArtists/artist6.jpg",
        image: "./assets/img/MVs/mv6.jpg"
    },
    {
        name: "Phía Sau Em",
        author: ["Kay Trần", "Binz"],
        time: "04:06",
        authorAvatar: "./assets/img/mvArtists/artist7.jpg",
        image: "./assets/img/MVs/mv7.jpg"
    },
    {
        name: "Mình Yêu nhau đi",
        author: ["Bích Phương"],
        time: "03:52",
        authorAvatar: "./assets/img/mvArtists/artist8.jpg",
        image: "./assets/img/MVs/mv8.jpg"
    },
];

const MV_STORAGE_KEY = 'VIK_MV';

localStorage.setItem(MV_STORAGE_KEY, JSON.stringify(listMV));
