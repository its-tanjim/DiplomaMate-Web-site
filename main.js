/**
 * DiplomaMate - Main Application Controller
 * Handles Three.js 3D Background, Leaflet Interactive Map, College Drawer,
 * 3D Department & Booklist Explorer, CGPA Calculator, and UI Interactions.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Global State
  const AppState = {
    selectedRegulation: "2022",
    selectedDivision: "All",
    currentPolytechnic: null,
    selectedDepartment: "cst",
    selectedSemester: 1,
    audioEnabled: true,
    is3DMap: true,
    map: null,
    markers: [],
    polytechnics: typeof POLYTECHNIC_DATA !== "undefined" ? POLYTECHNIC_DATA : []
  };

  // ==========================================
  // 1. Audio FX Synthesizer (Web Audio API)
  // ==========================================
  let audioCtx = null;
  function playSound(type = "click") {
    if (!AppState.audioEnabled) return;
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === "suspended") {
        audioCtx.resume();
      }
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);

      const now = audioCtx.currentTime;
      if (type === "click") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.exponentialRampToValueAtTime(1200, now + 0.06);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
        osc.start(now);
        osc.stop(now + 0.06);
      } else if (type === "open") {
        osc.type = "triangle";
        osc.frequency.setValueAtTime(300, now);
        osc.frequency.exponentialRampToValueAtTime(800, now + 0.15);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
        osc.start(now);
        osc.stop(now + 0.15);
      } else if (type === "calc") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(400, now);
        osc.frequency.linearRampToValueAtTime(750, now + 0.1);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.linearRampToValueAtTime(0.001, now + 0.12);
        osc.start(now);
        osc.stop(now + 0.12);
      }
    } catch (e) {
      // Audio not supported or permission denied
    }
  }

  // Audio Toggle Button
  const audioToggleBtn = document.getElementById("audio-toggle-btn");
  if (audioToggleBtn) {
    audioToggleBtn.addEventListener("click", () => {
      AppState.audioEnabled = !AppState.audioEnabled;
      audioToggleBtn.innerHTML = AppState.audioEnabled
        ? `<i data-lucide="volume-2" class="w-4 h-4 text-cyan-400"></i>`
        : `<i data-lucide="volume-x" class="w-4 h-4 text-slate-500"></i>`;
      lucide.createIcons();
      showToast(AppState.audioEnabled ? "Audio Effects Enabled" : "Audio Muted", "info");
      playSound("click");
    });
  }

  // ==========================================
  // 2. Three.js 3D Background Geometry
  // ==========================================
  function initThreeBackground() {
    const canvas = document.getElementById("threejs-canvas");
    if (!canvas || typeof THREE === "undefined") return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 32;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Floating Geometries Group
    const group = new THREE.Group();
    scene.add(group);

    // Glowing wireframe icosahedrons and polyhedra
    const geometries = [
      new THREE.IcosahedronGeometry(3.5, 0),
      new THREE.OctahedronGeometry(2.5, 0),
      new THREE.TorusGeometry(3, 0.7, 16, 50),
      new THREE.BoxGeometry(2.8, 2.8, 2.8),
      new THREE.TetrahedronGeometry(2.8, 0)
    ];

    const materials = [
      new THREE.MeshBasicMaterial({ color: 0x06b6d4, wireframe: true, transparent: true, opacity: 0.3 }),
      new THREE.MeshBasicMaterial({ color: 0x10b981, wireframe: true, transparent: true, opacity: 0.25 }),
      new THREE.MeshBasicMaterial({ color: 0x8b5cf6, wireframe: true, transparent: true, opacity: 0.2 }),
      new THREE.MeshBasicMaterial({ color: 0x38bdf8, wireframe: true, transparent: true, opacity: 0.35 })
    ];

    const floatingObjects = [];
    for (let i = 0; i < 22; i++) {
      const geo = geometries[i % geometries.length];
      const mat = materials[i % materials.length];
      const mesh = new THREE.Mesh(geo, mat);

      mesh.position.x = (Math.random() - 0.5) * 70;
      mesh.position.y = (Math.random() - 0.5) * 50;
      mesh.position.z = (Math.random() - 0.5) * 35;

      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;

      mesh.scale.setScalar(Math.random() * 0.7 + 0.5);

      mesh.userData = {
        rotSpeedX: (Math.random() - 0.5) * 0.008,
        rotSpeedY: (Math.random() - 0.5) * 0.008,
        floatSpeed: Math.random() * 0.01 + 0.005,
        floatOffset: Math.random() * Math.PI * 2,
        initialY: mesh.position.y
      };

      group.add(mesh);
      floatingObjects.push(mesh);
    }

    // Floating Particles Field
    const particleCount = 200;
    const partGeo = new THREE.BufferGeometry();
    const partPos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      partPos[i] = (Math.random() - 0.5) * 100;
      partPos[i + 1] = (Math.random() - 0.5) * 80;
      partPos[i + 2] = (Math.random() - 0.5) * 60;
    }
    partGeo.setAttribute("position", new THREE.BufferAttribute(partPos, 3));
    const partMat = new THREE.PointsMaterial({
      color: 0x06b6d4,
      size: 0.8,
      transparent: true,
      opacity: 0.5
    });
    const particles = new THREE.Points(partGeo, partMat);
    scene.add(particles);

    // Mouse parallax tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    window.addEventListener("mousemove", (e) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    // Resize Handler
    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Animation Loop
    let clock = new THREE.Clock();
    function animate() {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      targetX += (mouseX * 4 - targetX) * 0.05;
      targetY += (mouseY * 4 - targetY) * 0.05;
      group.position.x = targetX * 0.8;
      group.position.y = targetY * 0.8;
      group.rotation.y = elapsedTime * 0.02 + targetX * 0.05;

      particles.rotation.y = elapsedTime * 0.015;

      floatingObjects.forEach((obj) => {
        obj.rotation.x += obj.userData.rotSpeedX;
        obj.rotation.y += obj.userData.rotSpeedY;
        obj.position.y = obj.userData.initialY + Math.sin(elapsedTime * 0.8 + obj.userData.floatOffset) * 1.5;
      });

      renderer.render(scene, camera);
    }
    animate();
  }

  // ==========================================
  // 3. 3D Tilt Card Listeners
  // ==========================================
  function setupTiltEffects() {
    const cards = document.querySelectorAll(".tilt-card");
    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      });
    });
  }

  // ==========================================
  // 4. Interactive Bangladesh Map (Leaflet.js)
  // ==========================================
  function initBangladeshMap() {
    const mapElement = document.getElementById("bangladesh-map");
    if (!mapElement || typeof L === "undefined") return;

    // Center on Bangladesh
    const bdCenter = [23.75, 90.35];
    const map = L.map("bangladesh-map", {
      center: bdCenter,
      zoom: 7,
      minZoom: 6,
      maxZoom: 16,
      zoomControl: true,
      attributionControl: false
    });

    // Dark Tile Layer (CartoDB Dark Matter)
    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      subdomains: "abcd",
      maxZoom: 19
    }).addTo(map);

    AppState.map = map;
    renderMapMarkers();

    // Map 3D Perspective Toggle Button
    const toggle3DBtn = document.getElementById("toggle-3d-map-btn");
    const mapWrapper = document.getElementById("map-perspective-container");
    if (toggle3DBtn && mapWrapper) {
      toggle3DBtn.addEventListener("click", () => {
        playSound("click");
        AppState.is3DMap = !AppState.is3DMap;
        if (AppState.is3DMap) {
          mapWrapper.classList.remove("is-flat");
          mapWrapper.classList.add("is-3d");
          toggle3DBtn.innerHTML = `<i data-lucide="layers" class="w-4 h-4 text-cyan-400"></i><span class="text-xs font-semibold">3D Tilt: ON</span>`;
        } else {
          mapWrapper.classList.remove("is-3d");
          mapWrapper.classList.add("is-flat");
          toggle3DBtn.innerHTML = `<i data-lucide="square" class="w-4 h-4 text-slate-400"></i><span class="text-xs font-semibold">3D Tilt: OFF</span>`;
        }
        lucide.createIcons();
        setTimeout(() => map.invalidateSize(), 300);
      });
    }

    // Reset Map View Button
    const resetMapBtn = document.getElementById("reset-map-view-btn");
    if (resetMapBtn) {
      resetMapBtn.addEventListener("click", () => {
        playSound("click");
        map.flyTo(bdCenter, 7, { duration: 1.2 });
      });
    }

    // Map Division Filter Buttons
    const filterButtons = document.querySelectorAll(".division-filter-btn");
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        playSound("click");
        filterButtons.forEach((b) => b.classList.remove("active", "border-cyan-400", "bg-cyan-500/20", "text-cyan-300"));
        btn.classList.add("active", "border-cyan-400", "bg-cyan-500/20", "text-cyan-300");

        AppState.selectedDivision = btn.dataset.division;
        filterMapMarkers(AppState.selectedDivision);
      });
    });

    // Live Institute Map Search Bar
    const mapSearchInput = document.getElementById("map-search-input");
    const mapSearchDropdown = document.getElementById("map-search-dropdown");
    if (mapSearchInput && mapSearchDropdown) {
      mapSearchInput.addEventListener("input", (e) => {
        const query = e.target.value.trim().toLowerCase();
        if (!query) {
          mapSearchDropdown.classList.add("hidden");
          return;
        }

        const matches = AppState.polytechnics.filter(
          (p) =>
            p.name.toLowerCase().includes(query) ||
            p.bn_name.toLowerCase().includes(query) ||
            p.district.toLowerCase().includes(query) ||
            p.code.includes(query)
        );

        if (matches.length === 0) {
          mapSearchDropdown.innerHTML = `<div class="p-3 text-xs text-slate-400 text-center">No polytechnic found matching "${query}"</div>`;
        } else {
          mapSearchDropdown.innerHTML = matches
            .slice(0, 7)
            .map(
              (p) => `
            <div class="search-result-item flex items-center justify-between p-2.5 hover:bg-slate-800/80 cursor-pointer border-b border-slate-700/50 last:border-b-0 transition-colors" data-id="${p.id}">
              <div>
                <div class="text-sm font-semibold text-slate-100">${p.name}</div>
                <div class="text-xs text-cyan-400 flex items-center gap-2">
                  <span>${p.bn_name}</span> &bull; <span>Code: ${p.code}</span>
                </div>
              </div>
              <span class="px-2 py-0.5 rounded text-[11px] bg-slate-800 text-emerald-400 border border-emerald-500/30">${p.division}</span>
            </div>
          `
            )
            .join("");

          mapSearchDropdown.querySelectorAll(".search-result-item").forEach((item) => {
            item.addEventListener("click", () => {
              const poly = AppState.polytechnics.find((p) => p.id === item.dataset.id);
              if (poly) {
                selectPolytechnic(poly);
                mapSearchDropdown.classList.add("hidden");
                mapSearchInput.value = poly.name;
              }
            });
          });
        }
        mapSearchDropdown.classList.remove("hidden");
      });

      document.addEventListener("click", (e) => {
        if (!mapSearchInput.contains(e.target) && !mapSearchDropdown.contains(e.target)) {
          mapSearchDropdown.classList.add("hidden");
        }
      });
    }
  }

  // Render Glowing Radar Markers
  function renderMapMarkers() {
    if (!AppState.map) return;

    // Clear existing markers
    AppState.markers.forEach((m) => AppState.map.removeLayer(m));
    AppState.markers = [];

    AppState.polytechnics.forEach((poly) => {
      // Custom pulsing HTML Pin Marker
      const customIcon = L.divIcon({
        className: "radar-marker-wrapper",
        html: `
          <div class="radar-marker-container" title="${poly.name} (${poly.code})">
            <div class="radar-marker-core"></div>
            <div class="radar-marker-pulse"></div>
            <div class="radar-marker-secondary"></div>
          </div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 16]
      });

      const marker = L.marker(poly.coordinates, { icon: customIcon }).addTo(AppState.map);

      // Tooltip
      marker.bindTooltip(
        `
        <div class="text-left p-1">
          <div class="font-bold text-xs text-cyan-300">${poly.name}</div>
          <div class="text-[11px] text-slate-300">${poly.bn_name}</div>
          <div class="flex items-center gap-2 mt-1 text-[10px] text-emerald-400">
            <span>Code: ${poly.code}</span> &bull; <span>${poly.division}</span>
          </div>
        </div>
      `,
        { direction: "top", offset: [0, -10], className: "custom-glass-tooltip" }
      );

      marker.on("click", () => {
        selectPolytechnic(poly);
      });

      marker.polyData = poly;
      AppState.markers.push(marker);
    });

    updatePolytechnicCount(AppState.polytechnics.length);
  }

  // Filter markers by division
  function filterMapMarkers(division) {
    if (!AppState.map) return;

    let visibleCount = 0;
    const bounds = L.latLngBounds();

    AppState.markers.forEach((marker) => {
      const match = division === "All" || marker.polyData.division.toLowerCase() === division.toLowerCase();
      if (match) {
        if (!AppState.map.hasLayer(marker)) {
          AppState.map.addLayer(marker);
        }
        bounds.extend(marker.getLatLng());
        visibleCount++;
      } else {
        if (AppState.map.hasLayer(marker)) {
          AppState.map.removeLayer(marker);
        }
      }
    });

    if (visibleCount > 0 && division !== "All") {
      AppState.map.fitBounds(bounds, { padding: [50, 50], maxZoom: 10, duration: 1.2 });
    } else if (division === "All") {
      AppState.map.flyTo([23.75, 90.35], 7, { duration: 1.2 });
    }

    updatePolytechnicCount(visibleCount);
  }

  function updatePolytechnicCount(count) {
    const badge = document.getElementById("map-institute-count-badge");
    if (badge) {
      badge.textContent = `${count} Government Polytechnics`;
    }
  }

  // Select Polytechnic (Fly Camera & Open Drawer)
  function selectPolytechnic(poly) {
    playSound("open");
    AppState.currentPolytechnic = poly;

    // Animate map camera smoothly
    if (AppState.map) {
      AppState.map.flyTo(poly.coordinates, 13, {
        duration: 1.5,
        easeLinearity: 0.25
      });
    }

    // Populate and open drawer
    populateCollegeDrawer(poly);
    openCollegeDrawer();
  }

  // ==========================================
  // 5. College A-to-Z Info Drawer & Modal
  // ==========================================
  const drawer = document.getElementById("college-drawer");
  const drawerBackdrop = document.getElementById("drawer-backdrop");
  const drawerCloseBtn = document.getElementById("drawer-close-btn");

  function openCollegeDrawer() {
    if (!drawer) return;
    drawer.classList.remove("is-hidden");
    drawer.classList.add("is-visible");
    if (drawerBackdrop) drawerBackdrop.classList.remove("hidden");
  }

  function closeCollegeDrawer() {
    playSound("click");
    if (!drawer) return;
    drawer.classList.add("is-hidden");
    drawer.classList.remove("is-visible");
    if (drawerBackdrop) drawerBackdrop.classList.add("hidden");
  }

  if (drawerCloseBtn) drawerCloseBtn.addEventListener("click", closeCollegeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener("click", closeCollegeDrawer);

  function populateCollegeDrawer(poly) {
    if (!poly) return;

    // Header info
    document.getElementById("drawer-college-name").textContent = poly.name;
    document.getElementById("drawer-college-bn-name").textContent = poly.bn_name;
    document.getElementById("drawer-code-badge").textContent = `Code: ${poly.code}`;
    document.getElementById("drawer-eiin-badge").textContent = `EIIN: ${poly.eiin || "N/A"}`;
    document.getElementById("drawer-estd-badge").textContent = `Estd: ${poly.established}`;
    document.getElementById("drawer-division-badge").textContent = `${poly.district}, ${poly.division}`;

    // Action links
    const webBtn = document.getElementById("drawer-website-btn");
    if (webBtn) {
      webBtn.href = poly.contact.website || "#";
      webBtn.classList.toggle("pointer-events-none", !poly.contact.website);
      webBtn.classList.toggle("opacity-50", !poly.contact.website);
    }

    const callBtn = document.getElementById("drawer-call-btn");
    if (callBtn) {
      callBtn.href = poly.contact.phone ? `tel:${poly.contact.phone}` : "#";
    }

    // Tab 1: History & Overview
    const historyBn = document.getElementById("drawer-history-bn");
    const historyEn = document.getElementById("drawer-history-en");
    if (historyBn) historyBn.textContent = poly.history;
    if (historyEn) historyEn.textContent = poly.history_en || "";

    // Total seats & Shifts
    const totalSeatsEl = document.getElementById("drawer-total-seats");
    if (totalSeatsEl) totalSeatsEl.textContent = poly.totalSeats ? `${poly.totalSeats}+ Seats` : "N/A";

    const shiftsEl = document.getElementById("drawer-shifts-badge");
    if (shiftsEl) shiftsEl.textContent = poly.shifts || "1st Shift & 2nd Shift";

    // Tab 2: Departments & Seats
    const deptsList = document.getElementById("drawer-departments-list");
    if (deptsList) {
      deptsList.innerHTML = poly.departments
        .map((d) => {
          const shift1 = d.seats ? d.seats.shift1 : 50;
          const shift2 = d.seats ? d.seats.shift2 : 50;
          return `
          <div class="glass-panel p-3.5 rounded-xl border border-slate-700/60 hover:border-cyan-500/40 transition-colors">
            <div class="flex items-center justify-between mb-2">
              <span class="font-semibold text-sm text-cyan-200">${d.name}</span>
              <span class="text-xs px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/60">${shift1 + shift2} Seats</span>
            </div>
            <div class="grid grid-cols-2 gap-2 text-xs">
              <div class="flex items-center justify-between p-1.5 rounded bg-slate-900/60 text-slate-300">
                <span>1st Shift:</span>
                <span class="font-mono font-bold text-emerald-400">${shift1}</span>
              </div>
              <div class="flex items-center justify-between p-1.5 rounded bg-slate-900/60 text-slate-300">
                <span>2nd Shift:</span>
                <span class="font-mono font-bold text-cyan-400">${shift2}</span>
              </div>
            </div>
          </div>
        `;
        })
        .join("");
    }

    // Tab 3: Facilities
    const facilitiesList = document.getElementById("drawer-facilities-list");
    if (facilitiesList) {
      facilitiesList.innerHTML = poly.facilities
        .map(
          (f) => `
        <li class="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-900/50 border border-slate-800 text-sm text-slate-200">
          <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400 shrink-0"></i>
          <span>${f}</span>
        </li>
      `
        )
        .join("");
    }

    const principalEl = document.getElementById("drawer-principal-info");
    if (principalEl) {
      principalEl.textContent = poly.principal || "Principal Office, BTEB Regulated";
    }

    // Tab 4: Contact & Portal
    const addressEl = document.getElementById("drawer-address");
    const phoneEl = document.getElementById("drawer-phone");
    const emailEl = document.getElementById("drawer-email");
    if (addressEl) addressEl.textContent = poly.contact.address || "Main Campus, Bangladesh";
    if (phoneEl) phoneEl.textContent = poly.contact.phone || "+880 2-XXXXXXX";
    if (emailEl) emailEl.textContent = poly.contact.email || "info@polytechnic.gov.bd";

    lucide.createIcons();
  }

  // Drawer Tabs Switching
  const drawerTabs = document.querySelectorAll(".drawer-tab-btn");
  drawerTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      playSound("click");
      const target = tab.dataset.tab;
      drawerTabs.forEach((t) => t.classList.remove("active", "border-cyan-400", "text-cyan-300", "bg-cyan-500/10"));
      tab.classList.add("active", "border-cyan-400", "text-cyan-300", "bg-cyan-500/10");

      document.querySelectorAll(".drawer-tab-content").forEach((c) => c.classList.add("hidden"));
      const activeContent = document.getElementById(`drawer-tab-content-${target}`);
      if (activeContent) activeContent.classList.remove("hidden");
    });
  });

  // College Portal Login Simulation Trigger
  const collegePortalLoginBtn = document.getElementById("login-college-portal-btn");
  if (collegePortalLoginBtn) {
    collegePortalLoginBtn.addEventListener("click", () => {
      playSound("open");
      openPortalModal(AppState.currentPolytechnic);
    });
  }

  // ==========================================
  // 6. 3D Department & Booklist Explorer
  // ==========================================
  function initDepartmentExplorer() {
    const reg2022Btn = document.getElementById("reg-2022-btn");
    const reg2016Btn = document.getElementById("reg-2016-btn");
    const deptsGrid = document.getElementById("departments-grid");
    const deptSearchInput = document.getElementById("dept-search-input");

    // Regulation Switcher
    if (reg2022Btn && reg2016Btn) {
      reg2022Btn.addEventListener("click", () => {
        playSound("click");
        AppState.selectedRegulation = "2022";
        reg2022Btn.classList.add("bg-cyan-500", "text-slate-950", "shadow-lg", "shadow-cyan-500/30");
        reg2022Btn.classList.remove("text-slate-400");
        reg2016Btn.classList.remove("bg-cyan-500", "text-slate-950", "shadow-lg", "shadow-cyan-500/30");
        reg2016Btn.classList.add("text-slate-400");
        renderDepartmentCards();
        showToast("Switched to BTEB 2022 Regulation Syllabus", "info");
      });

      reg2016Btn.addEventListener("click", () => {
        playSound("click");
        AppState.selectedRegulation = "2016";
        reg2016Btn.classList.add("bg-cyan-500", "text-slate-950", "shadow-lg", "shadow-cyan-500/30");
        reg2016Btn.classList.remove("text-slate-400");
        reg2022Btn.classList.remove("bg-cyan-500", "text-slate-950", "shadow-lg", "shadow-cyan-500/30");
        reg2022Btn.classList.add("text-slate-400");
        renderDepartmentCards();
        showToast("Switched to BTEB 2016 Regulation Syllabus", "info");
      });
    }

    if (deptSearchInput) {
      deptSearchInput.addEventListener("input", (e) => {
        const query = e.target.value.trim().toLowerCase();
        renderDepartmentCards(query);
      });
    }

    renderDepartmentCards();
  }

  function renderDepartmentCards(searchQuery = "") {
    const deptsGrid = document.getElementById("departments-grid");
    if (!deptsGrid || typeof TECHNOLOGIES_DATA === "undefined") return;

    const filtered = TECHNOLOGIES_DATA.filter(
      (d) =>
        d.name.toLowerCase().includes(searchQuery) ||
        d.bn_name.toLowerCase().includes(searchQuery) ||
        d.short.toLowerCase().includes(searchQuery)
    );

    if (filtered.length === 0) {
      deptsGrid.innerHTML = `
        <div class="col-span-full py-12 text-center text-slate-400">
          <i data-lucide="search-x" class="w-12 h-12 mx-auto text-slate-600 mb-3"></i>
          <p class="text-base font-semibold">No BTEB technology found for "${searchQuery}"</p>
        </div>
      `;
      lucide.createIcons();
      return;
    }

    deptsGrid.innerHTML = filtered
      .map((d) => {
        const totalCred = AppState.selectedRegulation === "2022" ? d.totalCredits2022 : d.totalCredits2016;
        return `
        <div class="tilt-card glass-panel rounded-2xl p-5 border border-slate-700/50 hover:border-cyan-500/50 relative group cursor-pointer transition-all duration-300 flex flex-col justify-between" data-dept-id="${d.id}">
          <div class="absolute -top-3 right-4 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-900 border border-cyan-500/30 text-cyan-400">
            ${d.short}
          </div>

          <div>
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br ${d.color} p-0.5 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
              <div class="w-full h-full bg-slate-950/80 rounded-[10px] flex items-center justify-center text-cyan-300">
                <i data-lucide="${d.icon}" class="w-6 h-6"></i>
              </div>
            </div>

            <h3 class="font-bold text-lg text-slate-100 group-hover:text-cyan-300 transition-colors">${d.name}</h3>
            <p class="text-xs text-slate-400 font-bengali mt-0.5">${d.bn_name}</p>

            <p class="text-xs text-slate-300/80 line-clamp-2 mt-3 leading-relaxed">${d.description}</p>
          </div>

          <div class="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
            <span class="text-slate-400">Total: <strong class="text-emerald-400 font-mono">${totalCred}</strong> Credits</span>
            <span class="text-cyan-400 flex items-center gap-1 font-semibold group-hover:translate-x-1 transition-transform">
              View Syllabus <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
            </span>
          </div>
        </div>
      `;
      })
      .join("");

    lucide.createIcons();
    setupTiltEffects();

    // Attach click listeners to open Semester Booklist Modal
    deptsGrid.querySelectorAll("[data-dept-id]").forEach((card) => {
      card.addEventListener("click", () => {
        playSound("open");
        const deptId = card.dataset.deptId;
        openSyllabusModal(deptId);
      });
    });
  }

  // ==========================================
  // 7. Semester Selector & Booklist Modal
  // ==========================================
  const syllabusModal = document.getElementById("syllabus-modal");
  const syllabusModalBackdrop = document.getElementById("syllabus-modal-backdrop");
  const syllabusModalCloseBtn = document.getElementById("syllabus-modal-close-btn");

  function openSyllabusModal(deptId) {
    AppState.selectedDepartment = deptId;
    AppState.selectedSemester = 1;

    const dept = TECHNOLOGIES_DATA.find((d) => d.id === deptId) || TECHNOLOGIES_DATA[0];

    document.getElementById("syllabus-modal-dept-title").textContent = dept.name;
    document.getElementById("syllabus-modal-dept-bn").textContent = dept.bn_name;
    document.getElementById("syllabus-modal-reg-badge").textContent = `${AppState.selectedRegulation} Regulation`;

    renderSemesterButtons();
    renderSemesterSubjectList();

    if (syllabusModal) syllabusModal.classList.remove("hidden");
    if (syllabusModalBackdrop) syllabusModalBackdrop.classList.remove("hidden");
  }

  function closeSyllabusModal() {
    playSound("click");
    if (syllabusModal) syllabusModal.classList.add("hidden");
    if (syllabusModalBackdrop) syllabusModalBackdrop.classList.add("hidden");
  }

  if (syllabusModalCloseBtn) syllabusModalCloseBtn.addEventListener("click", closeSyllabusModal);
  if (syllabusModalBackdrop) syllabusModalBackdrop.addEventListener("click", closeSyllabusModal);

  function renderSemesterButtons() {
    const container = document.getElementById("syllabus-semester-selector");
    if (!container) return;

    container.innerHTML = [1, 2, 3, 4, 5, 6, 7, 8]
      .map(
        (sem) => `
        <button class="semester-btn px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
          sem === AppState.selectedSemester
            ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30"
            : "bg-slate-800/80 text-slate-300 hover:bg-slate-700/80"
        }" data-semester="${sem}">
          ${sem === 8 ? "8th (Industrial)" : `${sem}${getOrdinal(sem)} Sem`}
        </button>
      `
      )
      .join("");

    container.querySelectorAll(".semester-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        playSound("click");
        AppState.selectedSemester = parseInt(btn.dataset.semester, 10);
        renderSemesterButtons();
        renderSemesterSubjectList();
      });
    });
  }

  function renderSemesterSubjectList() {
    const subjectsContainer = document.getElementById("syllabus-subjects-table-body");
    const totalCreditsEl = document.getElementById("syllabus-total-semester-credits");
    if (!subjectsContainer) return;

    const subjects = getDepartmentSyllabus(AppState.selectedRegulation, AppState.selectedDepartment, AppState.selectedSemester);

    let totalC = 0;
    subjects.forEach((s) => (totalC += s.c || 0));
    if (totalCreditsEl) totalCreditsEl.textContent = totalC;

    subjectsContainer.innerHTML = subjects
      .map(
        (s) => `
      <tr class="border-b border-slate-800/80 hover:bg-slate-800/40 transition-colors">
        <td class="py-3 px-4 font-mono font-bold text-cyan-400 text-sm">${s.code}</td>
        <td class="py-3 px-4 text-slate-200 font-medium text-sm">
          ${s.title}
        </td>
        <td class="py-3 px-4 text-center font-mono text-slate-300 text-xs">${s.t}</td>
        <td class="py-3 px-4 text-center font-mono text-slate-300 text-xs">${s.p}</td>
        <td class="py-3 px-4 text-center font-mono font-bold text-emerald-400 text-sm">${s.c}</td>
        <td class="py-3 px-4 text-right">
          <button class="download-subject-syllabus-btn px-2.5 py-1 rounded bg-slate-800 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 transition-colors text-xs font-semibold flex items-center gap-1 ml-auto" data-code="${s.code}" data-title="${s.title}">
            <i data-lucide="download" class="w-3.5 h-3.5"></i> PDF
          </button>
        </td>
      </tr>
    `
      )
      .join("");

    lucide.createIcons();

    // Attach syllabus download simulation
    subjectsContainer.querySelectorAll(".download-subject-syllabus-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        playSound("calc");
        const code = btn.dataset.code;
        const title = btn.dataset.title;
        showToast(`Downloaded syllabus outline: ${code} - ${title}`, "success");
      });
    });
  }

  function getOrdinal(n) {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
  }

  // ==========================================
  // 8. BTEB Result & CGPA Calculator
  // ==========================================
  function initCGPACalculator() {
    const calcBtn = document.getElementById("calculate-cgpa-btn");
    const clearBtn = document.getElementById("clear-cgpa-btn");
    const presetHighBtn = document.getElementById("preset-cgpa-high-btn");
    const semesterInputs = document.querySelectorAll(".cgpa-sem-input");

    // Official BTEB 2016 Regulation semester percentage weightages:
    // 1st: 5%, 2nd: 5%, 3rd: 5%, 4th: 10%, 5th: 15%, 6th: 20%, 7th: 25%, 8th: 15% (Total: 100%)
    const WEIGHTS_2016 = [0.05, 0.05, 0.05, 0.1, 0.15, 0.2, 0.25, 0.15];
    // 2022 Regulation:
    const WEIGHTS_2022 = [0.05, 0.05, 0.05, 0.1, 0.15, 0.2, 0.25, 0.15];

    function calculateCGPA() {
      playSound("calc");
      let totalWeightedGPA = 0;
      let totalWeight = 0;
      let countEntered = 0;

      const weights = AppState.selectedRegulation === "2022" ? WEIGHTS_2022 : WEIGHTS_2016;

      semesterInputs.forEach((input, index) => {
        const val = parseFloat(input.value);
        if (!isNaN(val) && val >= 0 && val <= 4.0) {
          totalWeightedGPA += val * weights[index];
          totalWeight += weights[index];
          countEntered++;
        }
      });

      let finalCGPA = 0;
      if (totalWeight > 0) {
        finalCGPA = totalWeightedGPA / totalWeight;
      }

      displayCGPAResult(finalCGPA, countEntered);
    }

    function displayCGPAResult(cgpa, count) {
      const valueEl = document.getElementById("cgpa-gauge-value");
      const gradeEl = document.getElementById("cgpa-letter-grade");
      const remarkEl = document.getElementById("cgpa-remark-text");
      const gaugeCircle = document.getElementById("cgpa-gauge-circle");

      if (valueEl) valueEl.textContent = count > 0 ? cgpa.toFixed(2) : "0.00";

      let grade = "Pending";
      let remark = "Enter your semester GPAs to compute your official BTEB CGPA.";
      let colorClass = "text-slate-400";

      if (count > 0) {
        if (cgpa === 4.0) {
          grade = "A+ (Outstanding)";
          remark = "First Class with Distinction! Eligible for top engineering university admissions and prestigious scholarships.";
          colorClass = "text-emerald-400";
        } else if (cgpa >= 3.75) {
          grade = "A (Excellent)";
          remark = "First Class Standing. Strong eligibility for DUET & Government Sub-Assistant Engineer posts.";
          colorClass = "text-cyan-400";
        } else if (cgpa >= 3.5) {
          grade = "A- (Very Good)";
          remark = "First Class. High competitive edge in government engineering recruitments.";
          colorClass = "text-blue-400";
        } else if (cgpa >= 3.0) {
          grade = "B (Good)";
          remark = "Satisfactory First Division score.";
          colorClass = "text-yellow-400";
        } else if (cgpa >= 2.5) {
          grade = "C (Pass)";
          remark = "Second Division pass.";
          colorClass = "text-amber-500";
        } else if (cgpa >= 2.0) {
          grade = "D (Pass)";
          remark = "Minimum passing grade.";
          colorClass = "text-orange-500";
        } else {
          grade = "F (Fail)";
          remark = "Academic backlog. Retake required.";
          colorClass = "text-red-500";
        }
      }

      if (gradeEl) {
        gradeEl.textContent = grade;
        gradeEl.className = `font-bold text-lg ${colorClass}`;
      }

      if (remarkEl) remarkEl.textContent = remark;

      // Update Gauge SVG Circle
      // Circumference = 2 * PI * r = 2 * PI * 42 ~= 264
      if (gaugeCircle) {
        const circumference = 264;
        const progress = (cgpa / 4.0) * circumference;
        gaugeCircle.style.strokeDashoffset = circumference - progress;
      }
    }

    if (calcBtn) calcBtn.addEventListener("click", calculateCGPA);

    // Auto-calculate on input change
    semesterInputs.forEach((input) => {
      input.addEventListener("input", () => {
        let val = parseFloat(input.value);
        if (val > 4.0) input.value = "4.00";
        if (val < 0) input.value = "0.00";
        calculateCGPA();
      });
    });

    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        playSound("click");
        semesterInputs.forEach((input) => (input.value = ""));
        displayCGPAResult(0, 0);
        showToast("CGPA fields cleared", "info");
      });
    }

    if (presetHighBtn) {
      presetHighBtn.addEventListener("click", () => {
        playSound("calc");
        const presets = ["3.85", "3.90", "3.78", "3.92", "3.80", "3.88", "3.95", "4.00"];
        semesterInputs.forEach((input, i) => {
          input.value = presets[i];
        });
        calculateCGPA();
        showToast("Sample First Class Honors GPAs loaded", "success");
      });
    }

    // Export CGPA Result Card
    const exportCgpaBtn = document.getElementById("export-cgpa-btn");
    if (exportCgpaBtn) {
      exportCgpaBtn.addEventListener("click", () => {
        playSound("open");
        const value = document.getElementById("cgpa-gauge-value").textContent;
        const grade = document.getElementById("cgpa-letter-grade").textContent;
        showToast(`Official CGPA Card generated: ${value} (${grade})`, "success");
      });
    }
  }

  // ==========================================
  // 9. Notice Board & Job Circulars
  // ==========================================
  function initNoticeBoard() {
    const noticeTabs = document.querySelectorAll(".notice-tab-btn");
    const noticeCards = document.querySelectorAll(".notice-item-card");

    noticeTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        playSound("click");
        const category = tab.dataset.category;

        noticeTabs.forEach((t) => t.classList.remove("active", "border-cyan-400", "text-cyan-300", "bg-cyan-500/10"));
        tab.classList.add("active", "border-cyan-400", "text-cyan-300", "bg-cyan-500/10");

        noticeCards.forEach((card) => {
          if (category === "all" || card.dataset.category === category) {
            card.classList.remove("hidden");
          } else {
            card.classList.add("hidden");
          }
        });
      });
    });

    // Notice download and read triggers
    document.querySelectorAll(".view-notice-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        playSound("open");
        const title = btn.dataset.title;
        showToast(`Opening notice PDF viewer: "${title}"`, "info");
      });
    });
  }

  // ==========================================
  // 10. Floating 3D Mobile Mockup & App CTA
  // ==========================================
  function initMobileMockup() {
    const phone = document.getElementById("floating-app-phone");
    if (phone) {
      window.addEventListener("mousemove", (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        phone.style.transform = `rotateY(${-12 + x}deg) rotateX(${8 - y}deg) rotateZ(2deg)`;
      });
    }

    const downloadApkBtn = document.getElementById("download-apk-btn");
    const qrBtn = document.getElementById("view-qr-btn");

    if (downloadApkBtn) {
      downloadApkBtn.addEventListener("click", () => {
        playSound("open");
        simulateApkDownload();
      });
    }

    if (qrBtn) {
      qrBtn.addEventListener("click", () => {
        playSound("open");
        showToast("Scan the QR Code on your Android phone to install instantly!", "info");
      });
    }
  }

  function simulateApkDownload() {
    showToast("Starting DiplomaMate v2.4 APK download (18.4 MB)...", "info");
    setTimeout(() => {
      showToast("Download complete: diplomamate-bteb-v2.4.apk", "success");
    }, 1800);
  }

  // ==========================================
  // 11. Global Quick Search Modal (Ctrl + K)
  // ==========================================
  const searchModal = document.getElementById("global-search-modal");
  const searchBackdrop = document.getElementById("global-search-backdrop");
  const searchInput = document.getElementById("global-search-input");
  const searchResults = document.getElementById("global-search-results");
  const openSearchBtn = document.getElementById("open-global-search-btn");

  function openGlobalSearch() {
    playSound("open");
    if (searchModal) searchModal.classList.remove("hidden");
    if (searchBackdrop) searchBackdrop.classList.remove("hidden");
    if (searchInput) {
      searchInput.value = "";
      searchInput.focus();
      renderGlobalSearchResults("");
    }
  }

  function closeGlobalSearch() {
    playSound("click");
    if (searchModal) searchModal.classList.add("hidden");
    if (searchBackdrop) searchBackdrop.classList.add("hidden");
  }

  if (openSearchBtn) openSearchBtn.addEventListener("click", openGlobalSearch);
  if (searchBackdrop) searchBackdrop.addEventListener("click", closeGlobalSearch);

  window.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      openGlobalSearch();
    }
    if (e.key === "Escape") {
      closeGlobalSearch();
      closeCollegeDrawer();
      closeSyllabusModal();
      closePortalModal();
    }
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      renderGlobalSearchResults(e.target.value.trim().toLowerCase());
    });
  }

  function renderGlobalSearchResults(query) {
    if (!searchResults) return;

    if (!query) {
      searchResults.innerHTML = `
        <div class="p-4 text-xs text-slate-500 text-center">
          Type institute name, BTEB code (e.g. 50117), division, or department (e.g. CST, Civil)...
        </div>
      `;
      return;
    }

    const matchedPolys = AppState.polytechnics.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.bn_name.toLowerCase().includes(query) ||
        p.code.includes(query) ||
        p.district.toLowerCase().includes(query)
    );

    const matchedDepts = (typeof TECHNOLOGIES_DATA !== "undefined" ? TECHNOLOGIES_DATA : []).filter(
      (d) =>
        d.name.toLowerCase().includes(query) ||
        d.bn_name.toLowerCase().includes(query) ||
        d.short.toLowerCase().includes(query)
    );

    let html = "";

    if (matchedPolys.length > 0) {
      html += `
        <div class="p-2 text-[11px] font-bold text-cyan-400 uppercase tracking-wider">Polytechnic Institutes</div>
      `;
      html += matchedPolys
        .slice(0, 5)
        .map(
          (p) => `
        <div class="global-result-poly flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-800/80 cursor-pointer transition-colors" data-id="${p.id}">
          <div>
            <div class="text-sm font-semibold text-slate-200">${p.name}</div>
            <div class="text-xs text-slate-400">${p.bn_name} &bull; Code: <span class="text-cyan-400 font-mono">${p.code}</span></div>
          </div>
          <span class="text-xs px-2 py-0.5 rounded bg-slate-900 text-emerald-400 border border-emerald-500/30">${p.division}</span>
        </div>
      `
        )
        .join("");
    }

    if (matchedDepts.length > 0) {
      html += `
        <div class="p-2 text-[11px] font-bold text-emerald-400 uppercase tracking-wider mt-3">BTEB Technologies & Booklists</div>
      `;
      html += matchedDepts
        .slice(0, 4)
        .map(
          (d) => `
        <div class="global-result-dept flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-800/80 cursor-pointer transition-colors" data-dept="${d.id}">
          <div class="flex items-center gap-3">
            <span class="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-800 text-cyan-400 flex items-center justify-center font-bold text-xs">${d.short}</span>
            <div>
              <div class="text-sm font-semibold text-slate-200">${d.name}</div>
              <div class="text-xs text-slate-400">${d.bn_name}</div>
            </div>
          </div>
          <span class="text-xs text-cyan-400">View Syllabus &rarr;</span>
        </div>
      `
        )
        .join("");
    }

    if (matchedPolys.length === 0 && matchedDepts.length === 0) {
      html = `<div class="p-6 text-sm text-slate-400 text-center">No matching polytechnics or departments found.</div>`;
    }

    searchResults.innerHTML = html;

    searchResults.querySelectorAll(".global-result-poly").forEach((item) => {
      item.addEventListener("click", () => {
        closeGlobalSearch();
        const poly = AppState.polytechnics.find((p) => p.id === item.dataset.id);
        if (poly) selectPolytechnic(poly);
      });
    });

    searchResults.querySelectorAll(".global-result-dept").forEach((item) => {
      item.addEventListener("click", () => {
        closeGlobalSearch();
        openSyllabusModal(item.dataset.dept);
      });
    });
  }

  // ==========================================
  // 12. College Portal Login Simulation Modal
  // ==========================================
  const portalModal = document.getElementById("portal-login-modal");
  const portalBackdrop = document.getElementById("portal-login-backdrop");
  const portalCloseBtn = document.getElementById("portal-login-close-btn");
  const portalSubmitBtn = document.getElementById("portal-submit-btn");

  function openPortalModal(poly) {
    if (!portalModal) return;
    const nameEl = document.getElementById("portal-modal-college-name");
    if (nameEl) nameEl.textContent = poly ? poly.name : "Government Polytechnic Institute";
    portalModal.classList.remove("hidden");
    if (portalBackdrop) portalBackdrop.classList.remove("hidden");
  }

  function closePortalModal() {
    playSound("click");
    if (portalModal) portalModal.classList.add("hidden");
    if (portalBackdrop) portalBackdrop.classList.add("hidden");
  }

  if (portalCloseBtn) portalCloseBtn.addEventListener("click", closePortalModal);
  if (portalBackdrop) portalBackdrop.addEventListener("click", closePortalModal);

  if (portalSubmitBtn) {
    portalSubmitBtn.addEventListener("click", (e) => {
      e.preventDefault();
      playSound("calc");
      const roll = document.getElementById("portal-roll-input")?.value;
      const reg = document.getElementById("portal-reg-input")?.value;
      if (!roll || !reg) {
        showToast("Please enter valid Student Roll and Registration Number", "error");
        return;
      }
      showToast(`Authenticated Student: Roll ${roll}. Redirecting to Student Dashboard...`, "success");
      setTimeout(() => closePortalModal(), 1200);
    });
  }

  // ==========================================
  // 13. Toast Notification Helper
  // ==========================================
  function showToast(message, type = "info") {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast-msg flex items-center gap-3 px-4 py-3 rounded-xl shadow-xl border text-sm backdrop-blur-xl ${
      type === "success"
        ? "bg-emerald-950/90 text-emerald-200 border-emerald-500/40"
        : type === "error"
        ? "bg-rose-950/90 text-rose-200 border-rose-500/40"
        : "bg-slate-900/90 text-cyan-200 border-cyan-500/40"
    }`;

    const iconName = type === "success" ? "check-circle" : type === "error" ? "alert-circle" : "info";
    toast.innerHTML = `
      <i data-lucide="${iconName}" class="w-4 h-4 shrink-0"></i>
      <span>${message}</span>
    `;

    container.appendChild(toast);
    lucide.createIcons();

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(-10px)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // Make showToast globally available
  window.showToast = showToast;

  // ==========================================
  // 14. Smooth Scroll for Navbar Links
  // ==========================================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        playSound("click");
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileNavMenu = document.getElementById("mobile-nav-menu");
  if (mobileMenuBtn && mobileNavMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      playSound("click");
      mobileNavMenu.classList.toggle("hidden");
    });
  }

  // ==========================================
  // Initialization Sequence
  // ==========================================
  initThreeBackground();
  initBangladeshMap();
  initDepartmentExplorer();
  initCGPACalculator();
  initNoticeBoard();
  initMobileMockup();
  setupTiltEffects();
  lucide.createIcons();

  console.log("🚀 DiplomaMate BTEB Portal initialized successfully.");
});
