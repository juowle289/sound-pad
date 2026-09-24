// ============================================================
// SÂN KHẤU ÂM THANH — TRUNG THU
// Dữ liệu cue + toàn bộ logic phát/dừng/fade/phím tắt
// ============================================================
//
// Mỗi cue có:
//   id       — định danh duy nhất, dùng nội bộ (không hiển thị)
//   label    — số hiển thị ở góc thẻ (chuỗi, có thể là "14-15")
//   keyBind  — số phím tắt 1-8 (null = không có phím tắt, chỉ click)
//   group    — "intro" | "tietmuc" | "kich"

const CUES = [
  // ---------- NHÓM A — GIỚI THIỆU ----------
  {
    id: "intro-0",
    label: "0",
    keyBind: 0,
    group: "intro",
    tag: "NHÓM A",
    type: "NHAC",
    title: "Nhạc Nền",
    subtitle: "Liên khúc nhạc Trung Thu",
    src: "audio/lien-khuc-nhac-trung-thu.mp3",
    defaultVolume: 0.85,
  },
  {
    id: "intro-1",
    label: "1",
    keyBind: 1,
    group: "intro",
    tag: "KHAI MẠC",
    type: "NHAC",
    title: "Giới thiệu đại biểu",
    subtitle: "Nền dài khi mời khách",
    src: "audio/gioi-thieu-db.mp3",
    defaultVolume: 0.85,
  },
  {
    id: "intro-2",
    label: "2",
    keyBind: 2,
    group: "intro",
    tag: "KHAI MẠC",
    type: "NHAC",
    title: "Bước lên sân khấu",
    subtitle: "Nhạc dẫn vào chương trình",
    src: "audio/buoc-len-san-khau.mp3",
    defaultVolume: 0.85,
  },
  {
    id: "intro-3",
    label: "3",
    keyBind: 3,
    group: "intro",
    tag: "GIỚI THIỆU",
    type: "NHAC",
    title: "Tặng hoa",
    subtitle: "Nhạc chúc mừng / tặng hoa",
    src: "audio/tang-hoa.mp3",
    defaultVolume: 0.85,
  },

  // ---------- NHÓM B — TIẾT MỤC (chỉ click, không phím tắt) ----------
  {
    id: "tietmuc-1",
    label: "1",
    keyBind: null,
    group: "tietmuc",
    tag: "TIẾT MỤC",
    type: "NHAC",
    title: "Chiếc Đèn Ông Sao",
    subtitle: "",
    src: "audio/tiet-muc/1-chiec-den-ong-sao(1).mp3",
    defaultVolume: 0.85,
  },
  {
    id: "tietmuc-2",
    label: "2",
    keyBind: null,
    group: "tietmuc",
    tag: "TIẾT MỤC",
    type: "NHAC",
    title: "Kiếp Sau Vẫn Là Người Việt Nam",
    subtitle: "",
    src: "audio/tiet-muc/2-kiep-sau-van-la-nguoi-VN.mp3",
    defaultVolume: 0.85,
  },
  {
    id: "tietmuc-3",
    label: "3",
    keyBind: null,
    group: "tietmuc",
    tag: "TIẾT MỤC",
    type: "NHAC",
    title: "Mashup Thanh Xuân",
    subtitle: "",
    src: "audio/tiet-muc/3-mashup-thanh-xuan(1).mp3",
    defaultVolume: 0.85,
  },
  {
    id: "tietmuc-4",
    label: "4",
    keyBind: null,
    group: "tietmuc",
    tag: "TIẾT MỤC",
    type: "NHAC",
    title: "Bài Ca Mùa Hạ",
    subtitle: "",
    src: "audio/tiet-muc/4-bai-ca-mua-ha.mp3",
    defaultVolume: 0.85,
  },
  {
    id: "tietmuc-5",
    label: "5",
    keyBind: null,
    group: "tietmuc",
    tag: "TIẾT MỤC",
    type: "NHAC",
    title: "Mashup Cô Gái Mở Đường",
    subtitle: "",
    src: "audio/tiet-muc/5-mashup-co-gai-mo-duong.mp3",
    defaultVolume: 0.85,
  },
  {
    id: "tietmuc-6",
    label: "6",
    keyBind: null,
    group: "tietmuc",
    tag: "TIẾT MỤC",
    type: "NHAC",
    title: "Để Mị Nói Cho Mà Nghe",
    subtitle: "",
    src: "audio/tiet-muc/6-de-mi-noi-cho-ma-nghe.mp3",
    defaultVolume: 0.85,
  },
  {
    id: "tietmuc-7",
    label: "7",
    keyBind: null,
    group: "tietmuc",
    tag: "TIẾT MỤC",
    type: "NHAC",
    title: "Mashup Giai Điệu Tự Hào",
    subtitle: "",
    src: "audio/tiet-muc/7-mashup-giai-dieu-tu-hao.mp3",
    defaultVolume: 0.85,
  },
  {
    id: "tietmuc-8",
    label: "8",
    keyBind: null,
    group: "tietmuc",
    tag: "TIẾT MỤC",
    type: "NHAC",
    title: "Vỗ Tay",
    subtitle: "",
    src: "audio/tiet-muc/8-vo-tay.mp3",
    defaultVolume: 0.85,
  },
  {
    id: "tietmuc-9",
    label: "9",
    keyBind: null,
    group: "tietmuc",
    tag: "TIẾT MỤC",
    type: "NHAC",
    title: "Thằng Cuội",
    subtitle: "",
    src: "audio/tiet-muc/9-thang-cuoi.mp3",
    defaultVolume: 0.85,
  },
  {
    id: "tietmuc-10",
    label: "10",
    keyBind: null,
    group: "tietmuc",
    tag: "TIẾT MỤC",
    type: "NHAC",
    title: "Giai Điệu Việt Nam Mình",
    subtitle: "",
    src: "audio/tiet-muc/10-giai-dieu-VN-minh.mp3",
    defaultVolume: 0.85,
  },
  {
    id: "tietmuc-11",
    label: "11",
    keyBind: null,
    group: "tietmuc",
    tag: "TIẾT MỤC",
    type: "NHAC",
    title: "Má Hồng",
    subtitle: "",
    src: "audio/tiet-muc/11-ma-hong.mp3",
    defaultVolume: 0.85,
  },
  {
    id: "tietmuc-12",
    label: "12",
    keyBind: null,
    group: "tietmuc",
    tag: "TIẾT MỤC",
    type: "NHAC",
    title: "Nhà Tôi Có Treo Một Lá Cờ",
    subtitle: "",
    src: "audio/tiet-muc/12-nha-toi-co-treo-mot-la-co.mp3",
    defaultVolume: 0.85,
  },
  {
    id: "tietmuc-13",
    label: "13",
    keyBind: null,
    group: "tietmuc",
    tag: "TIẾT MỤC",
    type: "NHAC",
    title: "Việt Nam dải lụa",
    subtitle: "",
    src: "audio/tiet-muc/13-VN-dai-lua.mp3",
    defaultVolume: 0.85,
  },
  {
    id: "tietmuc-14-15",
    label: "14-15",
    keyBind: null,
    group: "tietmuc",
    tag: "TIẾT MỤC",
    type: "NHAC",
    title: "Minh Sinh Là Số Một",
    subtitle: "",
    src: "audio/tiet-muc/14-15-minh-sinh-la-so-mot.wav",
    defaultVolume: 0.85,
  },

  // ---------- NHÓM C — KỊCH (giữ nguyên, phím 3–8) ----------
  {
    id: "kich-1",
    label: "4",
    keyBind: 4,
    group: "kich",
    tag: "CẢNH 1",
    type: "FX",
    title: "Cuội làm rơi trăng",
    subtitle: "Vỡ thủy tinh · một phát",
    src: "audio/kich/c1-cuoi-lam-roi-trang.mp3",
    defaultVolume: 0.9,
  },
  {
    id: "kich-2",
    label: "5",
    keyBind: 5,
    group: "kich",
    tag: "CẢNH 1",
    type: "FX",
    title: "Tinh Tú sốc",
    subtitle: "Trống dồn · báo hiệu",
    src: "audio/kich/c1-tinhtu-soc.wav",
    defaultVolume: 0.9,
  },
  {
    id: "kich-4",
    label: "6",
    keyBind: 6,
    group: "kich",
    tag: "CẢNH 2",
    type: "NHAC",
    title: "C &amp; H đùn đẩy nhau",
    subtitle: "Nền vui · cảnh đối thoại",
    src: "audio/kich/c2-ch-dun-day-nhau.mp3",
    defaultVolume: 0.75,
  },
  {
    id: "kich-7",
    label: "7",
    keyBind: null,
    group: "kich",
    tag: "CẢNH 3",
    type: "FX",
    title: "Thần Nghệ Thuật xuất hiện",
    subtitle: "Hiệu ứng cảnh 3",
    src: "audio/c3-than-Nghe-Thuat-xuat-hien.m4a",
    defaultVolume: 0.9,
  },
  {
    id: "kich-4b",
    label: "8",
    keyBind: 8,
    group: "kich",
    tag: "CẢNH 3",
    type: "FX",
    title: "Cuội nhảy -Choi San-",
    subtitle: "Hiệu ứng cảnh 3",
    src: "audio/kich/c3-choisan.mp3",
    defaultVolume: 0.9,
  },
  {
    id: "kich-5",
    label: "9",
    keyBind: 9,
    group: "kich",
    tag: "CẢNH 4",
    type: "CUE",
    title: "Bốn đệ tử xông vào",
    subtitle: "Percussion hành động",
    src: "audio/kich/c4-bon-de-tu-xong-vao.wav",
    defaultVolume: 0.9,
  },
  {
    id: "kich-6",
    label: "10",
    keyBind: null,
    group: "kich",
    tag: "CAO TRÀO",
    type: "NHAC",
    title: "Chiếc Đèn Ông Sao",
    subtitle: "Khúc khải hoàn · có thể lặp",
    src: "audio/tiet-muc/1-chiec-den-ong-sao(1).mp3",
    defaultVolume: 0.85,
    defaultLoop: true,
  },
  {
    id: "kich-final",
    label: "11",
    keyBind: null,
    group: "kich",
    tag: "KẾT THÚC",
    type: "NHAC",
    title: "Kết Thúc-Phá Cỗ",
    subtitle: "Như Có Bác Hồ Trong Ngày Vui Đại Thắng",
    src: "audio/nhu-co-bac-ho-trong-ngay-vui-dai-thang.mp3",
    defaultVolume: 0.85,
  },
];

const TYPE_LABEL = { NHAC: "NHẠC", FX: "FX", CUE: "CUE" };
// Các loại được coi là "nền" — độc quyền khi bật "Một nền nhạc".
// FX luôn được phép chồng lên bất cứ thứ gì.
const BACKGROUND_TYPES = new Set(["NHAC", "CUE"]);

// Tra cứu nhanh cue theo phím tắt (1-8)
const CUES_BY_KEYBIND = new Map(
  CUES.filter((c) => c.keyBind != null).map((c) => [c.keyBind, c]),
);

const state = {
  singleBackground: true,
  fadeDuration: 1.6, // giây
  masterVolume: 0.85,
  masterMuted: false,
  selectedId: null, // cue được chọn gần nhất (cho phím "L")
};

const players = new Map(); // id -> { cue, audio, el, fading, loop, waveTimer }
let audioContext = null;

const els = {};

document.addEventListener("DOMContentLoaded", init);

function init() {
  cacheEls();
  initTheme();
  initCompact();
  buildBoard();
  bindGlobalControls();
  bindKeyboard();
  restorePrefs();
  updateCueCountBadge();
  renderNowPlaying();
  updateStatusLine();
  bindFooterResize();
}

// ------------------------------------------------------------
// Tự đo chiều cao thanh trạng thái đáy để body chừa đủ chỗ
// (quan trọng trên mobile khi nội dung xuống dòng hoặc danh sách
// "đang phát" xuất hiện/dài ra)
// ------------------------------------------------------------

function bindFooterResize() {
  const footer = document.querySelector(".status-bar");
  if (!footer) return;

  const update = () => {
    document.body.style.paddingBottom = footer.offsetHeight + 14 + "px";
  };
  update();

  if ("ResizeObserver" in window) {
    new ResizeObserver(update).observe(footer);
  } else {
    window.addEventListener("resize", update);
  }
}

// ------------------------------------------------------------
// Giao diện sáng / tối
// ------------------------------------------------------------

function initTheme() {
  let saved = null;
  try {
    saved = localStorage.getItem("trungthu-soundboard-theme");
  } catch (e) {
    /* bỏ qua */
  }
  setTheme(saved === "dark" ? "dark" : "light");

  els.themeToggle.addEventListener("click", () => {
    const next =
      document.documentElement.dataset.theme === "light" ? "dark" : "light";
    setTheme(next);
  });
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  els.themeToggle.querySelector("i").className =
    theme === "light" ? "bi bi-sun-fill" : "bi bi-moon-stars-fill";
  try {
    localStorage.setItem("trungthu-soundboard-theme", theme);
  } catch (e) {
    /* bỏ qua nếu trình duyệt chặn localStorage */
  }
}

// ------------------------------------------------------------
// Chế độ thu gọn thẻ (compact)
// ------------------------------------------------------------

function initCompact() {
  let saved = null;
  try {
    saved = localStorage.getItem("trungthu-soundboard-compact");
  } catch (e) {
    /* bỏ qua */
  }
  setCompact(saved === "1");

  els.compactToggle.addEventListener("click", () => {
    setCompact(!document.body.classList.contains("compact-mode"));
  });
}

function setCompact(on) {
  document.body.classList.toggle("compact-mode", on);
  els.compactToggle.querySelector("i").className = on
    ? "bi bi-arrows-angle-expand"
    : "bi bi-arrows-angle-contract";
  els.compactToggle.classList.toggle("is-active", on);
  els.compactToggle.title = on ? "Mở rộng thẻ cue" : "Thu gọn thẻ cue";
  try {
    localStorage.setItem("trungthu-soundboard-compact", on ? "1" : "0");
  } catch (e) {
    /* bỏ qua */
  }
}

function cacheEls() {
  els.groupIntro = document.getElementById("group-intro");
  els.groupTietMuc = document.getElementById("group-tietmuc");
  els.groupKich = document.getElementById("group-kich");
  els.singleBgToggle = document.getElementById("singleBgToggle");
  els.stopAllBtn = document.getElementById("stopAllBtn");
  els.fadeInput = document.getElementById("fadeInput");
  els.cueCount = document.getElementById("cueCount");
  els.statusLine = document.getElementById("statusLine");
  els.nowPlayingBar = document.getElementById("nowPlayingBar");
  els.masterVolume = document.getElementById("masterVolume");
  els.masterVolumeValue = document.getElementById("masterVolumeValue");
  els.masterMuteBtn = document.getElementById("masterMuteBtn");
  els.themeToggle = document.getElementById("themeToggle");
  els.compactToggle = document.getElementById("compactToggle");
}

// ------------------------------------------------------------
// Xây dựng giao diện các thẻ cue
// ------------------------------------------------------------

function buildBoard() {
  CUES.filter((c) => c.group === "intro").forEach((cue) =>
    els.groupIntro.appendChild(renderCueCard(cue)),
  );
  CUES.filter((c) => c.group === "tietmuc").forEach((cue) =>
    els.groupTietMuc.appendChild(renderCueCard(cue)),
  );
  CUES.filter((c) => c.group === "kich").forEach((cue) =>
    els.groupKich.appendChild(renderCueCard(cue)),
  );
}

function renderCueCard(cue) {
  const col = document.createElement("div");
  col.className = "col-12 col-sm-6 col-lg-4 col-xl-3";

  const playTitle = cue.keyBind
    ? `Phát / Tạm dừng (phím ${cue.keyBind})`
    : "Phát / Tạm dừng (click)";
  const watermarkClass =
    cue.label.length > 2
      ? "cue-watermark cue-watermark--wide"
      : "cue-watermark";

  col.innerHTML = `
    <div class="cue-card" data-id="${cue.id}" data-group="${cue.group}" tabindex="0">
      <div class="${watermarkClass}">${cue.label}</div>
      <div class="cue-head">
        <span class="badge-tag">${cue.label}</span>
        <span class="badge-scene">${cue.tag}</span>
        <span class="badge-type badge-type--${cue.type}">${TYPE_LABEL[cue.type]}</span>
        <h3 class="cue-title">${cue.title}</h3>
      </div>
      ${cue.subtitle ? `<p class="cue-subtitle">${cue.subtitle}</p>` : ""}

      <div class="cue-wave" data-role="wave">
        ${Array.from({ length: 28 })
          .map(() => `<span class="wave-bar"></span>`)
          .join("")}
      </div>

      <div class="cue-progress-line">
        <input type="range" class="form-range cue-seek" data-role="seek" min="0" max="1000" value="0" step="1" />
        <span class="cue-time" data-role="time">0:00 / 0:00</span>
      </div>

      <div class="cue-controls">
        <button class="ctrl-btn ctrl-btn--play" data-role="play" title="${playTitle}">
          <i class="bi bi-play-fill"></i>
        </button>
        <button class="ctrl-btn" data-role="stop" title="Dừng &amp; fade">
          <i class="bi bi-square-fill"></i>
        </button>
        <button class="ctrl-btn" data-role="loop" title="Lặp lại (phím L khi được chọn)">
          <i class="bi bi-repeat"></i>
        </button>
        <span class="ctrl-vol">
          <i class="bi bi-volume-up" data-role="vol-icon"></i>
          <input type="range" class="form-range vol-range" data-role="volume" min="0" max="100" value="${Math.round(
            (cue.defaultVolume ?? 0.85) * 100,
          )}" />
        </span>
      </div>
    </div>
  `;

  const cardEl = col.querySelector(".cue-card");
  setupCuePlayer(cue, cardEl);
  return col;
}

// ------------------------------------------------------------
// Khởi tạo player cho từng cue
// ------------------------------------------------------------

function setupCuePlayer(cue, cardEl) {
  const audio = new Audio(cue.src);
  audio.preload = "metadata";
  audio.loop = false; // ta tự quản lý loop để còn fade mượt khi lặp

  const player = {
    cue,
    audio,
    el: cardEl,
    fading: false,
    loop: !!cue.defaultLoop,
    baseVolume: cue.defaultVolume ?? 0.85,
    waveTimer: null,
    seeking: false,
    gainNode: null,
  };
  players.set(cue.id, player);

  const seek = cardEl.querySelector('[data-role="seek"]');
  const volRange = cardEl.querySelector('[data-role="volume"]');
  const volIcon = cardEl.querySelector('[data-role="vol-icon"]');
  const timeEl = cardEl.querySelector('[data-role="time"]');
  const playBtn = cardEl.querySelector('[data-role="play"]');
  const stopBtn = cardEl.querySelector('[data-role="stop"]');
  const loopBtn = cardEl.querySelector('[data-role="loop"]');

  if (player.loop) loopBtn.classList.add("is-active");

  audio.addEventListener("loadedmetadata", () => {
    timeEl.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
  });

  audio.addEventListener("timeupdate", () => {
    if (!player.seeking && audio.duration) {
      seek.value = Math.round((audio.currentTime / audio.duration) * 1000);
    }
    timeEl.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
  });

  audio.addEventListener("ended", () => {
    if (player.loop) {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    } else {
      setCardPlayingState(player, false);
      renderNowPlaying();
      updateStatusLine();
    }
  });

  audio.addEventListener("play", () => {
    setCardPlayingState(player, true);
    startWave(player);
    renderNowPlaying();
    updateStatusLine();
  });

  audio.addEventListener("pause", () => {
    setCardPlayingState(player, false);
    stopWave(player);
    renderNowPlaying();
    updateStatusLine();
  });

  playBtn.addEventListener("click", () => {
    selectCue(cue.id);
    togglePlay(cue.id);
  });

  stopBtn.addEventListener("click", () => {
    selectCue(cue.id);
    fadeStop(cue.id, state.fadeDuration);
  });

  loopBtn.addEventListener("click", () => {
    player.loop = !player.loop;
    loopBtn.classList.toggle("is-active", player.loop);
  });

  seek.addEventListener("input", () => {
    player.seeking = true;
    if (audio.duration) {
      timeEl.textContent = `${formatTime((seek.value / 1000) * audio.duration)} / ${formatTime(audio.duration)}`;
    }
  });
  seek.addEventListener("change", () => {
    if (audio.duration) {
      audio.currentTime = (seek.value / 1000) * audio.duration;
    }
    player.seeking = false;
  });

  volRange.addEventListener("input", () => {
    player.baseVolume = volRange.value / 100;
    applyVolume(player);
    volIcon.className =
      "bi " +
      (player.baseVolume === 0
        ? "bi-volume-mute"
        : player.baseVolume < 0.5
          ? "bi-volume-down"
          : "bi-volume-up");
    savePrefs();
  });

  applyVolume(player);

  cardEl.addEventListener("click", (e) => {
    if (!e.target.closest("input") && !e.target.closest("button")) {
      selectCue(cue.id);
    }
  });
}

function setCardPlayingState(player, isPlaying) {
  player.el.classList.toggle("is-playing", isPlaying);
  const icon = player.el.querySelector('[data-role="play"] i');
  icon.className = isPlaying ? "bi bi-pause-fill" : "bi bi-play-fill";
}

// ------------------------------------------------------------
// Phát / dừng / fade
// ------------------------------------------------------------

function togglePlay(id) {
  const player = players.get(id);
  if (!player) return;

  if (!player.audio.paused) {
    player.audio.pause();
    return;
  }

  player.fading = false;
  resumeAudioContext(player);
  applyVolume(player);

  // "Một nền nhạc": khi bật, cue thuộc nhóm nền (NHAC/CUE) sẽ làm fade-dừng
  // các cue nền khác đang phát (bất kể thuộc nhóm A/B/C nào). FX luôn được phép chồng.
  if (state.singleBackground && BACKGROUND_TYPES.has(player.cue.type)) {
    players.forEach((other, otherId) => {
      if (
        otherId !== id &&
        BACKGROUND_TYPES.has(other.cue.type) &&
        !other.audio.paused
      ) {
        fadeStop(otherId, state.fadeDuration);
      }
    });
  }

  player.audio.play().catch((err) => {
    console.error("Không phát được:", player.cue.title, err);
    flashStatus(
      `Không thể phát "${player.cue.title}". Kiểm tra lại file âm thanh.`,
    );
  });
}

function fadeStop(id, duration) {
  const player = players.get(id);
  if (!player || player.audio.paused) return;
  if (player.fading) return;

  player.fading = true;
  const audio = player.audio;
  const startVol = player.gainNode ? player.gainNode.gain.value : audio.volume;
  const startTime = performance.now();
  const durMs = Math.max(duration, 0.05) * 1000;

  function step(now) {
    if (!player.fading) return; // đã bị huỷ / phát lại
    const t = Math.min(1, (now - startTime) / durMs);
    setPlayerOutputVolume(player, startVol * (1 - t));
    if (t < 1) {
      requestAnimationFrame(step);
    } else {
      audio.pause();
      audio.currentTime = 0;
      player.fading = false;
      applyVolume(player); // khôi phục volume gốc cho lần phát sau
    }
  }
  requestAnimationFrame(step);
}

function fadeStopAll(duration) {
  let any = false;
  players.forEach((player, id) => {
    if (!player.audio.paused) {
      any = true;
      fadeStop(id, duration);
    }
  });
  flashStatus(
    any
      ? `Đang dừng dần tất cả (fade ${duration.toFixed(1)}s)…`
      : "Không có cue nào đang phát.",
  );
}

function applyVolume(player) {
  const master = state.masterMuted ? 0 : state.masterVolume;
  setPlayerOutputVolume(player, player.baseVolume * master);
}

function resumeAudioContext(player) {
  if (!window.AudioContext && !window.webkitAudioContext) return;

  try {
    if (!audioContext) {
      const AudioContextClass =
        window.AudioContext || window.webkitAudioContext;
      audioContext = new AudioContextClass();
    }
    if (!player.gainNode) {
      const source = audioContext.createMediaElementSource(player.audio);
      player.gainNode = audioContext.createGain();
      source.connect(player.gainNode);
      player.gainNode.connect(audioContext.destination);
      player.gainNode.gain.value = player.audio.volume;
      player.audio.volume = 1;
    }
    if (audioContext.state === "suspended")
      audioContext.resume().catch(() => {});
  } catch (error) {
    // Keep the native audio path when Web Audio is unavailable.
    player.gainNode = null;
  }
}

function setPlayerOutputVolume(player, volume) {
  const safeVolume = Math.max(0, Math.min(1, volume));
  if (player.gainNode) {
    player.gainNode.gain.value = safeVolume;
  } else {
    player.audio.volume = safeVolume;
  }
}

function applyMasterVolumeToAll() {
  players.forEach((player) => {
    if (!player.fading) applyVolume(player);
  });
}

// ------------------------------------------------------------
// Waveform giả lập khi đang phát
// ------------------------------------------------------------

function startWave(player) {
  const bars = player.el.querySelectorAll(".wave-bar");
  clearInterval(player.waveTimer);
  player.waveTimer = setInterval(() => {
    bars.forEach((bar, i) => {
      const base = 20 + Math.sin(Date.now() / 180 + i) * 15;
      const jitter = Math.random() * 40;
      bar.style.height = `${Math.min(100, Math.max(8, base + jitter))}%`;
    });
  }, 90);
  player.el.querySelector('[data-role="wave"]').classList.add("is-live");
}

function stopWave(player) {
  clearInterval(player.waveTimer);
  player.waveTimer = null;
  const bars = player.el.querySelectorAll(".wave-bar");
  bars.forEach((bar) => (bar.style.height = "6%"));
  player.el.querySelector('[data-role="wave"]').classList.remove("is-live");
}

// ------------------------------------------------------------
// Chọn cue hiện hành (dùng cho phím "L")
// ------------------------------------------------------------

function selectCue(id) {
  state.selectedId = id;
  document.querySelectorAll(".cue-card").forEach((c) => {
    c.classList.toggle("is-selected", c.dataset.id === id);
  });
}

// ------------------------------------------------------------
// Thanh điều khiển chung
// ------------------------------------------------------------

function bindGlobalControls() {
  els.singleBgToggle.checked = state.singleBackground;
  els.singleBgToggle.addEventListener("change", () => {
    state.singleBackground = els.singleBgToggle.checked;
    savePrefs();
  });

  els.stopAllBtn.addEventListener("click", () =>
    fadeStopAll(state.fadeDuration),
  );

  els.fadeInput.value = state.fadeDuration;
  els.fadeInput.addEventListener("change", () => {
    const v = parseFloat(els.fadeInput.value);
    state.fadeDuration = Number.isFinite(v) && v >= 0 ? v : 1.6;
    els.fadeInput.value = state.fadeDuration;
    savePrefs();
  });

  els.masterVolume.value = Math.round(state.masterVolume * 100);
  els.masterVolumeValue.textContent = els.masterVolume.value;
  els.masterVolume.addEventListener("input", () => {
    state.masterVolume = els.masterVolume.value / 100;
    els.masterVolumeValue.textContent = els.masterVolume.value;
    if (state.masterMuted) {
      state.masterMuted = false;
      updateMasterMuteIcon();
    }
    applyMasterVolumeToAll();
    savePrefs();
  });

  els.masterMuteBtn.addEventListener("click", () => {
    state.masterMuted = !state.masterMuted;
    updateMasterMuteIcon();
    applyMasterVolumeToAll();
    savePrefs();
  });
}

function updateMasterMuteIcon() {
  els.masterMuteBtn.querySelector("i").className = state.masterMuted
    ? "bi bi-volume-mute-fill"
    : "bi bi-volume-up-fill";
  els.masterMuteBtn.classList.toggle("is-active", state.masterMuted);
}

function updateCueCountBadge() {
  els.cueCount.textContent = `${CUES.length}/${CUES.length} cue`;
}

// ------------------------------------------------------------
// Thanh trạng thái + danh sách đang phát (đáy màn hình)
// ------------------------------------------------------------

let statusFlashTimer = null;
function flashStatus(text) {
  els.statusLine.textContent = text;
  clearTimeout(statusFlashTimer);
  statusFlashTimer = setTimeout(updateStatusLine, 2600);
}

function updateStatusLine() {
  els.statusLine.textContent =
    "Sẵn sàng — phím 1–8 phát cue (nhóm Giới thiệu & Kịch), Tiết Mục chỉ click, Space dừng dần (fade), L lặp cue đang chọn.";
}

function renderNowPlaying() {
  const playing = Array.from(players.values()).filter((p) => !p.audio.paused);
  els.nowPlayingBar.innerHTML = "";

  if (playing.length === 0) {
    els.nowPlayingBar.classList.add("d-none");
    return;
  }
  els.nowPlayingBar.classList.remove("d-none");

  playing.forEach((p) => {
    const row = document.createElement("div");
    row.className = "now-row";
    row.dataset.id = p.cue.id;
    row.innerHTML = `
      <span class="now-key">${p.cue.label}</span>
      <span class="now-title">${p.cue.title}</span>
      <span class="now-time" data-role="now-time">0:00 / 0:00</span>
      <input class="now-progress" data-role="now-seek" type="range" min="0" max="1000" value="0" step="1" aria-label="Tua đến vị trí trong cue" />
      <button class="now-stop" data-role="now-stop" title="Dừng &amp; fade">
        <i class="bi bi-square-fill"></i>
      </button>
    `;
    row
      .querySelector('[data-role="now-stop"]')
      .addEventListener("click", () => {
        fadeStop(p.cue.id, state.fadeDuration);
      });
    const nowSeek = row.querySelector('[data-role="now-seek"]');
    nowSeek.addEventListener("input", () => {
      if (p.audio.duration) {
        p.audio.currentTime = (nowSeek.value / 1000) * p.audio.duration;
      }
    });
    els.nowPlayingBar.appendChild(row);
  });

  requestAnimationFrame(tickNowPlaying);
}

let nowPlayingRaf = null;
function tickNowPlaying() {
  cancelAnimationFrame(nowPlayingRaf);
  const rows = els.nowPlayingBar.querySelectorAll(".now-row");
  if (!rows.length) return;

  rows.forEach((row) => {
    const id = row.dataset.id;
    const player = players.get(id);
    if (!player || player.audio.paused) return;
    const { currentTime, duration } = player.audio;
    const seek = row.querySelector('[data-role="now-seek"]');
    const timeEl = row.querySelector('[data-role="now-time"]');
    if (duration) {
      if (document.activeElement !== seek) {
        seek.value = Math.round((currentTime / duration) * 1000);
      }
    }
    timeEl.textContent = `${formatTime(currentTime)} / ${formatTime(duration)}`;
  });

  nowPlayingRaf = requestAnimationFrame(tickNowPlaying);
}

// ------------------------------------------------------------
// Phím tắt
// ------------------------------------------------------------

function bindKeyboard() {
  window.addEventListener("keydown", (e) => {
    const target = e.target;
    const isTextEntry =
      target instanceof HTMLElement &&
      (target.matches("textarea") ||
        target.matches("input:not([type='range'])") ||
        target.isContentEditable);

    if (isTextEntry) return;

    const activeEl = document.activeElement;
    if (activeEl && activeEl.matches("input[type='range']")) {
      activeEl.blur();
    }

    if (/^Digit[0-9]$/.test(e.code)) {
      const digit = Number(e.code.replace("Digit", ""));
      const cue = CUES_BY_KEYBIND.get(digit);
      if (cue) {
        selectCue(cue.id);
        togglePlay(cue.id);
      }
      e.preventDefault();
      return;
    }

    if (e.code === "Space") {
      e.preventDefault();
      fadeStopAll(state.fadeDuration);
      return;
    }

    if (e.key.toLowerCase() === "l") {
      if (state.selectedId && players.has(state.selectedId)) {
        const player = players.get(state.selectedId);
        player.loop = !player.loop;
        player.el
          .querySelector('[data-role="loop"]')
          .classList.toggle("is-active", player.loop);
        flashStatus(
          `Lặp lại "${player.cue.title}": ${player.loop ? "BẬT" : "TẮT"}.`,
        );
      } else {
        flashStatus("Chưa chọn cue nào để bật/tắt lặp. Bấm vào một thẻ trước.");
      }
    }

    if (e.key.toLowerCase() === "m") {
      els.masterMuteBtn.click();
    }
  });
}

// ------------------------------------------------------------
// Ghi nhớ tuỳ chọn (localStorage) — tiện khi tổng duyệt nhiều lần
// ------------------------------------------------------------

function savePrefs() {
  const volumes = {};
  players.forEach((p, id) => (volumes[id] = Math.round(p.baseVolume * 100)));
  const prefs = {
    singleBackground: state.singleBackground,
    fadeDuration: state.fadeDuration,
    masterVolume: state.masterVolume,
    masterMuted: state.masterMuted,
    volumes,
  };
  try {
    localStorage.setItem("trungthu-soundboard-prefs", JSON.stringify(prefs));
  } catch (e) {
    /* im lặng bỏ qua nếu trình duyệt chặn localStorage (vd. mở trực tiếp file://) */
  }
}

function restorePrefs() {
  let raw = null;
  try {
    raw = localStorage.getItem("trungthu-soundboard-prefs");
  } catch (e) {
    return;
  }
  if (!raw) return;
  try {
    const prefs = JSON.parse(raw);
    if (typeof prefs.singleBackground === "boolean") {
      state.singleBackground = prefs.singleBackground;
      els.singleBgToggle.checked = state.singleBackground;
    }
    if (typeof prefs.fadeDuration === "number") {
      state.fadeDuration = prefs.fadeDuration;
      els.fadeInput.value = state.fadeDuration;
    }
    if (typeof prefs.masterVolume === "number") {
      state.masterVolume = prefs.masterVolume;
      els.masterVolume.value = Math.round(state.masterVolume * 100);
      els.masterVolumeValue.textContent = els.masterVolume.value;
    }
    if (typeof prefs.masterMuted === "boolean") {
      state.masterMuted = prefs.masterMuted;
      updateMasterMuteIcon();
    }
    if (prefs.volumes) {
      Object.entries(prefs.volumes).forEach(([id, vol]) => {
        const player = players.get(id);
        if (player) {
          player.baseVolume = vol / 100;
          const volRange = player.el.querySelector('[data-role="volume"]');
          if (volRange) volRange.value = vol;
          applyVolume(player);
        }
      });
    }
  } catch (e) {
    /* dữ liệu hỏng, bỏ qua */
  }
}

// ------------------------------------------------------------
// Tiện ích
// ------------------------------------------------------------

function formatTime(sec) {
  if (!Number.isFinite(sec) || sec < 0) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}
