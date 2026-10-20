const STORAGE_KEY = "nasa_ascan_supernova_v4";
const ACCOUNTS_DB_KEY = "nasa_ascan_accounts_supernova_v4";
const SESSION_ACTIVE_KEY = "nasa_ascan_session_supernova_v4";
const IDB_NAME = "NASAAscanDB";
const IDB_VERSION = 1;

// All 30 Pages Metadata for Navigation, Sub-Nav & Deep Search
const ALL_PAGES = [
  {
    id: "home",
    cat: "main",
    nav: "home",
    title: "Home",
    desc: "Space-themed hero section, 4 pillars, featured modules & live progress ring",
  },
  {
    id: "about",
    cat: "main",
    nav: "home",
    title: "About the Program",
    desc: "NASA Astronaut Candidate (ASCAN) adult training concept & goals",
  },
  {
    id: "how-it-works",
    cat: "main",
    nav: "home",
    title: "How Training Works",
    desc: "5-stage journey from enlistment to flight readiness certification",
  },
  {
    id: "skills",
    cat: "main",
    nav: "home",
    title: "Skills You’ll Build",
    desc: "Problem-solving, Crew Resource Management, MET time & O2 budgeting",
  },
  {
    id: "training-paths",
    cat: "main",
    nav: "home",
    title: "Training Paths",
    desc: "Level 1 ASCAN Basic, Level 2 EVA/Robotics, Level 3 Artemis Commander",
  },
  {
    id: "supernova",
    cat: "main",
    nav: "supernova",
    title: "Team SuperNova",
    desc: "Meet Team SuperNova — the developers and engineers behind Astronaut Mission Trainer",
  },

  {
    id: "create-account",
    cat: "account",
    nav: "profile",
    title: "Create an Account",
    desc: "Astronaut candidate enlistment saved in browser database",
  },
  {
    id: "login",
    cat: "account",
    nav: "profile",
    title: "Log In",
    desc: "Authentication to access trainee telemetry dashboard",
  },
  {
    id: "profile",
    cat: "account",
    nav: "profile",
    title: "Profile",
    desc: "Trainee callsign, astronaut avatar, STEM specialty & preferences",
  },
  {
    id: "dashboard",
    cat: "account",
    nav: "profile",
    title: "Dashboard",
    desc: "Progress ring, completed modules, upcoming OSTP tasks & points",
  },
  {
    id: "achievements",
    cat: "account",
    nav: "achievements",
    title: "Achievements",
    desc: "NASA Silver/Gold Wings, NBL Diver, Canadarm2 Operator & EVA pins",
  },

  {
    id: "training-center",
    cat: "modules",
    nav: "training",
    title: "Training Center",
    desc: "Master list of all 9 NASA training modules by status",
  },
  {
    id: "mod-spacecraft",
    cat: "modules",
    nav: "training",
    title: "Spacecraft Systems",
    desc: "ISS ECLSS, iROSA EPS, 6600-RPM CMG GNC, TCS & Orion ESM",
  },
  {
    id: "mod-spacesuit",
    cat: "modules",
    nav: "training",
    title: "Spacesuit Training",
    desc: "EMU 4.3 psia pressure, LCVG cooling, SAFER nitrogen pack & leak check",
  },
  {
    id: "mod-microgravity",
    cat: "modules",
    nav: "training",
    title: "Microgravity Training",
    desc: "2D zero-G physics thruster simulation & NBL tool capture",
  },
  {
    id: "mod-robotics",
    cat: "modules",
    nav: "training",
    title: "Robotics Training",
    desc: "17.6m Canadarm2 (SSRMS) 7-DOF command sequence puzzle",
  },
  {
    id: "mod-navigation",
    cat: "modules",
    nav: "training",
    title: "Space Navigation",
    desc: "LEO 408km phasing, Artemis II TLI free-return & Gateway NRHO",
  },
  {
    id: "mod-comms",
    cat: "modules",
    nav: "training",
    title: "Communications Training",
    desc: "Houston CAPCOM S/G loops, 2525Hz Quindar tones & TDRSS link",
  },
  {
    id: "mod-survival",
    cat: "modules",
    nav: "training",
    title: "Survival & Emergency",
    desc: "Big 3 ISS emergencies (Depressurization, NH3 Leak, Fire) & water landing",
  },
  {
    id: "mod-fitness",
    cat: "modules",
    nav: "training",
    title: "Fitness & Readiness",
    desc: "ARED vacuum resistance, T2 COLBERT treadmill & CEVIS ergometer",
  },
  {
    id: "mod-teamwork",
    cat: "modules",
    nav: "training",
    title: "Teamwork Training",
    desc: "Crew role assignment & consensus solar storm EVA decision",
  },

  {
    id: "simulation-center",
    cat: "sims",
    nav: "missions",
    title: "Simulation Center",
    desc: "Hub for Launch, Spacewalk, Landing & Space Games",
  },
  {
    id: "sim-launch",
    cat: "sims",
    nav: "missions",
    title: "Launch Simulation",
    desc: "Pad 39B Go/No-Go poll, T-10s countdown, Max-Q & MECO orbit insertion",
  },
  {
    id: "sim-spacewalk",
    cat: "sims",
    nav: "missions",
    title: "Spacewalk Simulation",
    desc: "US EVA S1 Truss Pump Module repair with Pistol Grip Tool (PGT)",
  },
  {
    id: "sim-landing",
    cat: "sims",
    nav: "missions",
    title: "Landing Simulation",
    desc: "Orion -5.8° entry interface, 2760°C plasma blackout & chute splashdown",
  },
  {
    id: "daily-missions",
    cat: "sims",
    nav: "missions",
    title: "Daily Missions",
    desc: "Dynamic JS-generated ISS Onboard Short Term Plan (OSTP) tasks",
  },
  {
    id: "mission-details",
    cat: "sims",
    nav: "missions",
    title: "Mission Details",
    desc: "Pre-flight Flight Data File objectives, steps, time limits & points",
  },
  {
    id: "games",
    cat: "sims",
    nav: "games",
    title: "Space Games Arcade",
    desc: "4 playable 60FPS space games: Debris Dodge, Dragon Docking, Lunar Lander & Reflex Matrix",
  },

  {
    id: "knowledge",
    cat: "info",
    nav: "knowledge",
    title: "Knowledge Library",
    desc: "Verified NASA encyclopedia articles on ISS, Orion, NBL, EMU & T-38",
  },
  {
    id: "faq",
    cat: "info",
    nav: "knowledge",
    title: "FAQ",
    desc: "Frequently asked questions about NASA ASCAN standards & prototype",
  },
  {
    id: "help",
    cat: "info",
    nav: "knowledge",
    title: "Help & Support",
    desc: "Trainee guide & demo Flight Operations Support contact form",
  },
  {
    id: "settings",
    cat: "info",
    nav: "profile",
    title: "Settings & Privacy",
    desc: "Theme, Web Audio Quindar tones & localStorage privacy",
  },
];

// Default initial state matching the screenshot (8/12 modules, 2/5 active missions, 1,250 points, 65% progress)
const DEFAULT_STATE = {
  user: {
    name: "New Astronaut Candidate",
    callsign: "ASCAN-01",
    email: "",
    specialty: "Aerospace Engineering",
    avatar: "👩‍🚀",
    path: "ASCAN Basic Foundations",
    units: "Metric (SI / NASA Dual)",
    loggedIn: false,
  },
  settings: {
    theme: "dark",
    sound: true,
    lang: "en",
  },
  points: 0,
  activeMissionsCount: 0,
  totalMissionsCount: 5,
  moduleStatus: {
    "mod-spacecraft": "available",
    "mod-spacesuit": "available",
    "mod-microgravity": "available",
    "mod-robotics": "available",
    "mod-navigation": "available",
    "mod-comms": "available",
    "mod-survival": "available",
    "mod-fitness": "available",
    "mod-teamwork": "available",
    "sim-launch": "available",
    "sim-spacewalk": "available",
    "sim-landing": "available",
  },
  fitnessMins: { ared: 0, t2: 0, cevis: 0 },
  supportTickets: [],
};

let accountsDB = loadAccountsDB();
let appState = loadAppState();
let currentView = "home";
let currentModuleFilter = "all";
let currentSearchFilter = "all";

// =========================================================================
// PERSISTENT DUAL-LAYER DATABASE ENGINE (IndexedDB + localStorage Mirror)
// =========================================================================
function openIndexedDB() {
  return new Promise((resolve, reject) => {
    if (!window.indexedDB) return resolve(null);
    const req = window.indexedDB.open(IDB_NAME, IDB_VERSION);
    req.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains("trainees")) {
        db.createObjectStore("trainees", { keyPath: "email" });
      }
      if (!db.objectStoreNames.contains("kv")) {
        db.createObjectStore("kv", { keyPath: "key" });
      }
    };
    req.onsuccess = (e) => resolve(e.target.result);
    req.onerror = () => resolve(null);
  });
}

async function syncToIndexedDB() {
  try {
    const db = await openIndexedDB();
    if (!db) return;
    const tx = db.transaction(["trainees", "kv"], "readwrite");
    const store = tx.objectStore("trainees");
    const kv = tx.objectStore("kv");
    Object.values(accountsDB).forEach((acc) => {
      if (acc && acc.user && acc.user.email) {
        store.put({ email: acc.user.email.toLowerCase(), state: acc });
      }
    });
    kv.put({ key: "activeState", value: appState });
    kv.put({ key: "accountsDB", value: accountsDB });
  } catch (e) {}
}

async function restoreFromIndexedDBIfNeeded() {
  try {
    const db = await openIndexedDB();
    if (!db) return;
    const tx = db.transaction(["kv"], "readonly");
    const kv = tx.objectStore("kv");
    const req = kv.get("activeState");
    req.onsuccess = () => {
      if (
        req.result &&
        req.result.value &&
        !localStorage.getItem(STORAGE_KEY)
      ) {
        appState = req.result.value;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
        syncAllTelemetryUI();
      }
    };
  } catch (e) {}
}

function loadAccountsDB() {
  try {
    const raw = localStorage.getItem(ACCOUNTS_DB_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === "object") return parsed;
    }
  } catch (e) {}
  return {};
}
function getSavedAccounts() {
  return accountsDB || {};
}
function switchGateTab(tab) {
  switchAuthGateTab(tab);
}
function toggleMobileDrawer() {
  const dr = document.getElementById("mobile-nav-drawer");
  if (dr) dr.classList.toggle("hidden");
}
function closeMobileDrawer() {
  const dr = document.getElementById("mobile-nav-drawer");
  if (dr) dr.classList.add("hidden");
}
function handleHeaderUserClick() {
  if (!appState.user || !appState.user.loggedIn) {
    pendingTargetPage = "profile";
    openAuthGateModal("signup");
  } else {
    navigateTo("profile");
  }
}
function updateHeaderAuthUI() {
  const callEl = document.getElementById("header-user-callsign");
  const avEl = document.getElementById("header-user-avatar");
  const dotEl = document.getElementById("header-auth-dot");
  const dropEl = document.getElementById("dropdown-user-callsign");
  const startLbl = document.getElementById("header-start-btn-label");
  if (appState.user && appState.user.loggedIn) {
    if (callEl) callEl.textContent = appState.user.callsign || "ASCAN-01";
    if (avEl) avEl.textContent = appState.user.avatar || "👩‍🚀";
    if (dotEl) dotEl.className = "w-1.5 h-1.5 rounded-full bg-emerald-400";
    if (dropEl)
      dropEl.textContent =
        "CALLSIGN: " + (appState.user.callsign || "ASCAN-01");
    if (startLbl) startLbl.textContent = "Continue Training";
  } else {
    if (callEl) callEl.textContent = "SIGN IN";
    if (avEl) avEl.textContent = "👩‍🚀";
    if (dotEl)
      dotEl.className = "w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse";
    if (dropEl) dropEl.textContent = "STATUS: UNREGISTERED";
    if (startLbl) startLbl.textContent = "Start Training";
  }
}

function loadAppState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return Object.assign({}, DEFAULT_STATE, parsed, {
        user: Object.assign({}, DEFAULT_STATE.user, parsed.user || {}),
        settings: Object.assign(
          {},
          DEFAULT_STATE.settings,
          parsed.settings || {},
        ),
        moduleStatus: Object.assign(
          {},
          DEFAULT_STATE.moduleStatus,
          parsed.moduleStatus || {},
        ),
        completedDailies: Object.assign({}, parsed.completedDailies || {}),
      });
    }
  } catch (e) {}
  return JSON.parse(JSON.stringify(DEFAULT_STATE));
}

function saveAppState() {
  try {
    const emailKey = (
      appState.user.email || "commander@jsc.nasa.gov"
    ).toLowerCase();
    accountsDB[emailKey] = JSON.parse(JSON.stringify(appState));
    localStorage.setItem(ACCOUNTS_DB_KEY, JSON.stringify(accountsDB));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
    syncToIndexedDB();
  } catch (e) {}
  syncAllTelemetryUI();
}

// First-Time Visitor Authentication Gate Logic
function openAuthGateModal(defaultTab = "signup") {
  const gate = document.getElementById("auth-gate-overlay");
  if (gate) {
    gate.classList.remove("hidden");
    const savedAccounts = getSavedAccounts();
    if (Object.keys(savedAccounts).length > 0 && defaultTab === "login") {
      switchGateTab("login");
    } else {
      switchGateTab("signup");
    }
  }
}

function checkAuthGateOnStartup() {
  const activeEmail = localStorage.getItem(SESSION_ACTIVE_KEY);
  const savedAccounts = getSavedAccounts();
  if (activeEmail && savedAccounts[activeEmail]) {
    const acct = savedAccounts[activeEmail];
    appState.user = Object.assign({}, appState.user, acct.user, {
      loggedIn: true,
    });
    appState.points = acct.points ?? 0;
    appState.moduleStatus = Object.assign(
      {},
      DEFAULT_STATE.moduleStatus,
      acct.moduleStatus || {},
    );
    appState.fitnessMins = Object.assign(
      {},
      DEFAULT_STATE.fitnessMins,
      acct.fitnessMins || {},
    );
  } else {
    appState.user.loggedIn = false;
    appState.points = 0;
    Object.keys(appState.moduleStatus).forEach(
      (k) => (appState.moduleStatus[k] = "available"),
    );
  }
  updateHeaderAuthUI();
  syncAllTelemetryUI();
}

function switchAuthGateTab(tab) {
  const loginForm = document.getElementById("gate-login-form");
  const signupForm = document.getElementById("gate-signup-form");
  const tLogin = document.getElementById("gate-tab-login");
  const tSignup = document.getElementById("gate-tab-signup");
  if (tab === "signup") {
    loginForm.classList.add("hidden");
    signupForm.classList.remove("hidden");
    tSignup.className =
      "px-4 py-2 rounded-lg text-xs font-bold bg-amber-500 text-slate-950 transition";
    tLogin.className =
      "px-4 py-2 rounded-lg text-xs font-bold bg-slate-900 text-slate-300 hover:text-white transition";
  } else {
    signupForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
    tLogin.className =
      "px-4 py-2 rounded-lg text-xs font-bold bg-amber-500 text-slate-950 transition";
    tSignup.className =
      "px-4 py-2 rounded-lg text-xs font-bold bg-slate-900 text-slate-300 hover:text-white transition";
  }
}

function renderSavedAccountsChips() {
  const entries = Object.values(accountsDB);
  const gateBox = document.getElementById("gate-saved-accounts-box");
  const gateList = document.getElementById("gate-saved-accounts-list");
  const pageList = document.getElementById("login-saved-accounts-list");
  const html = entries
    .map((acc) => {
      const em = acc.user.email;
      const cs = acc.user.callsign;
      const pts = acc.points || 0;
      return `<button type="button" onclick="selectSavedAccount('${em}')" class="px-2.5 py-1 rounded-full bg-slate-800 hover:bg-sky-900 border border-sky-500/30 text-[11px] text-sky-300 font-mono-tech transition">${acc.user.avatar || "👩‍🚀"} ${cs} (${pts} PTS)</button>`;
    })
    .join("");
  if (gateBox && gateList) {
    gateBox.classList.toggle("hidden", entries.length === 0);
    gateList.innerHTML = html;
  }
  if (pageList) pageList.innerHTML = html;
}

function selectSavedAccount(email) {
  const gInput = document.getElementById("gate-login-id");
  if (gInput) gInput.value = email;
  const pInput = document.getElementById("login-identifier");
  if (pInput) pInput.value = email;
  showToast(`Selected account: ${email}`);
}

function findAccountByIdentifier(identifier) {
  const clean = (identifier || "").trim().toLowerCase();
  if (!clean) return null;
  if (accountsDB[clean]) return accountsDB[clean];
  return (
    Object.values(accountsDB).find(
      (a) =>
        (a.user.email && a.user.email.toLowerCase() === clean) ||
        (a.user.callsign && a.user.callsign.toLowerCase() === clean) ||
        (a.user.name && a.user.name.toLowerCase() === clean),
    ) || null
  );
}

function handleGateLogin(e) {
  e.preventDefault();
  const idVal = document.getElementById("gate-login-id").value.trim();
  const found = findAccountByIdentifier(idVal);
  if (found) {
    appState = JSON.parse(JSON.stringify(found));
  } else {
    const newState = JSON.parse(JSON.stringify(DEFAULT_STATE));
    newState.user.email = idVal.includes("@")
      ? idVal.toLowerCase()
      : `${idVal.toLowerCase()}@jsc.nasa.gov`;
    newState.user.callsign = idVal.includes("@")
      ? idVal.split("@")[0].toUpperCase()
      : idVal.toUpperCase();
    newState.user.name = "Astronaut " + newState.user.callsign;
    appState = newState;
  }
  appState.user.loggedIn = true;
  localStorage.setItem(SESSION_ACTIVE_KEY, appState.user.email);
  document.getElementById("auth-gate-overlay").classList.add("hidden");
  updateHeaderAuthUI();
  saveAppState();
  playQuindarBeep();
  showToast(
    `Welcome, ${appState.user.name} (${appState.user.callsign})! Telemetry online.`,
  );
  navigateTo(pendingTargetPage || "training-center");
}

function handleGateSignup(e) {
  e.preventDefault();
  const name = document.getElementById("gate-signup-name").value.trim();
  const callsign = document
    .getElementById("gate-signup-callsign")
    .value.trim()
    .toUpperCase();
  const email = document
    .getElementById("gate-signup-email")
    .value.trim()
    .toLowerCase();
  const pass = document.getElementById("gate-signup-pass").value;
  const spec = document.getElementById("gate-signup-specialty").value;
  const path = document.getElementById("gate-signup-path").value;

  const newState = JSON.parse(JSON.stringify(DEFAULT_STATE));
  newState.user = {
    name: name || "Capt. Omar Hassan",
    callsign: callsign || "HORUS-1",
    email: email || "omar@jsc.nasa.gov",
    passcode: pass || "NASA2026",
    specialty: spec,
    avatar: "👩‍🚀",
    path: path,
    units: "Metric (SI / NASA Dual)",
    loggedIn: true,
  };
  newState.points = 0; // Starts at 0% and 0 points from scratch!
  appState = newState;
  localStorage.setItem(SESSION_ACTIVE_KEY, appState.user.email);
  document.getElementById("auth-gate-overlay").classList.add("hidden");
  updateHeaderAuthUI();
  saveAppState();
  playQuindarBeep();
  showToast(
    `Welcome aboard, ${appState.user.name} (${appState.user.callsign})! Starting at 0% — let's begin training!`,
  );
  navigateTo(pendingTargetPage || "training-center");
}

function logoutTrainee() {
  appState.user.loggedIn = false;
  localStorage.removeItem(SESSION_ACTIVE_KEY);
  updateHeaderAuthUI();
  syncAllTelemetryUI();
  renderSavedAccountsChips();
  navigateTo("home");
  showToast("Signed out safely. Your progress is saved in the database.");
}

function exportDatabaseBackup() {
  const payload = {
    exportedAt: new Date().toISOString(),
    activeAccount: appState.user.email,
    activeState: appState,
    accountsDB: accountsDB,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `nasa_astronaut_trainer_db_${appState.user.callsign.toLowerCase()}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast("Exported complete database backup (.json)!");
}

function importDatabaseBackup(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (data.accountsDB) accountsDB = data.accountsDB;
      if (data.activeState) appState = data.activeState;
      localStorage.setItem(SESSION_ACTIVE_KEY, "true");
      saveAppState();
      showToast("Database backup restored successfully!");
    } catch (err) {
      showToast("Invalid JSON backup file.");
    }
  };
  reader.readAsText(file);
}

// Web Audio API Synthesizer for NASA Quindar Tones & UI Clicks
let audioCtx = null;
function playTone(freq = 2525, duration = 0.14, type = "sine", gainVal = 0.06) {
  if (!appState.settings.sound) return;
  try {
    if (!audioCtx)
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === "suspended") audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(gainVal, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(
      0.001,
      audioCtx.currentTime + duration,
    );
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {}
}

function playQuindarBeep() {
  playTone(2525, 0.24, "sine", 0.09);
  showToast("Transmitted NASA 2,525 Hz Intro Quindar PTT Tone");
}

function showToast(msg) {
  const el = document.getElementById("app-toast");
  const txt = document.getElementById("app-toast-msg");
  if (!el || !txt) return;
  txt.textContent = msg;
  el.classList.remove("hidden");
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => el.classList.add("hidden"), 3600);
}

// Navigation Engine across all 30 views
let pendingTargetPage = "training-center";

const PROTECTED_PAGES = new Set([
  "training-center",
  "mod-spacecraft",
  "mod-spacesuit",
  "mod-microgravity",
  "mod-robotics",
  "mod-navigation",
  "mod-comms",
  "mod-survival",
  "mod-fitness",
  "mod-teamwork",
  "simulation-center",
  "sim-launch",
  "sim-spacewalk",
  "sim-landing",
  "daily-missions",
  "mission-details",
  "dashboard",
  "achievements",
  "profile",
]);

function startTrainingAction(targetPage = "training-center") {
  if (!appState.user || !appState.user.loggedIn) {
    pendingTargetPage = targetPage;
    openAuthGateModal("signup");
    showToast(
      "Please register your Astronaut Candidate profile first to unlock training!",
    );
    return;
  }
  navigateTo(targetPage);
}

function navigateTo(pageId) {
  if (
    PROTECTED_PAGES.has(pageId) &&
    (!appState.user || !appState.user.loggedIn)
  ) {
    pendingTargetPage = pageId;
    openAuthGateModal("signup");
    showToast(
      "Please register or sign in first to access training & mission telemetry!",
    );
    return;
  }
  playTone(1200, 0.05, "sine", 0.03);
  const views = document.querySelectorAll(".page-view");
  views.forEach((v) => v.classList.add("hidden"));
  const target = document.getElementById("page-" + pageId);
  if (target) {
    target.classList.remove("hidden");
    currentView = pageId;
  } else {
    document.getElementById("page-home").classList.remove("hidden");
    currentView = "home";
  }

  const meta = ALL_PAGES.find((p) => p.id === currentView) || ALL_PAGES[0];
  document.querySelectorAll("#primary-nav .nav-link").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-nav") === meta.nav);
  });

  renderContextualSubNav(meta.cat);
  window.scrollTo({ top: 0, behavior: "smooth" });

  if (currentView === "mod-microgravity") {
    setTimeout(resizeMicroGCanvas, 60);
  }
  if (currentView === "games") {
    setTimeout(initArcadeCanvas, 60);
  }
}

function renderContextualSubNav(cat) {
  const bar = document.getElementById("ContextualSubNav");
  if (!bar) return;
  const groupPages = ALL_PAGES.filter((p) => p.cat === cat);
  bar.innerHTML = groupPages
    .map((p) => {
      const activeCls = p.id === currentView ? "active" : "";
      return `<button onclick="navigateTo('${p.id}')" class="subnav-pill ${activeCls}">${p.title}</button>`;
    })
    .join("");
}

function toggleDirectoryDrawer() {
  openSearchModal();
}

function openIntroModal() {
  document.getElementById("intro-modal").classList.remove("hidden");
  playQuindarBeep();
}
function closeIntroModal() {
  document.getElementById("intro-modal").classList.add("hidden");
}

// =========================================================================
// FULL-SITE DEEP SEARCH ENGINE (Indexes all 30 pages, subsystems, sims, articles & FAQs)
// =========================================================================
function buildFullSearchIndex() {
  const idx = [];
  // 1. All 30 Pages
  ALL_PAGES.forEach((p) => {
    idx.push({
      type: "page",
      badge: "PAGE",
      title: `${p.title} `,
      subtitle: p.desc,
      keywords: `${p.title} ${p.ar} ${p.desc} ${p.cat}`.toLowerCase(),
      action: () => navigateTo(p.id),
    });
  });

  // 2. Spacecraft Subsystems
  SUBSYSTEMS_DATA.forEach((s, i) => {
    const specStr = s.specs.map((x) => `${x[0]} ${x[1]}`).join(" ");
    idx.push({
      type: "subsystem",
      badge: "NASA SUBSYSTEM",
      title: s.title,
      subtitle: `${s.code} — ${s.summary}`,
      keywords: `${s.code} ${s.title} ${s.summary} ${specStr}   `.toLowerCase(),
      action: () => {
        navigateTo("mod-spacecraft");
        inspectSubsystem(i);
      },
    });
  });

  // 3. Spacesuit Checklist Steps
  SUIT_STEPS.forEach((st) => {
    idx.push({
      type: "subsystem",
      badge: "EMU SPACESUIT",
      title: st.name,
      subtitle: st.detail,
      keywords:
        `${st.name} ${st.detail} emu xemu suit 4.3 psia lcvg safer  `.toLowerCase(),
      action: () => navigateTo("mod-spacesuit"),
    });
  });

  // 4. Navigation Routes
  NAV_ROUTES.forEach((nr, i) => {
    idx.push({
      type: "subsystem",
      badge: "ORBITAL TRAJECTORY",
      title: nr.name,
      subtitle: `${nr.orbit} · ${nr.dv}`,
      keywords: `${nr.name} ${nr.orbit} ${nr.dv} ${nr.notes}   `.toLowerCase(),
      action: () => {
        navigateTo("mod-navigation");
        selectNavRoute(i);
      },
    });
  });

  // 5. Mission Briefings & Simulations
  Object.keys(MISSION_DETAILS_DB).forEach((k) => {
    const m = MISSION_DETAILS_DB[k];
    idx.push({
      type: "sim",
      badge: "MISSION BRIEFING",
      title: m.title,
      subtitle: `${m.objective} (${m.points})`,
      keywords:
        `${m.title} ${m.objective} ${m.steps.join(" ")}  `.toLowerCase(),
      action: () => openMissionDetails(k),
    });
  });

  // 6. Daily Missions Pool
  DAILY_POOL.forEach((d) => {
    idx.push({
      type: "sim",
      badge: "DAILY MISSION (OSTP)",
      title: `${d.code}: ${d.title}`,
      subtitle: `${d.desc} (+${d.pts} PTS)`,
      keywords: `${d.code} ${d.title} ${d.desc}  `.toLowerCase(),
      action: () => navigateTo("daily-missions"),
    });
  });

  // 7. Badges & Certifications
  BADGES_DATA.forEach((b) => {
    idx.push({
      type: "subsystem",
      badge: "FLIGHT CERTIFICATION",
      title: `${b.icon} ${b.title}`,
      subtitle: b.desc,
      keywords:
        `${b.title} ${b.desc} badge wings certification  `.toLowerCase(),
      action: () => navigateTo("achievements"),
    });
  });

  // 8. Knowledge Library Articles
  KNOWLEDGE_ARTICLES.forEach((a) => {
    idx.push({
      type: "knowledge",
      badge: "KNOWLEDGE ARTICLE",
      title: a.title,
      subtitle: a.body,
      keywords: `${a.cat} ${a.title} ${a.body}   `.toLowerCase(),
      action: () => {
        navigateTo("knowledge");
        const inp = document.getElementById("knowledge-search-input");
        if (inp) {
          inp.value = a.title.split(" ")[0];
          filterKnowledgeLibrary();
        }
      },
    });
  });

  // 9. FAQs
  FAQ_ITEMS.forEach((f, i) => {
    idx.push({
      type: "knowledge",
      badge: "FAQ ANSWER",
      title: f.q,
      subtitle: f.a,
      keywords: `${f.q} ${f.a}  `.toLowerCase(),
      action: () => {
        navigateTo("faq");
        const body = document.getElementById("faq-body-" + i);
        if (body) body.classList.remove("hidden");
      },
    });
  });

  return idx;
}

function openSearchModal() {
  const m = document.getElementById("search-modal");
  m.classList.remove("hidden");
  const inp = document.getElementById("global-search-input");
  inp.value = "";
  runGlobalSearch();
  setTimeout(() => inp.focus(), 50);
}

function closeSearchModal() {
  document.getElementById("search-modal").classList.add("hidden");
}

function setSearchFilter(filt) {
  currentSearchFilter = filt;
  ["all", "page", "subsystem", "sim", "knowledge"].forEach((k) => {
    const b = document.getElementById("sfilt-" + k);
    if (b) b.classList.toggle("active", k === filt);
  });
  runGlobalSearch();
}

let _cachedSearchIndex = null;
function runGlobalSearch() {
  if (!_cachedSearchIndex) _cachedSearchIndex = buildFullSearchIndex();
  const q = (document.getElementById("global-search-input").value || "")
    .toLowerCase()
    .trim();
  const box = document.getElementById("global-search-results");
  const cnt = document.getElementById("search-result-count");
  const matches = _cachedSearchIndex.filter((item, index) => {
    item._idx = index;
    const catOk =
      currentSearchFilter === "all" || item.type === currentSearchFilter;
    if (!catOk) return false;
    if (!q) return true;
    return item.keywords.includes(q);
  });

  if (cnt)
    cnt.textContent = `${matches.length} result${matches.length === 1 ? "" : "s"}`;
  box.innerHTML = matches.length
    ? matches
        .map(
          (item) => `
        <button onclick="triggerSearchResult(${item._idx})" class="w-full text-left p-3 rounded-xl bg-slate-900/90 hover:bg-sky-950/80 border border-slate-800 hover:border-sky-500/40 flex items-start justify-between gap-3 transition">
          <div>
            <div class="flex items-center gap-2 mb-0.5">
              <span class="px-2 py-0.5 rounded bg-sky-500/15 text-sky-300 font-mono-tech text-[10px] font-bold">${item.badge}</span>
              <span class="font-bold text-white text-xs sm:text-sm">${item.title}</span>
            </div>
            <div class="text-slate-400 text-[11px] line-clamp-2">${item.subtitle}</div>
          </div>
          <span class="text-amber-400 font-mono-tech text-xs shrink-0 mt-1">OPEN →</span>
        </button>
      `,
        )
        .join("")
    : `<div class="p-6 text-center text-slate-400">No matching NASA records found for "${q}". Try searching "ECLSS", "4.3 psia", "Canadarm2", "Launch", or "NBL".</div>`;
}

function triggerSearchResult(index) {
  if (!_cachedSearchIndex || !_cachedSearchIndex[index]) return;
  closeSearchModal();
  _cachedSearchIndex[index].action();
}

// Global keyboard shortcut Ctrl+K / Cmd+K for Search & ESC to close modals
window.addEventListener("keydown", (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    openSearchModal();
  } else if (e.key === "Escape") {
    closeSearchModal();
    closeIntroModal();
  }
});

// Calculate progress & update Home widget + Dashboard + Profile + Header
function syncAllTelemetryUI() {
  const statuses = Object.values(appState.moduleStatus);
  const totalCount = statuses.length; // 12
  const completedCount = statuses.filter((s) => s === "completed").length;
  const inProgCount = statuses.filter((s) => s === "in-progress").length;
  // Match exact 65% when 8/12 completed as shown in screenshot
  const pct = Math.round((completedCount / totalCount) * 100);

  // Home Widget
  const homePct = document.getElementById("home-progress-pct");
  if (homePct) homePct.textContent = pct + "%";
  const homeCircle = document.getElementById("home-progress-circle");
  if (homeCircle) {
    const circum = 201;
    homeCircle.setAttribute(
      "stroke-dashoffset",
      String(Math.round(circum * (1 - pct / 100))),
    );
  }
  const homeMods = document.getElementById("home-stat-modules");
  if (homeMods) homeMods.textContent = `${completedCount} / ${totalCount}`;
  const homeMissions = document.getElementById("home-stat-missions");
  if (homeMissions) homeMissions.textContent = `${inProgCount} / 5`;
  const homeMsg = document.getElementById("home-progress-msg");
  if (homeMsg)
    homeMsg.textContent = !appState.user.loggedIn
      ? "Register to begin at 0%"
      : pct === 0
        ? "Ready for Module 01!"
        : pct === 100
          ? "Flight Certified!"
          : "Training in progress!";
  const homePts = document.getElementById("home-stat-points");
  if (homePts) homePts.textContent = appState.points.toLocaleString();

  // Header bar
  const hdrPts = document.getElementById("header-points-display");
  if (hdrPts) hdrPts.textContent = `${appState.points.toLocaleString()} PTS`;
  const hdrPct = document.getElementById("header-progress-display");
  if (hdrPct) hdrPct.textContent = `${pct}%`;
  const hdrCall = document.getElementById("header-user-callsign");
  if (hdrCall) hdrCall.textContent = appState.user.callsign;
  const hdrAv = document.getElementById("header-user-avatar");
  if (hdrAv) hdrAv.textContent = appState.user.avatar || "👩‍🚀";
  const dropCall = document.getElementById("dropdown-user-callsign");
  if (dropCall) dropCall.textContent = `CALLSIGN: ${appState.user.callsign}`;
  const dbAccLabel = document.getElementById("db-active-account-label");
  if (dbAccLabel)
    dbAccLabel.textContent = `${appState.user.name} (${appState.user.email})`;

  // Dashboard
  const dashPct = document.getElementById("dash-progress-pct");
  if (dashPct) dashPct.textContent = pct + "%";
  const dashRing = document.getElementById("dash-progress-ring");
  if (dashRing) {
    const c2 = 251.2;
    dashRing.setAttribute(
      "stroke-dashoffset",
      String(Math.round(c2 * (1 - pct / 100))),
    );
  }
  const dashPts = document.getElementById("dash-points-val");
  if (dashPts) dashPts.textContent = appState.points.toLocaleString();
  const dashMods = document.getElementById("dash-modules-val");
  if (dashMods) dashMods.textContent = `${completedCount} / ${totalCount}`;
  const dashPath = document.getElementById("dash-active-path-label");
  if (dashPath) dashPath.textContent = `Active Path: ${appState.user.path}`;

  // Dashboard upcoming tasks
  const upBox = document.getElementById("dash-upcoming-list");
  if (upBox) {
    const pending = ALL_PAGES.filter(
      (p) =>
        appState.moduleStatus[p.id] &&
        appState.moduleStatus[p.id] !== "completed",
    ).slice(0, 4);
    upBox.innerHTML = pending.length
      ? pending
          .map(
            (p) => `
          <div class="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between">
            <div>
              <div class="font-semibold text-white">${p.title}</div>
              <div class="text-[11px] text-slate-400">${p.desc}</div>
            </div>
            <button onclick="navigateTo('${p.id}')" class="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 font-semibold hover:bg-amber-500 hover:text-slate-950 transition">Launch</button>
          </div>
        `,
          )
          .join("")
      : `<div class="p-3 rounded bg-emerald-500/15 text-emerald-300">All 12 ASCAN modules & simulations completed! You are Flight-Certified.</div>`;
  }

  // Profile
  const pName = document.getElementById("profile-display-name");
  if (pName) pName.textContent = appState.user.name;
  const pCall = document.getElementById("profile-display-callsign");
  if (pCall) pCall.textContent = `CALLSIGN: ${appState.user.callsign}`;
  const pSpec = document.getElementById("profile-display-specialty");
  if (pSpec)
    pSpec.textContent = `${appState.user.specialty} · ${appState.user.path}`;
  const pAv = document.getElementById("profile-avatar-badge");
  if (pAv) pAv.textContent = appState.user.avatar;
  const pStatPts = document.getElementById("profile-stat-pts");
  if (pStatPts) pStatPts.textContent = appState.points.toLocaleString();
  const pStatMods = document.getElementById("profile-stat-mods");
  if (pStatMods) pStatMods.textContent = `${completedCount}/${totalCount}`;

  // Populate Profile Inputs
  const inName = document.getElementById("prof-input-name");
  if (inName && document.activeElement !== inName)
    inName.value = appState.user.name;
  const inCall = document.getElementById("prof-input-callsign");
  if (inCall && document.activeElement !== inCall)
    inCall.value = appState.user.callsign;
  const inAv = document.getElementById("prof-input-avatar");
  if (inAv) inAv.value = appState.user.avatar;
  const inPath = document.getElementById("prof-input-path");
  if (inPath) inPath.value = appState.user.path;
  const inUnits = document.getElementById("prof-input-units");
  if (inUnits) inUnits.value = appState.user.units;

  renderTrainingCenterGrid();
  renderAchievementsGrid();
  renderSavedAccountsChips();
  updateHeaderAuthUI();
}

function markModuleComplete(
  modId,
  bonusPoints = 150,
  label = "Training Module",
) {
  const prev = appState.moduleStatus[modId];
  appState.moduleStatus[modId] = "completed";
  if (prev !== "completed") {
    appState.points += bonusPoints;
    playQuindarBeep();
    showToast(
      `Completed ${label}! +${bonusPoints} NASA Readiness Points (Saved to DB)`,
    );
  } else {
    playTone(1600, 0.12);
    showToast(`${label} re-verified! Telemetry nominal.`);
  }
  saveAppState();
}

// Page 3: How Training Works interactive phase selector
const JOURNEY_PHASES = [
  {
    tag: "MONTHS 1–6 · JSC BUILDING 9 & ELLINGTON FIELD",
    title: "ASCAN Indoctrination, Water Survival & T-38 Jet Qualification",
    body: "Candidates complete military water survival prior to flying the Northrop T-38N Talon supersonic jet (900 hrs/yr fleet ops), learn ISS architectural overview, and earn SCUBA qualification for the Neutral Buoyancy Laboratory.",
  },
  {
    tag: "MONTHS 7–15 · SONNY CARTER NBL & CANADARM2 SES LAB",
    title: "Extravehicular Activity (EVA) & 7-DOF Robotics Mastery",
    body: "Candidates perform 6-hour underwater runs in the 6.2-million-gallon Neutral Buoyancy Lab wearing weighted EMU suits at 4.3 psia differential, alongside Canadarm2 free-flyer grapple simulations and Russian language immersion.",
  },
  {
    tag: "MONTHS 16–24 · MISSION CONTROL HOUSTON & ARTEMIS SIMS",
    title:
      "Integrated Mission Simulations, Emergency Fault Trees & Certification",
    body: "Crews train inside high-fidelity ISS and Orion simulators tied to Flight Control Room (FCR-1) controllers, practicing Big-3 cabin emergencies (Fire, Depressurization, Ammonia Leak) to earn NASA Silver Astronaut Pins.",
  },
];
function showJourneyDetail(idx) {
  const d = JOURNEY_PHASES[idx] || JOURNEY_PHASES[0];
  [0, 1, 2].forEach((i) => {
    const b = document.getElementById("journey-btn-" + i);
    if (b) b.classList.toggle("active", i === idx);
  });
  const box = document.getElementById("journey-detail-box");
  if (box) {
    box.innerHTML = `
          <div class="text-xs font-mono-tech text-amber-400 mb-1">${d.tag}</div>
          <div class="text-base font-bold text-white mb-1">${d.title}</div>
          <p class="text-xs text-slate-300 leading-relaxed">${d.body}</p>
        `;
  }
}

// Page 5: Select Training Path
function selectTrainingPath(pathName) {
  appState.user.path = pathName;
  saveAppState();
  showToast(`Enrolled in Training Path: ${pathName}`);
  navigateTo("dashboard");
}

// Page 6, 7, 8: Account, Login & Profile
function handleCreateAccount(e) {
  e.preventDefault();
  const name =
    document.getElementById("signup-name").value.trim() ||
    "Capt. Sara Al-Mansoor";
  const callsign = (
    document.getElementById("signup-callsign").value.trim() || "ORION-7"
  ).toUpperCase();
  const email = document
    .getElementById("signup-email")
    .value.trim()
    .toLowerCase();
  const spec = document.getElementById("signup-specialty").value;
  const path = document.getElementById("signup-path").value;
  const pass = document.getElementById("signup-password").value;

  const newState = JSON.parse(JSON.stringify(DEFAULT_STATE));
  newState.user = {
    name,
    callsign,
    email,
    passcode: pass,
    specialty: spec,
    avatar: "👩‍🚀",
    path,
    units: "Metric (SI / NASA Dual)",
    loggedIn: true,
  };
  newState.points = 0;
  appState = newState;
  localStorage.setItem(SESSION_ACTIVE_KEY, appState.user.email);
  updateHeaderAuthUI();
  saveAppState();
  showToast(
    `Welcome aboard, ${appState.user.name} (${appState.user.callsign})! Starting at 0% — ready for training.`,
  );
  navigateTo("training-center");
}

function handleLogin(e) {
  e.preventDefault();
  const idVal = document.getElementById("login-identifier").value.trim();
  const found = findAccountByIdentifier(idVal);
  if (found) {
    appState = JSON.parse(JSON.stringify(found));
  } else if (idVal) {
    appState.user.email = idVal.toLowerCase();
  }
  appState.user.loggedIn = true;
  localStorage.setItem(SESSION_ACTIVE_KEY, appState.user.email);
  updateHeaderAuthUI();
  saveAppState();
  showToast(
    `Authenticated as ${appState.user.name} (${appState.user.callsign})`,
  );
  navigateTo("dashboard");
}

function quickDemoLogin() {
  const demoState = JSON.parse(JSON.stringify(DEFAULT_STATE));
  demoState.user = {
    name: "Cmdr. Alex Rivera (Judge Demo)",
    callsign: "SUPERNOVA-1",
    email: "judge@supernova.nasa.gov",
    specialty: "Aerospace Engineering & Flight Test",
    avatar: "👩‍🚀",
    path: "Artemis Deep Space Commander",
    units: "Metric (SI / NASA Dual)",
    loggedIn: true,
  };
  demoState.points = 1250;
  [
    "mod-spacecraft",
    "mod-spacesuit",
    "mod-microgravity",
    "mod-robotics",
    "mod-navigation",
    "mod-comms",
    "mod-survival",
    "mod-fitness",
  ].forEach((m) => (demoState.moduleStatus[m] = "completed"));
  appState = demoState;
  localStorage.setItem(SESSION_ACTIVE_KEY, appState.user.email);
  const gate = document.getElementById("auth-gate-overlay");
  if (gate) gate.classList.add("hidden");
  updateHeaderAuthUI();
  saveAppState();
  playQuindarBeep();
  showToast(
    "Judge Demo Astronaut Loaded (65% Progress)! New accounts start at 0%.",
  );
  navigateTo(pendingTargetPage || "dashboard");
}

function saveProfileForm(e) {
  e.preventDefault();
  appState.user.name =
    document.getElementById("prof-input-name").value.trim() ||
    appState.user.name;
  appState.user.callsign = (
    document.getElementById("prof-input-callsign").value.trim() ||
    appState.user.callsign
  ).toUpperCase();
  appState.user.avatar = document.getElementById("prof-input-avatar").value;
  appState.user.path = document.getElementById("prof-input-path").value;
  appState.user.units = document.getElementById("prof-input-units").value;
  saveAppState();
  showToast("Astronaut Trainee Dossier saved to IndexedDB & LocalStorage.");
}

// Page 10: Achievements
const BADGES_DATA = [
  {
    id: "b1",
    icon: "🥈",
    title: "NASA Silver Astronaut Pin",
    reqMod: "mod-spacecraft",
    desc: "Awarded upon mastering ISS & Orion Spacecraft Systems (ECLSS, EPS, GNC).",
  },
  {
    id: "b2",
    icon: "🤿",
    title: "Sonny Carter NBL Diver",
    reqMod: "mod-spacesuit",
    desc: "Certified in 4.3 psia EMU spacesuit pre-breathe and neutral buoyancy protocols.",
  },
  {
    id: "b3",
    icon: "🦾",
    title: "Canadarm2 SSRMS Operator",
    reqMod: "mod-robotics",
    desc: "Qualified on the 17.6m 7-DOF Space Station Remote Manipulator System.",
  },
  {
    id: "b4",
    icon: "🧭",
    title: "Cis-Lunar Navigator",
    reqMod: "mod-navigation",
    desc: "Completed LEO Hohmann transfer and Artemis II Trans-Lunar Injection navigation.",
  },
  {
    id: "b5",
    icon: "📡",
    title: "Houston CAPCOM Voice Cert",
    reqMod: "mod-comms",
    desc: "Mastered TDRSS S-Band/Ku-Band Space-to-Ground loop discipline & Quindar protocols.",
  },
  {
    id: "b6",
    icon: "🚨",
    title: 'ISS "Big Three" Emergency Lead',
    reqMod: "mod-survival",
    desc: "Passed Rapid Depressurization, Toxic Ammonia NH3 & Water Survival scenarios.",
  },
  {
    id: "b7",
    icon: "🏋️",
    title: "Zero-G Countermeasure Pro",
    reqMod: "mod-fitness",
    desc: "Completed daily ARED vacuum resistance, T2 treadmill, and CEVIS cycle protocols.",
  },
  {
    id: "b8",
    icon: "🥇",
    title: "NASA Gold Astronaut Wings",
    reqMod: "sim-launch",
    desc: "Completed full Pad 39B Launch Ascent, EVA Truss Repair & Atmospheric Re-entry.",
  },
];

function renderAchievementsGrid() {
  const g = document.getElementById("achievements-grid");
  if (!g) return;
  let unlockedCount = 0;
  g.innerHTML = BADGES_DATA.map((b) => {
    const unlocked = appState.moduleStatus[b.reqMod] === "completed";
    if (unlocked) unlockedCount++;
    return `
          <div class="space-card p-5 flex flex-col justify-between ${unlocked ? "border-amber-400/50" : "opacity-65"}">
            <div>
              <div class="flex items-center justify-between mb-3">
                <span class="text-3xl">${b.icon}</span>
                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-mono-tech font-bold ${unlocked ? "bg-emerald-500/20 text-emerald-300" : "bg-slate-800 text-slate-400"}">
                  ${unlocked ? "UNLOCKED ✓" : "IN TRAINING"}
                </span>
              </div>
              <h3 class="text-base font-bold text-white mb-1">${b.title}</h3>
              <p class="text-xs text-slate-300 leading-relaxed">${b.desc}</p>
            </div>
            <button onclick="navigateTo('${b.reqMod}')" class="mt-4 text-xs text-amber-400 font-semibold hover:underline text-left">
              ${unlocked ? "Review Module →" : "Complete Required Module →"}
            </button>
          </div>
        `;
  }).join("");
  const pBadge = document.getElementById("profile-stat-badges");
  if (pBadge) pBadge.textContent = String(unlockedCount);
}

// Page 11: Training Center (Lists all 9 modules with status filter)
const TRAINING_MODULES_LIST = [
  {
    id: "mod-spacecraft",
    title: "Spacecraft Systems Training",
    code: "ISS-SYS-101",
    pts: 150,
    desc: "Interactive inspection of ISS ECLSS (98% water recovery), 6,600 RPM CMGs, iROSA arrays & Orion ESM.",
  },
  {
    id: "mod-spacesuit",
    title: "Spacesuit Training (EMU / xEMU)",
    code: "EVA-EMU-102",
    pts: 160,
    desc: "Virtual Quest Airlock suit preparation, 100% O2 nitrogen purge, LCVG cooling & 4.3 psia leak check.",
  },
  {
    id: "mod-microgravity",
    title: "Microgravity Training (Zero-G)",
    code: "NBL-ZRO-103",
    pts: 180,
    desc: "2D physics thruster simulation of mass inertia and EVA tool capture in weightlessness.",
  },
  {
    id: "mod-robotics",
    title: "Robotics Training (Canadarm2)",
    code: "ROB-RMS-104",
    pts: 200,
    desc: "Sequence 7-DOF Space Station Remote Manipulator System (SSRMS) commands to berth cargo.",
  },
  {
    id: "mod-navigation",
    title: "Space Navigation Training",
    code: "GNC-NAV-105",
    pts: 180,
    desc: "Select orbital trajectories (LEO 408 km, Artemis II Free-Return, Gateway NRHO) & verify Δv burns.",
  },
  {
    id: "mod-comms",
    title: "Communications Training",
    code: "COM-CAP-106",
    pts: 120,
    desc: "Simulate Space-to-Ground voice loops between crew and Houston CAPCOM with 2,525 Hz Quindar tones.",
  },
  {
    id: "mod-survival",
    title: "Survival & Emergency Training",
    code: "EMG-SUR-107",
    pts: 200,
    desc: "Make safety-critical decisions during ISS Depressurization, Ammonia leaks & open-water splashdown.",
  },
  {
    id: "mod-fitness",
    title: "Fitness & Readiness Training",
    code: "HHP-FIT-108",
    pts: 110,
    desc: "Log virtual countermeasure workouts on ARED, T2 Treadmill & CEVIS (non-medical simulation).",
  },
  {
    id: "mod-teamwork",
    title: "Teamwork Training (NEEMO/HERA)",
    code: "BHP-CRM-109",
    pts: 150,
    desc: "Assign crew roles and make consensus safety decisions during a solar proton event.",
  },
];

function filterModules(statusFilter) {
  currentModuleFilter = statusFilter;
  ["all", "completed", "in-progress", "available"].forEach((k) => {
    const b = document.getElementById("mod-filter-" + k);
    if (b) b.classList.toggle("active", k === statusFilter);
  });
  renderTrainingCenterGrid();
}

function renderTrainingCenterGrid() {
  const grid = document.getElementById("training-center-grid");
  if (!grid) return;
  const filtered = TRAINING_MODULES_LIST.filter((m) => {
    const st = appState.moduleStatus[m.id] || "available";
    return currentModuleFilter === "all" || st === currentModuleFilter;
  });
  grid.innerHTML = filtered
    .map((m) => {
      const st = appState.moduleStatus[m.id] || "available";
      const badgeStyle =
        st === "completed"
          ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
          : st === "in-progress"
            ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
            : "bg-sky-500/20 text-sky-300 border-sky-500/40";
      const badgeLabel =
        st === "completed"
          ? "COMPLETE ✓"
          : st === "in-progress"
            ? "IN PROGRESS"
            : "AVAILABLE";
      return `
          <div class="space-card p-6 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-3">
                <span class="font-mono-tech text-xs text-slate-400">MODULE · ${m.code}</span>
                <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${badgeStyle}">${badgeLabel}</span>
              </div>
              <h3 class="text-lg font-bold text-white mb-2">${m.title}</h3>
              <p class="text-xs text-slate-300 leading-relaxed mb-4">${m.desc}</p>
            </div>
            <div class="flex items-center justify-between pt-3 border-t border-slate-800/80">
              <span class="text-xs font-mono-tech text-amber-400">+${m.pts} PTS</span>
              <button onclick="navigateTo('${m.id}')" class="btn-orange-pill px-4 py-2 text-xs">Open Module →</button>
            </div>
          </div>
        `;
    })
    .join("");
}

// Page 12: Spacecraft Systems Interactive Inspector
const SUBSYSTEMS_DATA = [
  {
    code: "ECLSS · ISS TRANQUILITY NODE 3",
    title: "Environmental Control and Life Support System (ECLSS)",
    specs: [
      ["Cabin Pressure", "14.7 psia (101.3 kPa) — 78% N₂, 21% O₂"],
      [
        "Water Recovery System (WRS)",
        "98% closed-loop reclamation (Urine Processor + Water Processor Assembly)",
      ],
      [
        "Oxygen Generation System (OGS)",
        "Produces 5.4–9 kg O₂/day via water electrolysis (vents H₂ or feeds Sabatier)",
      ],
      [
        "Carbon Dioxide Removal (CDRA)",
        "Zeolite molecular sieve beds keep ppCO₂ below 3–4 mmHg",
      ],
    ],
    summary:
      "Managed by NASA Marshall & Johnson Space Center, regenerative ECLSS allows astronauts to live for months in orbit without relying solely on cargo resupply water tankers.",
  },
  {
    code: "EPS · ISS INTEGRATED TRUSS S6/S4/P4/P6",
    title: "Electrical Power System (Legacy SAW + iROSA Roll-Out Arrays)",
    specs: [
      [
        "Total Power Output",
        "Up to 215–250 kW peak with 6 new iROSA Roll-Out Solar Arrays",
      ],
      [
        "Primary Bus Voltage",
        "120–160 VDC regulated to 124 VDC Secondary Power Distribution",
      ],
      [
        "Eclipse Storage",
        "24 Lithium-Ion (Li-Ion) Orbital Replacement Unit batteries",
      ],
      [
        "Solar Tracking",
        "Solar Alpha Rotary Joints (SARJ) + Beta Gimbal Assemblies (BGA)",
      ],
    ],
    summary:
      "Because the ISS orbits Earth every 90 minutes (spending ~35 minutes in Earth shadow each orbit), Li-Ion batteries power the station during orbital night.",
  },
  {
    code: "GNC · ISS Z0 TRUSS & RUSSIAN SERVICE MODULE",
    title: "Guidance, Navigation & Control (CMGs & Attitude Control)",
    specs: [
      [
        "Primary Attitude Actuators",
        "4 Double-Gimbal Control Moment Gyroscopes (CMGs) in Z1 Truss",
      ],
      [
        "CMG Flywheel Speed",
        "6,600 RPM (angular momentum 4,745 N·m·s per CMG)",
      ],
      [
        "Sensors",
        "GPS Multipath Receivers, Rate Gyro Assemblies, Star Trackers",
      ],
      [
        "Orbital Reboost",
        "Zvezda / Progress / Cygnus thrusters counter atmospheric drag (~2 km/month)",
      ],
    ],
    summary:
      "CMGs use conservation of angular momentum to maintain ISS Torque Equilibrium Attitude (TEA) without burning chemical propellant.",
  },
  {
    code: "TCS · INTERNAL WATER & EXTERNAL AMMONIA LOOPS",
    title: "Active Thermal Control System (ATCS)",
    specs: [
      [
        "Internal Thermal Loop",
        "Non-toxic chilled water loops (Low-Temp 4°C & Moderate-Temp 17°C)",
      ],
      [
        "Interface Heat Exchangers",
        "Transfers cabin heat across airlock hull to external loops",
      ],
      [
        "External Thermal Loop",
        "Anhydrous Ammonia (NH₃) pumped through S1/P1 Truss radiators",
      ],
      [
        "Solar Load Range",
        "+121°C (+250°F) in direct sunlight to -157°C (-250°F) in shadow",
      ],
    ],
    summary:
      "In vacuum, heat cannot dissipate by convection — only by infrared radiation from the station’s 6 giant rotating radiator wings.",
  },
  {
    code: "ORION ESM · ARTEMIS DEEP SPACE PROPULSION",
    title: "Orion Crew Module & European Service Module (ESM)",
    specs: [
      [
        "Main Engine",
        "Aerojet Rocketdyne OMS-E (Orbital Maneuvering System) — 26.6 kN thrust",
      ],
      [
        "Auxiliary Thrusters",
        "8 × R-4D-11 engines (490 N each) for trajectory correction",
      ],
      [
        "Reaction Control (RCS)",
        "24 × 220 N thrusters using MON-3 / MMH hypergolic propellants",
      ],
      [
        "Exploration Atmosphere",
        "14.7 psia nominal or 8.2 psia (56.5 kPa) 34% O₂ / 66% N₂ for rapid EVA",
      ],
    ],
    summary:
      "Built for NASA’s Artemis lunar missions, Orion carries 4 astronauts beyond Low Earth Orbit and withstands 11 km/s lunar return re-entry.",
  },
];

function inspectSubsystem(idx) {
  const d = SUBSYSTEMS_DATA[idx] || SUBSYSTEMS_DATA[0];
  [0, 1, 2, 3, 4].forEach((i) => {
    const b = document.getElementById("sys-btn-" + i);
    if (b)
      b.className = `w-full text-left p-3.5 rounded-xl bg-slate-900/90 border ${i === idx ? "border-amber-400" : "border-slate-800"} hover:border-amber-400 transition flex items-center justify-between`;
  });
  const panel = document.getElementById("subsystem-detail-panel");
  if (panel) {
    panel.innerHTML = `
          <div class="text-xs font-mono-tech text-sky-400 mb-1">${d.code}</div>
          <h3 class="text-xl font-bold text-white mb-3">${d.title}</h3>
          <p class="text-xs text-slate-300 leading-relaxed mb-4">${d.summary}</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            ${d.specs
              .map(
                (s) => `
              <div class="p-3 rounded-lg bg-slate-950/90 border border-slate-800">
                <div class="text-[10px] font-mono-tech text-amber-400 uppercase">${s[0]}</div>
                <div class="text-xs font-semibold text-white mt-0.5">${s[1]}</div>
              </div>
            `,
              )
              .join("")}
          </div>
        `;
  }
}

function verifyModuleQuiz(modId, isCorrect, feedback) {
  if (isCorrect) {
    markModuleComplete(modId, 150, "Spacecraft Systems Training");
  } else {
    playTone(420, 0.2, "sawtooth", 0.05);
  }
  showToast(feedback);
}

// Page 13: Spacesuit Training Checklist
const SUIT_STEPS = [
  {
    id: 0,
    name: "1. Don Maximum Absorbency Garment (MAG) & Thermal Comfort Undergarment",
    detail: "Essential for 6.5+ hour EVAs inside the Quest Airlock.",
    done: false,
  },
  {
    id: 1,
    name: "2. Don Liquid Cooling and Ventilation Garment (LCVG)",
    detail:
      "91 meters (300 ft) of woven spandex water tubes regulate body heat (400–1,600 BTU/hr).",
    done: false,
  },
  {
    id: 2,
    name: "3. Enter Hard Upper Torso (HUT) & Lock Lower Torso Assembly (LTA)",
    detail: "Connect body seal closure and umbilical water/electrical harness.",
    done: false,
  },
  {
    id: 3,
    name: "4. Attach Snoopy Cap (CCA), EV Visor Assembly & Phase VI Heated Gloves",
    detail:
      "Gold-coated sun visor attenuates UV/IR solar glare; heated fingertips prevent frostbite in shadow.",
    done: false,
  },
  {
    id: 4,
    name: "5. Verify SAFER Nitrogen Thruster Pack (1.4 kg N₂)",
    detail:
      "Simplified Aid For EVA Rescue provides ~3 m/s Δv self-rescue capability if untethered.",
    done: false,
  },
  {
    id: 5,
    name: "6. Complete 100% O₂ Pre-Breathe Nitrogen Purge & Depressurize to 4.3 psia",
    detail:
      "Purges dissolved N₂ from bloodstream to prevent Decompression Sickness (DCS).",
    done: false,
  },
];

function renderSpacesuitChecklist() {
  const box = document.getElementById("suit-checklist-container");
  if (!box) return;
  box.innerHTML = SUIT_STEPS.map(
    (s, idx) => `
        <div onclick="toggleSuitStep(${idx})" class="p-3.5 rounded-xl bg-slate-900/90 border ${s.done ? "border-emerald-500/50" : "border-slate-800"} hover:border-amber-400 cursor-pointer flex items-start justify-between gap-3 transition">
          <div>
            <div class="text-xs font-bold ${s.done ? "text-emerald-300" : "text-white"}">${s.name}</div>
            <div class="text-[11px] text-slate-400 mt-0.5">${s.detail}</div>
          </div>
          <span class="px-2 py-0.5 rounded text-[10px] font-mono-tech ${s.done ? "bg-emerald-500/20 text-emerald-300" : "bg-slate-800 text-slate-400"}">${s.done ? "VERIFIED" : "CHECK"}</span>
        </div>
      `,
  ).join("");

  const doneCount = SUIT_STEPS.filter((s) => s.done).length;
  const badge = document.getElementById("suit-status-badge");
  const press = document.getElementById("suit-press-val");
  const gas = document.getElementById("suit-gas-val");
  const lcvg = document.getElementById("suit-lcvg-val");
  const safer = document.getElementById("suit-safer-val");
  const leak = document.getElementById("suit-leak-val");
  if (doneCount >= 2 && lcvg) lcvg.textContent = "FLOWING (109 kg/hr H₂O)";
  if (doneCount >= 5 && safer) safer.textContent = "ARMED · 1.4 kg GN₂ READY";
  if (doneCount === 6) {
    if (badge) {
      badge.textContent = "4.3 PSIA EVA READY";
      badge.className =
        "px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-xs font-mono-tech";
    }
    if (press) press.textContent = "4.3 psia (29.6 kPa) NOMINAL";
    if (gas) gas.textContent = "100% PURE OXYGEN (N₂ PURGED)";
    if (leak) leak.textContent = "< 0.05 psi/min (PASS)";
  }
}

function toggleSuitStep(idx) {
  SUIT_STEPS[idx].done = !SUIT_STEPS[idx].done;
  playTone(1350, 0.06);
  renderSpacesuitChecklist();
}

function completeSpacesuitInspection() {
  SUIT_STEPS.forEach((s) => (s.done = true));
  renderSpacesuitChecklist();
  markModuleComplete("mod-spacesuit", 160, "Spacesuit Training (EMU)");
}

// Page 14: Microgravity 2D Physics Simulator
const microG = {
  x: 90,
  y: 170,
  vx: 0,
  vy: 0,
  fuel: 100,
  tools: [
    { x: 240, y: 85, name: "Pistol Grip Tool (PGT)", collected: false },
    { x: 430, y: 240, name: "85-ft Safety Tether Reel", collected: false },
    { x: 580, y: 120, name: "ORU Fluid Quick-Disconnect", collected: false },
  ],
};

function resizeMicroGCanvas() {
  const c = document.getElementById("microg-canvas");
  if (!c || !c.parentElement) return;
  c.width = c.parentElement.clientWidth || 720;
  c.height = c.parentElement.clientHeight || 340;
}

function thrustMicroG(dx, dy) {
  if (microG.fuel <= 0) {
    showToast("SAFER N2 Propellant depleted! Click Reset Zero-G Field.");
    return;
  }
  microG.vx = Math.max(-2.2, Math.min(2.2, microG.vx + dx));
  microG.vy = Math.max(-2.2, Math.min(2.2, microG.vy + dy));
  microG.fuel = Math.max(0, microG.fuel - 3);
  playTone(680, 0.05, "triangle", 0.04);
  updateMicroGReadout();
}

function brakeMicroG() {
  microG.vx *= 0.15;
  microG.vy *= 0.15;
  if (Math.abs(microG.vx) < 0.05) microG.vx = 0;
  if (Math.abs(microG.vy) < 0.05) microG.vy = 0;
  playTone(920, 0.07);
  updateMicroGReadout();
}

function resetMicroG() {
  microG.x = 80;
  microG.y = 170;
  microG.vx = 0;
  microG.vy = 0;
  microG.fuel = 100;
  microG.tools.forEach((t, i) => {
    t.collected = false;
    t.x = 200 + i * 170;
    t.y = i % 2 === 0 ? 90 : 230;
  });
  updateMicroGReadout();
}

function updateMicroGReadout() {
  const speed = Math.hypot(microG.vx, microG.vy) * 0.25;
  const vr = document.getElementById("microg-vel-readout");
  if (vr) vr.textContent = speed.toFixed(2) + " m/s";
  const fr = document.getElementById("microg-fuel-readout");
  if (fr) fr.textContent = microG.fuel + "%";
  const count = microG.tools.filter((t) => t.collected).length;
  const sc = document.getElementById("microg-score-label");
  if (sc) sc.textContent = `TOOLS RETRIEVED: ${count} / 3`;
}

function stepMicroGPhysics() {
  const c = document.getElementById("microg-canvas");
  if (c && currentView === "mod-microgravity") {
    const ctx = c.getContext("2d");
    const W = c.width,
      H = c.height;
    microG.x += microG.vx;
    microG.y += microG.vy;
    if (microG.x < 24) {
      microG.x = 24;
      microG.vx *= -0.6;
    }
    if (microG.x > W - 24) {
      microG.x = W - 24;
      microG.vx *= -0.6;
    }
    if (microG.y < 24) {
      microG.y = 24;
      microG.vy *= -0.6;
    }
    if (microG.y > H - 24) {
      microG.y = H - 24;
      microG.vy *= -0.6;
    }

    ctx.clearRect(0, 0, W, H);
    ctx.strokeStyle = "rgba(14, 165, 233, 0.14)";
    ctx.lineWidth = 1;
    for (let gx = 0; gx < W; gx += 45) {
      ctx.beginPath();
      ctx.moveTo(gx, 0);
      ctx.lineTo(gx, H);
      ctx.stroke();
    }
    for (let gy = 0; gy < H; gy += 45) {
      ctx.beginPath();
      ctx.moveTo(0, gy);
      ctx.lineTo(W, gy);
      ctx.stroke();
    }

    microG.tools.forEach((t) => {
      if (!t.collected) {
        const dist = Math.hypot(microG.x - t.x, microG.y - t.y);
        if (dist < 28) {
          t.collected = true;
          updateMicroGReadout();
          if (microG.tools.every((item) => item.collected)) {
            markModuleComplete(
              "mod-microgravity",
              180,
              "Microgravity Training",
            );
          } else {
            playTone(1850, 0.1);
            showToast(`Retrieved ${t.name}!`);
          }
        } else {
          ctx.fillStyle = "#f59e0b";
          ctx.beginPath();
          ctx.arc(t.x, t.y, 10, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = "#e2e8f0";
          ctx.font = "11px Inter, sans-serif";
          ctx.fillText(t.name, t.x - 45, t.y - 15);
        }
      }
    });

    ctx.save();
    ctx.translate(microG.x, microG.y);
    ctx.fillStyle = "#38bdf8";
    ctx.beginPath();
    ctx.arc(0, 0, 15, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#0f172a";
    ctx.font = "bold 12px Inter, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("EV1", 0, 0);
    ctx.restore();
  }
  requestAnimationFrame(stepMicroGPhysics);
}

window.addEventListener("keydown", (e) => {
  if (currentView !== "mod-microgravity") return;
  if (e.key === "ArrowUp" || e.key === "w") {
    e.preventDefault();
    thrustMicroG(0, -0.4);
  }
  if (e.key === "ArrowDown" || e.key === "s") {
    e.preventDefault();
    thrustMicroG(0, 0.4);
  }
  if (e.key === "ArrowLeft" || e.key === "a") {
    e.preventDefault();
    thrustMicroG(-0.4, 0);
  }
  if (e.key === "ArrowRight" || e.key === "d") {
    e.preventDefault();
    thrustMicroG(0.4, 0);
  }
  if (e.key === " ") {
    e.preventDefault();
    brakeMicroG();
  }
});

// Page 15: Robotics Training (Canadarm2 SSRMS)
const ROBOTICS_STEPS = [
  {
    id: 1,
    text: "1. Confirm Cargo Spacecraft at 10m Capture Point in Free-Drift",
  },
  {
    id: 2,
    text: "2. Align Canadarm2 Latching End Effector (LEE) over Grapple Fixture Pin",
  },
  {
    id: 3,
    text: "3. Command LEE Snare Cables Closed & Apply Rigidize Pull-Force",
  },
  {
    id: 4,
    text: "4. Maneuver Visiting Vehicle via 7-DOF Joint Coordinated Rate to Harmony Node 2",
  },
  {
    id: 5,
    text: "5. Engage Common Berthing Mechanism (CBM) 16 Structural Bolts",
  },
];
const ROBOTICS_SHUFFLED = [
  ROBOTICS_STEPS[2],
  ROBOTICS_STEPS[0],
  ROBOTICS_STEPS[4],
  ROBOTICS_STEPS[1],
  ROBOTICS_STEPS[3],
];
let roboticsQueue = [];

function renderRoboticsUI() {
  const pool = document.getElementById("robotics-pool");
  const qBox = document.getElementById("robotics-queue");
  if (!pool || !qBox) return;
  pool.innerHTML = ROBOTICS_SHUFFLED.map((s) => {
    const used = roboticsQueue.some((q) => q.id === s.id);
    return `
          <button onclick="addRoboticsCmd(${s.id})" ${used ? "disabled" : ""} class="w-full text-left p-3 rounded-lg border text-xs font-medium transition ${used ? "bg-slate-900/40 border-slate-800 text-slate-600" : "bg-slate-900 border-slate-700 hover:border-amber-400 text-white"}">
            ${s.text}
          </button>
        `;
  }).join("");
  qBox.innerHTML = roboticsQueue.length
    ? roboticsQueue
        .map(
          (q, idx) => `
        <div class="p-2.5 rounded bg-sky-950/60 border border-sky-500/40 text-xs text-sky-200 flex justify-between">
          <span>Step ${idx + 1}: ${q.text}</span>
          <span class="font-mono-tech text-amber-400">QUEUED</span>
        </div>
      `,
        )
        .join("")
    : `<div class="text-xs text-slate-500 p-4 text-center">Click commands on the left in proper chronological order (1 → 5).</div>`;
}

function addRoboticsCmd(cmdId) {
  const item = ROBOTICS_STEPS.find((s) => s.id === cmdId);
  if (item && !roboticsQueue.some((q) => q.id === cmdId)) {
    roboticsQueue.push(item);
    playTone(1420, 0.06);
    renderRoboticsUI();
  }
}
function resetRoboticsQueue() {
  roboticsQueue = [];
  renderRoboticsUI();
}
function executeRoboticsSequence() {
  if (roboticsQueue.length < 5) {
    showToast("Please queue all 5 Canadarm2 commands before executing.");
    return;
  }
  const isCorrect = roboticsQueue.every((q, i) => q.id === i + 1);
  if (isCorrect) {
    markModuleComplete("mod-robotics", 200, "Canadarm2 Robotics Training");
  } else {
    playTone(400, 0.25, "sawtooth", 0.05);
    showToast(
      "Sequence mismatch! Remember: Free-Drift -> Align -> Snare/Rigidize -> Maneuver -> CBM Bolts.",
    );
  }
}

// Page 16: Space Navigation Training
const NAV_ROUTES = [
  {
    name: "Route A: ISS Rendezvous Phasing (Low Earth Orbit)",
    orbit: "408 km Circular · 51.6° Inclination · 7.66 km/s Orbital Speed",
    dv: "Δv = 94 m/s (NC1, NC2, NH & Approach Initiation Burns)",
    duration: "FD2 Rendezvous (16 Orbits / ~24 Hours)",
    notes:
      "Spacecraft approaches the ISS from below and behind along the R-Bar/V-Bar corridor using relative GPS and LIDAR.",
  },
  {
    name: "Route B: Artemis II Free-Return Lunar Trajectory",
    orbit:
      "High Earth Elliptical → Cis-Lunar Figure-8 Loop (7,400 km beyond Moon far side)",
    dv: "Δv = 3,150 m/s Trans-Lunar Injection (TLI) via ICPS / EUS",
    duration: "10 Days Total Mission Elapsed Time (MET)",
    notes:
      "Uses Earth-Moon gravity assist so that even without a lunar propulsion burn, Orion naturally swings around the Moon and returns to Earth entry interface.",
  },
  {
    name: "Route C: Lunar Gateway NRHO (Near-Rectilinear Halo Orbit)",
    orbit:
      "3,000 km Perilune × 70,000 km Apolune Polar Lunar Orbit (9:2 Resonance)",
    dv: "Δv = 3,200 m/s TLI + 430 m/s NRHO Insertion",
    duration: "6.5-Day Orbital Period (Continuous Earth Line-of-Sight)",
    notes:
      "Selected by NASA for Artemis III+ because it avoids lunar eclipses, requires minimal station-keeping Δv, and enables polar South Pole lander access.",
  },
];

function selectNavRoute(idx) {
  const r = NAV_ROUTES[idx] || NAV_ROUTES[0];
  [0, 1, 2].forEach((i) => {
    const b = document.getElementById("nav-route-" + i);
    if (b)
      b.className = `w-full text-left p-4 rounded-xl bg-slate-900 border ${i === idx ? "border-amber-400" : "border-slate-800"}`;
  });
  const panel = document.getElementById("nav-telemetry-panel");
  if (panel) {
    panel.innerHTML = `
          <div>
            <div class="text-xs font-mono-tech text-sky-400 mb-1">NASA FLIGHT DYNAMICS OFFICER (FDO) SOLUTION</div>
            <h3 class="text-xl font-bold text-white mb-3">${r.name}</h3>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4 text-xs font-mono-tech">
              <div class="p-3 rounded bg-slate-950 border border-slate-800"><span class="text-slate-400 block text-[10px]">ORBITAL PARAMETERS</span><span class="text-white">${r.orbit}</span></div>
              <div class="p-3 rounded bg-slate-950 border border-slate-800"><span class="text-slate-400 block text-[10px]">REQUIRED DELTA-V</span><span class="text-amber-400 font-bold">${r.dv}</span></div>
              <div class="p-3 rounded bg-slate-950 border border-slate-800"><span class="text-slate-400 block text-[10px]">TRANSIT TIME</span><span class="text-emerald-400">${r.duration}</span></div>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed">${r.notes}</p>
          </div>
          <button onclick="markModuleComplete('mod-navigation', 180, 'Space Navigation Training')" class="btn-orange-pill w-full py-3 text-sm mt-5">Upload Burn Ephemeris to GNC Flight Computer & Complete Module →</button>
        `;
  }
}

// Page 17: Communications Training
const COMMS_EXCHANGES = [
  {
    capcom:
      "Station, Houston on Space-to-Ground 1. We see a Caution & Warning on RPCM SO1A-B. Confirm status of Main Bus B voltage.",
    options: [
      {
        text: "Houston, Station on S/G 1. Copying RPCM SO1A-B Caution. Main Bus B reads 124.2 VDC nominal; standing by for procedure.",
        ok: true,
      },
      {
        text: "Hey Houston, yeah we saw a blinking light earlier, everything is probably fine.",
        ok: false,
      },
    ],
  },
  {
    capcom:
      "Station, Houston. Good readback. You are GO to inhibit RPCM SO1A-B per ODF Malfunction Procedure 2.4 and resume EVA prep.",
    options: [
      {
        text: "Houston, Station. Copy GO to inhibit RPCM SO1A-B per ODF 2.4 and resume Quest Airlock EVA prep. Out.",
        ok: true,
      },
      { text: "Roger that, turning off all electrical buses now.", ok: false },
    ],
  },
];
let commsStep = 0;

function renderCommsSim() {
  const log = document.getElementById("comms-log");
  const opts = document.getElementById("comms-options");
  if (!log || !opts) return;
  const cur = COMMS_EXCHANGES[commsStep];
  if (!cur) {
    opts.innerHTML = `<div class="p-3 rounded bg-emerald-500/20 text-emerald-300 text-xs font-bold">All CAPCOM Space-to-Ground voice loops verified!</div>`;
    return;
  }
  if (commsStep === 0 && !log.innerHTML.trim()) {
    log.innerHTML = `<div class="p-2.5 rounded bg-slate-900 border-l-2 border-amber-400"><span class="text-amber-400 font-bold">[MCC-H CAPCOM]:</span> ${cur.capcom}</div>`;
  }
  opts.innerHTML = cur.options
    .map(
      (o, idx) => `
        <button onclick="sendCommsReply(${idx})" class="w-full text-left p-3 rounded-lg bg-slate-900 border border-slate-700 hover:border-sky-400 text-xs text-slate-200 transition">
          "${o.text}"
        </button>
      `,
    )
    .join("");
}

function sendCommsReply(optIdx) {
  const cur = COMMS_EXCHANGES[commsStep];
  if (!cur) return;
  const choice = cur.options[optIdx];
  const log = document.getElementById("comms-log");
  if (choice.ok) {
    playQuindarBeep();
    log.innerHTML += `<div class="p-2.5 rounded bg-sky-950/60 border-l-2 border-sky-400"><span class="text-sky-400 font-bold">[ISS CREW]:</span> ${choice.text}</div>`;
    commsStep++;
    if (commsStep < COMMS_EXCHANGES.length) {
      log.innerHTML += `<div class="p-2.5 rounded bg-slate-900 border-l-2 border-amber-400"><span class="text-amber-400 font-bold">[MCC-H CAPCOM]:</span> ${COMMS_EXCHANGES[commsStep].capcom}</div>`;
    } else {
      markModuleComplete("mod-comms", 120, "Communications Training");
    }
    renderCommsSim();
  } else {
    playTone(400, 0.2, "sawtooth", 0.05);
    showToast(
      'Non-standard callout! Always use "[Receiver], [Sender]" and exact telemetry readbacks.',
    );
  }
}

function resetCommsSim() {
  commsStep = 0;
  const log = document.getElementById("comms-log");
  if (log) log.innerHTML = "";
  renderCommsSim();
}

// Page 18: Survival and Emergency Training
const SURVIVAL_SCENARIOS = [
  {
    title:
      "Scenario 1 of 2: ISS Rapid Cabin Depressurization Alarm (dP/dt Spike)",
    desc: "Master Alarm klaxon sounds! Cabin pressure drops from 14.7 psia (101.3 kPa) at 0.15 psi/min. What is NASA’s immediate priority sequence?",
    choices: [
      {
        text: "1. Verify open return path to docked crew return vehicle (Crew Dragon / Soyuz), check Reserve Time (T-reserve), then isolate module hatches systematically.",
        ok: true,
      },
      {
        text: "1. Ignore the Crew Return Vehicle hatch and start disassembling racks in the Destiny Lab immediately.",
        ok: false,
      },
    ],
  },
  {
    title:
      "Scenario 2 of 2: Toxic Anhydrous Ammonia (NH₃) Loop Intrusion Alarm",
    desc: "ATMOSPHERE TOXIC alarm triggers indicating potential Ammonia intrusion from the External Thermal Control System across the heat exchanger.",
    choices: [
      {
        text: "1. Don Portable Breathing Apparatus (PBA) / Oxygen Mask immediately, execute USOS emergency ventilation shutdown, and evacuate to safe segment.",
        ok: true,
      },
      {
        text: "1. Increase inter-module ventilation fans to spread the atmosphere evenly without masks.",
        ok: false,
      },
    ],
  },
];
let survivalIdx = 0;

function renderSurvivalScenario() {
  const box = document.getElementById("survival-scenario-box");
  if (!box) return;
  const s = SURVIVAL_SCENARIOS[survivalIdx];
  box.innerHTML = `
        <div class="text-xs font-mono-tech text-rose-400 mb-1">EMERGENCY WARNING & CAUTION SYSTEM (CW CLASS 1 ALARM)</div>
        <h3 class="text-xl font-bold text-white mb-2">${s.title}</h3>
        <p class="text-sm text-slate-300 mb-5">${s.desc}</p>
        <div class="space-y-3">
          ${s.choices
            .map(
              (c, idx) => `
            <button onclick="chooseSurvivalOption(${idx})" class="w-full text-left p-4 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-400 text-xs sm:text-sm text-white transition">
              ${c.text}
            </button>
          `,
            )
            .join("")}
        </div>
      `;
}

function chooseSurvivalOption(idx) {
  const s = SURVIVAL_SCENARIOS[survivalIdx];
  if (s.choices[idx].ok) {
    if (survivalIdx === 0) {
      survivalIdx = 1;
      playTone(1600, 0.1);
      showToast(
        "Correct! Crew Return Vehicle ingress path secured. Proceeding to Scenario 2.",
      );
      renderSurvivalScenario();
    } else {
      survivalIdx = 0;
      markModuleComplete("mod-survival", 200, "Survival & Emergency Training");
      renderSurvivalScenario();
    }
  } else {
    playTone(380, 0.25, "sawtooth", 0.05);
    showToast(
      "Unsafe action! In NASA Flight Rules, Crew Return Vehicle access and breathing protection come first.",
    );
  }
}

// Page 19: Fitness and Readiness
function logFitnessExercise(type) {
  if (type === "ared") appState.fitnessMins.ared = 60;
  if (type === "t2") appState.fitnessMins.t2 = 45;
  if (type === "cevis") appState.fitnessMins.cevis = 45;
  const total =
    (appState.fitnessMins.ared || 0) +
    (appState.fitnessMins.t2 || 0) +
    (appState.fitnessMins.cevis || 0);
  const txt = document.getElementById("fitness-progress-text");
  const bar = document.getElementById("fitness-bar");
  if (txt) txt.textContent = `Logged today: ${total} / 150 minutes`;
  if (bar)
    bar.style.width = Math.min(100, Math.round((total / 150) * 100)) + "%";
  if (total >= 150) {
    markModuleComplete(
      "mod-fitness",
      110,
      "Fitness & Readiness Countermeasures",
    );
  } else {
    playTone(1500, 0.09);
    showToast(
      `Logged ${type.toUpperCase()} countermeasure session! (${total}/150 mins)`,
    );
    saveAppState();
  }
}

// Page 20: Teamwork Training
function evaluateTeamworkChallenge() {
  const r1 = document.getElementById("team-role-1").value;
  const r2 = document.getElementById("team-role-2").value;
  const r3 = document.getElementById("team-role-3").value;
  const dec = document.querySelector(
    'input[name="team-decision"]:checked',
  )?.value;
  if (
    r1 === "correct" &&
    r2 === "correct" &&
    r3 === "correct" &&
    dec === "safe"
  ) {
    markModuleComplete("mod-teamwork", 150, "Teamwork Training (CRM)");
  } else {
    playTone(400, 0.2, "sawtooth", 0.05);
    showToast(
      "Review role assignments: ensure buddy-tether ingress and radiation shelter setup.",
    );
  }
}

// Page 22: Launch Simulation
let launchTimer = null;
function startLaunchCountdown() {
  const c1 = document.getElementById("launch-chk-1").checked;
  const c2 = document.getElementById("launch-chk-2").checked;
  const c3 = document.getElementById("launch-chk-3").checked;
  const c4 = document.getElementById("launch-chk-4").checked;
  if (!c1 || !c2 || !c3 || !c4) {
    showToast(
      "Check all 4 Pre-Launch Console Go/No-Go boxes before initiating countdown!",
    );
    return;
  }
  clearInterval(launchTimer);
  let t = -10;
  const log = document.getElementById("launch-log");
  const clk = document.getElementById("launch-clock");
  const alt = document.getElementById("launch-alt");
  const vel = document.getElementById("launch-vel");
  const q = document.getElementById("launch-q");
  const stg = document.getElementById("launch-stage");
  log.innerHTML =
    "<div>[GLS]: Terminal Countdown Initiated. Auto-Sequence Armed.</div>";

  launchTimer = setInterval(() => {
    t++;
    playTone(t < 0 ? 1100 : 1650, 0.06);
    if (t < 0) {
      clk.textContent = `T - 00:00:0${Math.abs(t)}`;
      if (t === -6)
        log.innerHTML +=
          '<div class="text-amber-400">[T-6s]: RS-25 Core Stage Main Engine Ignition Sequence Start!</div>';
    } else if (t === 0) {
      clk.textContent = "T + 00:00:00";
      stg.textContent = "LIFTOFF!";
      log.innerHTML +=
        '<div class="text-emerald-400 font-bold">[T+0s]: SRB Ignition & LIFTOFF from Pad 39B! Tower Cleared.</div>';
    } else if (t <= 8) {
      clk.textContent = `T + 00:0${t}:00`;
      const curAlt = (t * 51).toFixed(1);
      const curVel = (t * 0.96).toFixed(2);
      const curQ =
        t === 2
          ? "32.8 kPa (MAX-Q)"
          : t < 4
            ? (t * 14).toFixed(1) + " kPa"
            : "0.0 kPa (VACUUM)";
      alt.textContent = curAlt + " km";
      vel.textContent = curVel + " km/s";
      q.textContent = curQ;
      if (t === 2) {
        stg.textContent = "MAX-Q THROTTLE";
        log.innerHTML +=
          "<div>[T+1m12s]: Vehicle passing through Maximum Dynamic Pressure (Max-Q).</div>";
      }
      if (t === 4) {
        stg.textContent = "SRB SEP / LAS JET";
        log.innerHTML +=
          "<div>[T+2m12s]: Solid Rocket Booster separation & Launch Abort System jettison.</div>";
      }
      if (t === 8) {
        stg.textContent = "MECO · ORBIT!";
        log.innerHTML +=
          '<div class="text-sky-400 font-bold">[T+8m00s]: Main Engine Cutoff (MECO)! Nominal 408 km LEO Insertion at 7.68 km/s.</div>';
        clearInterval(launchTimer);
        markModuleComplete("sim-launch", 250, "Launch Simulation");
      }
    }
    log.scrollTop = log.scrollHeight;
  }, 700);
}

function resetLaunchSim() {
  clearInterval(launchTimer);
  document.getElementById("launch-clock").textContent = "T - 00:00:10";
  document.getElementById("launch-alt").textContent = "0.0 km";
  document.getElementById("launch-vel").textContent = "0.00 km/s";
  document.getElementById("launch-q").textContent = "0.0 kPa";
  document.getElementById("launch-stage").textContent = "PAD HOLD";
  document.getElementById("launch-log").innerHTML =
    "<div>[LCC PAD 39B]: Simulator reset. Ready for Go/No-Go poll.</div>";
}

// Page 23: Spacewalk Simulation
const EVA_STEPS = [
  {
    step: 1,
    title: "Step 1 of 5: Quest Airlock Egress & 85-ft Safety Tether Hookup",
    desc: "You are opening the Quest Crew Lock thermal cover and egressing to the S0 Truss translation path. What is your first mandatory action?",
    options: [
      {
        text: "Lock the 85-ft retractable safety tether hook to the Crew Lock D-ring and perform a Buddy Check with EV-2.",
        ok: true,
      },
      {
        text: "Translate untethered directly to the S1 Truss radiator beam.",
        ok: false,
      },
    ],
  },
  {
    step: 2,
    title: "Step 2 of 5: S1 Truss Translation & Worksite Restraint",
    desc: "You reach the failed S1 External Thermal Control System Pump Module. How do you stabilize yourself before applying torque?",
    options: [
      {
        text: "Attach your Articulating Portable Foot Restraint (APFR) and lock boot heels into the footplate.",
        ok: true,
      },
      {
        text: "Hold onto a delicate solar array cable with one hand while torquing with the other.",
        ok: false,
      },
    ],
  },
  {
    step: 3,
    title: "Step 3 of 5: Fluid Quick-Disconnect (QD) Release",
    desc: "Four anhydrous ammonia Quick-Disconnect lines are attached to the Pump Module.",
    options: [
      {
        text: "Mate the Jumper Box, release QDs with Bail-Latch tool, and inspect gloves/visor for zero NH₃ ice crystals.",
        ok: true,
      },
      {
        text: "Force-pry the pressurized line open without venting.",
        ok: false,
      },
    ],
  },
  {
    step: 4,
    title: "Step 4 of 5: Pistol Grip Tool (PGT) Structural Bolt Drive",
    desc: "Install the spare Pump Module ORU and drive the 4 primary H-fixture bolts.",
    options: [
      {
        text: "Set PGT to 25.5 ft-lbs torque, 30 RPM, and count 11.5 turns to hard stop.",
        ok: true,
      },
      { text: "Set PGT to maximum overdrive without torque limit.", ok: false },
    ],
  },
  {
    step: 5,
    title: "Step 5 of 5: Tool Inventory, Ingress & Ammonia Bake-Out Check",
    desc: "Pump Module telemetry shows nominal flow from MCC-H! Complete ingress to Quest Airlock.",
    options: [
      {
        text: "Verify tool tether count, ingress Crew Lock, repressurize to 14.7 psia, and verify 0 ppm NH₃ before opening inner hatch.",
        ok: true,
      },
      {
        text: "Leave the PGT floating outside on the truss handrail.",
        ok: false,
      },
    ],
  },
];
let evaStepIdx = 0;

function renderSpacewalkSim() {
  const box = document.getElementById("eva-sim-step-box");
  const cnt = document.getElementById("eva-step-count");
  const o2 = document.getElementById("eva-o2-val");
  if (!box) return;
  const cur = EVA_STEPS[evaStepIdx];
  if (cnt) cnt.textContent = `${evaStepIdx + 1} / 5`;
  if (o2)
    o2.textContent = `${98 - evaStepIdx * 11}% (${850 - evaStepIdx * 95} psi)`;
  box.innerHTML = `
        <div class="text-xs font-mono-tech text-emerald-400 mb-1">US EVA PROCEDURE · S1 TRUSS WORKSITE</div>
        <h3 class="text-xl font-bold text-white mb-2">${cur.title}</h3>
        <p class="text-sm text-slate-300 mb-5">${cur.desc}</p>
        <div class="space-y-3">
          ${cur.options
            .map(
              (o, idx) => `
            <button onclick="advanceEvaStep(${idx})" class="w-full text-left p-4 rounded-xl bg-slate-900 border border-slate-700 hover:border-emerald-400 text-xs sm:text-sm text-white transition">
              ${o.text}
            </button>
          `,
            )
            .join("")}
        </div>
      `;
}

function advanceEvaStep(idx) {
  const cur = EVA_STEPS[evaStepIdx];
  if (cur.options[idx].ok) {
    if (evaStepIdx < EVA_STEPS.length - 1) {
      evaStepIdx++;
      playTone(1550, 0.08);
      showToast(`EVA Step ${evaStepIdx} Verified! Proceeding to next task.`);
      renderSpacewalkSim();
    } else {
      evaStepIdx = 0;
      markModuleComplete("sim-spacewalk", 300, "Spacewalk Simulation (EVA)");
      renderSpacewalkSim();
    }
  } else {
    playTone(390, 0.2, "sawtooth", 0.05);
    showToast(
      "EVA Flight Rule Violation! Always maintain tether restraint and PGT torque limits.",
    );
  }
}

function resetSpacewalkSim() {
  evaStepIdx = 0;
  renderSpacewalkSim();
}

// Page 24: Landing Simulation
const LANDING_PHASES = [
  {
    title:
      "Phase 1 of 3: Service Module Separation & Entry Interface (400,000 ft / 122 km)",
    desc: "Orion approaches Earth’s atmosphere at 11 km/s (24,600 mph). Select the exact flight path angle and attitude to prevent skipping off or exceeding G-limits:",
    options: [
      {
        text: "Align AVCOAT heat shield blunt-end forward at -5.8° entry flight path angle and enable RCS roll control for skip-entry lift vectoring.",
        ok: true,
      },
      { text: "Enter nose-first at a steep -22° dive angle.", ok: false },
    ],
  },
  {
    title:
      "Phase 2 of 3: Peak Heating (2,760°C Plasma Blackout) & Forward Bay Cover Jettison",
    desc: "Orion has decelerated through peak 4.0G deceleration and exited ionized plasma blackout at 45,000 ft.",
    options: [
      {
        text: "Jettison Forward Bay Cover at 25,000 ft and deploy 2 Kevlar Drogue Parachutes to stabilize descent at 125 mph.",
        ok: true,
      },
      {
        text: "Deploy main parachutes immediately during supersonic Mach 3 plasma flow.",
        ok: false,
      },
    ],
  },
  {
    title: "Phase 3 of 3: Main Parachute Reefing & Pacific Ocean Splashdown",
    desc: "Altitude is 9,500 ft over the Pacific Recovery Zone near USS Portland.",
    options: [
      {
        text: "Deploy 3 Main 116-ft Ringsail Parachutes in 2-stage reefing to slow descent to 17 mph (27 km/h) for gentle splashdown.",
        ok: true,
      },
      { text: "Cut drogue chutes without deploying main canopies.", ok: false },
    ],
  },
];
let landingIdx = 0;

function renderLandingSim() {
  const box = document.getElementById("landing-sim-container");
  if (!box) return;
  const p = LANDING_PHASES[landingIdx];
  box.innerHTML = `
        <div class="text-xs font-mono-tech text-sky-400 mb-1">ORION ENTRY, DESCENT & LANDING (EDL) TELEMETRY</div>
        <h3 class="text-xl font-bold text-white mb-2">${p.title}</h3>
        <p class="text-sm text-slate-300 mb-5">${p.desc}</p>
        <div class="space-y-3">
          ${p.options
            .map(
              (o, idx) => `
            <button onclick="chooseLandingAction(${idx})" class="w-full text-left p-4 rounded-xl bg-slate-900 border border-slate-700 hover:border-sky-400 text-xs sm:text-sm text-white transition">
              ${o.text}
            </button>
          `,
            )
            .join("")}
        </div>
      `;
}

function chooseLandingAction(idx) {
  const p = LANDING_PHASES[landingIdx];
  if (p.options[idx].ok) {
    if (landingIdx < LANDING_PHASES.length - 1) {
      landingIdx++;
      playTone(1580, 0.08);
      showToast("EDL Corridor Nominal! Proceeding to next descent phase.");
      renderLandingSim();
    } else {
      landingIdx = 0;
      markModuleComplete("sim-landing", 300, "Landing Simulation (Splashdown)");
      renderLandingSim();
    }
  } else {
    playTone(390, 0.22, "sawtooth", 0.05);
    showToast(
      "Abort Warning! That entry parameter would exceed thermal or parachute dynamic pressure limits.",
    );
  }
}

// Page 25: Daily Missions (Dynamic JS Generator)
const DAILY_POOL = [
  {
    id: "d1",
    code: "OSTP-0830",
    title: "Inspect Columbus Cabin ppCO₂ Sensor",
    pts: 45,
    desc: "Verify partial pressure of CO₂ is reading 2.8 mmHg (below 4.0 mmHg NASA limit).",
  },
  {
    id: "d2",
    code: "OSTP-1015",
    title: "Cupola Earth Observation Pass (Nile Delta)",
    pts: 50,
    desc: "Capture high-resolution Nikon D5 orbital imagery during ISS ascending node pass over Egypt.",
  },
  {
    id: "d3",
    code: "OSTP-1300",
    title: "Water Processor Assembly (WPA) Filter Check",
    pts: 60,
    desc: "Confirm conductivity sensor reads 1.0 µS/cm potable water purity in Tranquility Node 3.",
  },
  {
    id: "d4",
    code: "OSTP-1530",
    title: "Quest Airlock EMU Battery Recharge Check",
    pts: 55,
    desc: "Verify Series 2000 Lithium-Ion EVA battery charge state is at 100% prior to tomorrow’s EVA.",
  },
  {
    id: "d5",
    code: "OSTP-1700",
    title: "Microgravity Botany Veg-05 Hydration",
    pts: 40,
    desc: "Inject 120 mL nutrient water into the Veggie pillow root mat inside the Destiny Laboratory.",
  },
  {
    id: "d6",
    code: "OSTP-1915",
    title: "Evening DPC (Daily Planning Conference)",
    pts: 50,
    desc: "Conduct 10-minute tagup with Houston, Huntsville, Tsukuba, Munich & Moscow control centers.",
  },
];
let activeDailySet = [DAILY_POOL[0], DAILY_POOL[1], DAILY_POOL[2]];

function renderDailyMissions() {
  const g = document.getElementById("daily-missions-grid");
  if (!g) return;
  if (!appState.completedDailies) appState.completedDailies = {};
  g.innerHTML = activeDailySet
    .map((d) => {
      const done = !!appState.completedDailies[d.id];
      return `
          <div class="space-card p-6 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-3">
                <span class="font-mono-tech text-xs text-sky-400">${d.code} GMT</span>
                <span class="font-mono-tech text-xs text-amber-400">+${d.pts} PTS</span>
              </div>
              <h3 class="text-lg font-bold text-white mb-2">${d.title}</h3>
              <p class="text-xs text-slate-300 leading-relaxed mb-5">${d.desc}</p>
            </div>
            <button onclick="completeDailyMission('${d.id}', ${d.pts})" ${done ? "disabled" : ""} class="${done ? "btn-glass-pill opacity-60" : "btn-orange-pill"} w-full py-2.5 text-xs">
              ${done ? "Completed & Saved ✓" : "Execute Daily Task →"}
            </button>
          </div>
        `;
    })
    .join("");
}

function rotateDailyMissions() {
  const shuffled = [...DAILY_POOL].sort(() => Math.random() - 0.5);
  activeDailySet = shuffled.slice(0, 3);
  playTone(1450, 0.08);
  renderDailyMissions();
  showToast("Generated new ISS Onboard Short Term Plan (OSTP) Daily Missions!");
}

function completeDailyMission(id, pts) {
  if (!appState.completedDailies) appState.completedDailies = {};
  if (appState.completedDailies[id]) return;
  appState.completedDailies[id] = true;
  appState.points += pts;
  playQuindarBeep();
  saveAppState();
  renderDailyMissions();
  showToast(
    `Daily Mission Complete! +${pts} PTS saved to your database profile.`,
  );
}

// Page 26: Mission Details
const MISSION_DETAILS_DB = {
  launch: {
    title: "Mission Briefing: Kennedy Space Center LC-39B Ascent to Orbit",
    simPage: "sim-launch",
    timeLimit: "08:30 MET (Terminal Count + Ascent)",
    points: "250 PTS",
    objective:
      "Execute a nominal crewed launch from Pad 39B into a 408 km, 51.6° Low Earth Orbit while monitoring cryogenic propellants, Max-Q dynamic pressure, and staging.",
    steps: [
      "Complete Launch Control Center (LCC) Go/No-Go poll across PROP, GNC, EECOM, and WEATHER.",
      "Initiate Ground Launch Sequencer (GLS) at T-10s and monitor RS-25 engine start at T-6s.",
      "Throttle main engines through Maximum Dynamic Pressure (Max-Q ~32.8 kPa) at T+72s.",
      "Verify Solid Rocket Booster (SRB) separation and Launch Abort System (LAS) jettison.",
      "Confirm Main Engine Cutoff (MECO) at 7.68 km/s orbital insertion velocity.",
    ],
  },
  spacewalk: {
    title: "Mission Briefing: US EVA S1 Truss Ammonia Pump Module Replacement",
    simPage: "sim-spacewalk",
    timeLimit: "06:30 EVA Duration (Simulated in 5 Interactive Phases)",
    points: "300 PTS",
    objective:
      "Egress the ISS Quest Airlock in a 4.3 psia Extravehicular Mobility Unit (EMU) and replace a degraded S1 Truss Ammonia Pump Module using the Pistol Grip Tool.",
    steps: [
      "Complete 100% O₂ pre-breathe protocol, egress Quest Crew Lock, and hook 85-ft safety tether.",
      "Translate along S0/S1 Truss handrails and ingress the Articulating Portable Foot Restraint (APFR).",
      "Demate 4 Anhydrous Ammonia Quick-Disconnect (QD) fluid lines and inspect for zero ice contamination.",
      "Drive 4 structural H-fixture bolts to 25.5 ft-lbs at 30 RPM using the microprocessor-controlled PGT.",
      "Complete tool inventory, ingress Quest Airlock, and verify 0 ppm NH₃ cabin atmosphere.",
    ],
  },
  landing: {
    title:
      "Mission Briefing: Orion Atmospheric Skip-Entry & Pacific Splashdown",
    simPage: "sim-landing",
    timeLimit: "20:00 Entry Interface to Splashdown",
    points: "300 PTS",
    objective:
      "Guide the Orion Crew Module from Entry Interface (400,000 ft) through 2,760°C peak plasma heating and deploy the 11-parachute recovery sequence.",
    steps: [
      "Jettison European Service Module and orient AVCOAT heat shield to -5.8° entry flight path angle.",
      "Maintain RCS roll lift-vectoring through 4.0G deceleration and 4-minute RF plasma blackout.",
      "Jettison Forward Bay Cover at 25,000 ft and deploy 2 Drogue Parachutes.",
      "Deploy 3 Pilot and 3 Main 116-ft Ringsail Parachutes at 9,500 ft to slow descent to 17 mph.",
      "Execute Pacific Ocean splashdown and await U.S. Navy recovery forces.",
    ],
  },
};

function openMissionDetails(key) {
  navigateTo("mission-details");
  renderMissionDetailsView(key);
}

function renderMissionDetailsView(key) {
  const d = MISSION_DETAILS_DB[key] || MISSION_DETAILS_DB.launch;
  ["launch", "spacewalk", "landing"].forEach((k) => {
    const b = document.getElementById("md-tab-" + k);
    if (b) b.classList.toggle("active", k === key);
  });
  const box = document.getElementById("mission-details-content");
  if (!box) return;
  box.innerHTML = `
        <div class="flex flex-wrap items-center justify-between gap-4 pb-5 mb-5 border-b border-slate-800">
          <div>
            <div class="text-xs font-mono-tech text-sky-400">NASA FLIGHT DATA FILE (FDF) BRIEFING DOSSIER</div>
            <h2 class="text-2xl font-bold text-white mt-1">${d.title}</h2>
          </div>
          <div class="flex gap-3 font-mono-tech text-xs">
            <span class="px-3 py-1.5 rounded bg-slate-900 border border-slate-700 text-slate-200">⏱ ${d.timeLimit}</span>
            <span class="px-3 py-1.5 rounded bg-amber-500/20 border border-amber-400/40 text-amber-300 font-bold">★ ${d.points}</span>
          </div>
        </div>
        <p class="text-sm text-slate-300 leading-relaxed mb-6"><strong class="text-white">Primary Mission Objective:</strong> ${d.objective}</p>
        <h3 class="text-sm font-bold uppercase tracking-wider text-amber-400 mb-3">Flight Procedure Execution Checklist</h3>
        <div class="space-y-2.5 mb-6">
          ${d.steps
            .map(
              (s, i) => `
            <div class="p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-200 flex items-center gap-3">
              <span class="w-6 h-6 rounded-full bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center shrink-0">${i + 1}</span>
              <span>${s}</span>
            </div>
          `,
            )
            .join("")}
        </div>
        <button onclick="navigateTo('${d.simPage}')" class="btn-orange-pill px-7 py-3 text-sm">Launch Interactive Simulation Now →</button>
      `;
}

// Page 27: Knowledge Library (12 Comprehensive NASA Technical Dossiers + Interactive Reader & Quiz)
let activeKnowledgeCategory = "ALL";
const KNOWLEDGE_ARTICLES = [
  {
    id: "k-nbl",
    catKey: "EVA",
    cat: "FACILITIES · JSC HOUSTON",
    title: "Neutral Buoyancy Laboratory (NBL)",
    readTime: "6 MIN DOSSIER",
    keyMetric: "6.2M Gallons · 10:1 EVA Ratio",
    body: "Located at the Sonny Carter Training Facility near Johnson Space Center, the NBL pool measures 202 ft (61.5m) long, 102 ft (31.1m) wide, and 40 ft (12.2m) deep, holding 6.2 million gallons of water kept at 82–88°F. Astronauts train roughly 10 hours underwater for every 1 hour of spacewalk on the ISS.",
    specs: [
      ["Pool Dimensions", "202 ft × 102 ft × 40 ft deep (6.2 million gallons)"],
      [
        "Water Temperature",
        "82°F – 88°F (28°C – 31°C) for 6-hour dive comfort",
      ],
      [
        "Breathing Gas",
        "Nitrox (enriched oxygen) to extend dive safety margins",
      ],
      ["Training Ratio", "10 hours underwater NBL time per 1 hour orbital EVA"],
    ],
    deepDive:
      "Neutral buoyancy is achieved by adding precise lead weights and high-density foam to the suited astronaut until upward buoyant force equals downward gravitational force. While water drag slows rapid motion compared to vacuum, the NBL is the world’s premier facility for practicing full-scale ISS truss translations, ORU replacements, and two-crew tether choreography.",
    quizQ:
      "What is the standard NASA NBL underwater training ratio for each 1 hour of orbital spacewalk?",
    quizOpts: [
      "Approximately 10 hours underwater per 1 hour of EVA",
      "1 hour underwater per 10 hours of EVA",
      "30 minutes of VR only",
    ],
    quizAns: 0,
    url: "https://www.nasa.gov/johnson/neutral-buoyancy-laboratory/",
  },
  {
    id: "k-emu",
    catKey: "EVA",
    cat: "EVA HARDWARE · EMU & xEMU",
    title: "Extravehicular Mobility Unit (EMU) & Exploration Suits",
    readTime: "7 MIN DOSSIER",
    keyMetric: "4.3 psia (29.6 kPa) · 100% O₂",
    body: "The NASA EMU is an independent two-piece anthropomorphic spacecraft operating at 4.3 psia (29.6 kPa) of 100% oxygen. It includes the Hard Upper Torso (HUT), Liquid Cooling and Ventilation Garment (LCVG), Primary Life Support Subsystem (PLSS), and SAFER nitrogen jetpack.",
    specs: [
      ["Operating Pressure", "4.3 psia (29.6 kPa) pure oxygen differential"],
      ["LCVG Cooling", "91 m (300 ft) water tubes removing up to 1,600 BTU/hr"],
      ["SAFER Jetpack", "1.4 kg gaseous N₂ providing ~3 m/s self-rescue Δv"],
      [
        "Suit Layers",
        "14 protective layers including Ortho-Fabric & TMG Mylar",
      ],
    ],
    deepDive:
      "Operating a spacesuit at full sea-level cabin pressure (14.7 psia) would balloon the joints and make finger flexion exhausting. By lowering EMU pressure to 4.3 psia of 100% O₂, astronauts maintain alveolar oxygen partial pressure while retaining glove dexterity—requiring a strict nitrogen pre-breathe purge before depressurization.",
    quizQ:
      "Why does the NASA EMU spacesuit operate at 4.3 psia of 100% oxygen rather than 14.7 psia?",
    quizOpts: [
      "To prevent suit stiffness and preserve glove mobility while maintaining oxygen partial pressure",
      "Because oxygen tanks cannot exceed 5 psi",
      "To increase suit weight in microgravity",
    ],
    quizAns: 0,
    url: "https://www.nasa.gov/directorates/esdmd/hhp/space-suits-and-exploration-operations/",
  },
  {
    id: "k-eclss",
    catKey: "SYSTEMS",
    cat: "SPACECRAFT · LOW EARTH ORBIT",
    title: "International Space Station (ISS) Regenerative ECLSS",
    readTime: "6 MIN DOSSIER",
    keyMetric: "98% Water Recovery · 14.7 psia",
    body: "Orbiting at ~408 km (250 miles) at 7.66 km/s (17,500 mph), the ISS completes 16 orbits per day. Its Environmental Control and Life Support System (ECLSS) recovers 98% of crew water via the Urine Processor Assembly and Water Processor Assembly.",
    specs: [
      ["Cabin Atmosphere", "14.7 psia (101.3 kPa) · 78% N₂ / 21% O₂"],
      ["Closed-Loop Water", "98% reclamation via WRS, UPA & Brine Processor"],
      ["Oxygen Generation", "OGS electrolyzes H₂O into breathable O₂ + H₂"],
      ["CO₂ Scrubbing", "CDRA zeolite beds + Sabatier reactor methane venting"],
    ],
    deepDive:
      "Without regenerative life support, resupplying water and oxygen for 7 crew members would require tens of thousands of kilograms of cargo annually. The ISS ECLSS distills cabin humidity condensate and urine under vacuum, catalytic-oxidizes trace organics, and feeds pure water to the Oxygen Generation System.",
    quizQ:
      "What percentage of crew water reclamation has NASA’s upgraded ISS ECLSS achieved?",
    quizOpts: [
      "Approximately 98% closed-loop water recovery",
      "45% recovery",
      "10% recovery",
    ],
    quizAns: 0,
    url: "https://www.nasa.gov/reference/environmental-control-and-life-support-systems-eclss/",
  },
  {
    id: "k-orion",
    catKey: "ARTEMIS",
    cat: "DEEP SPACE · ARTEMIS PROGRAM",
    title: "Orion Spacecraft & Space Launch System (SLS)",
    readTime: "8 MIN DOSSIER",
    keyMetric: "2,760°C AVCOAT Shield · 11 km/s",
    body: "NASA’s Orion spacecraft features the Crew Module, Launch Abort System (LAS), and European Service Module (ESM). Its 5-meter AVCOAT heat shield protects astronauts from 2,760°C (5,000°F) temperatures during 11 km/s lunar return entry.",
    specs: [
      [
        "SLS Block 1 Thrust",
        "8.8 million lbs (39.1 MN) liftoff thrust (4 RS-25 + 2 SRBs)",
      ],
      [
        "Heat Shield Material",
        "5.0 m diameter ablative AVCOATrated to 2,760°C",
      ],
      ["ESM Main Engine", "OMS-E 26.6 kN + 8 R-4D-11 Aux + 24 RCS thrusters"],
      [
        "Launch Abort (LAS)",
        "400,000 lbs thrust puller tower for pad/ascent crew escape",
      ],
    ],
    deepDive:
      "Returning from Lunar distance subjects Orion to entry velocities of ~11 km/s (40% faster than LEO return, resulting in nearly double the thermal energy). Orion utilizes a guided skip-entry maneuver—bouncing off the upper atmosphere before final descent—to reduce peak G-loads to ~4G and pinpoint splashdown off San Diego.",
    quizQ:
      "What peak thermal load does Orion’s 5-meter AVCOAT heat shield endure during 11 km/s lunar return?",
    quizOpts: [
      "Approximately 2,760°C (5,000°F)",
      "350°C (660°F)",
      "100°C (212°F)",
    ],
    quizAns: 0,
    url: "https://www.nasa.gov/missions/meet-nasas-orion-spacecraft/",
  },
  {
    id: "k-canadarm",
    catKey: "ROBOTICS",
    cat: "ROBOTICS · CANADIAN SPACE AGENCY & NASA",
    title: "Canadarm2 (SSRMS) & Dextre Mobile Servicing System",
    readTime: "6 MIN DOSSIER",
    keyMetric: "17.6 m Length · 7-DOF · 116,000 kg",
    body: "Launched on STS-100 in April 2001, the 17.6-meter Space Station Remote Manipulator System (Canadarm2) has 7 motorized joints, two Latching End Effectors (LEEs), and can walk end-over-end across Power Data Grapple Fixtures.",
    specs: [
      ["Arm Reach & Mass", "17.6 meters (57.7 ft) long · 1,800 kg mass"],
      [
        "Degrees of Freedom",
        "7-DOF (3 shoulder, 1 elbow, 3 wrist pitch/yaw/roll joints)",
      ],
      ["Payload Capacity", "Up to 116,000 kg mass handling in microgravity"],
      [
        "End Effectors",
        "Dual Latching End Effectors (LEE) with rotating snare cables",
      ],
    ],
    deepDive:
      "Operated from the Cupola Robotic Workstation (RWS), Canadarm2 rides along the S0/S1/P1 truss on the Mobile Base System (MBS). Paired with the two-armed Dextre (Special Purpose Dexterous Manipulator), it performs external ORU battery swaps and captures free-flying visiting cargo vehicles.",
    quizQ:
      "How many Degrees of Freedom (DOF) does the 17.6-meter Canadarm2 manipulator possess?",
    quizOpts: [
      "7 Degrees of Freedom (7-DOF)",
      "3 Degrees of Freedom",
      "2 Degrees of Freedom",
    ],
    quizAns: 0,
    url: "https://www.nasa.gov/international-space-station/mobile-servicing-system/",
  },
  {
    id: "k-t38",
    catKey: "CREW",
    cat: "AVIATION & SURVIVAL · FLIGHT READINESS",
    title: "T-38N Talon Spaceflight Readiness & NEEMO Analogs",
    readTime: "5 MIN DOSSIER",
    keyMetric: "Mach 1.3 Supersonic · CRM",
    body: "NASA Astronaut Candidates fly the supersonic Northrop T-38N Talon out of Ellington Field to practice Crew Resource Management (CRM) under dynamic time pressure, and train in the Aquarius underwater habitat (NEEMO) and HERA.",
    specs: [
      ["Aircraft", "Northrop T-38N Talon twin-engine supersonic jet trainer"],
      [
        "Flight Hours",
        "~15 hours/month for pilots; 4 hours/month for mission specialists",
      ],
      [
        "NEEMO Habitat",
        "Aquarius Reef Base at 62 ft (19 m) depth off Key Largo",
      ],
      [
        "HERA Analog",
        "Human Exploration Research Analog 45-day isolation at JSC",
      ],
    ],
    deepDive:
      "Unlike a simulator that can be paused without consequence, flying a high-performance T-38 jet at 500+ knots in instrument weather requires real-time checklist discipline, spatial orientation under G-loads, and split-second communication between front- and back-seat crewmembers.",
    quizQ:
      "Why do NASA Mission Specialists train in the two-seat T-38N Talon supersonic jet?",
    quizOpts: [
      "To build real-time Crew Resource Management (CRM) and decision-making under dynamic pressure",
      "For commercial airline licensing",
      "To test rocket fuel",
    ],
    quizAns: 0,
    url: "https://www.nasa.gov/humans-in-space/astronauts/become-an-astronaut/",
  },
  {
    id: "k-orbits",
    catKey: "ROBOTICS",
    cat: "ASTRODYNAMICS · FLIGHT DYNAMICS OFFICER (FDO)",
    title: "Orbital Mechanics, Hohmann Transfers & Rendezvous Phasing",
    readTime: "7 MIN DOSSIER",
    keyMetric: "v = √(GM/r) · 51.6° ISS Orbit",
    body: "Spacecraft rendezvous in Low Earth Orbit requires counter-intuitive orbital mechanics: thrusting prograde raises apogee and slows angular rate, while thrusting retrograde lowers perigee to catch up with a target ahead.",
    specs: [
      ["ISS Orbital Velocity", "7.66 km/s (27,600 km/h) at ~408 km altitude"],
      ["Orbital Period", "92.6 minutes (15.5 orbits per 24-hour day)"],
      [
        "R-Bar & V-Bar",
        "Radial Vector (below station) & Velocity Vector (front/back)",
      ],
      [
        "Keep-Out Sphere",
        "200-meter Approach Ellipsoid & 200m KOS safety zone",
      ],
    ],
    deepDive:
      "When a visiting Crew Dragon or Soyuz trails the ISS, firing thrusters straight toward the station would push the chaser into a higher, slower orbit—causing it to fall further behind! Instead, FDO controllers use lower-altitude phasing orbits with shorter periods to close the phase angle before executing a Hohmann transfer up to the 408 km V-Bar/R-Bar corridor.",
    quizQ:
      "In orbital mechanics, what happens if a chaser spacecraft fires its thrusters prograde (forward) in orbit?",
    quizOpts: [
      "It ascends to a higher orbit with a longer period and slower angular rate",
      "It immediately accelerates straight into the target without changing altitude",
      "It drops straight down to Earth",
    ],
    quizAns: 0,
    url: "https://www.nasa.gov/International-Space-Station/",
  },
  {
    id: "k-eps",
    catKey: "SYSTEMS",
    cat: "ELECTRICAL POWER · ISS iROSA & CMG ATTITUDE",
    title: "ISS iROSA Roll-Out Solar Arrays & 6,600-RPM CMG Attitude",
    readTime: "6 MIN DOSSIER",
    keyMetric: "215+ kW Peak · 4 CMGs",
    body: "The ISS Electrical Power System combines 8 legacy Solar Array Wings with 6 new Roll-Out Solar Arrays (iROSA) to generate over 215 kW, while four 6,600-RPM Control Moment Gyroscopes maintain attitude without propellant.",
    specs: [
      ["Array Span", "109 meters (356 ft) truss length · 8 channels"],
      [
        "iROSA Upgrade",
        "+30% power boost using stored-strain roll-out composite booms",
      ],
      [
        "Battery Storage",
        "24 Lithium-Ion ORU batteries for 35-min eclipse phases",
      ],
      ["CMG Momentum", "4,745 N·m·s per double-gimbal flywheel at 6,600 RPM"],
    ],
    deepDive:
      "Solar Alpha Rotary Joints (SARJ) rotate 360° once per orbit while Beta Gimbal Assemblies (BGA) adjust for seasonal sun beta angle. Meanwhile, the Z1 Truss houses 4 massive 272-kg steel flywheels spinning at 6,600 RPM; tilting their gimbals induces gyroscopic torque to orient the 420-metric-ton station.",
    quizQ:
      "How does the ISS orient its attitude during normal operations without burning chemical thruster fuel?",
    quizOpts: [
      "Using 4 double-gimbal Control Moment Gyroscopes (CMGs) spinning at 6,600 RPM",
      "By flapping its solar arrays like wings",
      "Using magnetic sails",
    ],
    quizAns: 0,
    url: "https://www.nasa.gov/international-space-station/space-station-solar-arrays/",
  },
  {
    id: "k-comms",
    catKey: "SYSTEMS",
    cat: "TELEMETRY · TDRSS & DEEP SPACE NETWORK",
    title: "Space-to-Ground Communications, TDRSS & Quindar Tones",
    readTime: "5 MIN DOSSIER",
    keyMetric: "S/Ku/Ka-Band · 2,525 Hz PTT",
    body: "NASA maintains continuous voice, telemetry, and 600 Mbps Ku/Ka-band science data with the ISS through geostationary Tracking and Data Relay Satellites (TDRSS) at 35,786 km altitude, while Artemis missions use the Deep Space Network.",
    specs: [
      [
        "S-Band Link",
        "2.0–2.3 GHz command, core telemetry & S/G 1-4 audio loops",
      ],
      ["Ku / Ka-Band", "High-rate HD video & payload data up to 600 Mbps"],
      ["Intro Quindar", "2,525 Hz for 250 ms when CAPCOM keys push-to-talk"],
      [
        "Outro Quindar",
        "2,475 Hz for 250 ms when CAPCOM releases push-to-talk",
      ],
    ],
    deepDive:
      'During the Apollo and Space Shuttle eras, iconic "beeps" heard before and after Mission Control transmissions were Quindar tones—in-band audio signaling frequencies (2,525 Hz key-down, 2,475 Hz key-up) used to trigger remote ground station transmitters across leased landlines.',
    quizQ:
      "What is the exact frequency of the classic NASA Intro Quindar tone when CAPCOM keys the microphone?",
    quizOpts: ["2,525 Hz (for 250 milliseconds)", "440 Hz", "10,000 Hz"],
    quizAns: 0,
    url: "https://www.nasa.gov/directorates/somd/space-communications-navigation-program/",
  },
  {
    id: "k-big3",
    catKey: "CREW",
    cat: "FLIGHT SAFETY · EMERGENCY RESPONSE",
    title: 'The "Big Three" ISS Emergencies: Fire, Depress & Toxic NH₃',
    readTime: "7 MIN DOSSIER",
    keyMetric: "Class 1 Alarm · Safe Haven",
    body: "Every expedition crew trains relentlessly for three life-threatening Class 1 emergencies: Cabin Fire, Rapid Depressurization (micrometeoroid/debris hull breach), and Toxic Anhydrous Ammonia (NH₃) cooling loop intrusion.",
    specs: [
      [
        "Fire Extinguishers",
        "Fine Water Mist (PFE) in USOS & CO₂ extinguishers",
      ],
      [
        "Breathing Gear",
        "Portable Breathing Apparatus (PBA) 15-min O₂ + Ammonia Respirator",
      ],
      [
        "Depress Rule",
        "Ensure open path to docked Crew Dragon / Soyuz lifeboat first",
      ],
      [
        "Reserve Time",
        "T-reserve calculation dictates module hatch isolation cutoff",
      ],
    ],
    deepDive:
      "In microgravity, flames form spherical diffusion fronts without buoyancy convection; crew members immediately cut rack power, silence inter-module ventilation fans to stop feeding oxygen to the fire, don PBAs, and discharge water-mist or CO₂ extinguishers into rack ports.",
    quizQ:
      "During an ISS Rapid Depressurization alarm, what is the crew’s #1 immediate priority before isolating hatches?",
    quizOpts: [
      "Verify an open translation path to their docked Crew Return Vehicle (Dragon/Soyuz) and check T-reserve",
      "Put on a full EVA spacesuit",
      "Turn on all ventilation fans",
    ],
    quizAns: 0,
    url: "https://www.nasa.gov/international-space-station/",
  },
  {
    id: "k-health",
    catKey: "CREW",
    cat: "BIOASTRONAUTICS · HUMAN HEALTH & PERFORMANCE",
    title: "Microgravity Physiology, SANS & ARED/T2 Countermeasures",
    readTime: "6 MIN DOSSIER",
    keyMetric: "2.5 Hrs/Day · 600 lb ARED",
    body: "Without gravitational loading, astronauts lose 1% to 1.5% of weight-bearing bone mineral density per month and experience cephalad fluid shifts (Spaceflight-Associated Neuro-ocular Syndrome, SANS). Daily 2.5-hour workouts counteract deconditioning.",
    specs: [
      [
        "ARED Load",
        "Vacuum cylinders + flywheels up to 600 lbs (272 kg) resistance",
      ],
      [
        "T2 Treadmill",
        "Vibration-isolated COLBERT treadmill with bungee subject load",
      ],
      [
        "CEVIS Ergometer",
        "Vibration-isolated cycle ergometer for VO₂ max maintenance",
      ],
      [
        "Fluid Shift",
        "~2 liters of fluid shift from legs to upper body in zero-G",
      ],
    ],
    deepDive:
      "Because iron weights are weightless in orbit, the Advanced Resistive Exercise Device (ARED) uses piston-driven vacuum cylinders and inertial flywheels to mimic the exact biomechanics of free-weight squats, deadlifts, and bench presses on Earth.",
    quizQ:
      "How does the ISS ARED machine generate up to 600 lbs of resistance in weightlessness?",
    quizOpts: [
      "Using piston-driven vacuum cylinders and inertial flywheels",
      "Using lead barbell plates",
      "Using elastic rubber bands only",
    ],
    quizAns: 0,
    url: "https://www.nasa.gov/hrp/",
  },
  {
    id: "k-gateway",
    catKey: "ARTEMIS",
    cat: "CIS-LUNAR · GATEWAY & LUNAR SOUTH POLE",
    title: "Lunar Gateway NRHO & Artemis III Shackleton South Pole",
    readTime: "7 MIN DOSSIER",
    keyMetric: "9:2 NRHO · 6.5-Day Period",
    body: "NASA’s Lunar Gateway will orbit the Moon in a 9:2 resonant Near-Rectilinear Halo Orbit (3,000 km perilune × 70,000 km apolune), providing continuous Earth communications and staging for Artemis South Pole surface expeditions.",
    specs: [
      ["Orbit Type", "Near-Rectilinear Halo Orbit (NRHO) around Earth-Moon L2"],
      [
        "Perilune / Apolune",
        "3,000 km over North Pole × 70,000 km over South Pole",
      ],
      [
        "PPE + HALO",
        "60 kW Solar Electric Propulsion + Habitation & Logistics Outpost",
      ],
      [
        "Target Region",
        "Lunar South Pole Permanently Shadowed Regions (water ice)",
      ],
    ],
    deepDive:
      "Low Lunar Orbit (like Apollo’s 110 km orbit) suffers from severe lunar mascon gravity perturbations requiring heavy station-keeping propellant and experiences 45-minute communications blackouts behind the Moon every 2 hours. The 6.5-day NRHO keeps Gateway in constant view of Earth while offering low-Δv access to the Lunar South Pole.",
    quizQ:
      "Why did NASA select the 6.5-day Near-Rectilinear Halo Orbit (NRHO) for the Lunar Gateway?",
    quizOpts: [
      "It provides continuous Earth line-of-sight communications, avoids long eclipses, and minimizes station-keeping fuel",
      "Because the Moon has a thick atmosphere below 3,000 km",
      "To stay on the far side permanently",
    ],
    quizAns: 0,
    url: "https://www.nasa.gov/mission/gateway/",
  },
];

function setKnowledgeCategory(catKey) {
  activeKnowledgeCategory = catKey;
  ["ALL", "EVA", "SYSTEMS", "ARTEMIS", "ROBOTICS", "CREW"].forEach((k) => {
    const b = document.getElementById("kcat-" + k);
    if (b) b.classList.toggle("active", k === catKey);
  });
  filterKnowledgeLibrary();
}

function filterKnowledgeLibrary() {
  const q = (document.getElementById("knowledge-search-input")?.value || "")
    .toLowerCase()
    .trim();
  const g = document.getElementById("knowledge-articles-grid");
  const banner = document.getElementById("knowledge-count-banner");
  if (!g) return;
  if (!appState.readDossiers) appState.readDossiers = {};
  const items = KNOWLEDGE_ARTICLES.filter((a) => {
    const catMatch =
      activeKnowledgeCategory === "ALL" || a.catKey === activeKnowledgeCategory;
    if (!catMatch) return false;
    if (!q) return true;
    const specStr = (a.specs || [])
      .map((s) => s.join(" "))
      .join(" ")
      .toLowerCase();
    return (
      a.title.toLowerCase().includes(q) ||
      a.body.toLowerCase().includes(q) ||
      a.cat.toLowerCase().includes(q) ||
      a.deepDive.toLowerCase().includes(q) ||
      specStr.includes(q)
    );
  });
  if (banner)
    banner.textContent = `SHOWING ${items.length} OF ${KNOWLEDGE_ARTICLES.length} VERIFIED NASA DOSSIERS`;
  g.innerHTML = items.length
    ? items
        .map((a) => {
          const isDone = !!appState.readDossiers[a.id];
          return `
        <div class="space-card p-5 sm:p-6 flex flex-col justify-between border ${isDone ? "border-emerald-500/45" : "border-slate-800/90"} hover:border-amber-400/60 transition">
          <div>
            <div class="flex items-center justify-between gap-2 mb-2">
              <span class="text-[10px] font-mono-tech text-sky-400 uppercase tracking-wider">${a.cat}</span>
              <span class="px-2 py-0.5 rounded-full text-[10px] font-mono-tech ${isDone ? "bg-emerald-500/20 text-emerald-300" : "bg-amber-500/15 text-amber-300"}">${isDone ? "VERIFIED ✓" : a.readTime}</span>
            </div>
            <h3 class="text-base sm:text-lg font-bold text-white mb-2 leading-snug">${a.title}</h3>
            <div class="mb-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-700/80 text-[11px] font-mono-tech text-emerald-400">
              <span>⚡</span><span>${a.keyMetric}</span>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed mb-4">${a.body}</p>
            <div class="grid grid-cols-2 gap-1.5 mb-4">
              ${(a.specs || [])
                .slice(0, 2)
                .map(
                  (s) => `
                <div class="p-2 rounded bg-slate-950/80 border border-slate-800/80">
                  <div class="text-[9px] font-mono-tech text-slate-400 uppercase">${s[0]}</div>
                  <div class="text-[11px] font-semibold text-slate-200 truncate" title="${s[1]}">${s[1]}</div>
                </div>
              `,
                )
                .join("")}
            </div>
          </div>
          <div class="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
            <button onclick="openKnowledgeDossier('${a.id}')" class="btn-orange-pill px-4 py-2 text-xs flex-1">
              <span>${isDone ? "Review Dossier & Specs" : "Open Dossier & Quiz (+50 PTS)"}</span>
            </button>
            <a href="${a.url}" target="_blank" rel="noopener noreferrer" title="Official NASA Source" class="px-3 py-2 rounded-full bg-slate-900 border border-slate-700 hover:border-sky-400 text-[11px] text-sky-300 font-semibold transition shrink-0">NASA ↗</a>
          </div>
        </div>
      `;
        })
        .join("")
    : `<div class="col-span-full space-card p-8 text-center text-slate-400">No NASA technical dossiers matched your filter. Click <button onclick="setKnowledgeCategory('ALL');document.getElementById('knowledge-search-input').value='';filterKnowledgeLibrary()" class="text-amber-400 underline">Reset Filters</button> to view all 12 dossiers.</div>`;
}

function openKnowledgeDossier(id) {
  const a =
    KNOWLEDGE_ARTICLES.find((x) => x.id === id) || KNOWLEDGE_ARTICLES[0];
  const modal = document.getElementById("knowledge-dossier-modal");
  const body = document.getElementById("knowledge-dossier-modal-body");
  if (!modal || !body) return;
  if (!appState.readDossiers) appState.readDossiers = {};
  const isDone = !!appState.readDossiers[a.id];
  body.innerHTML = `
        <div class="flex items-start justify-between gap-4 pb-4 mb-4 border-b border-slate-800">
          <div>
            <div class="text-xs font-mono-tech text-sky-400">${a.cat} · ${a.keyMetric}</div>
            <h2 class="text-xl sm:text-2xl font-extrabold text-white mt-1">${a.title}</h2>
          </div>
          <button onclick="closeKnowledgeDossier()" class="w-8 h-8 rounded-lg bg-slate-800 text-slate-300 hover:text-white font-bold">✕</button>
        </div>

        <p class="text-xs sm:text-sm text-slate-200 leading-relaxed mb-4">${a.body}</p>
        <div class="p-4 rounded-xl bg-slate-950/90 border border-sky-500/30 mb-5">
          <div class="text-xs font-mono-tech text-amber-400 uppercase mb-1.5">ENGINEERING DEEP DIVE (JSC FLIGHT DATA FILE)</div>
          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">${a.deepDive}</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
          ${(a.specs || [])
            .map(
              (s) => `
            <div class="p-3 rounded-lg bg-slate-900 border border-slate-800">
              <div class="text-[10px] font-mono-tech text-sky-400 uppercase">${s[0]}</div>
              <div class="text-xs font-bold text-white mt-0.5">${s[1]}</div>
            </div>
          `,
            )
            .join("")}
        </div>

        <div class="p-4 rounded-xl bg-slate-900/95 border border-amber-400/40">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-mono-tech text-amber-400 uppercase font-bold">ASCAN FIELD VERIFICATION CHECK (+50 PTS)</span>
            <span class="text-[11px] font-mono-tech ${isDone ? "text-emerald-400" : "text-slate-400"}">${isDone ? "COMPLETED ✓" : "UNVERIFIED"}</span>
          </div>
          <p class="text-xs sm:text-sm font-semibold text-white mb-3">${a.quizQ}</p>
          <div class="space-y-2">
            ${a.quizOpts
              .map(
                (opt, idx) => `
              <button onclick="verifyKnowledgeDossierQuiz('${a.id}', ${idx})" class="w-full text-left p-3 rounded-lg bg-slate-950 hover:bg-sky-950 border border-slate-700 hover:border-amber-400 text-xs text-slate-200 transition">
                ${opt}
              </button>
            `,
              )
              .join("")}
          </div>
        </div>

        <div class="mt-5 flex flex-wrap items-center justify-between gap-3">
          <a href="${a.url}" target="_blank" rel="noopener noreferrer" class="text-xs text-amber-400 hover:underline font-semibold">Open Official NASA Reference Documentation ↗</a>
          <button onclick="closeKnowledgeDossier()" class="btn-glass-pill px-5 py-2 text-xs">Close Dossier</button>
        </div>
      `;
  modal.classList.remove("hidden");
  playTone(1380, 0.06);
}

function closeKnowledgeDossier() {
  const modal = document.getElementById("knowledge-dossier-modal");
  if (modal) modal.classList.add("hidden");
}

function verifyKnowledgeDossierQuiz(id, chosenIdx) {
  const a = KNOWLEDGE_ARTICLES.find((x) => x.id === id);
  if (!a) return;
  if (chosenIdx === a.quizAns) {
    if (!appState.readDossiers) appState.readDossiers = {};
    if (!appState.readDossiers[id]) {
      appState.readDossiers[id] = true;
      appState.points += 50;
      saveAppState();
      playQuindarBeep();
      showToast(`Verified "${a.title}"! +50 NASA Readiness Points awarded!`);
    } else {
      playTone(1650, 0.1);
      showToast(`Correct! Dossier "${a.title}" already verified.`);
    }
    filterKnowledgeLibrary();
    closeKnowledgeDossier();
  } else {
    playTone(400, 0.2, "sawtooth", 0.05);
    showToast(
      "Not quite! Review the Engineering Deep Dive specs above and try again.",
    );
  }
}

// Page 28: FAQ Accordion
const FAQ_ITEMS = [
  {
    q: "1. Are the technical specifications in this trainer 100% authentic NASA data?",
    a: "Yes! Every pressure, dimension, and velocity in this application is verified against official NASA documentation: NBL pool (202×102×40 ft, 6.2M gallons), ISS orbit (408 km, 7.66 km/s, 90-min period, 14.7 psia cabin, 98% ECLSS water recovery), EMU suit (4.3 psia / 29.6 kPa, 100% O2), and Canadarm2 (17.6 m, 7-DOF).",
  },
  {
    q: "2. How long does real NASA Astronaut Candidate (ASCAN) basic training take?",
    a: "Newly selected NASA Astronaut Candidates spend approximately 2 years (24 months) at the Lyndon B. Johnson Space Center in Houston completing ISS systems, NBL spacewalk training, robotics, T-38 jet proficiency, and Russian language courses before becoming eligible for flight assignment.",
  },
  {
    q: "3. Where is my account and training progress stored in this web app?",
    a: "All profile details, multiple user accounts, module statuses, earned badges, and settings are permanently saved in your browser via a dual-layer IndexedDB (NASAAscanDB) + localStorage database. You can also export or import a JSON backup file anytime on Settings & Privacy.",
  },
  {
    q: "4. Does the Fitness & Readiness module provide medical measurements?",
    a: "No. As explicitly stated on the Fitness & Readiness page, the module simulates NASA’s ARED, T2 Treadmill, and CEVIS countermeasure schedule for educational purposes only and makes zero medical measurements or health claims.",
  },
];

function renderFaqList() {
  const box = document.getElementById("faq-accordion-list");
  if (!box) return;
  box.innerHTML = FAQ_ITEMS.map(
    (item, idx) => `
        <div class="space-card p-5">
          <button onclick="toggleFaqItem(${idx})" class="w-full text-left flex items-center justify-between gap-4">
            <span class="text-sm sm:text-base font-bold text-white">${item.q}</span>
            <span class="text-amber-400 font-bold text-lg" id="faq-icon-${idx}">+</span>
          </button>
          <div id="faq-body-${idx}" class="${idx === 0 ? "" : "hidden"} mt-3 pt-3 border-t border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
            ${item.a}
          </div>
        </div>
      `,
  ).join("");
}

function toggleFaqItem(idx) {
  const b = document.getElementById("faq-body-" + idx);
  const ic = document.getElementById("faq-icon-" + idx);
  if (b) {
    const isHidden = b.classList.toggle("hidden");
    if (ic) ic.textContent = isHidden ? "+" : "−";
  }
}

// Page 29: Help & Support Form
function submitSupportTicket(e) {
  e.preventDefault();
  const name = document.getElementById("help-name").value;
  const topic = document.getElementById("help-topic").value;
  const msg = document.getElementById("help-message").value;
  appState.supportTickets.unshift({
    name,
    topic,
    msg,
    time: new Date().toLocaleTimeString(),
  });
  document.getElementById("help-message").value = "";
  saveAppState();
  renderSupportTickets();
  showToast("Support inquiry logged and saved to your persistent database!");
}

function renderSupportTickets() {
  const box = document.getElementById("support-tickets-log");
  if (!box) return;
  box.innerHTML = (appState.supportTickets || [])
    .map(
      (t) => `
        <div class="p-3 rounded-lg bg-slate-900 border border-emerald-500/40 text-slate-200">
          <div class="flex justify-between text-[11px] text-emerald-400 font-mono-tech"><span>TICKET LOGGED · ${t.topic}</span><span>${t.time}</span></div>
          <div class="mt-1">${t.msg}</div>
        </div>
      `,
    )
    .join("");
}

// Page 30: Settings & Privacy
function updateSettingsFromUI() {
  const th = document.getElementById("setting-theme").value;
  const snd = document.getElementById("setting-sound").checked;
  const lg = document.getElementById("setting-lang").value;
  appState.settings.theme = th;
  appState.settings.sound = snd;
  appState.settings.lang = lg;
  applySettingsToDOM();
  saveAppState();
  showToast("Preferences updated and saved to IndexedDB & LocalStorage.");
}

function toggleLanguageQuick() {
  appState.settings.lang = appState.settings.lang === "en" ? "ar" : "en";
  const sel = document.getElementById("setting-lang");
  if (sel) sel.value = appState.settings.lang;
  applySettingsToDOM();
  saveAppState();
  showToast(
    appState.settings.lang === "ar"
      ? "     "
      : "Switched to English NASA Standard",
  );
}

function applySettingsToDOM() {
  document.body.classList.toggle(
    "light-theme",
    appState.settings.theme === "light",
  );
  const meta = ALL_PAGES.find((p) => p.id === currentView) || ALL_PAGES[0];
  renderContextualSubNav(meta.cat);
}

function resetAllProgress() {
  const keepUser = Object.assign({}, appState.user);
  appState = JSON.parse(JSON.stringify(DEFAULT_STATE));
  appState.user = keepUser;
  SUIT_STEPS.forEach((s) => (s.done = false));
  renderSpacesuitChecklist();
  saveAppState();
  showToast(
    "Progress reset to 0% (0/12 modules, 0 PTS). Ready to train from scratch!",
  );
}

function unlockAllDemoProgress() {
  Object.keys(appState.moduleStatus).forEach(
    (k) => (appState.moduleStatus[k] = "completed"),
  );
  appState.points = Math.max(appState.points, 2450);
  saveAppState();
  playQuindarBeep();
  showToast(
    "Instructor Mode: All 12 modules & simulations marked Complete (100%)!",
  );
}

// Initialize everything on load
window.addEventListener("DOMContentLoaded", () => {
  const initFns = [
    () => restoreFromIndexedDBIfNeeded(),
    () => checkAuthGateOnStartup(),
    () => filterKnowledgeLibrary(),
    () => renderFaqList(),
    () => inspectSubsystem(0),
    () => renderSpacesuitChecklist(),
    () => renderRoboticsUI(),
    () => selectNavRoute(0),
    () => renderCommsSim(),
    () => renderSurvivalScenario(),
    () => renderSpacewalkSim(),
    () => renderLandingSim(),
    () => renderDailyMissions(),
    () => renderMissionDetailsView("launch"),
    () => renderSupportTickets(),
    () => applySettingsToDOM(),
    () => renderContextualSubNav("main"),
    () => syncAllTelemetryUI(),
    () => resizeMicroGCanvas(),
  ];
  initFns.forEach((fn) => {
    try {
      fn();
    } catch (err) {
      console.error("Init err:", err);
    }
  });
  window.addEventListener("resize", () => {
    try {
      resizeMicroGCanvas();
      initArcadeCanvas();
    } catch (e) {}
  });
  requestAnimationFrame(stepMicroGPhysics);
});

// =====================================================================
// INTERACTIVE 60FPS STARFIELD & LIVE ISS TELEMETRY TICKER (SUPERNOVA)
// =====================================================================
const starfield = {
  stars: [],
  mouseX: 0,
  mouseY: 0,
};

function initStarfieldBg() {
  const canvas = document.getElementById("starfield-bg");
  if (!canvas) return;
  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resize();
  window.addEventListener("resize", resize);
  window.addEventListener("mousemove", (e) => {
    starfield.mouseX = (e.clientX / window.innerWidth - 0.5) * 18;
    starfield.mouseY = (e.clientY / window.innerHeight - 0.5) * 18;
  });

  starfield.stars = Array.from({ length: 110 }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    r: Math.random() * 1.7 + 0.4,
    alpha: Math.random() * 0.7 + 0.2,
    speed: Math.random() * 0.25 + 0.05,
    hue:
      Math.random() > 0.8
        ? "#38bdf8"
        : Math.random() > 0.85
          ? "#f59e0b"
          : "#f8fafc",
  }));

  function renderStars() {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const s of starfield.stars) {
      s.y -= s.speed;
      if (s.y < 0) {
        s.y = canvas.height;
        s.x = Math.random() * canvas.width;
      }
      const px = s.x + starfield.mouseX * s.speed * 2;
      const py = s.y + starfield.mouseY * s.speed * 2;
      ctx.fillStyle = s.hue;
      ctx.globalAlpha = s.alpha;
      ctx.beginPath();
      ctx.arc(px, py, s.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(renderStars);
  }
  requestAnimationFrame(renderStars);

  // Live ISS Telemetry Fluctuation in Header
  setInterval(() => {
    const el = document.getElementById("header-telemetry-iss");
    if (el) {
      const alt = (407.8 + Math.sin(Date.now() / 4000) * 0.6).toFixed(1);
      const vel = (7.66 + Math.cos(Date.now() / 3000) * 0.01).toFixed(2);
      el.textContent = `ISS: ${alt} km · ${vel} km/s`;
    }
  }, 2000);
}

// =====================================================================
// SPACE GAMES ARCADE ENGINE (4 PLAYABLE HTML5 CANVAS GAMES)
// =====================================================================
let activeArcadeGame = "debris";
const arcadeBestScores = { debris: 0, docking: 0, lander: 0, reflex: 0 };
const arcadeKeys = { up: false, down: false, left: false, right: false };

const arcadeState = {
  score: 0,
  shield: 100,
  running: true,
  // Game 1: Debris Dodge
  shipX: 120,
  shipY: 200,
  shipVx: 0,
  shipVy: 0,
  debrisList: [],
  coreList: [],
  // Game 2: Dragon Docking
  dockX: 90,
  dockY: -65,
  dockVx: 0.35,
  dockVy: -0.25,
  dockDist: 45.0,
  dockRate: 0.45,
  // Game 3: Lunar Lander
  landerX: 350,
  landerY: 50,
  landerVx: 0.6,
  landerVy: 0,
  landerFuel: 100,
  padX: 350,
  // Game 4: Reflex Matrix
  nodes: [],
  reflexTimeLeft: 30,
  lastReflexTick: 0,
};

function initArcadeCanvas() {
  const c = document.getElementById("arcade-canvas");
  if (!c || !c.parentElement) return;
  c.width = c.parentElement.clientWidth || 760;
  c.height = c.parentElement.clientHeight || 400;
  startOrResetArcadeGame();
}

function switchArcadeGame(gameKey) {
  activeArcadeGame = gameKey;
  ["debris", "docking", "lander", "reflex"].forEach((k) => {
    const b = document.getElementById("game-tab-" + k);
    if (b) b.classList.toggle("active", k === gameKey);
  });

  const titleBanner = document.getElementById("arcade-title-banner");
  const sideHeading = document.getElementById("arcade-side-heading");
  const sideInst = document.getElementById("arcade-side-instructions");
  const modeReadout = document.getElementById("arcade-mode-readout");

  if (gameKey === "debris") {
    if (titleBanner)
      titleBanner.textContent =
        "GAME 01: ZERO-G EVA DEBRIS DODGE & CORE COLLECTION";
    if (sideHeading) sideHeading.textContent = "SAFER Jetpack Controls";
    if (sideInst)
      sideInst.innerHTML =
        'Use <strong class="text-amber-400">WASD / Arrow Keys</strong> or the thruster buttons to fly. Collect <span class="text-emerald-400">Green Telemetry Cores (+25 pts)</span> and dodge <span class="text-rose-400">High-Velocity Debris</span>!';
    if (modeReadout) modeReadout.textContent = "EVA DEBRIS AVOIDANCE";
  } else if (gameKey === "docking") {
    if (titleBanner)
      titleBanner.textContent =
        "GAME 02: CREW DRAGON ISS HARMONY NODE-2 DOCKING SIMULATOR";
    if (sideHeading) sideHeading.textContent = "6-DOF Translation Thrusters";
    if (sideInst)
      sideInst.innerHTML =
        'Center the <span class="text-sky-400">Dragon Crosshair</span> inside the green IDA target port (error &lt; 18 px) while keeping closure rate gentle. Press <strong class="text-amber-400">BRAKE / FIRE</strong> to pulse forward approach!';
    if (modeReadout) modeReadout.textContent = "IDA SOFT CAPTURE";
  } else if (gameKey === "lander") {
    if (titleBanner)
      titleBanner.textContent =
        "GAME 03: ARTEMIS LUNAR SOUTH POLE DESCENT LANDER";
    if (sideHeading) sideHeading.textContent = "Lunar Descent Engine Controls";
    if (sideInst)
      sideInst.innerHTML =
        'Counter 1.62 m/s² lunar gravity using <strong class="text-amber-400">▲ THRUST</strong> and <strong class="text-sky-400">◀ / ▶ RCS</strong>. Touch down on the golden Shackleton Pad with vertical speed <strong class="text-emerald-400">&lt; 1.8 m/s</strong>!';
    if (modeReadout) modeReadout.textContent = "SHACKLETON CRATER EDL";
  } else if (gameKey === "reflex") {
    if (titleBanner)
      titleBanner.textContent =
        "GAME 04: ASTRONAUT NEURAL REFLEX & WCA ALARM MATRIX";
    if (sideHeading)
      sideHeading.textContent = "Psychomotor Vigilance Task (PVT)";
    if (sideInst)
      sideInst.innerHTML =
        'Click glowing <span class="text-amber-400">Warning & Caution Avionics Nodes</span> directly on the canvas as fast as possible before they decay! Avoid clicking dark inactive cells.';
    if (modeReadout) modeReadout.textContent = "NEURAL PVT BENCHMARK";
  }

  playTone(1480, 0.07);
  startOrResetArcadeGame();
}

function startOrResetArcadeGame() {
  const c = document.getElementById("arcade-canvas");
  const W = c ? c.width : 760;
  const H = c ? c.height : 400;

  arcadeState.score = 0;
  arcadeState.shield = 100;
  arcadeState.running = true;

  // Init Game 1
  arcadeState.shipX = 110;
  arcadeState.shipY = H / 2;
  arcadeState.shipVx = 0;
  arcadeState.shipVy = 0;
  arcadeState.debrisList = Array.from({ length: 6 }, (_, i) => ({
    x: 260 + i * 95,
    y: Math.random() * (H - 50) + 25,
    vx: -(Math.random() * 1.8 + 1.2),
    r: Math.random() * 8 + 9,
  }));
  arcadeState.coreList = Array.from({ length: 4 }, (_, i) => ({
    x: 220 + i * 130,
    y: Math.random() * (H - 60) + 30,
    vx: -(Math.random() * 1.2 + 0.8),
    r: 9,
  }));

  // Init Game 2
  arcadeState.dockX = (Math.random() > 0.5 ? 1 : -1) * 85;
  arcadeState.dockY = (Math.random() > 0.5 ? 1 : -1) * 65;
  arcadeState.dockVx = 0.25;
  arcadeState.dockVy = -0.2;
  arcadeState.dockDist = 40.0;

  // Init Game 3
  arcadeState.landerX = W * 0.25;
  arcadeState.landerY = 55;
  arcadeState.landerVx = 1.1;
  arcadeState.landerVy = 0.2;
  arcadeState.landerFuel = 100;
  arcadeState.padX = W * 0.68;

  // Init Game 4
  arcadeState.nodes = [];
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 5; col++) {
      arcadeState.nodes.push({
        x: 110 + col * 130,
        y: 85 + row * 110,
        active: Math.random() > 0.65,
        timer: Math.random() * 90 + 40,
      });
    }
  }
  arcadeState.reflexTimeLeft = 30;
  arcadeState.lastReflexTick = performance.now();

  updateArcadeHUD();
}

function arcadeInput(dir, isDown) {
  arcadeKeys[dir] = isDown;
}

function arcadePulse(dir) {
  if (activeArcadeGame === "debris") {
    if (dir === "up") arcadeState.shipVy -= 1.6;
    if (dir === "down") arcadeState.shipVy += 1.6;
    if (dir === "left") arcadeState.shipVx -= 1.6;
    if (dir === "right") arcadeState.shipVx += 1.6;
    if (dir === "action") {
      arcadeState.shipVx *= 0.2;
      arcadeState.shipVy *= 0.2;
    }
  } else if (activeArcadeGame === "docking") {
    if (dir === "up") arcadeState.dockVy -= 0.45;
    if (dir === "down") arcadeState.dockVy += 0.45;
    if (dir === "left") arcadeState.dockVx -= 0.45;
    if (dir === "right") arcadeState.dockVx += 0.45;
    if (dir === "action")
      arcadeState.dockDist = Math.max(0, arcadeState.dockDist - 4.5);
  } else if (activeArcadeGame === "lander") {
    if (dir === "up" && arcadeState.landerFuel > 0) {
      arcadeState.landerVy -= 1.45;
      arcadeState.landerFuel = Math.max(0, arcadeState.landerFuel - 4);
    }
    if (dir === "left") arcadeState.landerVx -= 0.6;
    if (dir === "right") arcadeState.landerVx += 0.6;
    if (dir === "action") arcadeState.landerVx *= 0.3;
  }
  playTone(980, 0.04, "triangle", 0.03);
}

function updateArcadeHUD() {
  const s1 = document.getElementById("arcade-hud-stat1");
  const s2 = document.getElementById("arcade-hud-stat2");
  const s3 = document.getElementById("arcade-hud-stat3");
  if (arcadeState.score > (arcadeBestScores[activeArcadeGame] || 0)) {
    arcadeBestScores[activeArcadeGame] = arcadeState.score;
  }
  if (s1) s1.textContent = `SCORE: ${arcadeState.score}`;
  if (s2) {
    if (activeArcadeGame === "debris")
      s2.textContent = `HULL: ${arcadeState.shield}%`;
    else if (activeArcadeGame === "docking")
      s2.textContent = `RANGE: ${arcadeState.dockDist.toFixed(1)}m`;
    else if (activeArcadeGame === "lander")
      s2.textContent = `PROPELLANT: ${Math.round(arcadeState.landerFuel)}%`;
    else s2.textContent = `TIME: ${Math.ceil(arcadeState.reflexTimeLeft)}s`;
  }
  if (s3) s3.textContent = `BEST: ${arcadeBestScores[activeArcadeGame]}`;
}

function claimArcadePoints() {
  if (arcadeState.score <= 0) {
    showToast("Play the active simulator to score points first!");
    return;
  }
  const bonus = Math.min(250, Math.max(25, Math.round(arcadeState.score / 2)));
  appState.points += bonus;
  saveAppState();
  playQuindarBeep();
  showToast(`Banked +${bonus} NASA Readiness Points from Space Games Arcade!`);
  arcadeState.score = 0;
  updateArcadeHUD();
}

// Canvas Click Handler for Game 4 (Neural Reflex Matrix)
window.addEventListener("DOMContentLoaded", () => {
  initStarfieldBg();
  const arcCanvas = document.getElementById("arcade-canvas");
  if (arcCanvas) {
    arcCanvas.addEventListener("click", (e) => {
      if (activeArcadeGame !== "reflex" || !arcadeState.running) return;
      const rect = arcCanvas.getBoundingClientRect();
      const mx = (e.clientX - rect.left) * (arcCanvas.width / rect.width);
      const my = (e.clientY - rect.top) * (arcCanvas.height / rect.height);
      for (const nd of arcadeState.nodes) {
        if (Math.hypot(mx - nd.x, my - nd.y) < 34) {
          if (nd.active) {
            nd.active = false;
            arcadeState.score += 30;
            playTone(1750, 0.06);
          } else {
            arcadeState.score = Math.max(0, arcadeState.score - 10);
            playTone(420, 0.1, "sawtooth", 0.04);
          }
          updateArcadeHUD();
          break;
        }
      }
    });
  }
});

// Keyboard listener for Space Games
window.addEventListener("keydown", (e) => {
  if (currentView !== "games") return;
  if (["ArrowUp", "w", "W"].includes(e.key)) {
    e.preventDefault();
    arcadeKeys.up = true;
  }
  if (["ArrowDown", "s", "S"].includes(e.key)) {
    e.preventDefault();
    arcadeKeys.down = true;
  }
  if (["ArrowLeft", "a", "A"].includes(e.key)) {
    e.preventDefault();
    arcadeKeys.left = true;
  }
  if (["ArrowRight", "d", "D"].includes(e.key)) {
    e.preventDefault();
    arcadeKeys.right = true;
  }
  if (e.key === " ") {
    e.preventDefault();
    arcadePulse("action");
  }
});
window.addEventListener("keyup", (e) => {
  if (["ArrowUp", "w", "W"].includes(e.key)) arcadeKeys.up = false;
  if (["ArrowDown", "s", "S"].includes(e.key)) arcadeKeys.down = false;
  if (["ArrowLeft", "a", "A"].includes(e.key)) arcadeKeys.left = false;
  if (["ArrowRight", "d", "D"].includes(e.key)) arcadeKeys.right = false;
});

function stepArcadeLoop(now) {
  const c = document.getElementById("arcade-canvas");
  if (c && currentView === "games") {
    const ctx = c.getContext("2d");
    const W = c.width,
      H = c.height;
    ctx.clearRect(0, 0, W, H);

    // Background telemetry grid
    ctx.strokeStyle = "rgba(56, 189, 248, 0.1)";
    ctx.lineWidth = 1;
    for (let x = 0; x < W; x += 50) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, H);
      ctx.stroke();
    }
    for (let y = 0; y < H; y += 50) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(W, y);
      ctx.stroke();
    }

    if (activeArcadeGame === "debris") {
      if (arcadeState.running) {
        if (arcadeKeys.up) arcadeState.shipVy -= 0.18;
        if (arcadeKeys.down) arcadeState.shipVy += 0.18;
        if (arcadeKeys.left) arcadeState.shipVx -= 0.18;
        if (arcadeKeys.right) arcadeState.shipVx += 0.18;
        arcadeState.shipVx = Math.max(
          -3.5,
          Math.min(3.5, arcadeState.shipVx * 0.985),
        );
        arcadeState.shipVy = Math.max(
          -3.5,
          Math.min(3.5, arcadeState.shipVy * 0.985),
        );
        arcadeState.shipX = Math.max(
          25,
          Math.min(W - 25, arcadeState.shipX + arcadeState.shipVx),
        );
        arcadeState.shipY = Math.max(
          25,
          Math.min(H - 25, arcadeState.shipY + arcadeState.shipVy),
        );

        // Green cores
        for (const core of arcadeState.coreList) {
          core.x += core.vx;
          if (core.x < -15) {
            core.x = W + 20;
            core.y = Math.random() * (H - 50) + 25;
          }
          if (
            Math.hypot(arcadeState.shipX - core.x, arcadeState.shipY - core.y) <
            24
          ) {
            arcadeState.score += 25;
            core.x = W + 30;
            core.y = Math.random() * (H - 50) + 25;
            playTone(1680, 0.07);
            updateArcadeHUD();
          }
          ctx.fillStyle = "#10b981";
          ctx.beginPath();
          ctx.arc(core.x, core.y, core.r, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = "#a7f3d0";
          ctx.stroke();
        }

        // Red Debris
        for (const deb of arcadeState.debrisList) {
          deb.x += deb.vx;
          if (deb.x < -20) {
            deb.x = W + 25;
            deb.y = Math.random() * (H - 40) + 20;
            arcadeState.score += 5;
            updateArcadeHUD();
          }
          if (
            Math.hypot(arcadeState.shipX - deb.x, arcadeState.shipY - deb.y) <
            deb.r + 14
          ) {
            arcadeState.shield = Math.max(0, arcadeState.shield - 25);
            deb.x = W + 40;
            playTone(340, 0.15, "sawtooth", 0.05);
            updateArcadeHUD();
            if (arcadeState.shield <= 0) {
              arcadeState.running = false;
              showToast(
                "Suit Shield Depleted! Click Launch / Restart or Bank Score PTS.",
              );
            }
          }
          ctx.fillStyle = "#f43f5e";
          ctx.beginPath();
          ctx.arc(deb.x, deb.y, deb.r, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw Astronaut Craft
      ctx.fillStyle = "#38bdf8";
      ctx.beginPath();
      ctx.arc(arcadeState.shipX, arcadeState.shipY, 15, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#f59e0b";
      ctx.font = "bold 10px JetBrains Mono, monospace";
      ctx.textAlign = "center";
      ctx.fillText("EVA-1", arcadeState.shipX, arcadeState.shipY + 3);
    } else if (activeArcadeGame === "docking") {
      const cx = W / 2,
        cy = H / 2;
      // Draw ISS IDA Target Rings
      ctx.strokeStyle = "rgba(16, 185, 129, 0.55)";
      ctx.lineWidth = 2;
      [110, 70, 32].forEach((r) => {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.stroke();
      });
      ctx.beginPath();
      ctx.moveTo(cx - 130, cy);
      ctx.lineTo(cx + 130, cy);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx, cy - 130);
      ctx.lineTo(cx, cy + 130);
      ctx.stroke();

      if (arcadeState.running) {
        if (arcadeKeys.up) arcadeState.dockVy -= 0.04;
        if (arcadeKeys.down) arcadeState.dockVy += 0.04;
        if (arcadeKeys.left) arcadeState.dockVx -= 0.04;
        if (arcadeKeys.right) arcadeState.dockVx += 0.04;
        arcadeState.dockX += arcadeState.dockVx;
        arcadeState.dockY += arcadeState.dockVy;
        arcadeState.dockDist = Math.max(0, arcadeState.dockDist - 0.06);

        const err = Math.hypot(arcadeState.dockX, arcadeState.dockY);
        if (arcadeState.dockDist <= 0.2) {
          arcadeState.running = false;
          if (
            err < 24 &&
            Math.hypot(arcadeState.dockVx, arcadeState.dockVy) < 1.2
          ) {
            arcadeState.score += 200;
            appState.points += 150;
            saveAppState();
            playQuindarBeep();
            showToast(
              "HARD CAPTURE CONFIRMED! +150 PTS Awarded for ISS Harmony Node-2 Docking!",
            );
          } else {
            playTone(360, 0.2, "sawtooth", 0.05);
            showToast(
              "Alignment off-axis at contact! Click Restart to re-attempt docking.",
            );
          }
          updateArcadeHUD();
        } else {
          arcadeState.score = Math.max(
            0,
            Math.round((40 - arcadeState.dockDist) * 3 + (100 - err)),
          );
          updateArcadeHUD();
        }
      }

      // Draw Dragon Crosshair
      const dx = cx + arcadeState.dockX;
      const dy = cy + arcadeState.dockY;
      ctx.strokeStyle = "#f59e0b";
      ctx.lineWidth = 2.5;
      ctx.strokeRect(dx - 18, dy - 18, 36, 36);
      ctx.beginPath();
      ctx.arc(dx, dy, 4, 0, Math.PI * 2);
      ctx.stroke();
      ctx.fillStyle = "#38bdf8";
      ctx.font = "11px JetBrains Mono, monospace";
      ctx.fillText(
        `ERR: ${Math.hypot(arcadeState.dockX, arcadeState.dockY).toFixed(1)} px`,
        dx + 45,
        dy - 10,
      );
    } else if (activeArcadeGame === "lander") {
      // Lunar Terrain & Landing Pad
      ctx.fillStyle = "#1e293b";
      ctx.fillRect(0, H - 38, W, 38);
      ctx.fillStyle = "#f59e0b";
      ctx.fillRect(arcadeState.padX - 48, H - 42, 96, 8);
      ctx.fillStyle = "#fde68a";
      ctx.font = "11px JetBrains Mono, monospace";
      ctx.textAlign = "center";
      ctx.fillText("SHACKLETON PAD", arcadeState.padX, H - 15);

      if (arcadeState.running) {
        arcadeState.landerVy += 0.032; // Lunar gravity
        if (arcadeKeys.up && arcadeState.landerFuel > 0) {
          arcadeState.landerVy -= 0.085;
          arcadeState.landerFuel = Math.max(0, arcadeState.landerFuel - 0.25);
        }
        if (arcadeKeys.left && arcadeState.landerFuel > 0) {
          arcadeState.landerVx -= 0.04;
        }
        if (arcadeKeys.right && arcadeState.landerFuel > 0) {
          arcadeState.landerVx += 0.04;
        }
        arcadeState.landerX = Math.max(
          25,
          Math.min(W - 25, arcadeState.landerX + arcadeState.landerVx),
        );
        arcadeState.landerY += arcadeState.landerVy;

        if (arcadeState.landerY >= H - 56) {
          arcadeState.landerY = H - 56;
          arcadeState.running = false;
          const onPad = Math.abs(arcadeState.landerX - arcadeState.padX) < 46;
          const soft =
            arcadeState.landerVy < 1.8 && Math.abs(arcadeState.landerVx) < 1.4;
          if (onPad && soft) {
            arcadeState.score = 250 + Math.round(arcadeState.landerFuel);
            appState.points += 150;
            saveAppState();
            playQuindarBeep();
            showToast(
              "THE EAGLE HAS LANDED! Soft Lunar Touchdown Confirmed (+150 PTS)!",
            );
          } else {
            playTone(350, 0.22, "sawtooth", 0.06);
            showToast(
              `Hard impact (Vy=${arcadeState.landerVy.toFixed(1)} m/s)! Keep descent rate under 1.8 m/s on the golden pad.`,
            );
          }
        }
        updateArcadeHUD();
      }

      // Draw Artemis HLS Lander
      ctx.fillStyle = "#e2e8f0";
      ctx.fillRect(arcadeState.landerX - 14, arcadeState.landerY - 18, 28, 26);
      ctx.strokeStyle = "#f59e0b";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(arcadeState.landerX - 14, arcadeState.landerY + 8);
      ctx.lineTo(arcadeState.landerX - 22, arcadeState.landerY + 16);
      ctx.moveTo(arcadeState.landerX + 14, arcadeState.landerY + 8);
      ctx.lineTo(arcadeState.landerX + 22, arcadeState.landerY + 16);
      ctx.stroke();
      ctx.fillStyle = arcadeState.landerVy < 1.8 ? "#10b981" : "#f43f5e";
      ctx.font = "11px JetBrains Mono, monospace";
      ctx.fillText(
        `Vy: ${arcadeState.landerVy.toFixed(2)} m/s`,
        arcadeState.landerX,
        arcadeState.landerY - 26,
      );
    } else if (activeArcadeGame === "reflex") {
      if (arcadeState.running) {
        const dt = (now - (arcadeState.lastReflexTick || now)) / 1000;
        arcadeState.lastReflexTick = now;
        arcadeState.reflexTimeLeft = Math.max(
          0,
          arcadeState.reflexTimeLeft - dt,
        );
        if (arcadeState.reflexTimeLeft <= 0) {
          arcadeState.running = false;
          showToast(
            `PVT Reflex Test Complete! Final Score: ${arcadeState.score}. Click Bank Score PTS!`,
          );
        }
        for (const nd of arcadeState.nodes) {
          nd.timer -= 1;
          if (nd.timer <= 0) {
            nd.active = Math.random() > 0.55;
            nd.timer = Math.random() * 85 + 35;
          }
        }
        updateArcadeHUD();
      }
      for (const nd of arcadeState.nodes) {
        ctx.fillStyle = nd.active
          ? "rgba(245, 158, 11, 0.9)"
          : "rgba(15, 23, 42, 0.85)";
        ctx.strokeStyle = nd.active ? "#fde68a" : "#334155";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(nd.x, nd.y, 30, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = nd.active ? "#090d16" : "#64748b";
        ctx.font = "bold 11px JetBrains Mono, monospace";
        ctx.textAlign = "center";
        ctx.fillText(nd.active ? "WCA HIT" : "IDLE", nd.x, nd.y + 4);
      }
    }
  }
  requestAnimationFrame(stepArcadeLoop);
}
requestAnimationFrame(stepArcadeLoop);