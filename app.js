// ============================================================
// СИНАПС — Full Messenger App
// ============================================================

(function () {
    "use strict";

    // ============ DATA ============

    const ALL_HOBBIES = [
        { id: "prog", name: "Программирование", icon: "💻", color: "#6c5ce7" },
        { id: "design", name: "Дизайн", icon: "🎨", color: "#e17055" },
        { id: "music", name: "Музыка", icon: "🎵", color: "#00b894" },
        { id: "photo", name: "Фотография", icon: "📷", color: "#fdcb6e" },
        { id: "gaming", name: "Видеоигры", icon: "🎮", color: "#0984e3" },
        { id: "sports", name: "Спорт", icon: "⚽", color: "#d63031" },
        { id: "books", name: "Книги", icon: "📚", color: "#a29bfe" },
        { id: "cinema", name: "Кино", icon: "🎬", color: "#fd79a8" },
        { id: "travel", name: "Путешествия", icon: "✈️", color: "#00cec9" },
        { id: "cooking", name: "Кулинария", icon: "🍳", color: "#e17055" },
        { id: "anime", name: "Аниме", icon: "🌸", color: "#ff6b81" },
        { id: "science", name: "Наука", icon: "🔬", color: "#7bed9f" },
        { id: "art", name: "Искусство", icon: "🖼️", color: "#cf6a87" },
        { id: "dance", name: "Танцы", icon: "💃", color: "#f8a5c2" },
        { id: "yoga", name: "Йога", icon: "🧘", color: "#78e08f" },
        { id: "robotics", name: "Робототехника", icon: "🤖", color: "#82ccdd" },
        { id: "volunteer", name: "Волонтёрство", icon: "🤝", color: "#f19066" },
        { id: "languages", name: "Иностранные языки", icon: "🌍", color: "#e77f67" },
        { id: "startup", name: "Стартапы", icon: "🚀", color: "#574b90" },
        { id: "psychology", name: "Психология", icon: "🧠", color: "#e15f41" },
        { id: "writing", name: "Писательство", icon: "✍️", color: "#c44569" },
        { id: "theater", name: "Театр", icon: "🎭", color: "#f78fb3" },
        { id: "chess", name: "Шахматы", icon: "♟️", color: "#596275" },
        { id: "ecology", name: "Экология", icon: "🌿", color: "#38ada9" },
        { id: "astronomy", name: "Астрономия", icon: "🔭", color: "#574b90" },
    ];

    const GROUPS = [
        { id: "g1", name: "Код и Кофе", hobby: "prog", desc: "Пишем код, пьём кофе, обсуждаем технологии", members: [] },
        { id: "g2", name: "Дизайн Мастерская", hobby: "design", desc: "UI/UX, графика, вдохновение", members: [] },
        { id: "g3", name: "Музыкальный Джем", hobby: "music", desc: "Играем, слушаем, обсуждаем музыку", members: [] },
        { id: "g4", name: "Фото Клуб", hobby: "photo", desc: "Фотопрогулки и обмен опытом", members: [] },
        { id: "g5", name: "Геймеры Юнайтед", hobby: "gaming", desc: "Совместные игры и турниры", members: [] },
        { id: "g6", name: "Спорт Зал", hobby: "sports", desc: "Тренировки, матчи, ЗОЖ", members: [] },
        { id: "g7", name: "Книжный Червь", hobby: "books", desc: "Читаем и обсуждаем книги", members: [] },
        { id: "g8", name: "Киноклуб", hobby: "cinema", desc: "Совместные просмотры и рецензии", members: [] },
        { id: "g9", name: "Аниме Уголок", hobby: "anime", desc: "Обсуждаем аниме и мангу", members: [] },
        { id: "g10", name: "Научный Кружок", hobby: "science", desc: "Эксперименты, статьи, дискуссии", members: [] },
        { id: "g11", name: "Стартап Хаб", hobby: "startup", desc: "Идеи, питчи, нетворкинг", members: [] },
        { id: "g12", name: "Йога & Медитация", hobby: "yoga", desc: "Практики осознанности", members: [] },
        { id: "g13", name: "Робо Лаб", hobby: "robotics", desc: "Собираем роботов и Arduino проекты", members: [] },
        { id: "g14", name: "Полиглоты", hobby: "languages", desc: "Изучаем языки вместе", members: [] },
        { id: "g15", name: "Волонтёры Добра", hobby: "volunteer", desc: "Помогаем миру стать лучше", members: [] },
        { id: "g16", name: "Арт Студия", hobby: "art", desc: "Рисуем, лепим, творим", members: [] },
        { id: "g17", name: "Танцпол", hobby: "dance", desc: "Танцуем всё: от хип-хопа до вальса", members: [] },
        { id: "g18", name: "Психо Клуб", hobby: "psychology", desc: "Обсуждаем психологию и саморазвитие", members: [] },
        { id: "g19", name: "Звёздный Атлас", hobby: "astronomy", desc: "Наблюдаем звёзды и изучаем космос", members: [] },
        { id: "g20", name: "Эко Движение", hobby: "ecology", desc: "Экологические инициативы и проекты", members: [] },
    ];

    const FIRST_NAMES = ["Алексей", "Мария", "Дмитрий", "Анна", "Иван", "Елена", "Сергей", "Ольга", "Андрей", "Наталья",
        "Михаил", "Екатерина", "Артём", "Юлия", "Максим", "Дарья", "Никита", "Виктория", "Павел", "Полина",
        "Кирилл", "Алина", "Роман", "Софья", "Владимир", "Ксения", "Егор", "Валерия", "Тимур", "Диана",
        "Глеб", "Арина", "Даниил", "Вероника", "Илья"];
    const LAST_NAMES = ["Иванов", "Петрова", "Сидоров", "Козлова", "Новиков", "Морозова", "Волков", "Соколова", "Попов", "Лебедева",
        "Кузнецов", "Смирнова", "Фёдоров", "Николаева", "Орлов", "Андреева", "Белов", "Павлова", "Семёнов", "Голубева",
        "Виноградов", "Богданова", "Воробьёв", "Фомина", "Тарасов", "Жукова", "Баранов", "Антонова", "Филиппов", "Романова",
        "Степанов", "Данилова", "Захаров", "Борисова", "Герасимов"];
    const UNIS = ["МГУ", "МФТИ", "ВШЭ", "ИТМО", "СПбГУ", "МГТУ", "НГУ", "УрФУ", "КФУ", "ТПУ", "РУДН", "РАНХиГС"];
    const BIOS = [
        "Люблю учиться и открывать новое 🌟",
        "Ищу единомышленников для проектов",
        "Студент, мечтатель, кофеман ☕",
        "Всегда открыт(а) для общения!",
        "Верю, что вместе мы сильнее 💪",
        "Интроверт, который пытается 😅",
        "Жизнь — это приключение 🚀",
        "Делаю мир лучше по чуть-чуть",
        "Код, музыка и хорошие люди",
        "Ищу друзей для совместных проектов",
    ];

    const AVATAR_COLORS = [
        "#6c5ce7", "#00b894", "#e17055", "#0984e3", "#d63031",
        "#fdcb6e", "#a29bfe", "#fd79a8", "#00cec9", "#e84393",
        "#55a3e8", "#ff6b6b", "#2ed573", "#ffa502", "#7bed9f",
    ];

    const EMOJIS = ["😀", "😂", "😍", "🥰", "😎", "🤔", "😅", "🙃", "😊", "🥺",
        "😭", "🤣", "❤️", "🔥", "👍", "👋", "🎉", "✨", "💪", "🙏",
        "😴", "🤗", "😇", "🤩", "😋", "🤓", "😤", "😱", "🥳", "💀",
        "👀", "💯", "🎵", "🌟", "🍕", "☕", "🎮", "📚", "💻", "🚀"];

    // ============ STATE ============

    let state = {
        currentUser: null,
        users: [],
        groups: JSON.parse(JSON.stringify(GROUPS)),
        chats: [],
        moodEntries: [],
    };

    // ============ UTILITY ============

    function $(sel) { return document.querySelector(sel); }
    function $$(sel) { return document.querySelectorAll(sel); }

    function randItem(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
    function randItems(arr, min, max) {
        const n = min + Math.floor(Math.random() * (max - min + 1));
        const shuffled = [...arr].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, Math.min(n, arr.length));
    }

    function getInitials(name) {
        return name.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2);
    }

    function getAvatarColor(name) {
        let hash = 0;
        for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
        return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
    }

    function timeAgo(date) {
        const now = Date.now();
        const diff = now - date;
        if (diff < 60000) return "сейчас";
        if (diff < 3600000) return Math.floor(diff / 60000) + " мин";
        if (diff < 86400000) return Math.floor(diff / 3600000) + " ч";
        return Math.floor(diff / 86400000) + " д";
    }

    function formatTime(date) {
        return new Date(date).toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" });
    }

    function toast(msg, type = "info") {
        const container = $("#toastContainer");
        const t = document.createElement("div");
        t.className = `toast ${type}`;
        t.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i> ${msg}`;
        container.appendChild(t);
        setTimeout(() => { t.style.opacity = "0"; setTimeout(() => t.remove(), 300); }, 3000);
    }

    function saveState() {
        localStorage.setItem("synapse_state", JSON.stringify(state));
    }

    function loadState() {
        const saved = localStorage.getItem("synapse_state");
        if (saved) {
            try {
                state = JSON.parse(saved);
                return true;
            } catch (e) { }
        }
        return false;
    }

    // ============ GENERATE USERS ============

    function generateUsers() {
        const users = [];
        const usedNames = new Set();
        for (let i = 0; i < 30; i++) {
            let name;
            do {
                name = randItem(FIRST_NAMES) + " " + randItem(LAST_NAMES);
            } while (usedNames.has(name));
            usedNames.add(name);

            const hobbies = randItems(ALL_HOBBIES, 2, 6).map(h => h.id);
            const user = {
                id: "u" + (i + 1),
                name: name,
                username: name.split(" ")[0].toLowerCase() + (i + 1),
                password: "1234",
                uni: randItem(UNIS),
                bio: randItem(BIOS),
                hobbies: hobbies,
                friends: [],
                online: Math.random() > 0.5,
                joinedGroups: [],
                messageCount: Math.floor(Math.random() * 100),
            };
            users.push(user);
        }

        // Assign friends based on common hobbies
        for (let i = 0; i < users.length; i++) {
            for (let j = i + 1; j < users.length; j++) {
                const common = users[i].hobbies.filter(h => users[j].hobbies.includes(h));
                if (common.length >= 2 && Math.random() > 0.4) {
                    users[i].friends.push(users[j].id);
                    users[j].friends.push(users[i].id);
                }
            }
        }

        // Join groups based on hobbies
        users.forEach(u => {
            state.groups.forEach(g => {
                if (u.hobbies.includes(g.hobby) && Math.random() > 0.3) {
                    if (!g.members.includes(u.id)) g.members.push(u.id);
                    if (!u.joinedGroups.includes(g.id)) u.joinedGroups.push(g.id);
                }
            });
        });

        return users;
    }

    // ============ AUTH ============

    function initAuth() {
        renderHobbiesGrid("hobbiesGrid");

        $("#showRegister").addEventListener("click", e => {
            e.preventDefault();
            $("#loginView").classList.add("hidden");
            $("#registerView").classList.remove("hidden");
        });

        $("#showLogin").addEventListener("click", e => {
            e.preventDefault();
            $("#registerView").classList.add("hidden");
            $("#loginView").classList.remove("hidden");
        });

        $("#loginForm").addEventListener("submit", e => {
            e.preventDefault();
            const username = $("#loginUsername").value.trim();
            const password = $("#loginPassword").value;
            const user = state.users.find(u => u.username === username && u.password === password);
            if (user) {
                state.currentUser = user;
                user.online = true;
                saveState();
                enterApp();
            } else {
                toast("Неверное имя пользователя или пароль", "error");
            }
        });

        $("#registerForm").addEventListener("submit", e => {
            e.preventDefault();
            const selectedHobbies = [...$$('#hobbiesGrid .hobby-chip.selected')].map(c => c.dataset.id);
            if (selectedHobbies.length === 0) {
                $("#hobbyError").classList.remove("hidden");
                return;
            }
            $("#hobbyError").classList.add("hidden");

            const name = $("#regName").value.trim();
            const username = $("#regUsername").value.trim();
            const password = $("#regPassword").value;
            const uni = $("#regUni").value.trim();
            const bio = $("#regBio").value.trim();

            if (!name || !username || !password) {
                toast("Заполни все обязательные поля", "error");
                return;
            }

            if (state.users.find(u => u.username === username)) {
                toast("Это имя пользователя уже занято", "error");
                return;
            }

            const newUser = {
                id: "u_me_" + Date.now(),
                name, username, password, uni, bio,
                hobbies: selectedHobbies,
                friends: [],
                online: true,
                joinedGroups: [],
                messageCount: 0,
            };

            // Auto-friend with people who share hobbies
            state.users.forEach(u => {
                const common = u.hobbies.filter(h => selectedHobbies.includes(h));
                if (common.length >= 1 && Math.random() > 0.5) {
                    newUser.friends.push(u.id);
                    u.friends.push(newUser.id);
                }
            });

            // Auto-join groups
            state.groups.forEach(g => {
                if (selectedHobbies.includes(g.hobby)) {
                    if (!g.members.includes(newUser.id)) g.members.push(newUser.id);
                    if (!newUser.joinedGroups.includes(g.id)) newUser.joinedGroups.push(g.id);
                }
            });

            state.users.push(newUser);
            state.currentUser = newUser;
            saveState();
            toast("Добро пожаловать в СИНАПС! 🧠", "success");
            enterApp();
        });
    }

    function renderHobbiesGrid(containerId) {
        const container = $(`#${containerId}`);
        container.innerHTML = "";
        ALL_HOBBIES.forEach(h => {
            const chip = document.createElement("div");
            chip.className = "hobby-chip";
            chip.dataset.id = h.id;
            chip.textContent = `${h.icon} ${h.name}`;
            chip.addEventListener("click", () => {
                chip.classList.toggle("selected");
            });
            container.appendChild(chip);
        });
    }

    // ============ ENTER APP ============

    function enterApp() {
        $("#authScreen").classList.add("hidden");
        $("#appScreen").classList.remove("hidden");
        initApp();
    }

    function initApp() {
        renderCurrentUserInfo();
        initNavigation();
        initChats();
        initSynapse();
        initSupport();
        initProfile();
        initNewChat();
    }

    function renderCurrentUserInfo() {
        const u = state.currentUser;
        const color = getAvatarColor(u.name);
        $("#currentUserInfo").innerHTML = `
            <div class="mini-avatar" style="background:${color}">${getInitials(u.name)}</div>
            <div>
                <div style="font-weight:600;font-size:13px">${u.name}</div>
                <div style="font-size:11px;color:var(--text-muted)">@${u.username}</div>
            </div>
        `;
    }

    // ============ NAVIGATION ============

    function initNavigation() {
        $$(".nav-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                $$(".nav-btn").forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                const tab = btn.dataset.tab;
                $$(".tab-content").forEach(t => t.classList.remove("active"));
                $(`#${tab}Tab`).classList.add("active");

                if (tab === "synapse") {
                    setTimeout(() => resizeSynapseCanvas(), 50);
                }
            });
        });
    }

    // ============ CHATS ============

    let activeChatId = null;

    function initChats() {
        // Generate some initial chats with messages
        if (state.chats.length === 0) {
            const me = state.currentUser;
            const friends = me.friends.slice(0, 5);
            friends.forEach(fid => {
                const friend = state.users.find(u => u.id === fid);
                if (!friend) return;
                const chat = {
                    id: "chat_" + Date.now() + "_" + Math.random().toString(36).slice(2),
                    participants: [me.id, fid],
                    messages: generateInitialMessages(me, friend),
                    isGroup: false,
                };
                state.chats.push(chat);
            });
            saveState();
        }

        renderChatList();

        $("#chatSearch").addEventListener("input", () => renderChatList());
        $("#chatBackBtn").addEventListener("click", () => {
            $("#chatWindow").classList.remove("open");
        });
    }

    function generateInitialMessages(me, friend) {
        const greetings = [
            "Привет! 👋", "Здравствуй!", "Хей!", "Приветик!",
        ];
        const responses = [
            "Привет! Как дела?", "О, привет! Рад(а) знакомству!", "Хей! Чем занимаешься?",
            "Привет! Я видел(а) что мы в одном кружке 😊",
        ];
        const followups = [
            "Хорошо, спасибо! А у тебя?", "Всё отлично! Ты тоже в СИНАПС?",
            "Нормально, учусь потихоньку 📚", "Супер! Давно тут?",
        ];

        const msgs = [];
        const now = Date.now();
        msgs.push({ from: friend.id, text: randItem(greetings), time: now - 3600000 * 3 });
        msgs.push({ from: me.id, text: randItem(responses), time: now - 3600000 * 2.5 });
        msgs.push({ from: friend.id, text: randItem(followups), time: now - 3600000 * 2 });
        return msgs;
    }

    function renderChatList() {
        const container = $("#chatList");
        const search = $("#chatSearch").value.toLowerCase();
        const me = state.currentUser;

        const myChats = state.chats.filter(c => c.participants.includes(me.id));

        // Sort by last message time
        myChats.sort((a, b) => {
            const aTime = a.messages.length ? a.messages[a.messages.length - 1].time : 0;
            const bTime = b.messages.length ? b.messages[b.messages.length - 1].time : 0;
            return bTime - aTime;
        });

        container.innerHTML = "";

        myChats.forEach(chat => {
            const otherId = chat.participants.find(p => p !== me.id);
            const other = state.users.find(u => u.id === otherId);
            if (!other) return;
            if (search && !other.name.toLowerCase().includes(search)) return;

            const lastMsg = chat.messages.length ? chat.messages[chat.messages.length - 1] : null;
            const color = getAvatarColor(other.name);
            const unread = chat.messages.filter(m => m.from !== me.id && !m.read).length;

            const item = document.createElement("div");
            item.className = `chat-item ${activeChatId === chat.id ? 'active' : ''}`;
            item.innerHTML = `
                <div class="chat-item-avatar" style="background:${color}">
                    ${getInitials(other.name)}
                    ${other.online ? '<div class="online-dot"></div>' : ''}
                </div>
                <div class="chat-item-info">
                    <h4>${other.name}</h4>
                    <p>${lastMsg ? (lastMsg.from === me.id ? 'Вы: ' : '') + lastMsg.text : 'Начните общение'}</p>
                </div>
                <div class="chat-item-meta">
                    ${lastMsg ? `<div class="time">${timeAgo(lastMsg.time)}</div>` : ''}
                    ${unread > 0 ? `<div class="unread-count">${unread}</div>` : ''}
                </div>
            `;
            item.addEventListener("click", () => openChat(chat.id));
            container.appendChild(item);
        });

        if (container.children.length === 0) {
            container.innerHTML = `<div style="text-align:center;padding:40px;color:var(--text-muted)">
                <i class="fas fa-comments" style="font-size:32px;margin-bottom:10px;display:block;opacity:0.3"></i>
                Нет чатов. Найди друзей в Синапсе!
            </div>`;
        }

        updateUnreadBadge();
    }

    function openChat(chatId) {
        activeChatId = chatId;
        const chat = state.chats.find(c => c.id === chatId);
        if (!chat) return;

        const me = state.currentUser;
        const otherId = chat.participants.find(p => p !== me.id);
        const other = state.users.find(u => u.id === otherId);
        if (!other) return;

        // Mark as read
        chat.messages.forEach(m => { if (m.from !== me.id) m.read = true; });
        saveState();

        // Show chat window
        $("#chatPlaceholder").classList.add("hidden");
        $("#chatActive").classList.remove("hidden");
        $("#chatWindow").classList.add("open");

        // Header
        const color = getAvatarColor(other.name);
        $("#chatAvatar").style.background = color;
        $("#chatAvatar").textContent = getInitials(other.name);
        $("#chatName").textContent = other.name;
        $("#chatStatus").textContent = other.online ? "в сети" : "не в сети";
        $("#chatStatus").style.color = other.online ? "var(--green)" : "var(--text-muted)";

        // Profile button
        $("#chatProfileBtn").onclick = () => showUserProfile(other);

        renderMessages(chat);
        renderChatList();

        // Input
        const input = $("#messageInput");
        input.focus();

        // Remove old listeners
        const newSend = $("#sendBtn").cloneNode(true);
        $("#sendBtn").replaceWith(newSend);
        const newInput = input.cloneNode(true);
        input.replaceWith(newInput);

        const sendMessage = () => {
            const text = $("#messageInput").value.trim();
            if (!text) return;
            chat.messages.push({ from: me.id, text, time: Date.now(), read: false });
            me.messageCount = (me.messageCount || 0) + 1;
            $("#messageInput").value = "";
            renderMessages(chat);
            renderChatList();
            saveState();

            // Simulate reply
            setTimeout(() => {
                if (activeChatId === chatId) {
                    const replies = [
                        "Интересно! 😊", "Согласен!", "Расскажи подробнее?",
                        "Круто! 🔥", "Ого, не знал(а)!", "Хаха 😂",
                        "Точно!", "Давай как-нибудь встретимся!", "Спасибо! 🙏",
                        "А ты что думаешь?", "Классно!", "Понимаю тебя",
                        "Это очень здорово!", "Надо попробовать 🤔",
                    ];
                    chat.messages.push({ from: other.id, text: randItem(replies), time: Date.now(), read: activeChatId === chatId });
                    renderMessages(chat);
                    renderChatList();
                    saveState();
                }
            }, 1500 + Math.random() * 3000);
        };

        $("#sendBtn").addEventListener("click", sendMessage);
        $("#messageInput").addEventListener("keypress", e => {
            if (e.key === "Enter") sendMessage();
        });

        // Emoji
        initEmojiPicker();
    }

    function renderMessages(chat) {
        const container = $("#messagesContainer");
        const me = state.currentUser;
        container.innerHTML = "";

        let lastDate = "";
        chat.messages.forEach(msg => {
            const date = new Date(msg.time).toLocaleDateString("ru-RU");
            if (date !== lastDate) {
                lastDate = date;
                const divider = document.createElement("div");
                divider.className = "message-date-divider";
                divider.textContent = date === new Date().toLocaleDateString("ru-RU") ? "Сегодня" : date;
                container.appendChild(divider);
            }

            const div = document.createElement("div");
            div.className = `message ${msg.from === me.id ? 'sent' : 'received'}`;
            div.innerHTML = `${msg.text}<span class="msg-time">${formatTime(msg.time)}</span>`;
            container.appendChild(div);
        });

        container.scrollTop = container.scrollHeight;
    }

    function initEmojiPicker() {
        const picker = $("#emojiPicker");
        picker.innerHTML = "";
        EMOJIS.forEach(e => {
            const span = document.createElement("span");
            span.textContent = e;
            span.addEventListener("click", () => {
                $("#messageInput").value += e;
                $("#messageInput").focus();
                picker.classList.add("hidden");
            });
            picker.appendChild(span);
        });

        $("#emojiBtn").onclick = () => picker.classList.toggle("hidden");

        document.addEventListener("click", e => {
            if (!e.target.closest("#emojiBtn") && !e.target.closest("#emojiPicker")) {
                picker.classList.add("hidden");
            }
        });
    }

    function updateUnreadBadge() {
        const me = state.currentUser;
        let total = 0;
        state.chats.forEach(c => {
            if (c.participants.includes(me.id)) {
                total += c.messages.filter(m => m.from !== me.id && !m.read).length;
            }
        });
        const badge = $("#unreadBadge");
        if (total > 0) {
            badge.textContent = total;
            badge.classList.remove("hidden");
        } else {
            badge.classList.add("hidden");
        }
    }

    function startChatWith(userId) {
        const me = state.currentUser;
        let chat = state.chats.find(c =>
            c.participants.includes(me.id) && c.participants.includes(userId) && !c.isGroup
        );
        if (!chat) {
            chat = {
                id: "chat_" + Date.now() + "_" + Math.random().toString(36).slice(2),
                participants: [me.id, userId],
                messages: [],
                isGroup: false,
            };
            state.chats.push(chat);
            saveState();
        }

        // Switch to chats tab
        $$(".nav-btn").forEach(b => b.classList.remove("active"));
        $('[data-tab="chats"]').classList.add("active");
        $$(".tab-content").forEach(t => t.classList.remove("active"));
        $("#chatsTab").classList.add("active");

        renderChatList();
        openChat(chat.id);
    }

    // ============ NEW CHAT MODAL ============

    function initNewChat() {
        $("#newChatBtn").addEventListener("click", () => {
            $("#newChatModal").classList.remove("hidden");
            renderNewChatList();
        });

        $("#cancelNewChat").addEventListener("click", () => {
            $("#newChatModal").classList.add("hidden");
        });

        $("#newChatSearch").addEventListener("input", () => renderNewChatList());
    }

    function renderNewChatList() {
        const container = $("#newChatList");
        const search = $("#newChatSearch").value.toLowerCase();
        const me = state.currentUser;

        container.innerHTML = "";
        state.users.forEach(u => {
            if (u.id === me.id) return;
            if (search && !u.name.toLowerCase().includes(search) && !u.username.toLowerCase().includes(search)) return;

            const color = getAvatarColor(u.name);
            const common = u.hobbies.filter(h => me.hobbies.includes(h)).length;

            const item = document.createElement("div");
            item.className = "new-chat-item";
            item.innerHTML = `
                <div class="mini-avatar" style="background:${color}">${getInitials(u.name)}</div>
                <div class="new-chat-item-info">
                    <h4>${u.name}</h4>
                    <p>@${u.username} · ${common} общих интересов</p>
                </div>
            `;
            item.addEventListener("click", () => {
                $("#newChatModal").classList.add("hidden");
                startChatWith(u.id);
            });
            container.appendChild(item);
        });
    }

    // ============ SYNAPSE GRAPH ============

    let canvas, ctx;
    let graphNodes = [];
    let graphEdges = [];
    let camera = { x: 0, y: 0, zoom: 0.7 };
    let isDragging = false;
    let dragStart = { x: 0, y: 0 };
    let hoveredNode = null;
    let selectedNode = null;
    let animFrame;

    function initSynapse() {
        canvas = $("#synapseCanvas");
        ctx = canvas.getContext("2d");

        resizeSynapseCanvas();
        window.addEventListener("resize", resizeSynapseCanvas);

        buildGraph();

        // Canvas events
        canvas.addEventListener("mousedown", onCanvasMouseDown);
        canvas.addEventListener("mousemove", onCanvasMouseMove);
        canvas.addEventListener("mouseup", onCanvasMouseUp);
        canvas.addEventListener("mouseleave", onCanvasMouseUp);
        canvas.addEventListener("wheel", onCanvasWheel);
        canvas.addEventListener("dblclick", onCanvasDoubleClick);

        // Touch events
        canvas.addEventListener("touchstart", onTouchStart, { passive: false });
        canvas.addEventListener("touchmove", onTouchMove, { passive: false });
        canvas.addEventListener("touchend", onTouchEnd);

        // Controls
        $("#zoomIn").addEventListener("click", () => { camera.zoom = Math.min(3, camera.zoom * 1.2); });
        $("#zoomOut").addEventListener("click", () => { camera.zoom = Math.max(0.2, camera.zoom / 1.2); });
        $("#resetView").addEventListener("click", () => { camera = { x: 0, y: 0, zoom: 0.7 }; });

        $("#showPeople").addEventListener("change", () => buildGraph());
        $("#showGroups").addEventListener("change", () => buildGraph());

        $("#closeNodeInfo").addEventListener("click", () => {
            $("#nodeInfoPanel").classList.add("hidden");
            selectedNode = null;
        });

        startGraphAnimation();
    }

    function resizeSynapseCanvas() {
        if (!canvas) return;
        const rect = canvas.parentElement.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height - (document.querySelector('.synapse-toolbar')?.offsetHeight || 0);
    }

    function buildGraph() {
        graphNodes = [];
        graphEdges = [];
        const me = state.currentUser;
        const showPeople = $("#showPeople")?.checked ?? true;
        const showGroups = $("#showGroups")?.checked ?? true;

        // Center: current user
        const centerX = 0;
        const centerY = 0;

        if (showPeople) {
            // Add current user
            graphNodes.push({
                id: me.id,
                type: "user",
                label: me.name,
                x: centerX,
                y: centerY,
                vx: 0, vy: 0,
                radius: 30,
                color: getAvatarColor(me.name),
                data: me,
                isMe: true,
            });

            // Find connected users (common hobbies or friends)
            state.users.forEach(u => {
                if (u.id === me.id) return;
                const commonHobbies = u.hobbies.filter(h => me.hobbies.includes(h));
                const isFriend = me.friends.includes(u.id);
                const mutualFriends = u.friends.filter(f => me.friends.includes(f));

                if (commonHobbies.length === 0 && !isFriend && mutualFriends.length === 0) return;

                const score = commonHobbies.length * 2 + (isFriend ? 3 : 0) + mutualFriends.length;
                const radius = Math.max(12, Math.min(26, 10 + score * 2));

                const angle = Math.random() * Math.PI * 2;
                const dist = 200 + Math.random() * 400;

                graphNodes.push({
                    id: u.id,
                    type: "user",
                    label: u.name,
                    x: centerX + Math.cos(angle) * dist,
                    y: centerY + Math.sin(angle) * dist,
                    vx: 0, vy: 0,
                    radius: radius,
                    color: getAvatarColor(u.name),
                    data: u,
                    isMe: false,
                    score: score,
                });

                // Edge to me
                if (isFriend || commonHobbies.length > 0) {
                    graphEdges.push({
                        from: me.id,
                        to: u.id,
                        strength: score,
                        color: isFriend ? "rgba(108,92,231,0.3)" : "rgba(0,206,201,0.15)",
                    });
                }
            });

            // Edges between other users (friends)
            const nodeIds = new Set(graphNodes.map(n => n.id));
            state.users.forEach(u => {
                if (!nodeIds.has(u.id)) return;
                u.friends.forEach(fid => {
                    if (!nodeIds.has(fid)) return;
                    if (u.id >= fid) return; // avoid duplicates
                    const existing = graphEdges.find(e =>
                        (e.from === u.id && e.to === fid) || (e.from === fid && e.to === u.id)
                    );
                    if (!existing) {
                        graphEdges.push({
                            from: u.id,
                            to: fid,
                            strength: 1,
                            color: "rgba(255,255,255,0.05)",
                        });
                    }
                });
            });
        }

        if (showGroups) {
            // Add hobby/group nodes
            const relevantHobbies = new Set();
            graphNodes.forEach(n => {
                if (n.type === "user" && n.data) {
                    n.data.hobbies.forEach(h => relevantHobbies.add(h));
                }
            });

            relevantHobbies.forEach(hid => {
                const hobby = ALL_HOBBIES.find(h => h.id === hid);
                if (!hobby) return;

                const group = state.groups.find(g => g.hobby === hid);
                const angle = Math.random() * Math.PI * 2;
                const dist = 350 + Math.random() * 300;

                graphNodes.push({
                    id: "hobby_" + hid,
                    type: "hobby",
                    label: hobby.icon + " " + hobby.name,
                    x: centerX + Math.cos(angle) * dist,
                    y: centerY + Math.sin(angle) * dist,
                    vx: 0, vy: 0,
                    radius: 36,
                    color: hobby.color,
                    data: { hobby, group },
                    isMe: false,
                });

                // Connect users to their hobbies
                graphNodes.forEach(n => {
                    if (n.type === "user" && n.data && n.data.hobbies.includes(hid)) {
                        graphEdges.push({
                            from: n.id,
                            to: "hobby_" + hid,
                            strength: 1,
                            color: hobby.color + "33",
                        });
                    }
                });
            });
        }
    }

    function startGraphAnimation() {
        function animate() {
            updatePhysics();
            renderGraph();
            animFrame = requestAnimationFrame(animate);
        }
        animate();
    }

    function updatePhysics() {
        const nodes = graphNodes;
        const edges = graphEdges;

        // Repulsion between all nodes
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dx = nodes[j].x - nodes[i].x;
                const dy = nodes[j].y - nodes[i].y;
                const dist = Math.sqrt(dx * dx + dy * dy) || 1;
                const force = 5000 / (dist * dist);
                const fx = (dx / dist) * force;
                const fy = (dy / dist) * force;
                nodes[i].vx -= fx;
                nodes[i].vy -= fy;
                nodes[j].vx += fx;
                nodes[j].vy += fy;
            }
        }

        // Attraction along edges
        edges.forEach(e => {
            const a = nodes.find(n => n.id === e.from);
            const b = nodes.find(n => n.id === e.to);
            if (!a || !b) return;
            const dx = b.x - a.x;
            const dy = b.y - a.y;
            const dist = Math.sqrt(dx * dx + dy * dy) || 1;
            const targetDist = 180;
            const force = (dist - targetDist) * 0.003 * (e.strength || 1);
            const fx = (dx / dist) * force;
            const fy = (dy / dist) * force;
            a.vx += fx;
            a.vy += fy;
            b.vx -= fx;
            b.vy -= fy;
        });

        // Center gravity
        nodes.forEach(n => {
            n.vx -= n.x * 0.0003;
            n.vy -= n.y * 0.0003;
        });

        // Apply velocity with damping
        nodes.forEach(n => {
            if (n.isDraggingNode) return;
            n.vx *= 0.85;
            n.vy *= 0.85;
            n.x += n.vx;
            n.y += n.vy;
        });
    }

    function renderGraph() {
        if (!ctx || !canvas) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.save();
        ctx.translate(canvas.width / 2 + camera.x, canvas.height / 2 + camera.y);
        ctx.scale(camera.zoom, camera.zoom);

        // Draw edges
        graphEdges.forEach(e => {
            const a = graphNodes.find(n => n.id === e.from);
            const b = graphNodes.find(n => n.id === e.to);
            if (!a || !b) return;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = e.color || "rgba(255,255,255,0.08)";
            ctx.lineWidth = Math.max(0.5, (e.strength || 1) * 0.5);
            ctx.stroke();
        });

        // Draw nodes
        graphNodes.forEach(n => {
            const isHovered = hoveredNode === n;
            const isSelected = selectedNode === n;
            const r = n.radius * (isHovered ? 1.15 : 1);

            // Glow
            if (isHovered || isSelected || n.isMe) {
                ctx.beginPath();
                ctx.arc(n.x, n.y, r + 8, 0, Math.PI * 2);
                ctx.fillStyle = n.color + "33";
                ctx.fill();
            }

            // Circle
            ctx.beginPath();
            ctx.arc(n.x, n.y, r, 0, Math.PI * 2);

            if (n.isMe) {
                const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r);
                grad.addColorStop(0, "#a29bfe");
                grad.addColorStop(1, "#6c5ce7");
                ctx.fillStyle = grad;
            } else {
                ctx.fillStyle = n.color + (n.type === "hobby" ? "cc" : "bb");
            }
            ctx.fill();

            if (isSelected) {
                ctx.strokeStyle = "#fff";
                ctx.lineWidth = 2;
                ctx.stroke();
            }

            // Label
            ctx.fillStyle = "#fff";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            if (n.type === "user") {
                ctx.font = `bold ${Math.max(9, r * 0.6)}px Inter`;
                ctx.fillText(getInitials(n.label), n.x, n.y);
                // Name below
                ctx.font = `${Math.max(8, 10)}px Inter`;
                ctx.fillStyle = "rgba(255,255,255,0.7)";
                ctx.fillText(n.label.split(" ")[0], n.x, n.y + r + 14);
            } else {
                ctx.font = `${Math.max(14, r * 0.5)}px Inter`;
                ctx.fillText(n.label.split(" ")[0], n.x, n.y - 2);
                ctx.font = `${Math.max(8, 9)}px Inter`;
                ctx.fillStyle = "rgba(255,255,255,0.7)";
                const text = n.label.split(" ").slice(1).join(" ");
                ctx.fillText(text, n.x, n.y + 14);
            }
        });

        ctx.restore();
    }

    function screenToWorld(sx, sy) {
        return {
            x: (sx - canvas.width / 2 - camera.x) / camera.zoom,
            y: (sy - canvas.height / 2 - camera.y) / camera.zoom,
        };
    }

    function getNodeAt(sx, sy) {
        const w = screenToWorld(sx, sy);
        for (let i = graphNodes.length - 1; i >= 0; i--) {
            const n = graphNodes[i];
            const dx = w.x - n.x;
            const dy = w.y - n.y;
            if (dx * dx + dy * dy < n.radius * n.radius * 1.5) return n;
        }
        return null;
    }

    let draggedNode = null;

    function onCanvasMouseDown(e) {
        const rect = canvas.getBoundingClientRect();
        const sx = e.clientX - rect.left;
        const sy = e.clientY - rect.top;

        const node = getNodeAt(sx, sy);
        if (node) {
            draggedNode = node;
            draggedNode.isDraggingNode = true;
        } else {
            isDragging = true;
            dragStart = { x: e.clientX - camera.x, y: e.clientY - camera.y };
        }
    }

    function onCanvasMouseMove(e) {
        const rect = canvas.getBoundingClientRect();
        const sx = e.clientX - rect.left;
        const sy = e.clientY - rect.top;

        if (draggedNode) {
            const w = screenToWorld(sx, sy);
            draggedNode.x = w.x;
            draggedNode.y = w.y;
            draggedNode.vx = 0;
            draggedNode.vy = 0;
        } else if (isDragging) {
            camera.x = e.clientX - dragStart.x;
            camera.y = e.clientY - dragStart.y;
        } else {
            hoveredNode = getNodeAt(sx, sy);
            canvas.style.cursor = hoveredNode ? "pointer" : "grab";
        }
    }

    function onCanvasMouseUp(e) {
        if (draggedNode) {
            draggedNode.isDraggingNode = false;
            draggedNode = null;
        }
        isDragging = false;
    }

    function onCanvasDoubleClick(e) {
        const rect = canvas.getBoundingClientRect();
        const sx = e.clientX - rect.left;
        const sy = e.clientY - rect.top;
        const node = getNodeAt(sx, sy);
        if (node) {
            selectedNode = node;
            showNodeInfo(node);
        }
    }

    function onCanvasWheel(e) {
        e.preventDefault();
        const delta = e.deltaY > 0 ? 0.9 : 1.1;
        camera.zoom = Math.max(0.15, Math.min(4, camera.zoom * delta));
    }

    // Touch support
    let lastTouchDist = 0;
    function onTouchStart(e) {
        e.preventDefault();
        if (e.touches.length === 1) {
            const t = e.touches[0];
            const rect = canvas.getBoundingClientRect();
            const sx = t.clientX - rect.left;
            const sy = t.clientY - rect.top;
            const node = getNodeAt(sx, sy);
            if (node) {
                draggedNode = node;
                draggedNode.isDraggingNode = true;
            } else {
                isDragging = true;
                dragStart = { x: t.clientX - camera.x, y: t.clientY - camera.y };
            }
        } else if (e.touches.length === 2) {
            const dx = e.touches[0].clientX - e.touches[1].clientX;
            const dy = e.touches[0].clientY - e.touches[1].clientY;
            lastTouchDist = Math.sqrt(dx * dx + dy * dy);
        }
    }

    function onTouchMove(e) {
        e.preventDefault();
        if (e.touches.length === 1) {
            const t = e.touches[0];
            const rect = canvas.getBoundingClientRect();
            const sx = t.clientX - rect.left;
            const sy = t.clientY - rect.top;
            if (draggedNode) {
                const w = screenToWorld(sx, sy);
                draggedNode.x = w.x;
                draggedNode.y = w.y;
                draggedNode.vx = 0;
                draggedNode.vy = 0;
            } else if (isDragging) {
                camera.x = t.clientX - dragStart.x;
                camera.y = t.clientY - dragStart.y;
            }
        } else if (e.touches.length === 2) {
            const dx = e.touches[0].clientX - e.touches[1].clientX;
            const dy = e.touches[0].clientY - e.touches[1].clientY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (lastTouchDist > 0) {
                camera.zoom = Math.max(0.15, Math.min(4, camera.zoom * (dist / lastTouchDist)));
            }
            lastTouchDist = dist;
        }
    }

    function onTouchEnd(e) {
        if (draggedNode) {
            draggedNode.isDraggingNode = false;
            draggedNode = null;
        }
        isDragging = false;
        lastTouchDist = 0;

        // Detect tap (for selecting nodes)
        if (e.changedTouches.length === 1) {
            const t = e.changedTouches[0];
            const rect = canvas.getBoundingClientRect();
            const sx = t.clientX - rect.left;
            const sy = t.clientY - rect.top;
            const node = getNodeAt(sx, sy);
            if (node) {
                selectedNode = node;
                showNodeInfo(node);
            }
        }
    }

    function showNodeInfo(node) {
        const panel = $("#nodeInfoPanel");
        const content = $("#nodeInfoContent");
        const me = state.currentUser;

        panel.classList.remove("hidden");

        if (node.type === "user") {
            const u = node.data;
            const commonHobbies = u.hobbies.filter(h => me.hobbies.includes(h));
            const mutualFriends = u.friends.filter(f => me.friends.includes(f));
            const isFriend = me.friends.includes(u.id);
            const isMe = u.id === me.id;

            const hobbiesHtml = u.hobbies.map(hid => {
                const h = ALL_HOBBIES.find(x => x.id === hid);
                const isCommon = me.hobbies.includes(hid);
                return `<span class="hobby-tag ${isCommon ? 'common' : ''}">${h ? h.icon + ' ' + h.name : hid}</span>`;
            }).join("");

            const mutualNames = mutualFriends.map(fid => {
                const f = state.users.find(x => x.id === fid);
                return f ? f.name.split(" ")[0] : "";
            }).filter(Boolean).slice(0, 5).join(", ");

            content.innerHTML = `
                <div class="node-profile-header">
                    <div class="node-avatar" style="background:${getAvatarColor(u.name)}">${getInitials(u.name)}</div>
                    <h3>${u.name} ${isMe ? '(ты)' : ''}</h3>
                    <p>@${u.username} · ${u.uni || ''}</p>
                    <p style="margin-top:6px;font-size:13px;color:var(--text-secondary)">${u.bio || ''}</p>
                </div>
                <div class="node-hobbies">${hobbiesHtml}</div>
                ${commonHobbies.length > 0 ? `<div class="node-mutual">🎯 ${commonHobbies.length} общих интересов</div>` : ''}
                ${mutualFriends.length > 0 ? `<div class="node-mutual">👥 ${mutualFriends.length} общих друзей: ${mutualNames}</div>` : ''}
                ${!isMe ? `
                    <div class="node-actions">
                        <button class="btn-primary" id="nodeMessageBtn">💬 Написать</button>
                        ${!isFriend ? `<button class="btn-secondary" id="nodeFriendBtn">➕ В друзья</button>` : `<span style="color:var(--green);font-size:12px;display:flex;align-items:center;justify-content:center">✓ Друзья</span>`}
                    </div>
                ` : ''}
            `;

            if (!isMe) {
                setTimeout(() => {
                    const msgBtn = $("#nodeMessageBtn");
                    if (msgBtn) msgBtn.addEventListener("click", () => {
                        panel.classList.add("hidden");
                        startChatWith(u.id);
                    });
                    const friendBtn = $("#nodeFriendBtn");
                    if (friendBtn) friendBtn.addEventListener("click", () => {
                        if (!me.friends.includes(u.id)) {
                            me.friends.push(u.id);
                            u.friends.push(me.id);
                            saveState();
                            toast(`${u.name} добавлен(а) в друзья! 🎉`, "success");
                            buildGraph();
                            showNodeInfo(node);
                        }
                    });
                }, 0);
            }
        } else if (node.type === "hobby") {
            const { hobby, group } = node.data;
            const isMember = group && state.currentUser.joinedGroups.includes(group.id);
            const members = group ? group.members.map(mid => state.users.find(u => u.id === mid)).filter(Boolean) : [];

            const membersHtml = members.slice(0, 10).map(m => `
                <div class="group-member-item">
                    <div class="mini-dot" style="background:${getAvatarColor(m.name)}">${getInitials(m.name)}</div>
                    <span>${m.name}</span>
                </div>
            `).join("");

            content.innerHTML = `
                <div class="node-profile-header">
                    <div class="node-avatar" style="background:${hobby.color}">${hobby.icon}</div>
                    <h3>${hobby.name}</h3>
                    ${group ? `<p>${group.name} · ${members.length} участников</p>` : ''}
                    ${group ? `<p style="margin-top:6px;font-size:13px;color:var(--text-secondary)">${group.desc}</p>` : ''}
                </div>
                ${group ? `
                    <div class="node-actions">
                        ${isMember
                    ? `<button class="btn-secondary" id="nodeLeaveGroup">Выйти из группы</button>`
                    : `<button class="btn-primary" id="nodeJoinGroup">Вступить в группу</button>`
                }
                    </div>
                ` : ''}
                ${membersHtml ? `<div class="group-members-list"><h4>Участники:</h4>${membersHtml}</div>` : ''}
            `;

            setTimeout(() => {
                const joinBtn = $("#nodeJoinGroup");
                if (joinBtn) joinBtn.addEventListener("click", () => {
                    if (group && !me.joinedGroups.includes(group.id)) {
                        me.joinedGroups.push(group.id);
                        if (!group.members.includes(me.id)) group.members.push(me.id);
                        if (!me.hobbies.includes(hobby.id)) me.hobbies.push(hobby.id);
                        saveState();
                        toast(`Ты вступил(а) в "${group.name}"! 🎉`, "success");
                        buildGraph();
                        showNodeInfo(node);
                    }
                });
                const leaveBtn = $("#nodeLeaveGroup");
                if (leaveBtn) leaveBtn.addEventListener("click", () => {
                    if (group) {
                        me.joinedGroups = me.joinedGroups.filter(g => g !== group.id);
                        group.members = group.members.filter(m => m !== me.id);
                        saveState();
                        toast(`Ты вышел(а) из "${group.name}"`, "info");
                        buildGraph();
                        showNodeInfo(node);
                    }
                });
            }, 0);
        }
    }

    // ============ SUPPORT ============

    function initSupport() {
        // Mood
        $("#moodBtn").addEventListener("click", () => {
            $(".support-options").classList.add("hidden");
            $(".support-header").classList.add("hidden");
            $("#moodJournal").classList.remove("hidden");
            renderMoodHistory();
        });

        $("#moodBack").addEventListener("click", () => {
            $("#moodJournal").classList.add("hidden");
            $(".support-options").classList.remove("hidden");
            $(".support-header").classList.remove("hidden");
        });

        let selectedMood = null;
        $$(".mood-option").forEach(opt => {
            opt.addEventListener("click", () => {
                $$(".mood-option").forEach(o => o.classList.remove("selected"));
                opt.classList.add("selected");
                selectedMood = opt.dataset.mood;
            });
        });

        $("#saveMood").addEventListener("click", () => {
            if (!selectedMood) { toast("Выбери настроение", "error"); return; }
            const text = $("#moodText").value.trim();
            state.moodEntries.unshift({
                mood: selectedMood,
                text: text,
                time: Date.now(),
            });
            saveState();
            selectedMood = null;
            $$(".mood-option").forEach(o => o.classList.remove("selected"));
            $("#moodText").value = "";
            renderMoodHistory();
            toast("Запись сохранена 💜", "success");
        });

        // Breathe
        $("#breatheBtn").addEventListener("click", () => {
            $(".support-options").classList.add("hidden");
            $(".support-header").classList.add("hidden");
            $("#breatheSection").classList.remove("hidden");
        });

        $("#breatheBack").addEventListener("click", () => {
            $("#breatheSection").classList.add("hidden");
            $(".support-options").classList.remove("hidden");
            $(".support-header").classList.remove("hidden");
        });

        let breatheRunning = false;
        $("#breatheCircle").addEventListener("click", () => {
            if (breatheRunning) return;
            breatheRunning = true;
            breatheCycle();
        });

        function breatheCycle() {
            const circle = $("#breatheCircle");
            const text = $("#breatheText");

            // Inhale 4s
            text.textContent = "Вдох...";
            circle.className = "breathe-circle inhale";
            setTimeout(() => {
                // Hold 7s
                text.textContent = "Задержка...";
                circle.className = "breathe-circle hold";
                setTimeout(() => {
                    // Exhale 8s
                    text.textContent = "Выдох...";
                    circle.className = "breathe-circle exhale";
                    setTimeout(() => {
                        circle.className = "breathe-circle";
                        text.textContent = "Начать";
                        breatheRunning = false;
                    }, 8000);
                }, 7000);
            }, 4000);
        }

        // Hotlines
        $("#hotlineBtn").addEventListener("click", () => {
            $(".support-options").classList.add("hidden");
            $(".support-header").classList.add("hidden");
            $("#hotlineSection").classList.remove("hidden");
        });

        $("#hotlineBack").addEventListener("click", () => {
            $("#hotlineSection").classList.add("hidden");
            $(".support-options").classList.remove("hidden");
            $(".support-header").classList.remove("hidden");
        });

        // Anon Chat
        $("#anonChatBtn").addEventListener("click", () => {
            $(".support-options").classList.add("hidden");
            $(".support-header").classList.add("hidden");
            $("#anonChatSection").classList.remove("hidden");
            startAnonChat();
        });

        $("#anonBack").addEventListener("click", () => {
            $("#anonChatSection").classList.add("hidden");
            $(".support-options").classList.remove("hidden");
            $(".support-header").classList.remove("hidden");
        });
    }

    function renderMoodHistory() {
        const container = $("#moodHistory");
        const moodEmojis = { great: "😄", good: "🙂", neutral: "😐", bad: "😔", awful: "😢" };

        container.innerHTML = state.moodEntries.map(e => `
            <div class="mood-entry">
                <div class="mood-emoji">${moodEmojis[e.mood] || "😐"}</div>
                <div class="mood-entry-content">
                    <p>${e.text || "Без записи"}</p>
                    <div class="mood-date">${new Date(e.time).toLocaleString("ru-RU")}</div>
                </div>
            </div>
        `).join("");
    }

    function startAnonChat() {
        const container = $("#anonMessages");
        container.innerHTML = "";

        const botMessages = [
            "Привет! Я здесь, чтобы выслушать тебя. Как ты себя чувствуешь? 💜",
            "Это нормально — чувствовать себя так. Ты не один(а).",
            "Расскажи мне больше, если хочешь. Я слушаю.",
            "Помни: просить помощи — это проявление силы, а не слабости.",
            "Ты молодец, что решил(а) поговорить. Это важный шаг.",
            "Я понимаю тебя. Иногда всем бывает тяжело.",
            "Ты заслуживаешь поддержки и заботы 🤗",
            "Если тебе нужна профессиональная помощь, не стесняйся обратиться на горячую линию.",
        ];
        let botIndex = 0;

        // Initial bot message
        setTimeout(() => {
            addAnonMessage(botMessages[botIndex++], false);
        }, 1000);

        const sendAnon = () => {
            const input = $("#anonInput");
            const text = input.value.trim();
            if (!text) return;
            addAnonMessage(text, true);
            input.value = "";

            // Bot reply
            setTimeout(() => {
                if (botIndex < botMessages.length) {
                    addAnonMessage(botMessages[botIndex++], false);
                } else {
                    addAnonMessage(randItem(botMessages.slice(1)), false);
                }
            }, 1500 + Math.random() * 2000);
        };

        // Remove old listeners
        const newSendBtn = $("#anonSendBtn").cloneNode(true);
        $("#anonSendBtn").replaceWith(newSendBtn);
        const newInput = $("#anonInput").cloneNode(true);
        $("#anonInput").replaceWith(newInput);

        $("#anonSendBtn").addEventListener("click", sendAnon);
        $("#anonInput").addEventListener("keypress", e => { if (e.key === "Enter") sendAnon(); });
    }

    function addAnonMessage(text, isSent) {
        const container = $("#anonMessages");
        const div = document.createElement("div");
        div.className = `message ${isSent ? 'sent' : 'received'}`;
        div.innerHTML = `${text}<span class="msg-time">${formatTime(Date.now())}</span>`;
        container.appendChild(div);
        container.scrollTop = container.scrollHeight;
    }

    // ============ PROFILE ============

    function initProfile() {
        renderProfile();

        $("#editProfileBtn").addEventListener("click", () => {
            const me = state.currentUser;
            $("#editName").value = me.name;
            $("#editUni").value = me.uni || "";
            $("#editBio").value = me.bio || "";

            renderHobbiesGrid("editHobbiesGrid");
            setTimeout(() => {
                $$('#editHobbiesGrid .hobby-chip').forEach(chip => {
                    if (me.hobbies.includes(chip.dataset.id)) {
                        chip.classList.add("selected");
                    }
                });
            }, 0);

            $("#editProfileModal").classList.remove("hidden");
        });

        $("#cancelEdit").addEventListener("click", () => {
            $("#editProfileModal").classList.add("hidden");
        });

        $("#saveEdit").addEventListener("click", () => {
            const me = state.currentUser;
            me.name = $("#editName").value.trim() || me.name;
            me.uni = $("#editUni").value.trim();
            me.bio = $("#editBio").value.trim();
            me.hobbies = [...$$('#editHobbiesGrid .hobby-chip.selected')].map(c => c.dataset.id);

            if (me.hobbies.length === 0) {
                toast("Выбери хотя бы один интерес!", "error");
                return;
            }

            saveState();
            renderProfile();
            renderCurrentUserInfo();
            buildGraph();
            $("#editProfileModal").classList.add("hidden");
            toast("Профиль обновлён! ✨", "success");
        });

        $("#logoutBtn").addEventListener("click", () => {
            state.currentUser.online = false;
            state.currentUser = null;
            saveState();
            location.reload();
        });
    }

    function renderProfile() {
        const me = state.currentUser;
        const color = getAvatarColor(me.name);

        $("#profileAvatar").style.background = `linear-gradient(135deg, ${color}, ${color}99)`;
        $("#profileAvatar").textContent = getInitials(me.name);
        $("#profileName").textContent = me.name;
        $("#profileUsername").textContent = "@" + me.username;
        $("#profileUni").innerHTML = me.uni ? `<i class="fas fa-graduation-cap"></i> ${me.uni}` : "";
        $("#profileBio").textContent = me.bio || "";

        const hobbiesContainer = $("#profileHobbies");
        hobbiesContainer.innerHTML = me.hobbies.map(hid => {
            const h = ALL_HOBBIES.find(x => x.id === hid);
            return h ? `<span class="hobby-chip selected">${h.icon} ${h.name}</span>` : "";
        }).join("");

        $("#statFriends").textContent = me.friends.length;
        $("#statGroups").textContent = me.joinedGroups.length;
        $("#statMessages").textContent = me.messageCount || 0;
    }

    function showUserProfile(user) {
        const modal = $("#userProfileModal");
        const content = $("#userProfileContent");
        const me = state.currentUser;
        const commonHobbies = user.hobbies.filter(h => me.hobbies.includes(h));
        const isFriend = me.friends.includes(user.id);
        const color = getAvatarColor(user.name);

        const hobbiesHtml = user.hobbies.map(hid => {
            const h = ALL_HOBBIES.find(x => x.id === hid);
            const isCommon = me.hobbies.includes(hid);
            return h ? `<span class="hobby-chip ${isCommon ? 'selected' : ''}">${h.icon} ${h.name}</span>` : "";
        }).join("");

        content.innerHTML = `
            <div style="text-align:center">
                <div class="node-avatar" style="background:${color};margin:0 auto 12px">${getInitials(user.name)}</div>
                <h3>${user.name}</h3>
                <p style="color:var(--text-secondary);font-size:13px">@${user.username}</p>
                ${user.uni ? `<p style="color:var(--text-muted);font-size:12px;margin-top:4px"><i class="fas fa-graduation-cap"></i> ${user.uni}</p>` : ''}
                <p style="color:var(--text-secondary);font-size:13px;margin-top:8px">${user.bio || ''}</p>
                <div style="display:flex;flex-wrap:wrap;gap:6px;justify-content:center;margin:16px 0">${hobbiesHtml}</div>
                <p style="color:var(--text-muted);font-size:12px">🎯 ${commonHobbies.length} общих интересов · 👥 ${user.friends.length} друзей</p>
                <div style="display:flex;gap:8px;margin-top:16px;justify-content:center">
                    <button class="btn-primary" id="modalMsgBtn">💬 Написать</button>
                    ${!isFriend ? `<button class="btn-secondary" id="modalFriendBtn">➕ В друзья</button>` : ''}
                </div>
            </div>
        `;

        modal.classList.remove("hidden");

        setTimeout(() => {
            const msgBtn = $("#modalMsgBtn");
            if (msgBtn) msgBtn.addEventListener("click", () => {
                modal.classList.add("hidden");
                startChatWith(user.id);
            });
            const friendBtn = $("#modalFriendBtn");
            if (friendBtn) friendBtn.addEventListener("click", () => {
                if (!me.friends.includes(user.id)) {
                    me.friends.push(user.id);
                    user.friends.push(me.id);
                    saveState();
                    toast(`${user.name} добавлен(а) в друзья!`, "success");
                    modal.classList.add("hidden");
                    buildGraph();
                }
            });
        }, 0);

        $("#closeUserProfile").addEventListener("click", () => {
            modal.classList.add("hidden");
        });
    }

    // ============ INIT ============

    function init() {
        const loaded = loadState();

        if (!loaded || state.users.length === 0) {
            state.users = generateUsers();
            state.groups = JSON.parse(JSON.stringify(GROUPS));
            // Re-assign groups
            state.users.forEach(u => {
                u.joinedGroups = [];
                state.groups.forEach(g => {
                    g.members = g.members || [];
                    if (u.hobbies.includes(g.hobby) && Math.random() > 0.3) {
                        if (!g.members.includes(u.id)) g.members.push(u.id);
                        if (!u.joinedGroups.includes(g.id)) u.joinedGroups.push(g.id);
                    }
                });
            });
            saveState();
        }

        if (state.currentUser) {
            // Ensure currentUser reference is updated
            const found = state.users.find(u => u.id === state.currentUser.id);
            if (found) {
                state.currentUser = found;
                found.online = true;
                enterApp();
                return;
            }
        }

        initAuth();
    }

    init();

})();
