
var listPost = [
    [
        {
            name: "Jang Mi",
            time:"14 tháng 10 lúc 11:07",
            content: "Hoa Nào Không Phai (Cover by JangMi)",
            authorAvatar: "./assets/img/tabFollowing/storys/avatars/artist1.jpg",
            image: "./assets/img/tabFollowing/storys/posts/artist1.jpg"
        },
        {
            name: "BlackBi",
            time:"14 tháng 10 lúc 00:40",
            content: "CÁC EM ĐỪNG DIỄN TRƯỚC MẶT CHỊ NỮA - Chị chỉ vui đùa các em giải trí thôi =))",
            authorAvatar: "./assets/img/tabFollowing/storys/avatars/artist2.jpg",
            image: "./assets/img/tabFollowing/storys/posts/artist2.jpg"
        },
        {
            name: "Yến Tatoo",
            time:"14 tháng 10 lúc 00:37",
            content: "Nhìn như này ai biết đanh đá đâu",
            authorAvatar: "./assets/img/tabFollowing/storys/avatars/artist3.jpg",
            image: "./assets/img/tabFollowing/storys/posts/artist3.jpg"
        },
        {
            name: "Quang Hùng MasterD",
            time:"14 tháng 10 lúc 00:36",
            content: "😚",
            authorAvatar: "./assets/img/tabFollowing/storys/avatars/artist4.jpg",
            image: "./assets/img/tabFollowing/storys/posts/artist4.jpg"
        },
        {
            name: "Chi Pu",
            time:"14 tháng 10 lúc 00:36",
            content: "Sự thật thì luôn luôn đơn giản nhưng people make it complicated, nên là mình cứ enjoy cái moment này",
            authorAvatar: "./assets/img/tabFollowing/storys/avatars/artist5.jpg",
            image: "./assets/img/tabFollowing/storys/posts/artist5.jpg"
        },
    ],
    [
        {
            name: "Sơn Tùng M-TP",
            time:"14 tháng 10 lúc 00:33",
            content: "Anh đoán tên em là Google. </br>Bởi vì em có mọi thứ mà anh đang tìm kiếm ❤️",
            authorAvatar: "./assets/img/tabFollowing/storys/avatars/artist7.jpg",
            image: "./assets/img/tabFollowing/storys/posts/artist7.jpg"
        },
        {
            name: "JayKii",
            time:"14 tháng 10 lúc 00:31",
            content: "Lưới trời lồng lộng </br>Chạy đâu cho thoát 😎",
            authorAvatar: "./assets/img/tabFollowing/storys/avatars/artist8.jpg",
            image: "./assets/img/tabFollowing/storys/posts/artist8.jpg"
        },
        {
            name: "Ninh Dương Lan Ngọc",
            time:"14 tháng 10 lúc 14:36",
            content: "Ở nhà có photo Rio chụp dì sửa mệt nghỉ luôn 🤣🤣🤣 chỉnh qài ko đẹp được luôn. Xin nhờ 500 anh em chỉnh dùm Ngọc tấm hình này sao mà coa thể đẹp đươc nhỉ",
            authorAvatar: "./assets/img/tabFollowing/storys/avatars/artist9.jpg",
            image: "./assets/img/tabFollowing/storys/posts/artist9.jpg"
        },
        {
            name: "Bích Phương",
            time:"14 tháng 10 lúc 14:35",
            content: "Tối nay lại liu riu 1 tí nhé 😘",
            authorAvatar: "./assets/img/tabFollowing/storys/avatars/artist10.jpg",
            image: "./assets/img/tabFollowing/storys/posts/artist10.jpg"
        },
    ]
];

const POST_STORAGE_KEY = 'VIK_POST';

localStorage.setItem(POST_STORAGE_KEY, JSON.stringify(listPost));
