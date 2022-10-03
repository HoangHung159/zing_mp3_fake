var listEvent = [
    {
        name: "Sinh Nhật Sao x B Ray",
        time: "00:00 Thứ Hai, 11 tháng 10",
        fans: [
            "./assets/img/tabExplore/events/fans/fan1.jpg",
            "./assets/img/tabExplore/events/fans/fan1.jpg",
            "./assets/img/tabExplore/events/fans/fan1.jpg",
            "./assets/img/tabExplore/events/fans/fan1.jpg",
            "./assets/img/tabExplore/events/fans/fan1.jpg",
        ],
        fanAmount: "1K",
        image: "./assets/img/tabExplore/events/event1.jpg",
        action: "Mở RADIO"
    },
    {
        name: "Sinh Nhật Sao x ERIK",
        time: "00:00 Thứ Tư, 13 tháng 10",
        fans: [
            "./assets/img/tabExplore/events/fans/fan1.jpg",
            "./assets/img/tabExplore/events/fans/fan1.jpg",
            "./assets/img/tabExplore/events/fans/fan1.jpg",
            "./assets/img/tabExplore/events/fans/fan1.jpg",
            "./assets/img/tabExplore/events/fans/fan1.jpg",
        ],
        fanAmount: "330",
        image: "./assets/img/tabExplore/events/event2.jpg",
        action: "Chúc Mừng"
    },
    {
        name: "Sinh Nhật Sao x Đông Nhi",
        time: "00:00 Thứ Tư, 13 tháng 10",
        fans: [
            "./assets/img/tabExplore/events/fans/fan1.jpg",
            "./assets/img/tabExplore/events/fans/fan1.jpg",
            "./assets/img/tabExplore/events/fans/fan1.jpg",
            "./assets/img/tabExplore/events/fans/fan1.jpg",
            "./assets/img/tabExplore/events/fans/fan1.jpg",
            "./assets/img/tabExplore/events/fans/fan1.jpg",
        ],
        fanAmount: "361",
        image: "./assets/img/tabExplore/events/event3.jpg",
        action: "Chúc Mừng"
    },
];

const EVENT_STORAGE_KEY = 'VIK_EVENT';

localStorage.setItem(EVENT_STORAGE_KEY, JSON.stringify(listEvent));
