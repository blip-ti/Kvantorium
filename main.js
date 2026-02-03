// Full Schedule Data extracted from images and text
const scheduleData = [
    {
        subject: "Граф.диз. Figma",
        teacher: "Курбанова А.А.",
        room: "D106",
        days: {
            "Monday": [
                { time: "12:25 - 13:55", group: "6п 2гр" },
                { time: "14:10 - 15:40", group: "Карточки 1гр" }
            ],
            "Tuesday": [
                { time: "13:15 - 14:45", group: "Карточки 1гр" },
                { time: "14:45 - 16:15", group: "Карточки 2гр" }
            ],
            "Wednesday": [
                { time: "12:25 - 13:55", group: "7п 1-2гр" },
                { time: "14:10 - 15:10", group: "Карточки 2гр" }
            ],
            "Thursday": [
                { time: "14:00 - 15:30", group: "8г 1гр" },
                { time: "15:40 - 17:00", group: "8е 1гр" }
            ],
            "Friday": [
                { time: "11:30 - 13:05", group: "6п 1гр." },
                { time: "13:15 - 14:45", group: "7п 1-2гр." }
            ],
            "Saturday": [
                { time: "11:30 - 13:00", group: "Проектная деятельность" }
            ]
        }
    },
    {
        subject: "Робоначалка",
        teacher: "Шефриева Д.И.",
        room: "D107",
        days: {
            "Monday": [
                { time: "12:25 - 13:55", group: "4в 1гр" },
                { time: "14:10 - 15:40", group: "Набор" }
            ],
            "Tuesday": [
                { time: "13:15 - 14:45", group: "4д 1гр" },
                { time: "14:10 - 15:40", group: "Набор" }
            ],
            "Wednesday": [
                { time: "13:15 - 14:45", group: "Набор" }
            ],
            "Thursday": [
                { time: "13:15 - 14:45", group: "2а 1гр" },
                { time: "14:10 - 15:40", group: "Набор" }
            ],
            "Friday": [
                { time: "11:30 - 13:05", group: "4е 1гр." },
                { time: "13:15 - 14:45", group: "Набор" }
            ]
        }
    },
    {
        subject: "Оператор ЭВМ",
        teacher: "Магомедова М.А.",
        room: "D106",
        days: {
            "Monday": [
                { time: "12:25 - 13:55", group: "4в 2гр 3гр" },
                { time: "14:10 - 15:40", group: "Набор" }
            ],
            "Tuesday": [
                { time: "13:15 - 14:45", group: "4д 2гр 3гр" }
            ],
            "Thursday": [
                { time: "12:25 - 13:55", group: "2а 2гр" }
            ],
            "Friday": [
                { time: "11:10 - 13:05", group: "4е 2гр.3гр." }
            ]
        }
    },
    {
        subject: "Медиа-класс",
        teacher: "Магомедова М.А.",
        room: "D106",
        days: {
            "Tuesday": [
                { time: "14:05 - 15:35", group: "6д 2гр" }
            ],
            "Wednesday": [
                { time: "14:10 - 15:40", group: "8а 1гр" }
            ],
            "Thursday": [
                { time: "14:10 - 15:40", group: "8а 2гр" }
            ],
            "Friday": [
                { time: "13:15 - 14:45", group: "6д 1гр." },
                { time: "14:45 - 16:15", group: "6д 2гр." }
            ]
        }
    },
    {
        subject: "РобоАрдуино",
        teacher: "Махмудов Б.Э.",
        room: "D107",
        days: {
            "Monday": [
                { time: "14:00 - 15:30", group: "6в 1гр" }
            ],
            "Tuesday": [
                { time: "14:10 - 15:40", group: "8ж 1гр" }
            ],
            "Wednesday": [
                { time: "12:25 - 13:55", group: "7п" }
            ],
            "Thursday": [
                { time: "14:10 - 15:40", group: "8д 2гр" }
            ],
            "Friday": [
                { time: "13:15 - 14:45", group: "7п" }
            ],
            "Saturday": [
                { time: "10:00 - 11:30", group: "Проект. деятель." },
                { time: "11:30 - 13:05", group: "Проект. деятель." }
            ]
        }
    },
    {
        subject: "WEB-дизайн",
        teacher: "Сиражудинова П.М.",
        room: "D106",
        days: {
            "Tuesday": [
                { time: "14:00 - 15:30", group: "8ж дев." }
            ],
            "Wednesday": [
                { time: "14:00 - 15:30", group: "9б дев." }
            ],
            "Thursday": [
                { time: "14:00 - 15:30", group: "8а" }
            ],
            "Friday": [
                { time: "14:00 - 15:30", group: "8 кл" }
            ],
            "Saturday": [
                { time: "10:00 - 11:30", group: "Проектная деятельность" }
            ]
        }
    },
    {
        subject: "Химия",
        teacher: "Османова М.М.",
        room: "D112",
        days: {
            "Monday": [
                { time: "14:05 - 14:45", group: "8в набор (М)" },
                { time: "14:45 - 15:30", group: "8в набор (М)" }
            ],
            "Tuesday": [
                { time: "14:10 - 15:40", group: "9в набор (М)" }
            ],
            "Wednesday": [
                { time: "14:05 - 14:50", group: "8в (М)" }
            ],
            "Friday": [
                { time: "13:15 - 14:45", group: "1 гр. (С)" },
                { time: "14:45 - 16:15", group: "2 гр. (С)" }
            ],
            "Saturday": [
                { time: "10:00 - 11:30", group: "Проектная деятельность (С.М.)" },
                { time: "11:30 - 13:00", group: "Проектная деятельность (М.М.)" }
            ]
        }
    },
    {
        subject: "Пром. робототехника",
        teacher: "Абдулаев Ш.М.",
        room: "D111",
        days: {
            "Tuesday": [
                { time: "14:00 - 15:30", group: "Набор 1 гр." }
            ],
            "Wednesday": [
                { time: "14:00 - 15:30", group: "7б" }
            ],
            "Thursday": [
                { time: "14:00 - 15:30", group: "6п" }
            ],
            "Friday": [
                { time: "14:00 - 15:30", group: "7б" }
            ],
            "Saturday": [
                { time: "10:00 - 11:30", group: "Проектная деятельность" }
            ]
        }
    },
    {
        subject: "Биология",
        teacher: "Алимурадова А.А.",
        room: "D105",
        days: {
            "Monday": [
                { time: "14:15 - 15:45", group: "6в 1гр" }
            ],
            "Tuesday": [
                { time: "14:15 - 15:45", group: "6в 2гр" }
            ],
            "Wednesday": [
                { time: "14:15 - 15:45", group: "7д 1гр" }
            ],
            "Thursday": [
                { time: "14:15 - 15:45", group: "7д 2гр" }
            ],
            "Saturday": [
                { time: "10:00 - 11:30", group: "Проектная деятельность" }
            ]
        }
    },
    {
        subject: "Python",
        teacher: "Мансуров Р.М.",
        room: "D111",
        days: {
            "Saturday": [
                { time: "09:00", group: "9д 1гр." },
                { time: "10:30", group: "9д 2гр." },
                { time: "12:00", group: "9в 1гр." },
                { time: "13:30", group: "9в 2гр." }
            ]
        }
    },
    {
        subject: "Game Dev",
        teacher: "Асваров М.А.",
        room: "D106",
        days: {
            "Thursday": [
                { time: "14:00 - 15:30", group: "10а 1гр" },
                { time: "15:30 - 17:00", group: "10а 2гр" }
            ]
        }
    },
    {
        subject: "VR",
        teacher: "Сефералиев Э.Ф.",
        room: "D111",
        days: {
            "Tuesday": [
                { time: "14:00 - 15:30", group: "Набор" },
                { time: "14:45 - 16:15", group: "Набор" }
            ],
            "Thursday": [
                { time: "13:15 - 14:45", group: "Набор" }
            ],
            "Friday": [
                { time: "11:30 - 13:05", group: "6п 2гр." }
            ],
            "Saturday": [
                { time: "10:00 - 11:30", group: "Проект. деятель. VR" },
                { time: "11:30 - 13:05", group: "Проект. деятель. VR" }
            ]
        }
    },
    {
        subject: "БПЛА",
        teacher: "Сефералиев Э.Ф.",
        room: "D111",
        days: {
            "Wednesday": [
                { time: "14:10 - 15:40", group: "3э" }
            ],
            "Friday": [
                { time: "15:00 - 16:00", group: "3 е" }
            ],
            "Saturday": [
                { time: "10:00 - 11:30", group: "Проект. деятель. БПЛА" },
                { time: "11:30 - 13:05", group: "Проект. деятель. БПЛА" }
            ]
        }
    },
    {
        subject: "Скретч",
        teacher: "Сефералиев Э.Ф.",
        room: "D111",
        days: {
            "Monday": [
                { time: "12:25 - 13:55", group: "6п 1гр" }
            ],
            "Wednesday": [
                { time: "12:25 - 13:55", group: "5п 1гр" }
            ],
            "Friday": [
                { time: "11:30 - 13:05", group: "5п 2гр." },
                { time: "13:15 - 14:45", group: "Набор Имана" }
            ]
        }
    },
    {
        subject: "Оператор ЭВМ (Эфендиев)",
        teacher: "Эфендиев Ф.З.",
        room: "D105",
        days: {
            "Monday": [
                { time: "12:25 - 13:55", group: "6п 1гр" }
            ],
            "Tuesday": [
                { time: "12:25 - 13:55", group: "6г 1гр" }
            ],
            "Wednesday": [
                { time: "12:25 - 13:55", group: "6г 1гр" }
            ],
            "Saturday": [
                { time: "10:00 - 11:30", group: "Проектная деятельность" }
            ]
        }
    },
    {
        subject: "Биоквантум",
        teacher: "Джамирзоева Л.Г.",
        room: "D105",
        days: {
            "Monday": [
                { time: "14:00 - 15:30", group: "8з 1гр" }
            ],
            "Tuesday": [
                { time: "14:00 - 15:30", group: "8з 1гр" }
            ],
            "Wednesday": [
                { time: "14:00 - 15:30", group: "8б 2гр" }
            ],
            "Thursday": [
                { time: "14:00 - 15:30", group: "8б 2гр" }
            ],
            "Saturday": [
                { time: "11:30 - 13:00", group: "Проектная деятельность" }
            ]
        }
    },
    {
        subject: "Роботехника векс+лего",
        teacher: "Егорова А.С.",
        room: "D107",
        days: {
            "Wednesday": [
                { time: "12:25 - 13:55", group: "5п 2гр" },
                { time: "14:10 - 15:40", group: "3э" }
            ],
            "Friday": [
                { time: "11:30 – 13:45", group: "5п 1гр." },
                { time: "14:10 - 15:40", group: "3е" }
            ],
            "Saturday": [
                { time: "10:00 - 11:30", group: "Проектная деятельность" }
            ]
        }
    },
    {
        subject: "Оператор ЭВМ (Магомедов)",
        teacher: "Магомедов М.Р.",
        room: "D106",
        days: {
            "Monday": [
                { time: "14:00 - 15:30", group: "9а 1гр" }
            ],
            "Tuesday": [
                { time: "14:00 - 15:30", group: "9а 2гр" }
            ],
            "Wednesday": [
                { time: "14:00 - 15:30", group: "9б 1гр" }
            ],
            "Thursday": [
                { time: "14:00 - 15:30", group: "9б 2гр" }
            ],
            "Saturday": [
                { time: "11:30 - 13:00", group: "Проектная деятельность" }
            ]
        }
    }
];

const rooms = ["D105", "D106", "D107", "D111", "D112"];
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const weekdaysRu = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

// State
let currentDate = new Date();
let currentView = "rooms"; // 'rooms', 'teachers', 'subjects'
let currentSelection = null;

// DOM Elements
const dateText = document.getElementById('current-date-text');
const datePicker = document.getElementById('date-picker');
const prevBtn = document.getElementById('prev-date');
const nextBtn = document.getElementById('next-date');
const viewButtons = document.querySelectorAll('.selector-btn');
const contentContainer = document.getElementById('content-container');
const modal = document.getElementById('selection-modal');
const modalList = document.getElementById('modal-list');
const modalTitle = document.getElementById('modal-title');
const closeModal = document.getElementById('close-modal');

// Initialize
function init() {
    updateDateDisplay();
    renderContent();

    // Set default value for date picker
    const isoDate = currentDate.toISOString().split('T')[0];
    datePicker.value = isoDate;
}

function updateDateDisplay() {
    const dayName = weekdaysRu[currentDate.getDay()];
    const options = { month: 'long', day: 'numeric' };
    const dateString = currentDate.toLocaleDateString('ru-RU', options);
    dateText.textContent = `${dayName}, ${dateString}`;
}

function renderContent() {
    contentContainer.innerHTML = '';

    if (currentView === 'rooms') {
        renderGrid(rooms, 'Кабинет');
    } else if (currentView === 'teachers') {
        const teachers = [...new Set(scheduleData.map(s => s.teacher))].sort();
        renderGrid(teachers, 'Преподаватель');
    } else if (currentView === 'subjects') {
        const subjects = scheduleData.map(s => s.subject).sort();
        renderGrid(subjects, 'Предмет');
    }
}

function renderGrid(items, type) {
    const grid = document.createElement('div');
    grid.className = 'item-grid';

    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'grid-item';
        div.innerHTML = `<h3>${item}</h3><small>${type}</small>`;
        div.onclick = () => showSchedule(item);
        grid.appendChild(div);
    });

    contentContainer.appendChild(grid);
}

function showSchedule(selectedItem) {
    currentSelection = selectedItem;
    const dayName = weekdays[currentDate.getDay()];
    let filteredLessons = [];

    if (currentView === 'rooms') {
        scheduleData.forEach(sub => {
            if (sub.room === selectedItem && sub.days[dayName]) {
                sub.days[dayName].forEach(lesson => {
                    filteredLessons.push({
                        title: sub.subject,
                        meta: sub.teacher,
                        time: lesson.time,
                        group: lesson.group
                    });
                });
            }
        });
    } else if (currentView === 'teachers') {
        scheduleData.forEach(sub => {
            if (sub.teacher === selectedItem && sub.days[dayName]) {
                sub.days[dayName].forEach(lesson => {
                    filteredLessons.push({
                        title: sub.subject,
                        meta: `Кабинет ${sub.room}`,
                        time: lesson.time,
                        group: lesson.group
                    });
                });
            }
        });
    } else if (currentView === 'subjects') {
        const sub = scheduleData.find(s => s.subject === selectedItem);
        if (sub && sub.days[dayName]) {
            sub.days[dayName].forEach(lesson => {
                filteredLessons.push({
                    title: sub.teacher,
                    meta: `Кабинет ${sub.room}`,
                    time: lesson.time,
                    group: lesson.group
                });
            });
        }
    }

    renderScheduleList(selectedItem, filteredLessons);
}

function renderScheduleList(title, lessons) {
    contentContainer.innerHTML = `
        <div class="schedule-header" style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;">
            <button onclick="renderContent()" class="nav-btn" style="width: auto; padding: 0 1rem; border-radius: 12px;">Назад</button>
            <h2 style="font-family: 'Outfit'; color: var(--secondary);">${title}</h2>
        </div>
        <div class="schedule-list">
            ${lessons.length > 0 ? lessons.sort((a, b) => a.time.localeCompare(b.time)).map(l => `
                <div class="lesson-card">
                    <div class="lesson-info">
                        <span class="lesson-title">${l.title}</span>
                        <span class="lesson-meta">${l.meta} • ${l.group}</span>
                    </div>
                    <div class="lesson-time">${l.time}</div>
                </div>
            `).join('') : '<div style="text-align: center; color: var(--text-muted); padding: 2rem;">Занятий на этот день нет</div>'}
        </div>
    `;
}

// Event Listeners
prevBtn.onclick = () => {
    currentDate.setDate(currentDate.getDate() - 1);
    updateDateDisplay();
    if (currentSelection) showSchedule(currentSelection);
};

nextBtn.onclick = () => {
    currentDate.setDate(currentDate.getDate() + 1);
    updateDateDisplay();
    if (currentSelection) showSchedule(currentSelection);
};

datePicker.onchange = (e) => {
    currentDate = new Date(e.target.value);
    updateDateDisplay();
    if (currentSelection) showSchedule(currentSelection);
};

viewButtons.forEach(btn => {
    btn.onclick = () => {
        viewButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentView = btn.dataset.view;
        currentSelection = null;
        renderContent();
    };
});

init();
