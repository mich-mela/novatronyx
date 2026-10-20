// =========================================================================
// 3D SPACECRAFT COCKPIT & PHYSICAL CONTROLS ENGINE (ALL 12 MODULES & SIMS)
// =========================================================================
const COCKPIT_3D_CONFIGS = {
  "mod-spacecraft": {
    code: "3D COCKPIT · ISS-SYS-101 · SPACECRAFT SYSTEMS",
    title:
      "ISS & Orion 3D Cutaway — Solar Arrays, CMG Gyros, Radiators & ECLSS",
    sysName: "ISS/ORION INTEGRATED BUS",
    throttleLabel: "SOLAR BETA°",
    knob1Label: "BUS TIE",
    knob1Modes: ["MAIN-A", "MAIN-B", "CROSS-TIE", "ISOLATE"],
    knob2Label: "CMG RPM",
    knob2Modes: ["6,600 RPM", "4,800 RPM", "DESAT", "SPIN-UP"],
    switches: [
      { id: "sw1", name: "ECLSS WRS", sub: "98% H2O Loop", on: true },
      { id: "sw2", name: "iROSA SARJ", sub: "Solar Track", on: true },
      { id: "sw3", name: "4x CMG GYRO", sub: "6600 RPM", on: true },
      { id: "sw4", name: "NH3 TCS PUMP", sub: "Radiator Flow", on: false },
      { id: "sw5", name: "ORION OMS-E", sub: "26.6 kN Gimbal", on: false },
      { id: "sw6", name: "CABIN N2/O2", sub: "14.7 psia", on: true },
    ],
  },
  "mod-spacesuit": {
    code: "3D AIRLOCK · EVA-EMU-102 · SPACESUIT & PLSS RIG",
    title:
      "Quest Airlock 3D EMU Spacesuit — Gold Visor, LCVG Tubes & SAFER Jetpack",
    sysName: "EMU 4.3 PSIA LIFE SUPPORT",
    throttleLabel: "SUIT PRESS",
    knob1Label: "O2 FLOW",
    knob1Modes: ["4.3 PSIA", "10.2 CAMPOUT", "14.7 CABIN", "LEAK TEST"],
    knob2Label: "LCVG TEMP",
    knob2Modes: ["10°C CHILL", "16°C NOM", "21°C WARM", "BYPASS"],
    switches: [
      { id: "sw1", name: "GOLD VISOR", sub: "Sun Shield", on: false },
      { id: "sw2", name: "LCVG PUMP", sub: "300ft Cooling", on: true },
      { id: "sw3", name: "100% O2 PURGE", sub: "N2 Pre-Breathe", on: true },
      { id: "sw4", name: "SAFER ARMED", sub: "1.4kg GN2 Jet", on: false },
      { id: "sw5", name: "GLOVE HEAT", sub: "Phase VI Tip", on: false },
      { id: "sw6", name: "HELMET LIGHTS", sub: "LED Flood", on: true },
    ],
  },
  "mod-microgravity": {
    code: "3D NBL POOL · NBL-ZRO-103 · ZERO-G 6-DOF TRANSLATION",
    title:
      "Sonny Carter 3D Neutral Buoyancy Lab — 6-DOF SAFER Thruster & Tool Capture",
    sysName: "SAFER 6-DOF THRUSTER PACK",
    throttleLabel: "N2 IMPULSE",
    knob1Label: "CONTROL MODE",
    knob1Modes: ["AAH HOLD", "FREE DRIFT", "PRECISION", "PULSE"],
    knob2Label: "TETHER REEL",
    knob2Modes: ["85-FT LOCK", "PAYOUT", "RETRACT", "DUAL HOOK"],
    switches: [
      { id: "sw1", name: "N2 ISOL VALVE", sub: " Bank A/B Open", on: true },
      { id: "sw2", name: "AUTO ATT HOLD", sub: "Kill Rotation", on: true },
      { id: "sw3", name: "MAGNETIC GRIP", sub: "Capture Tool", on: false },
      { id: "sw4", name: "BUOYANCY TRIM", sub: "Neutral Trim", on: true },
      { id: "sw5", name: "CHEST DISPLAY", sub: "DCM Telemetry", on: true },
      { id: "sw6", name: "RETRO BRAKE", sub: "Null Velocity", on: false },
    ],
  },
  "mod-robotics": {
    code: "3D CUPOLA RWS · ROB-RMS-104 · CANADARM2 7-DOF",
    title:
      "Cupola 3D Robotic Workstation — 17.6m Canadarm2 Joint & Grapple Control",
    sysName: "SSRMS 7-DOF MANIPULATOR",
    throttleLabel: "ARM EXTENSION",
    knob1Label: "JOINT SELECT",
    knob1Modes: ["SHOULDER YAW", "ELBOW PITCH", "WRIST ROLL", "LEE SNARE"],
    knob2Label: "ARM SPEED",
    knob2Modes: ["COARSE 25cm/s", "FINE 2cm/s", "VERNIER", "BRAKE ON"],
    switches: [
      { id: "sw1", name: "MBS BASE LOCK", sub: "S0 Truss Latch", on: true },
      { id: "sw2", name: "SHOULDER DRIVE", sub: "Pitch/Yaw/Roll", on: true },
      { id: "sw3", name: "ELBOW HINGE", sub: "Deploy Boom", on: false },
      { id: "sw4", name: "LEE CAM LASER", sub: "Target Pin", on: true },
      { id: "sw5", name: "SNARE CABLES", sub: "Capture Cargo", on: false },
      { id: "sw6", name: "CBM 16 BOLTS", sub: "Harmony Berth", on: false },
    ],
  },
  "mod-navigation": {
    code: "3D ASTRODYNAMICS · GNC-NAV-105 · ORBITAL MECHANICS",
    title:
      "3D Earth-Moon Orbital Projector — LEO Phasing, Artemis TLI & Gateway NRHO",
    sysName: "ORION GNC / FDO COMPUTER",
    throttleLabel: "BURN DELTA-V",
    knob1Label: "TRAJECTORY",
    knob1Modes: ["LEO 408 KM", "HOHMANN XFER", "ARTEMIS TLI", "GATEWAY NRHO"],
    knob2Label: "STAR TRACKER",
    knob2Modes: ["OPTICAL LOCK", "INERTIAL IMU", "GPS RELATIVE", "LIDAR NAV"],
    switches: [
      { id: "sw1", name: "PROGRADE VEC", sub: "Raise Apogee", on: true },
      { id: "sw2", name: "TLI INJECTION", sub: "3,150 m/s Burn", on: false },
      { id: "sw3", name: "NRHO HALO", sub: "Lunar Portal", on: false },
      { id: "sw4", name: "STAR TRACKER", sub: "Quaternion OK", on: true },
      { id: "sw5", name: "OMS-E GIMBAL", sub: "Thrust Align", on: true },
      { id: "sw6", name: "EXEC BURN", sub: "Fire Engine", on: false },
    ],
  },
  "mod-comms": {
    code: "3D TDRSS LINK · COM-CAP-106 · CAPCOM & QUINDAR",
    title:
      "3D Geostationary TDRSS Dish — S-Band / Ku-Band High-Gain Antenna Steering",
    sysName: "S/G-1 & KU-BAND TDRSS",
    throttleLabel: "DISH AZIMUTH",
    knob1Label: "BAND SELECT",
    knob1Modes: ["S-BAND 2.2GHz", "KU-BAND 600M", "KA-BAND HD", "UHF EVA"],
    knob2Label: "QUINDAR PTT",
    knob2Modes: ["2,525 Hz ON", "DUPLEX VOX", "ENCRYPTED", "EMERG GUARD"],
    switches: [
      { id: "sw1", name: "TDRSS-EAST", sub: "Lock Geo Sat", on: true },
      { id: "sw2", name: "HIGH-GAIN DISH", sub: "Auto Track", on: true },
      { id: "sw3", name: "QUINDAR TONE", sub: "2525Hz Key", on: true },
      { id: "sw4", name: "KU-BAND VIDEO", sub: "Downlink Live", on: false },
      { id: "sw5", name: "S/G-1 AUDIO", sub: "Houston Loop", on: true },
      { id: "sw6", name: "TELEMETRY SYNC", sub: "Packet Lock", on: true },
    ],
  },
  "mod-survival": {
    code: "3D EMERGENCY · EMG-SUR-107 · BIG 3 ISS ALARMS",
    title:
      "3D Station Damage Control — Hull Breach Hatch Isolation, Fire & Ammonia Valves",
    sysName: "CW CLASS-1 EMERGENCY PANEL",
    throttleLabel: "N2 REPRESS",
    knob1Label: "ALARM MODE",
    knob1Modes: ["DEPRESS dP/dt", "NH3 TOXIC", "CABIN FIRE", "ALL CLEAR"],
    knob2Label: "HATCH SEAL",
    knob2Modes: ["OPEN PATH", "SEAL NODE-2", "SEAL LAB", "LIFEBOAT GO"],
    switches: [
      { id: "sw1", name: "O2 PBA MASK", sub: "Don Breathing", on: true },
      { id: "sw2", name: "NH3 LOOP ISOL", sub: "Close S1 Valve", on: false },
      { id: "sw3", name: "VENT SHUTDOWN", sub: "Stop IMV Fans", on: true },
      { id: "sw4", name: "WATER MIST PFE", sub: "Suppress Fire", on: false },
      { id: "sw5", name: "ISOLATE HATCH", sub: "Seal Breach", on: false },
      { id: "sw6", name: "DRAGON PATH", sub: "Lifeboat Open", on: true },
    ],
  },
  "mod-fitness": {
    code: "3D COUNTERMEASURES · HHP-FIT-108 · ARED / T2 / CEVIS",
    title:
      "3D Tranquility Node-3 Gym — ARED Vacuum Cylinders, Flywheels & T2 Treadmill",
    sysName: "ARED / T2 VIBRATION ISOLATION",
    throttleLabel: "ARED LOAD LBS",
    knob1Label: "STATION RIG",
    knob1Modes: ["ARED 600 LB", "T2 COLBERT", "CEVIS ERG", "RECOVERY"],
    knob2Label: "BUNGEE LOAD",
    knob2Modes: ["75% BODY WT", "60% LIGHT", "85% HEAVY", "ISOLATION ON"],
    switches: [
      { id: "sw1", name: "VACUUM CYL", sub: "ARED Piston", on: true },
      { id: "sw2", name: "FLYWHEEL INERT", sub: "Free-Weight Sim", on: true },
      { id: "sw3", name: "VIS DAMPER", sub: "Protect ISS", on: true },
      { id: "sw4", name: "T2 BELT DRIVE", sub: "Motor Active", on: false },
      { id: "sw5", name: "CEVIS PEDAL", sub: "Aerobic Load", on: false },
      { id: "sw6", name: "LOG 150 MIN", sub: "Sync Daily", on: false },
    ],
  },
  "mod-teamwork": {
    code: "3D BRIDGE CRM · BHP-CRM-109 · SOLAR STORM SHIELDING",
    title:
      "3D Multi-Crew Bridge & Radiation Storm Shelter — Solar Proton Flux Defense",
    sysName: "CREW RESOURCE & DOSIMETRY",
    throttleLabel: "SHIELD MASS",
    knob1Label: "CREW ROLE",
    knob1Modes: ["COMMANDER", "EVA LEAD EV1", "MED OFFICER", "CAPCOM SYNC"],
    knob2Label: "SOLAR ALERT",
    knob2Modes: ["PROTON WATCH", "SHELTER NOW", "BUDDY TETHER", "NOMINAL"],
    switches: [
      { id: "sw1", name: "DOSIMETER TEPC", sub: "Monitor mSv", on: true },
      { id: "sw2", name: "WATER WALLS", sub: "Polyethylene", on: false },
      { id: "sw3", name: "BUDDY TETHER", sub: "EV1 + EV2 Link", on: true },
      { id: "sw4", name: "ABORT EVA IN", sub: "Quest Ingress", on: false },
      { id: "sw5", name: "ARRAY FEATHER", sub: "Protect Wings", on: true },
      { id: "sw6", name: "CREW CONSENSUS", sub: "Flight Rule GO", on: true },
    ],
  },
  "sim-launch": {
    code: "3D PAD 39B ASCENT · SIM-LAUNCH · SLS / CREW DRAGON",
    title:
      "3D Kennedy Space Center LC-39B — 4x RS-25 Ignition, Twin SRBs, Max-Q & MECO",
    sysName: "SLS BLOCK-1 FLIGHT COMPUTER",
    throttleLabel: "RS-25 THROTTLE",
    knob1Label: "ASCENT PHASE",
    knob1Modes: ["PAD 39B HOLD", "LIFTOFF!", "MAX-Q 68%", "SRB SEP / MECO"],
    knob2Label: "ABORT MODE",
    knob2Modes: ["LAS ARMED", "MODE II ATO", "NOMINAL", "LAS JETTISON"],
    switches: [
      { id: "sw1", name: "LOX / LH2 CRYO", sub: "100% Press", on: true },
      { id: "sw2", name: "4x RS-25 IGNIT", sub: "Main Engines", on: false },
      { id: "sw3", name: "TWIN SRB FIRE", sub: "8.8M lbs Thrust", on: false },
      { id: "sw4", name: "SWING ARMS", sub: "Retract脐umbil", on: true },
      { id: "sw5", name: "SRB SEPARATE", sub: "T+2m12s Jett", on: false },
      { id: "sw6", name: "MECO ORBIT", sub: "408km Insertion", on: false },
    ],
  },
  "sim-spacewalk": {
    code: "3D US EVA · SIM-SPACEWALK · S1 TRUSS AMMONIA PUMP",
    title:
      "3D S1 Truss Extravehicular Worksite — APFR Foot Restraint, QD Lines & PGT Tool",
    sysName: "QUEST EVA & PGT CONTROLLER",
    throttleLabel: "PGT TORQUE",
    knob1Label: "PGT SETTING",
    knob1Modes: ["25.5 FT-LBS", "30 RPM CW", "CCW RELEASE", "SAFE LOCK"],
    knob2Label: "PLSS O2 TANK",
    knob2Modes: ["850 PSI PRI", "SEC BACKUP", "H2O SUBLIM", "INGRESS"],
    switches: [
      { id: "sw1", name: "85-FT TETHER", sub: "D-Ring Locked", on: true },
      { id: "sw2", name: "APFR FOOT LOCK", sub: "Worksite Boot", on: true },
      { id: "sw3", name: "DEMATE 4x QD", sub: "Ammonia Lines", on: false },
      { id: "sw4", name: "PGT DRIVE 4x", sub: "H-Fixture Bolts", on: false },
      { id: "sw5", name: "MATE JUMPER", sub: "NH3 Flow OK", on: false },
      { id: "sw6", name: "BAKE-OUT 0ppm", sub: "Airlock Repress", on: false },
    ],
  },
  "sim-landing": {
    code: "3D ORION EDL · SIM-LANDING · 2,760°C PLASMA & CHUTES",
    title:
      "3D Orion Atmospheric Re-entry — AVCOAT Heat Shield Plasma & 3 Ringsail Chutes",
    sysName: "ORION ENTRY & RECOVERY",
    throttleLabel: "LIFT ROLL°",
    knob1Label: "EDL PHASE",
    knob1Modes: [
      "SM SEPARATION",
      "EI 2,760°C",
      "DROGUE 25K FT",
      "3x MAIN CHUTES",
    ],
    knob2Label: "ENTRY ANGLE",
    knob2Modes: ["-5.8° CORRIDOR", "SKIP LIFT UP", "MAX 4.0G", "17 MPH SPLASH"],
    switches: [
      { id: "sw1", name: "JETTISON ESM", sub: "Expose Shield", on: true },
      { id: "sw2", name: "-5.8° EI ALIGN", sub: "Blunt Forward", on: true },
      { id: "sw3", name: "RCS ROLL LIFT", sub: "Skip Guidance", on: true },
      { id: "sw4", name: "JETTISON FBC", sub: "25,000ft Cover", on: false },
      { id: "sw5", name: "2x DROGUES", sub: "Stabilize Mach", on: false },
      { id: "sw6", name: "3x MAIN CHUTES", sub: "116ft Ringsail", on: false },
    ],
  },
};

const ck3dState = {
  activeMod: "mod-spacecraft",
  pitch: 0.15,
  yaw: 0.45,
  roll: 0.0,
  rateP: 0.0,
  rateY: 0.004,
  rateR: 0.0,
  camDist: 8.5,
  camPreset: "cockpit",
  throttle: 75,
  knob1Idx: 0,
  knob2Idx: 0,
  switchStates: {},
  fullscreen: false,
};

let threeScene = null;
let threeCamera = null;
let threeRenderer = null;
let threeRootGroup = null;
let threeDynamicParts = {};
let starPoints = null;

function initUniversal3DCockpit() {
  // Pre-initialize switch states for all 12 modules
  Object.keys(COCKPIT_3D_CONFIGS).forEach((modKey) => {
    ck3dState.switchStates[modKey] = {};
    COCKPIT_3D_CONFIGS[modKey].switches.forEach((s) => {
      ck3dState.switchStates[modKey][s.id] = s.on;
    });
  });

  const canvas = document.getElementById("ck3d-webgl-canvas");
  if (!canvas || typeof THREE === "undefined") return;

  threeScene = new THREE.Scene();
  threeScene.fog = new THREE.FogExp2(0x020714, 0.025);

  const rect = canvas.parentElement.getBoundingClientRect();
  const w = Math.max(320, rect.width || 800);
  const h = Math.max(260, rect.height || 370);

  threeCamera = new THREE.PerspectiveCamera(48, w / h, 0.1, 200);
  threeCamera.position.set(0, 1.8, ck3dState.camDist);

  try {
    threeRenderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    threeRenderer.setSize(w, h);
    threeRenderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  } catch (err) {
    console.warn("WebGL fallback mode:", err);
    return;
  }

  // Lighting inside & outside the spacecraft
  const ambLight = new THREE.AmbientLight(0x8ab4f8, 0.72);
  threeScene.add(ambLight);

  const sunLight = new THREE.DirectionalLight(0xffffff, 1.35);
  sunLight.position.set(12, 16, 14);
  threeScene.add(sunLight);

  const rimLight = new THREE.PointLight(0xf59e0b, 0.9, 30);
  rimLight.position.set(-8, -5, 6);
  threeScene.add(rimLight);

  // 3D Deep Space Starfield & Earth Horizon Curve
  const starGeo = new THREE.BufferGeometry();
  const starVerts = [];
  for (let i = 0; i < 900; i++) {
    starVerts.push(
      (Math.random() - 0.5) * 120,
      (Math.random() - 0.5) * 80,
      (Math.random() - 0.5) * 100 - 15,
    );
  }
  starGeo.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(starVerts, 3),
  );
  const starMat = new THREE.PointsMaterial({ color: 0xe2e8f0, size: 0.16 });
  starPoints = new THREE.Points(starGeo, starMat);
  threeScene.add(starPoints);

  threeRootGroup = new THREE.Group();
  threeScene.add(threeRootGroup);

  setupCanvasOrbitDrag(canvas);
  setupJoystickDrag();
  switch3DCockpitModule("mod-spacecraft", false);

  window.addEventListener("resize", resize3DCockpitRenderer);
  requestAnimationFrame(animate3DCockpitLoop);
}

function resize3DCockpitRenderer() {
  const canvas = document.getElementById("ck3d-webgl-canvas");
  if (!canvas || !canvas.parentElement || !threeRenderer || !threeCamera)
    return;
  const rect = canvas.parentElement.getBoundingClientRect();
  const w = Math.max(300, rect.width || 800);
  const h = Math.max(250, rect.height || 370);
  threeCamera.aspect = w / h;
  threeCamera.updateProjectionMatrix();
  threeRenderer.setSize(w, h);
}

// Build bespoke, articulated 3D models for each of the 12 modules & simulations
function build3DSceneForModule(modKey) {
  if (!threeRootGroup) return;
  while (threeRootGroup.children.length > 0) {
    threeRootGroup.remove(threeRootGroup.children[0]);
  }
  threeDynamicParts = {};

  const metalMat = new THREE.MeshStandardMaterial({
    color: 0xdbeafe,
    metalness: 0.65,
    roughness: 0.3,
  });
  const darkMat = new THREE.MeshStandardMaterial({
    color: 0x1e293b,
    metalness: 0.5,
    roughness: 0.45,
  });
  const goldMat = new THREE.MeshStandardMaterial({
    color: 0xf59e0b,
    metalness: 0.8,
    roughness: 0.2,
  });
  const solarMat = new THREE.MeshStandardMaterial({
    color: 0x0284c7,
    metalness: 0.4,
    roughness: 0.25,
    emissive: 0x0369a1,
    emissiveIntensity: 0.25,
  });
  const glowGreenMat = new THREE.MeshStandardMaterial({
    color: 0x10b981,
    emissive: 0x10b981,
    emissiveIntensity: 0.6,
  });
  const glowRedMat = new THREE.MeshStandardMaterial({
    color: 0xf43f5e,
    emissive: 0xf43f5e,
    emissiveIntensity: 0.75,
  });

  if (modKey === "mod-spacecraft") {
    // 3D ISS & Orion Spacecraft Cutaway with Rotating iROSA Solar Wings & 4 CMG Flywheels
    const core = new THREE.Mesh(
      new THREE.CylinderGeometry(0.85, 0.85, 4.2, 24),
      metalMat,
    );
    core.rotation.z = Math.PI / 2;
    threeRootGroup.add(core);

    const node2 = new THREE.Mesh(
      new THREE.CylinderGeometry(0.92, 0.92, 1.6, 24),
      darkMat,
    );
    node2.position.x = 1.6;
    node2.rotation.z = Math.PI / 2;
    threeRootGroup.add(node2);

    const truss = new THREE.Mesh(
      new THREE.BoxGeometry(0.35, 0.35, 7.6),
      darkMat,
    );
    threeRootGroup.add(truss);

    const wingsGroup = new THREE.Group();
    for (let side of [-1, 1]) {
      for (let offset of [-2.4, -3.4]) {
        const wing = new THREE.Mesh(
          new THREE.BoxGeometry(1.1, 3.6, 0.06),
          solarMat,
        );
        wing.position.set(0, side * 2.1, side * offset);
        wingsGroup.add(wing);
      }
    }
    threeRootGroup.add(wingsGroup);
    threeDynamicParts.solarWings = wingsGroup;

    // 4 Control Moment Gyroscopes (CMGs) spinning inside Z1 cage
    const cmgGroup = new THREE.Group();
    for (let i = 0; i < 4; i++) {
      const gyro = new THREE.Mesh(
        new THREE.TorusGeometry(0.32, 0.08, 12, 24),
        goldMat,
      );
      gyro.position.set((i - 1.5) * 0.48, 1.15, 0);
      cmgGroup.add(gyro);
    }
    threeRootGroup.add(cmgGroup);
    threeDynamicParts.cmgGroup = cmgGroup;
  } else if (modKey === "mod-spacesuit") {
    // 3D NASA EMU Spacesuit with Articulated Gold Visor, PLSS Backpack, LCVG Tubes & SAFER Thruster
    const hut = new THREE.Mesh(
      new THREE.CylinderGeometry(0.95, 0.82, 1.8, 20),
      metalMat,
    );
    threeRootGroup.add(hut);

    const plss = new THREE.Mesh(
      new THREE.BoxGeometry(1.3, 1.65, 0.75),
      metalMat,
    );
    plss.position.set(0, 0.1, -0.75);
    threeRootGroup.add(plss);

    const safer = new THREE.Mesh(
      new THREE.BoxGeometry(1.45, 0.9, 0.35),
      darkMat,
    );
    safer.position.set(0, -0.1, -1.2);
    threeRootGroup.add(safer);
    threeDynamicParts.saferPack = safer;

    const helmetBubble = new THREE.Mesh(
      new THREE.SphereGeometry(0.68, 24, 24),
      new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.42,
        roughness: 0.1,
      }),
    );
    helmetBubble.position.set(0, 1.45, 0);
    threeRootGroup.add(helmetBubble);

    const goldVisor = new THREE.Mesh(
      new THREE.SphereGeometry(0.71, 24, 24, 0, Math.PI * 2, 0, Math.PI * 0.52),
      goldMat,
    );
    goldVisor.position.set(0, 1.45, 0);
    goldVisor.rotation.x = 0.35;
    threeRootGroup.add(goldVisor);
    threeDynamicParts.visor = goldVisor;

    // LCVG Cooling Tubes Helix
    const lcvgGroup = new THREE.Group();
    for (let i = 0; i < 6; i++) {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(0.89, 0.03, 10, 28),
        solarMat,
      );
      ring.rotation.x = Math.PI / 2;
      ring.position.y = -0.6 + i * 0.25;
      lcvgGroup.add(ring);
    }
    threeRootGroup.add(lcvgGroup);
    threeDynamicParts.lcvg = lcvgGroup;
  } else if (modKey === "mod-microgravity") {
    // 3D Sonny Carter NBL Underwater Pool Grid, Suited Astronaut & 3 Floating 3D EVA Tools
    const poolGrid = new THREE.GridHelper(10, 14, 0x38bdf8, 0x1e3a8a);
    poolGrid.position.y = -2.0;
    threeRootGroup.add(poolGrid);

    const diver = new THREE.Group();
    const body = new THREE.Mesh(
      new THREE.CylinderGeometry(0.55, 0.5, 1.3, 16),
      metalMat,
    );
    const helm = new THREE.Mesh(
      new THREE.SphereGeometry(0.42, 18, 18),
      goldMat,
    );
    helm.position.y = 0.95;
    diver.add(body, helm);
    threeRootGroup.add(diver);
    threeDynamicParts.diver = diver;

    const toolsGroup = new THREE.Group();
    for (let i = 0; i < 3; i++) {
      const tool = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.38, 0),
        i === 0 ? goldMat : glowGreenMat,
      );
      tool.position.set((i - 1) * 2.5, 0.5 + (i % 2) * 0.8, -1.2 + i * 0.9);
      toolsGroup.add(tool);
    }
    threeRootGroup.add(toolsGroup);
    threeDynamicParts.toolsGroup = toolsGroup;
  } else if (modKey === "mod-robotics") {
    // 3D Articulated 17.6m Canadarm2 (SSRMS) + Cargo Visiting Vehicle
    const base = new THREE.Mesh(
      new THREE.CylinderGeometry(0.8, 0.9, 0.6, 20),
      darkMat,
    );
    base.position.set(-2.4, -1.4, 0);
    threeRootGroup.add(base);

    const arm1 = new THREE.Mesh(
      new THREE.CylinderGeometry(0.18, 0.18, 2.8, 16),
      metalMat,
    );
    arm1.position.set(-1.5, -0.1, 0);
    arm1.rotation.z = -0.55;
    threeRootGroup.add(arm1);
    threeDynamicParts.arm1 = arm1;

    const arm2 = new THREE.Mesh(
      new THREE.CylinderGeometry(0.16, 0.16, 2.6, 16),
      goldMat,
    );
    arm2.position.set(0.3, 0.8, 0);
    arm2.rotation.z = -1.25;
    threeRootGroup.add(arm2);
    threeDynamicParts.arm2 = arm2;

    const cargo = new THREE.Mesh(
      new THREE.CylinderGeometry(0.9, 0.9, 2.1, 20),
      solarMat,
    );
    cargo.position.set(2.2, 0.2, 0);
    threeRootGroup.add(cargo);
    threeDynamicParts.cargo = cargo;
  } else if (modKey === "mod-navigation") {
    // 3D Earth Globe, Moon & Glowing Orbital Trajectories (LEO, Hohmann, Artemis TLI, NRHO)
    const earth = new THREE.Mesh(
      new THREE.SphereGeometry(1.35, 32, 32),
      solarMat,
    );
    earth.position.set(-1.5, 0, 0);
    threeRootGroup.add(earth);
    threeDynamicParts.earth = earth;

    const moon = new THREE.Mesh(
      new THREE.SphereGeometry(0.48, 24, 24),
      metalMat,
    );
    moon.position.set(2.6, 0.4, -0.8);
    threeRootGroup.add(moon);
    threeDynamicParts.moon = moon;

    const leoRing = new THREE.Mesh(
      new THREE.TorusGeometry(1.85, 0.035, 12, 64),
      glowGreenMat,
    );
    leoRing.position.set(-1.5, 0, 0);
    leoRing.rotation.x = 1.1;
    threeRootGroup.add(leoRing);

    const tliRing = new THREE.Mesh(
      new THREE.TorusGeometry(2.8, 0.04, 12, 80),
      goldMat,
    );
    tliRing.position.set(0.5, 0.2, -0.4);
    tliRing.rotation.x = 1.3;
    threeRootGroup.add(tliRing);
    threeDynamicParts.tliRing = tliRing;
  } else if (modKey === "mod-comms") {
    // 3D TDRSS Parabolic High-Gain Dish & S/Ku-Band Signal Wave Rings
    const dishHub = new THREE.Mesh(
      new THREE.CylinderGeometry(0.4, 0.5, 1.2, 16),
      darkMat,
    );
    threeRootGroup.add(dishHub);

    const dish = new THREE.Mesh(
      new THREE.ConeGeometry(1.85, 0.9, 28, 1, true),
      goldMat,
    );
    dish.position.set(0, 0.7, 0.5);
    dish.rotation.x = Math.PI * 0.65;
    threeRootGroup.add(dish);
    threeDynamicParts.dish = dish;

    const waves = new THREE.Group();
    for (let i = 1; i <= 3; i++) {
      const wRing = new THREE.Mesh(
        new THREE.TorusGeometry(0.55 * i, 0.03, 10, 32),
        glowGreenMat,
      );
      wRing.position.set(0, 1.2 + i * 0.45, 1.1 + i * 0.55);
      waves.add(wRing);
    }
    threeRootGroup.add(waves);
    threeDynamicParts.waves = waves;
  } else if (modKey === "mod-survival") {
    // 3D ISS Pressurized Module with Emergency Bulkhead Hatch & Ammonia Isolation Valves
    const hab = new THREE.Mesh(
      new THREE.CylinderGeometry(1.25, 1.25, 4.0, 24, 1, true),
      darkMat,
    );
    hab.rotation.z = Math.PI / 2;
    threeRootGroup.add(hab);

    const hatch = new THREE.Mesh(
      new THREE.BoxGeometry(0.18, 1.4, 1.4),
      goldMat,
    );
    hatch.position.set(0, 0, 0);
    threeRootGroup.add(hatch);
    threeDynamicParts.hatch = hatch;

    const alarmBeacon = new THREE.Mesh(
      new THREE.SphereGeometry(0.32, 16, 16),
      glowRedMat,
    );
    alarmBeacon.position.set(0, 1.4, 0);
    threeRootGroup.add(alarmBeacon);
    threeDynamicParts.alarmBeacon = alarmBeacon;
  } else if (modKey === "mod-fitness") {
    // 3D ARED Vacuum-Cylinder Resistive Rack, Inertial Flywheels & T2 Treadmill
    const rack = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.25, 1.8), darkMat);
    rack.position.y = -1.2;
    threeRootGroup.add(rack);

    const cylL = new THREE.Mesh(
      new THREE.CylinderGeometry(0.28, 0.28, 2.2, 18),
      metalMat,
    );
    cylL.position.set(-0.9, 0, 0);
    const cylR = new THREE.Mesh(
      new THREE.CylinderGeometry(0.28, 0.28, 2.2, 18),
      metalMat,
    );
    cylR.position.set(0.9, 0, 0);
    threeRootGroup.add(cylL, cylR);

    const barbell = new THREE.Mesh(
      new THREE.CylinderGeometry(0.08, 0.08, 2.8, 16),
      goldMat,
    );
    barbell.rotation.z = Math.PI / 2;
    threeRootGroup.add(barbell);
    threeDynamicParts.barbell = barbell;
  } else if (modKey === "mod-teamwork") {
    // 3D Multi-Crew Bridge & Polyethylene Radiation Storm Shelter
    const bridge = new THREE.Mesh(
      new THREE.OctahedronGeometry(1.5, 1),
      solarMat,
    );
    threeRootGroup.add(bridge);

    const shieldShell = new THREE.Mesh(
      new THREE.SphereGeometry(2.15, 24, 24),
      new THREE.MeshStandardMaterial({
        color: 0x10b981,
        wireframe: true,
        transparent: true,
        opacity: 0.55,
      }),
    );
    threeRootGroup.add(shieldShell);
    threeDynamicParts.shieldShell = shieldShell;
  } else if (modKey === "sim-launch") {
    // 3D SLS Block-1 Rocket on Pad 39B with Twin SRBs & Exhaust Plume
    const rocketGroup = new THREE.Group();
    const coreStage = new THREE.Mesh(
      new THREE.CylinderGeometry(0.48, 0.48, 3.8, 24),
      goldMat,
    );
    const noseCone = new THREE.Mesh(
      new THREE.ConeGeometry(0.48, 1.1, 24),
      metalMat,
    );
    noseCone.position.y = 2.45;
    const srbL = new THREE.Mesh(
      new THREE.CylinderGeometry(0.22, 0.22, 3.1, 16),
      metalMat,
    );
    srbL.position.set(-0.78, -0.3, 0);
    const srbR = new THREE.Mesh(
      new THREE.CylinderGeometry(0.22, 0.22, 3.1, 16),
      metalMat,
    );
    srbR.position.set(0.78, -0.3, 0);
    const plume = new THREE.Mesh(
      new THREE.ConeGeometry(0.65, 1.8, 18),
      glowRedMat,
    );
    plume.position.y = -2.6;
    plume.rotation.x = Math.PI;
    rocketGroup.add(coreStage, noseCone, srbL, srbR, plume);
    threeRootGroup.add(rocketGroup);
    threeDynamicParts.rocketGroup = rocketGroup;
    threeDynamicParts.plume = plume;
    threeDynamicParts.srbL = srbL;
    threeDynamicParts.srbR = srbR;
  } else if (modKey === "sim-spacewalk") {
    // 3D S1 Truss Ammonia Pump Module ORU & Pistol Grip Tool (PGT)
    const trussBeam = new THREE.Mesh(
      new THREE.BoxGeometry(4.4, 0.9, 0.9),
      darkMat,
    );
    threeRootGroup.add(trussBeam);

    const pumpOru = new THREE.Mesh(
      new THREE.BoxGeometry(1.4, 1.2, 1.2),
      goldMat,
    );
    pumpOru.position.set(0, 0.85, 0.3);
    threeRootGroup.add(pumpOru);
    threeDynamicParts.pumpOru = pumpOru;

    const pgt = new THREE.Mesh(
      new THREE.CylinderGeometry(0.18, 0.22, 0.95, 16),
      glowGreenMat,
    );
    pgt.position.set(0, 1.65, 0.95);
    pgt.rotation.x = Math.PI / 2;
    threeRootGroup.add(pgt);
    threeDynamicParts.pgt = pgt;
  } else if (modKey === "sim-landing") {
    // 3D Orion Capsule Blunt-End Heat Shield, Plasma Shockwave & 3 Main Parachutes
    const capsule = new THREE.Mesh(
      new THREE.ConeGeometry(1.45, 1.5, 28),
      metalMat,
    );
    threeRootGroup.add(capsule);

    const heatShield = new THREE.Mesh(
      new THREE.CylinderGeometry(1.5, 1.35, 0.25, 28),
      glowRedMat,
    );
    heatShield.position.y = -0.82;
    threeRootGroup.add(heatShield);
    threeDynamicParts.heatShield = heatShield;

    const chutesGroup = new THREE.Group();
    for (let i = 0; i < 3; i++) {
      const canopy = new THREE.Mesh(
        new THREE.SphereGeometry(
          0.85,
          18,
          12,
          0,
          Math.PI * 2,
          0,
          Math.PI * 0.5,
        ),
        goldMat,
      );
      canopy.position.set((i - 1) * 1.65, 2.3, 0);
      chutesGroup.add(canopy);
    }
    threeRootGroup.add(chutesGroup);
    threeDynamicParts.chutesGroup = chutesGroup;
  }
}

function switch3DCockpitModule(modKey, shouldNavigate = false) {
  if (!COCKPIT_3D_CONFIGS[modKey]) modKey = "mod-spacecraft";
  ck3dState.activeMod = modKey;

  const sel = document.getElementById("ck3d-scene-selector");
  if (sel && sel.value !== modKey) sel.value = modKey;

  const cfg = COCKPIT_3D_CONFIGS[modKey];
  const codeEl = document.getElementById("ck3d-module-code");
  const titleEl = document.getElementById("ck3d-module-title");
  const sysEl = document.getElementById("ck3d-hud-sysname");
  const throtLbl = document.getElementById("ck3d-throttle-label");
  const k1Lbl = document.getElementById("ck3d-knob1-label");
  const k2Lbl = document.getElementById("ck3d-knob2-label");

  if (codeEl) codeEl.textContent = cfg.code;
  if (titleEl) titleEl.textContent = cfg.title;
  if (sysEl) sysEl.textContent = "SYS: " + cfg.sysName;
  if (throtLbl) throtLbl.textContent = cfg.throttleLabel;
  if (k1Lbl) k1Lbl.textContent = cfg.knob1Label;
  if (k2Lbl) k2Lbl.textContent = cfg.knob2Label;

  ck3dState.knob1Idx = 0;
  ck3dState.knob2Idx = 0;
  updateKnobsUI();
  renderPhysicalSwitchesGrid();
  build3DSceneForModule(modKey);

  if (shouldNavigate && currentView !== modKey) {
    navigateTo(modKey);
  }
}

function renderPhysicalSwitchesGrid() {
  const modKey = ck3dState.activeMod;
  const cfg = COCKPIT_3D_CONFIGS[modKey];
  const grid = document.getElementById("ck3d-switches-grid");
  if (!grid || !cfg) return;

  const stMap = ck3dState.switchStates[modKey] || {};
  let engagedCount = 0;

  grid.innerHTML = cfg.switches
    .map((sw) => {
      const isOn = !!stMap[sw.id];
      if (isOn) engagedCount++;
      return `
          <div onclick="togglePhysicalSwitch3D('${sw.id}')" class="phys-switch-bay ${isOn ? "engaged" : ""}" role="switch" aria-checked="${isOn}">
            <div class="flex items-center justify-between w-full">
              <span class="text-[9px] font-mono-tech text-slate-400">${sw.id.toUpperCase()}</span>
              <span class="phys-led"></span>
            </div>
            <div class="phys-switch-slot">
              <div class="phys-switch-lever"></div>
            </div>
            <div class="text-center">
              <div class="text-[10px] font-bold text-white leading-tight">${sw.name}</div>
              <div class="text-[9px] text-slate-400 leading-tight mt-0.5">${sw.sub}</div>
            </div>
          </div>
        `;
    })
    .join("");

  const cntEl = document.getElementById("ck3d-switch-counter");
  if (cntEl)
    cntEl.textContent = `ENGAGED: ${engagedCount} / ${cfg.switches.length}`;

  const m3 = document.getElementById("ck3d-hud-metric3");
  if (m3) {
    m3.textContent =
      engagedCount === cfg.switches.length
        ? "ALL 6 SYSTEMS ENGAGED — READY FOR VERIFICATION!"
        : `ACTIVE BREAKERS: ${engagedCount}/${cfg.switches.length} ENGAGED`;
  }
}

function togglePhysicalSwitch3D(swId) {
  const modKey = ck3dState.activeMod;
  if (!ck3dState.switchStates[modKey]) ck3dState.switchStates[modKey] = {};
  const nextState = !ck3dState.switchStates[modKey][swId];
  ck3dState.switchStates[modKey][swId] = nextState;

  playTone(nextState ? 1720 : 880, 0.07, "triangle", 0.06);
  renderPhysicalSwitchesGrid();

  // Synchronize with underlying module logic when all switches are engaged
  const cfg = COCKPIT_3D_CONFIGS[modKey];
  const swObj = cfg.switches.find((s) => s.id === swId);
  if (swObj) {
    showToast(
      `[3D COCKPIT SWITCH] ${swObj.name}: ${nextState ? "ENGAGED (ON)" : "ISOLATED (OFF)"}`,
    );
  }
}

function rotatePhysicalKnob(knobNum) {
  const cfg = COCKPIT_3D_CONFIGS[ck3dState.activeMod];
  if (!cfg) return;
  if (knobNum === 1) {
    ck3dState.knob1Idx = (ck3dState.knob1Idx + 1) % cfg.knob1Modes.length;
  } else {
    ck3dState.knob2Idx = (ck3dState.knob2Idx + 1) % cfg.knob2Modes.length;
  }
  playTone(1320, 0.05, "sine", 0.05);
  updateKnobsUI();
}

function updateKnobsUI() {
  const cfg = COCKPIT_3D_CONFIGS[ck3dState.activeMod];
  if (!cfg) return;
  const k1El = document.getElementById("ck3d-knob1-el");
  const k2El = document.getElementById("ck3d-knob2-el");
  const k1Val = document.getElementById("ck3d-knob1-val");
  const k2Val = document.getElementById("ck3d-knob2-val");

  if (k1El) k1El.style.transform = `rotate(${ck3dState.knob1Idx * 65 - 45}deg)`;
  if (k2El) k2El.style.transform = `rotate(${ck3dState.knob2Idx * 65 - 45}deg)`;
  if (k1Val) k1Val.textContent = cfg.knob1Modes[ck3dState.knob1Idx];
  if (k2Val) k2Val.textContent = cfg.knob2Modes[ck3dState.knob2Idx];
}

function updatePhysicalThrottle(val) {
  ck3dState.throttle = Number(val) || 0;
  const vEl = document.getElementById("ck3d-throttle-val");
  if (vEl) vEl.textContent = ck3dState.throttle + "%";
  const m2 = document.getElementById("ck3d-hud-metric2");
  if (m2)
    m2.textContent = `LEVER OUTPUT: ${ck3dState.throttle}% · MODE: ${COCKPIT_3D_CONFIGS[ck3dState.activeMod].knob1Modes[ck3dState.knob1Idx]}`;
  playTone(600 + ck3dState.throttle * 6, 0.03, "sine", 0.02);
}

function set3DCameraPreset(preset) {
  ck3dState.camPreset = preset;
  if (preset === "cockpit") {
    ck3dState.camDist = 7.8;
    ck3dState.pitch = 0.15;
  } else if (preset === "external") {
    ck3dState.camDist = 10.8;
    ck3dState.pitch = 0.32;
  } else if (preset === "closeup") {
    ck3dState.camDist = 4.9;
    ck3dState.pitch = 0.05;
  }
  ["cockpit", "external", "closeup"].forEach((k) => {
    const b = document.getElementById("cam-btn-" + k);
    if (b) {
      b.className =
        k === preset
          ? "px-2.5 py-1 rounded bg-amber-500 text-slate-950 font-mono-tech text-[10px] font-bold"
          : "px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-slate-300 font-mono-tech text-[10px] hover:text-white";
    }
  });
  playTone(1490, 0.05);
}

function toggleFullscreen3DCockpit() {
  const deck = document.getElementById("cockpit-3d-master-deck");
  const btn = document.getElementById("ck3d-fullscreen-btn");
  if (!deck) return;
  ck3dState.fullscreen = !ck3dState.fullscreen;
  deck.classList.toggle("fullscreen-cockpit", ck3dState.fullscreen);
  if (btn)
    btn.textContent = ck3dState.fullscreen
      ? "✕ Exit Fullscreen"
      : "⛶ Full Cockpit";
  setTimeout(resize3DCockpitRenderer, 60);
}

function open3DCockpitDirect() {
  const targetMod = COCKPIT_3D_CONFIGS[currentView]
    ? currentView
    : "mod-spacecraft";
  navigateTo(targetMod);
  const anchor = document.getElementById("cockpit-3d-master-Anchor");
  if (anchor) anchor.scrollIntoView({ behavior: "smooth" });
  showToast("Entered 3D Spacecraft Cockpit & Physical Instrument Console!");
}

function ackMasterAlarm3D() {
  playQuindarBeep();
  showToast(
    "Master Caution & Warning Reset — All 3D Spacecraft Bus Channels Nominal.",
  );
}

function completeActive3DTrainingTask() {
  const modKey = ck3dState.activeMod;
  const cfg = COCKPIT_3D_CONFIGS[modKey];
  if (!cfg) return;
  // Engage all switches visually and award module completion
  cfg.switches.forEach((s) => {
    ck3dState.switchStates[modKey][s.id] = true;
  });
  renderPhysicalSwitchesGrid();
  markModuleComplete(modKey, 200, cfg.title);
}

function pulse3DStick(dYaw, dPitch) {
  ck3dState.rateY += dYaw * 0.04;
  ck3dState.rateP += dPitch * 0.04;
  playTone(820, 0.04, "triangle", 0.04);
}

function null3DStickRates() {
  ck3dState.rateP = 0;
  ck3dState.rateY = 0;
  ck3dState.rateR = 0;
  ck3dState.pitch = 0.12;
  ck3dState.roll = 0;
  playTone(1250, 0.07);
  showToast("6-DOF Attitude Rates Nullified (0.00 °/s).");
}

function setupCanvasOrbitDrag(canvas) {
  let dragging = false;
  let prevX = 0,
    prevY = 0;
  canvas.addEventListener("pointerdown", (e) => {
    dragging = true;
    prevX = e.clientX;
    prevY = e.clientY;
  });
  window.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    const dx = e.clientX - prevX;
    const dy = e.clientY - prevY;
    prevX = e.clientX;
    prevY = e.clientY;
    ck3dState.yaw += dx * 0.008;
    ck3dState.pitch = Math.max(
      -1.1,
      Math.min(1.1, ck3dState.pitch + dy * 0.008),
    );
  });
  window.addEventListener("pointerup", () => {
    dragging = false;
  });
  canvas.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();
      ck3dState.camDist = Math.max(
        3.8,
        Math.min(14.5, ck3dState.camDist + e.deltaY * 0.005),
      );
    },
    { passive: false },
  );
}

function setupJoystickDrag() {
  const gimbal = document.getElementById("ck3d-joystick-gimbal");
  const cap = document.getElementById("ck3d-joystick-cap");
  if (!gimbal || !cap) return;
  let active = false;
  const updateStick = (clientX, clientY) => {
    const rect = gimbal.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = Math.max(-28, Math.min(28, clientX - cx));
    const dy = Math.max(-28, Math.min(28, clientY - cy));
    cap.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
    ck3dState.rateY = dx * 0.0012;
    ck3dState.rateP = dy * 0.0012;
  };
  gimbal.addEventListener("pointerdown", (e) => {
    active = true;
    updateStick(e.clientX, e.clientY);
  });
  window.addEventListener("pointermove", (e) => {
    if (active) updateStick(e.clientX, e.clientY);
  });
  window.addEventListener("pointerup", () => {
    if (!active) return;
    active = false;
    cap.style.transform = "translate(-50%, -50%)";
  });
}

function draw3DNavballInstrument() {
  const nb = document.getElementById("ck3d-navball-canvas");
  if (!nb) return;
  const ctx = nb.getContext("2d");
  const w = nb.width,
    h = nb.height,
    cx = w / 2,
    cy = h / 2,
    r = w / 2 - 2;
  ctx.clearRect(0, 0, w, h);

  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.clip();

  // Sky & Ground hemispheres shifted by pitch & roll
  ctx.translate(cx, cy);
  ctx.rotate(ck3dState.roll);
  const pitchOffset = Math.max(-r, Math.min(r, ck3dState.pitch * 28));

  ctx.fillStyle = "#0284c7";
  ctx.fillRect(-r * 2, -r * 2 + pitchOffset, r * 4, r * 2);
  ctx.fillStyle = "#78350f";
  ctx.fillRect(-r * 2, pitchOffset, r * 4, r * 2);

  // Horizon line
  ctx.strokeStyle = "#f8fafc";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(-r, pitchOffset);
  ctx.lineTo(r, pitchOffset);
  ctx.stroke();
  ctx.restore();

  // Fixed Aircraft/Spacecraft W-Reticle
  ctx.strokeStyle = "#f59e0b";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx - 14, cy);
  ctx.lineTo(cx - 5, cy);
  ctx.lineTo(cx, cy + 5);
  ctx.lineTo(cx + 5, cy);
  ctx.lineTo(cx + 14, cy);
  ctx.stroke();

  const rpyEl = document.getElementById("ck3d-navball-rpy");
  const rateEl = document.getElementById("ck3d-navball-rate");
  const m1 = document.getElementById("ck3d-hud-metric1");
  const rDeg = Math.round((ck3dState.roll * 180) / Math.PI) % 360;
  const pDeg = Math.round((ck3dState.pitch * 180) / Math.PI) % 360;
  const yDeg = Math.round((ck3dState.yaw * 180) / Math.PI) % 360;
  if (rpyEl) rpyEl.textContent = `R:${rDeg}° P:${pDeg}° Y:${yDeg}°`;
  const totRate = (Math.hypot(ck3dState.rateP, ck3dState.rateY) * 60).toFixed(
    2,
  );
  if (rateEl) rateEl.textContent = `RATE: ${totRate} °/s`;
  if (m1) m1.textContent = `ATTITUDE: R ${rDeg}° · P ${pDeg}° · Y ${yDeg}°`;
}

function animate3DCockpitLoop(time) {
  const anchor = document.getElementById("cockpit-3d-master-Anchor");
  if (
    anchor &&
    !anchor.classList.contains("hidden") &&
    threeRenderer &&
    threeScene &&
    threeCamera
  ) {
    const t = (time || 0) * 0.001;
    ck3dState.yaw += ck3dState.rateY;
    ck3dState.pitch = Math.max(
      -1.1,
      Math.min(1.1, ck3dState.pitch + ck3dState.rateP),
    );

    if (threeRootGroup) {
      threeRootGroup.rotation.y = ck3dState.yaw;
      threeRootGroup.rotation.x = ck3dState.pitch;
    }
    threeCamera.position.z = ck3dState.camDist;

    const st = ck3dState.switchStates[ck3dState.activeMod] || {};
    const throtNorm = ck3dState.throttle / 100;

    // Animate active 3D hardware parts according to physical switch states & throttle
    if (threeDynamicParts.solarWings && st.sw2) {
      threeDynamicParts.solarWings.rotation.x = t * 0.5 + throtNorm * Math.PI;
    }
    if (threeDynamicParts.cmgGroup && st.sw3) {
      threeDynamicParts.cmgGroup.children.forEach((g, idx) => {
        g.rotation.x += 0.08 * (idx + 1);
        g.rotation.y += 0.06;
      });
    }
    if (threeDynamicParts.visor) {
      threeDynamicParts.visor.rotation.x = st.sw1 ? 1.15 : 0.25;
    }
    if (threeDynamicParts.toolsGroup) {
      threeDynamicParts.toolsGroup.children.forEach((tl, idx) => {
        tl.rotation.x = t + idx;
        tl.rotation.y = t * 1.3;
        if (st.sw3) tl.position.lerp(new THREE.Vector3(0, 0, 0.8), 0.03);
      });
    }
    if (threeDynamicParts.arm1 && threeDynamicParts.arm2) {
      threeDynamicParts.arm1.rotation.z = -0.35 - throtNorm * 0.55;
      threeDynamicParts.arm2.rotation.z = -0.9 - (st.sw3 ? 0.45 : 0);
    }
    if (threeDynamicParts.earth) {
      threeDynamicParts.earth.rotation.y = t * 0.35;
    }
    if (threeDynamicParts.dish) {
      threeDynamicParts.dish.rotation.z = (throtNorm - 0.5) * 1.5;
    }
    if (threeDynamicParts.waves && st.sw3) {
      threeDynamicParts.waves.scale.setScalar(0.9 + Math.sin(t * 5) * 0.12);
    }
    if (threeDynamicParts.hatch) {
      threeDynamicParts.hatch.position.x = st.sw5 ? 0.0 : -0.85;
    }
    if (threeDynamicParts.barbell && st.sw1) {
      threeDynamicParts.barbell.position.y =
        Math.sin(t * 3.2) * 0.65 * throtNorm;
    }
    if (threeDynamicParts.rocketGroup) {
      threeDynamicParts.rocketGroup.position.y = st.sw2
        ? Math.sin(t * 20) * 0.03 + (throtNorm - 0.5) * 0.9
        : 0;
      if (threeDynamicParts.plume) {
        threeDynamicParts.plume.visible = !!st.sw2;
        threeDynamicParts.plume.scale.y = 0.8 + Math.random() * 0.5 + throtNorm;
      }
      if (threeDynamicParts.srbL && threeDynamicParts.srbR) {
        const sep = st.sw5 ? 1.65 : 0.78;
        threeDynamicParts.srbL.position.x = -sep;
        threeDynamicParts.srbR.position.x = sep;
      }
    }
    if (threeDynamicParts.pgt) {
      if (st.sw4) threeDynamicParts.pgt.rotation.z += 0.22;
    }
    if (threeDynamicParts.chutesGroup) {
      threeDynamicParts.chutesGroup.visible = !!(st.sw5 || st.sw6);
    }

    threeRenderer.render(threeScene, threeCamera);
    draw3DNavballInstrument();
  }
  requestAnimationFrame(animate3DCockpitLoop);
}

// Hook into navigateTo so the 3D Spacecraft Cockpit automatically appears inside all 9 Training Modules & 3 Simulations
const _origNavigateToFor3D = navigateTo;
navigateTo = function (pageId) {
  _origNavigateToFor3D(pageId);
  const anchor = document.getElementById("cockpit-3d-master-Anchor");
  if (!anchor) return;
  if (COCKPIT_3D_CONFIGS[pageId]) {
    const targetSec = document.getElementById("page-" + pageId);
    if (targetSec && targetSec.firstElementChild) {
      targetSec.insertBefore(anchor, targetSec.children[1] || null);
    }
    anchor.classList.remove("hidden");
    switch3DCockpitModule(pageId, false);
    setTimeout(resize3DCockpitRenderer, 50);
  } else {
    anchor.classList.add("hidden");
  }
};

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(initUniversal3DCockpit, 80);
});