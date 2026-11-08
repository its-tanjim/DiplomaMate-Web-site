/**
 * DiplomaMate - Main Application Controller
 * Professional, clean & clutter-free educational portal
 * Map: 100% Free Leaflet.js + OpenStreetMap (Strict Bangladesh Bounds)
 */

document.addEventListener("DOMContentLoaded", () => {
  // Strict Bangladesh Geographical Bounds
  const BD_SOUTH_WEST = L.latLng(20.35, 87.85);
  const BD_NORTH_EAST = L.latLng(26.85, 92.95);
  const BANGLADESH_BOUNDS = L.latLngBounds(BD_SOUTH_WEST, BD_NORTH_EAST);
  const BD_CENTER = [23.75, 90.35];

  // Global State
  const AppState = {
    selectedRegulation: "2022",
    selectedDivision: "All",
    currentPolytechnic: null,
    selectedDepartment: "cst",
    selectedSemester: 1,
    map: null,
    markers: [],
    polytechnics: typeof POLYTECHNIC_DATA !== "undefined" ? POLYTECHNIC_DATA : []
  };

  // ==========================================
  // 1. Full Standard Interactive Bangladesh Map (Leaflet + OpenStreetMap)
  // ==========================================
  function initBangladeshMap() {
    const mapElement = document.getElementById("bangladesh-map");
    if (!mapElement || typeof L === "undefined") return;

    // Initialize Map centered at Bangladesh, smoothly displaying wider regional area
    const map = L.map("bangladesh-map", {
      center: BD_CENTER,
      zoom: 7,
      minZoom: 4,
      maxZoom: 18,
      zoomControl: true,
      attributionControl: true
    });

    // 100% Free Leaflet OpenStreetMap Tile Layer (shows full wider geography smoothly)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      subdomains: ["a", "b", "c"],
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Subtle Internal Division Boundaries
    if (typeof BANGLADESH_DIVISIONS_GEOJSON !== "undefined") {
      const divLayer = L.geoJSON(BANGLADESH_DIVISIONS_GEOJSON, {
        style: {
          color: "#94a3b8",
          weight: 1.2,
          dashArray: "3, 3",
          opacity: 0.6,
          fillColor: "#3b82f6",
          fillOpacity: 0
        },
        interactive: false
      }).addTo(map);
      AppState.divisionsLayer = divLayer;
    }

    AppState.map = map;

    // Ensure tiles render immediately and accurately
    setTimeout(() => {
      map.invalidateSize();
    }, 200);

    window.addEventListener("resize", () => {
      if (AppState.map) AppState.map.invalidateSize();
    });

    renderMapMarkers();

    // Reset Map View Button
    const resetMapBtn = document.getElementById("reset-map-view-btn");
    if (resetMapBtn) {
      resetMapBtn.addEventListener("click", () => {
        closeCollegeDrawer();
        clearMarkerHighlights();

        const mapEl = document.getElementById("bangladesh-map");
        if (mapEl) mapEl.classList.remove("drone-flight-active");

        const hudEl = document.getElementById("map-drone-hud");
        if (hudEl) {
          hudEl.classList.remove("opacity-100", "translate-y-0");
          hudEl.classList.add("opacity-0", "-translate-y-2");
          setTimeout(() => hudEl.classList.add("hidden"), 200);
        }

        if (activeFlightTimeout) {
          clearTimeout(activeFlightTimeout);
          activeFlightTimeout = null;
        }

        // Reset division filter buttons to All
        const filterBtns = document.querySelectorAll(".division-filter-btn");
        filterBtns.forEach((b) => {
          if (b.dataset.division === "All") {
            b.classList.add("active", "bg-blue-600", "text-white");
            b.classList.remove("bg-white", "text-slate-700", "hover:bg-slate-100");
          } else {
            b.classList.remove("active", "bg-blue-600", "text-white");
            b.classList.add("bg-white", "text-slate-700", "hover:bg-slate-100");
          }
        });
        AppState.selectedDivision = "All";
        filterMapMarkers("All");

        if (AppState.divisionsLayer) {
          AppState.divisionsLayer.eachLayer((layer) => {
            layer.setStyle({
              color: "#94a3b8",
              weight: 1.2,
              dashArray: "3, 3",
              fillColor: "#3b82f6",
              fillOpacity: 0
            });
          });
        }

        map.flyTo(BD_CENTER, 7, { duration: 1.2, easeLinearity: 0.25 });
        setTimeout(() => map.invalidateSize(), 1300);
      });
    }

    // Map Division Filter Buttons
    const filterButtons = document.querySelectorAll(".division-filter-btn");
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterButtons.forEach((b) => {
          b.classList.remove("active", "bg-blue-600", "text-white");
          b.classList.add("bg-white", "text-slate-700", "hover:bg-slate-100");
        });
        btn.classList.add("active", "bg-blue-600", "text-white");
        btn.classList.remove("bg-white", "text-slate-700", "hover:bg-slate-100");

        AppState.selectedDivision = btn.dataset.division;
        filterMapMarkers(AppState.selectedDivision);
      });
    });

    // Live Institute Search Input
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
          mapSearchDropdown.innerHTML = `<div class="p-3 text-xs text-slate-500 text-center">No institute found matching "${query}"</div>`;
        } else {
          mapSearchDropdown.innerHTML = matches
            .slice(0, 6)
            .map(
              (p) => `
            <div class="search-result-item flex items-center justify-between p-3 hover:bg-slate-50 cursor-pointer border-b border-slate-100 last:border-b-0 transition-colors" data-id="${p.id}">
              <div>
                <div class="text-sm font-semibold text-slate-900">${p.name}</div>
                <div class="text-xs text-slate-500 flex items-center gap-2 mt-0.5">
                  <span class="font-bengali">${p.bn_name}</span> &bull; <span class="font-mono text-blue-600 font-medium">Code: ${p.code}</span>
                </div>
              </div>
              <span class="px-2 py-0.5 rounded text-[11px] font-medium bg-blue-50 text-blue-700 border border-blue-200">${p.division}</span>
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

  // Render Clean Educational Pin Markers
  function renderMapMarkers() {
    if (!AppState.map) return;

    AppState.markers.forEach((m) => AppState.map.removeLayer(m));
    AppState.markers = [];

    AppState.polytechnics.forEach((poly) => {
      // Clean, professional academic pin
      const customIcon = L.divIcon({
        className: "edu-pin-marker-wrapper",
        html: `
          <div class="edu-pin-marker" title="${poly.name} (Code: ${poly.code})">
            <div class="edu-pin-pulse"></div>
            <div class="edu-pin-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </div>
          </div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 16]
      });

      const marker = L.marker(poly.coordinates, { icon: customIcon }).addTo(AppState.map);

      // Clean tooltip
      marker.bindTooltip(
        `
        <div class="text-left py-0.5">
          <div class="font-bold text-xs text-white">${poly.name}</div>
          <div class="text-[11px] text-slate-300 font-bengali">${poly.bn_name}</div>
          <div class="flex items-center gap-1.5 mt-1 text-[10px] text-blue-300 font-mono">
            <span>Code: ${poly.code}</span> &bull; <span>${poly.district}</span>
          </div>
        </div>
      `,
        { direction: "top", offset: [0, -10], className: "custom-clean-tooltip" }
      );

      marker.on("click", (e) => {
        if (e && e.originalEvent) e.originalEvent.stopPropagation();
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
      AppState.map.fitBounds(bounds, { padding: [40, 40], maxZoom: 10, duration: 1 });
    } else if (division === "All") {
      AppState.map.flyTo(BD_CENTER, 7, { duration: 1 });
    }

    // Highlight active division polygon if divisionsLayer exists
    if (AppState.divisionsLayer) {
      AppState.divisionsLayer.eachLayer((layer) => {
        const divName = layer.feature?.properties?.normalizedDivision;
        if (division !== "All" && divName && divName.toLowerCase() === division.toLowerCase()) {
          layer.setStyle({
            color: "#1d4ed8",
            weight: 2,
            dashArray: null,
            fillColor: "#3b82f6",
            fillOpacity: 0.12
          });
        } else {
          layer.setStyle({
            color: "#94a3b8",
            weight: 1.2,
            dashArray: "3, 3",
            fillColor: "#3b82f6",
            fillOpacity: 0
          });
        }
      });
    }

    setTimeout(() => {
      if (AppState.map) AppState.map.invalidateSize();
    }, 300);

    updatePolytechnicCount(visibleCount);
  }

  function updatePolytechnicCount(count) {
    const badge = document.getElementById("map-institute-count-badge");
    if (badge) {
      badge.textContent = `${count} Government Polytechnics`;
    }
  }

  let activeFlightTimeout = null;

  function clearMarkerHighlights() {
    if (!AppState.markers) return;
    AppState.markers.forEach((m) => {
      const el = m.getElement();
      if (!el) return;
      const pin = el.querySelector(".edu-pin-marker");
      if (pin) pin.classList.remove("beacon-locked");
      if (m.setZIndexOffset) m.setZIndexOffset(0);
    });
  }

  function highlightTargetMarker(poly) {
    if (!AppState.markers) return;
    AppState.markers.forEach((m) => {
      const el = m.getElement();
      if (!el) return;
      const pin = el.querySelector(".edu-pin-marker");
      if (!pin) return;

      if (m.polyData && m.polyData.id === poly.id) {
        pin.classList.add("beacon-locked");
        if (m.setZIndexOffset) m.setZIndexOffset(1000);
      } else {
        pin.classList.remove("beacon-locked");
        if (m.setZIndexOffset) m.setZIndexOffset(0);
      }
    });
  }

  // Cinematic Smooth Camera Drone Flight & College Portal Opening
  function selectPolytechnic(poly) {
    if (!poly || !poly.coordinates) return;
    AppState.currentPolytechnic = poly;

    // 1. Temporarily close drawer so user can enjoy the smooth camera flight
    closeCollegeDrawer();

    // 2. Pre-fill college data into the drawer
    populateCollegeDrawer(poly);

    // 3. Highlight target college marker with radiant radar beacon
    highlightTargetMarker(poly);

    if (AppState.map) {
      const mapEl = document.getElementById("bangladesh-map");
      const hudEl = document.getElementById("map-drone-hud");
      const hudName = document.getElementById("map-drone-college-name");
      const hudCoords = document.getElementById("map-drone-coords");

      // Display Camera Flight HUD Telemetry
      if (hudEl) {
        if (hudName) hudName.textContent = poly.name;
        if (hudCoords) {
          hudCoords.textContent = `${poly.coordinates[0].toFixed(4)}° N, ${poly.coordinates[1].toFixed(4)}° E • ${poly.district}`;
        }
        hudEl.classList.remove("hidden");
        requestAnimationFrame(() => {
          hudEl.classList.remove("opacity-0", "-translate-y-2");
          hudEl.classList.add("opacity-100", "translate-y-0");
        });
      }

      // Activate slight 3D camera drone flight tilt
      if (mapEl) {
        mapEl.classList.add("drone-flight-active");
      }

      // Close open popups to ensure clear view
      AppState.map.closePopup();

      if (activeFlightTimeout) {
        clearTimeout(activeFlightTimeout);
        activeFlightTimeout = null;
      }

      const flightDuration = 1.6; // 1.6 seconds smooth transition
      let arrived = false;

      const onFlightTouchdown = () => {
        if (arrived) return;
        arrived = true;

        if (mapEl) {
          mapEl.classList.remove("drone-flight-active");
        }

        if (hudEl) {
          hudEl.classList.remove("opacity-100", "translate-y-0");
          hudEl.classList.add("opacity-0", "-translate-y-2");
          setTimeout(() => hudEl.classList.add("hidden"), 300);
        }

        if (AppState.map) AppState.map.invalidateSize();

        // After touching down, smoothly slide open the college information portal
        setTimeout(() => {
          openCollegeDrawer();
        }, 250);
      };

      // Execute smooth, cinematic camera transition
      AppState.map.flyTo(poly.coordinates, 14, {
        duration: flightDuration,
        easeLinearity: 0.25
      });

      // Listen for arrival
      AppState.map.once("moveend", onFlightTouchdown);

      // Safety timeout in case moveend doesn't trigger
      activeFlightTimeout = setTimeout(() => {
        onFlightTouchdown();
      }, (flightDuration * 1000) + 150);

    } else {
      openCollegeDrawer();
    }
  }

  // ==========================================
  // 2. College A-to-Z Info Drawer
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
    if (!drawer) return;
    drawer.classList.add("is-hidden");
    drawer.classList.remove("is-visible");
    if (drawerBackdrop) drawerBackdrop.classList.add("hidden");
  }

  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener("click", () => {
      closeCollegeDrawer();
      clearMarkerHighlights();
    });
  }
  if (drawerBackdrop) {
    drawerBackdrop.addEventListener("click", () => {
      closeCollegeDrawer();
      clearMarkerHighlights();
    });
  }

  function populateCollegeDrawer(poly) {
    if (!poly) return;

    // Header info
    document.getElementById("drawer-college-name").textContent = poly.name;
    document.getElementById("drawer-college-bn-name").textContent = poly.bn_name;
    document.getElementById("drawer-code-badge").textContent = `Code: ${poly.code}`;
    document.getElementById("drawer-eiin-badge").textContent = `EIIN: ${poly.eiin || "N/A"}`;
    document.getElementById("drawer-estd-badge").textContent = `Estd: ${poly.established}`;
    document.getElementById("drawer-division-badge").textContent = `${poly.district}, ${poly.division}`;

    // Website Link
    const webBtn = document.getElementById("drawer-website-btn");
    if (webBtn) {
      if (poly.contact && poly.contact.website) {
        webBtn.href = poly.contact.website;
        webBtn.classList.remove("pointer-events-none", "opacity-50");
        webBtn.setAttribute("target", "_blank");
        webBtn.setAttribute("rel", "noopener noreferrer");
      } else {
        webBtn.href = "#";
        webBtn.classList.add("pointer-events-none", "opacity-50");
      }
    }

    // Call Link
    const callBtn = document.getElementById("drawer-call-btn");
    if (callBtn) {
      if (poly.contact && poly.contact.phone) {
        callBtn.href = `tel:${poly.contact.phone.replace(/[^0-9+]/g, "")}`;
        callBtn.classList.remove("pointer-events-none", "opacity-50");
      } else {
        callBtn.href = "#";
        callBtn.classList.add("pointer-events-none", "opacity-50");
      }
    }

    // Tab 1: History & Overview
    const historyBn = document.getElementById("drawer-history-bn");
    const historyEn = document.getElementById("drawer-history-en");
    if (historyBn) historyBn.textContent = poly.history;
    if (historyEn) historyEn.textContent = poly.history_en || "";

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
          <div class="p-3.5 rounded-xl border border-slate-200 bg-slate-50 hover:border-blue-300 transition-colors">
            <div class="flex items-center justify-between mb-2">
              <span class="font-semibold text-sm text-slate-900">${d.name}</span>
              <span class="text-xs px-2.5 py-0.5 rounded-full font-medium bg-blue-100 text-blue-800">${shift1 + shift2} Seats</span>
            </div>
            <div class="grid grid-cols-2 gap-2 text-xs">
              <div class="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-200 text-slate-700">
                <span>1st Shift:</span>
                <span class="font-mono font-bold text-slate-900">${shift1}</span>
              </div>
              <div class="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-200 text-slate-700">
                <span>2nd Shift:</span>
                <span class="font-mono font-bold text-slate-900">${shift2}</span>
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
        <li class="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800">
          <i data-lucide="check-circle" class="w-4 h-4 text-emerald-600 shrink-0"></i>
          <span>${f}</span>
        </li>
      `
        )
        .join("");
    }

    const principalEl = document.getElementById("drawer-principal-info");
    const contactPrincipalEl = document.getElementById("drawer-contact-principal");
    if (principalEl) {
      principalEl.textContent = poly.principal || "Principal Office, BTEB Regulated";
    }
    if (contactPrincipalEl) {
      contactPrincipalEl.textContent = poly.principal || "Principal Office, BTEB Regulated";
    }

    // Tab 4: Contact & Portal
    const addressEl = document.getElementById("drawer-address");
    const phoneEl = document.getElementById("drawer-phone");
    const phoneLinkEl = document.getElementById("drawer-phone-link");
    const emailEl = document.getElementById("drawer-email");
    const emailLinkEl = document.getElementById("drawer-email-link");
    const websiteUrlLinkEl = document.getElementById("drawer-website-url-link");

    if (addressEl) {
      addressEl.textContent = (poly.contact && poly.contact.address) ? poly.contact.address : `${poly.district}, Bangladesh`;
    }

    if (phoneEl) {
      const ph = (poly.contact && poly.contact.phone) ? poly.contact.phone : "Contact via Portal";
      phoneEl.textContent = ph;
      if (phoneLinkEl) {
        phoneLinkEl.href = ph !== "Contact via Portal" ? `tel:${ph.split(',')[0].replace(/[^0-9+]/g, '')}` : "#";
      }
    }

    if (emailEl) {
      const em = (poly.contact && poly.contact.email) ? poly.contact.email : "info@bteb.gov.bd";
      emailEl.textContent = em;
      if (emailLinkEl) {
        emailLinkEl.href = `mailto:${em}`;
      }
    }

    if (websiteUrlLinkEl) {
      const webUrl = (poly.contact && poly.contact.website) ? poly.contact.website : "http://www.bteb.gov.bd";
      websiteUrlLinkEl.textContent = webUrl;
      websiteUrlLinkEl.href = webUrl;
    }

    lucide.createIcons();
  }

  // Drawer Tabs Switching
  const drawerTabs = document.querySelectorAll(".drawer-tab-btn");
  drawerTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.tab;
      drawerTabs.forEach((t) => {
        t.classList.remove("active", "border-blue-600", "text-blue-600", "font-bold");
        t.classList.add("text-slate-500", "font-medium");
      });
      tab.classList.add("active", "border-blue-600", "text-blue-600", "font-bold");
      tab.classList.remove("text-slate-500", "font-medium");

      document.querySelectorAll(".drawer-tab-content").forEach((c) => c.classList.add("hidden"));
      const activeContent = document.getElementById(`drawer-tab-content-${target}`);
      if (activeContent) activeContent.classList.remove("hidden");
    });
  });

  // College Portal Login Trigger
  const collegePortalLoginBtn = document.getElementById("login-college-portal-btn");
  if (collegePortalLoginBtn) {
    collegePortalLoginBtn.addEventListener("click", () => {
      openPortalModal(AppState.currentPolytechnic);
    });
  }

  // ==========================================
  // 3. Department & Booklist Explorer
  // ==========================================
  function initDepartmentExplorer() {
    const reg2022Btn = document.getElementById("reg-2022-btn");
    const reg2016Btn = document.getElementById("reg-2016-btn");
    const modalReg2022Btn = document.getElementById("modal-reg-2022-btn");
    const modalReg2016Btn = document.getElementById("modal-reg-2016-btn");
    const deptSearchInput = document.getElementById("dept-search-input");

    function setRegulation(reg) {
      AppState.selectedRegulation = reg;

      // Update main page switcher
      if (reg2022Btn && reg2016Btn) {
        if (reg === "2022") {
          reg2022Btn.classList.add("bg-blue-600", "text-white", "shadow-sm");
          reg2022Btn.classList.remove("text-slate-600", "hover:text-slate-900");
          reg2016Btn.classList.remove("bg-blue-600", "text-white", "shadow-sm");
          reg2016Btn.classList.add("text-slate-600", "hover:text-slate-900");
        } else {
          reg2016Btn.classList.add("bg-blue-600", "text-white", "shadow-sm");
          reg2016Btn.classList.remove("text-slate-600", "hover:text-slate-900");
          reg2022Btn.classList.remove("bg-blue-600", "text-white", "shadow-sm");
          reg2022Btn.classList.add("text-slate-600", "hover:text-slate-900");
        }
      }

      // Update modal switcher
      if (modalReg2022Btn && modalReg2016Btn) {
        if (reg === "2022") {
          modalReg2022Btn.className = "px-3 py-1 rounded-lg transition-all bg-blue-600 text-white shadow-sm";
          modalReg2016Btn.className = "px-3 py-1 rounded-lg transition-all text-slate-600 hover:text-slate-900";
        } else {
          modalReg2016Btn.className = "px-3 py-1 rounded-lg transition-all bg-blue-600 text-white shadow-sm";
          modalReg2022Btn.className = "px-3 py-1 rounded-lg transition-all text-slate-600 hover:text-slate-900";
        }
      }

      const regBadge = document.getElementById("syllabus-modal-reg-badge");
      if (regBadge) regBadge.textContent = `${reg} Regulation`;

      renderDepartmentCards();
      renderSemesterSubjectList();
      showToast(`Switched to BTEB ${reg} Regulation (Probidhan-${reg})`, "info");
    }

    if (reg2022Btn) reg2022Btn.addEventListener("click", () => setRegulation("2022"));
    if (reg2016Btn) reg2016Btn.addEventListener("click", () => setRegulation("2016"));
    if (modalReg2022Btn) modalReg2022Btn.addEventListener("click", () => setRegulation("2022"));
    if (modalReg2016Btn) modalReg2016Btn.addEventListener("click", () => setRegulation("2016"));

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
        <div class="col-span-full py-12 text-center text-slate-500">
          <i data-lucide="search" class="w-10 h-10 mx-auto text-slate-300 mb-2"></i>
          <p class="text-sm font-semibold">No BTEB technology found for "${searchQuery}"</p>
        </div>
      `;
      lucide.createIcons();
      return;
    }

    deptsGrid.innerHTML = filtered
      .map((d) => {
        const totalCred = AppState.selectedRegulation === "2022" ? d.totalCredits2022 : d.totalCredits2016;
        return `
        <div class="edu-card-interactive p-5 flex flex-col justify-between" data-dept-id="${d.id}">
          <div>
            <div class="flex items-start justify-between gap-3 mb-3">
              <span class="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200">
                ${d.short}
              </span>
              <span class="text-xs font-medium text-slate-500">
                <strong class="font-mono text-slate-800">${totalCred}</strong> Credits
              </span>
            </div>

            <h3 class="font-bold text-base text-slate-900 hover:text-blue-600 transition-colors">${d.name}</h3>
            <p class="text-xs text-slate-500 font-bengali mt-0.5">${d.bn_name}</p>
            <p class="text-xs text-slate-600 mt-2.5 line-clamp-2 leading-relaxed">${d.description}</p>
          </div>

          <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            <span class="text-slate-500 font-medium">8 Semesters</span>
            <span class="text-blue-600 font-semibold flex items-center gap-1">
              View Booklist &rarr;
            </span>
          </div>
        </div>
      `;
      })
      .join("");

    lucide.createIcons();

    deptsGrid.querySelectorAll("[data-dept-id]").forEach((card) => {
      card.addEventListener("click", () => {
        const deptId = card.dataset.deptId;
        openSyllabusModal(deptId);
      });
    });
  }

  // ==========================================
  // 4. Semester Selector & Booklist Modal
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
    
    const regBadge = document.getElementById("syllabus-modal-reg-badge");
    if (regBadge) regBadge.textContent = `${AppState.selectedRegulation} Regulation`;

    const modalReg2022Btn = document.getElementById("modal-reg-2022-btn");
    const modalReg2016Btn = document.getElementById("modal-reg-2016-btn");
    if (modalReg2022Btn && modalReg2016Btn) {
      if (AppState.selectedRegulation === "2022") {
        modalReg2022Btn.className = "px-3 py-1 rounded-lg transition-all bg-blue-600 text-white shadow-sm";
        modalReg2016Btn.className = "px-3 py-1 rounded-lg transition-all text-slate-600 hover:text-slate-900";
      } else {
        modalReg2016Btn.className = "px-3 py-1 rounded-lg transition-all bg-blue-600 text-white shadow-sm";
        modalReg2022Btn.className = "px-3 py-1 rounded-lg transition-all text-slate-600 hover:text-slate-900";
      }
    }

    renderSemesterButtons();
    renderSemesterSubjectList();

    if (syllabusModal) syllabusModal.classList.remove("hidden");
    if (syllabusModalBackdrop) syllabusModalBackdrop.classList.remove("hidden");
  }

  function closeSyllabusModal() {
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
        <button class="semester-btn px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
          sem === AppState.selectedSemester
            ? "bg-blue-600 text-white shadow-sm"
            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
        }" data-semester="${sem}">
          ${sem === 8 ? "8th (Industrial)" : `${sem}${getOrdinal(sem)} Sem`}
        </button>
      `
      )
      .join("");

    container.querySelectorAll(".semester-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        AppState.selectedSemester = parseInt(btn.dataset.semester, 10);
        renderSemesterButtons();
        renderSemesterSubjectList();
      });
    });
  }

  function renderSemesterSubjectList() {
    const subjectsContainer = document.getElementById("syllabus-subjects-table-body");
    const totalCreditsEl = document.getElementById("syllabus-total-semester-credits");
    const totalSubjectsEl = document.getElementById("syllabus-total-semester-subjects");
    const totalMarksEl = document.getElementById("syllabus-total-semester-marks");
    if (!subjectsContainer) return;

    const subjects = getDepartmentSyllabus(AppState.selectedRegulation, AppState.selectedDepartment, AppState.selectedSemester);

    let totalC = 0;
    let totalM = 0;
    if (Array.isArray(subjects)) {
      subjects.forEach((s) => {
        const c = s.credit ?? s.c ?? 0;
        const marks = s.marks ?? (c * 50);
        totalC += c;
        totalM += marks;
      });
    }

    if (totalCreditsEl) totalCreditsEl.textContent = totalC;
    if (totalSubjectsEl) totalSubjectsEl.textContent = Array.isArray(subjects) ? subjects.length : 0;
    if (totalMarksEl) totalMarksEl.textContent = totalM;

    if (!subjects || subjects.length === 0) {
      subjectsContainer.innerHTML = `
        <tr>
          <td colspan="7" class="py-8 text-center text-slate-500 text-xs">
            No subjects found for this semester.
          </td>
        </tr>
      `;
      return;
    }

    subjectsContainer.innerHTML = subjects
      .map((s) => {
        const code = s.code || "---";
        const title = s.name || s.title || "Untitled Subject";
        const t = s.theory_per_week ?? s.t ?? 0;
        const p = s.practical_per_week ?? s.p ?? 0;
        const c = s.credit ?? s.c ?? 0;
        const marks = s.marks ?? (c * 50);

        return `
      <tr class="border-b border-slate-100 hover:bg-slate-50/80 transition-colors">
        <td class="py-3 px-4 font-mono font-bold text-blue-700 text-xs">${code}</td>
        <td class="py-3 px-4 text-slate-900 font-medium text-xs">
          ${title}
        </td>
        <td class="py-3 px-4 text-center font-mono text-slate-600 text-xs">${t}</td>
        <td class="py-3 px-4 text-center font-mono text-slate-600 text-xs">${p}</td>
        <td class="py-3 px-4 text-center font-mono font-bold text-slate-900 text-xs">${c}</td>
        <td class="py-3 px-4 text-center font-mono font-semibold text-emerald-700 text-xs">${marks}</td>
        <td class="py-3 px-4 text-right">
          <button class="download-subject-syllabus-btn px-2.5 py-1 rounded bg-slate-100 text-slate-700 hover:bg-blue-600 hover:text-white transition-colors text-xs font-medium flex items-center gap-1 ml-auto" data-code="${code}" data-title="${title}">
            <i data-lucide="download" class="w-3.5 h-3.5"></i> PDF
          </button>
        </td>
      </tr>
    `;
      })
      .join("");

    lucide.createIcons();

    subjectsContainer.querySelectorAll(".download-subject-syllabus-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
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
  // 5. BTEB Result & CGPA Calculator
  // ==========================================
  function initCGPACalculator() {
    const calcBtn = document.getElementById("calculate-cgpa-btn");
    const clearBtn = document.getElementById("clear-cgpa-btn");
    const presetHighBtn = document.getElementById("preset-cgpa-high-btn");
    const semesterInputs = document.querySelectorAll(".cgpa-sem-input");

    // Official BTEB semester percentage weightages (Total: 100%)
    const WEIGHTS = [0.05, 0.05, 0.05, 0.1, 0.15, 0.2, 0.25, 0.15];

    function calculateCGPA() {
      let totalWeightedGPA = 0;
      let totalWeight = 0;
      let countEntered = 0;

      semesterInputs.forEach((input, index) => {
        const val = parseFloat(input.value);
        if (!isNaN(val) && val >= 0 && val <= 4.0) {
          totalWeightedGPA += val * WEIGHTS[index];
          totalWeight += WEIGHTS[index];
          countEntered++;
        }
      });

      let finalCGPA = 0;
      if (totalWeight > 0) {
        finalCGPA = totalWeightedGPA / totalWeight;
      }

      displayCGPAResult(finalCGPA, countEntered);
      return { finalCGPA, countEntered };
    }

    function displayCGPAResult(cgpa, count) {
      const valueEl = document.getElementById("cgpa-gauge-value");
      const gradeEl = document.getElementById("cgpa-letter-grade");
      const remarkEl = document.getElementById("cgpa-remark-text");

      if (valueEl) valueEl.textContent = count > 0 ? cgpa.toFixed(2) : "0.00";

      let grade = "Awaiting Input";
      let remark = "Enter your semester GPAs to compute your official BTEB CGPA.";
      let colorClass = "text-slate-500";

      if (count > 0) {
        if (cgpa === 4.0) {
          grade = "A+ (Outstanding)";
          remark = "First Class with Distinction! Eligible for top engineering university admissions and prestigious scholarships.";
          colorClass = "text-emerald-700";
        } else if (cgpa >= 3.75) {
          grade = "A (Excellent)";
          remark = "First Class Standing. Strong eligibility for DUET & Government Sub-Assistant Engineer posts.";
          colorClass = "text-blue-700";
        } else if (cgpa >= 3.5) {
          grade = "A- (Very Good)";
          remark = "First Class. High competitive edge in government engineering recruitments.";
          colorClass = "text-blue-600";
        } else if (cgpa >= 3.0) {
          grade = "B (Good)";
          remark = "Satisfactory First Division score.";
          colorClass = "text-amber-700";
        } else if (cgpa >= 2.5) {
          grade = "C (Pass)";
          remark = "Second Division pass.";
          colorClass = "text-orange-700";
        } else if (cgpa >= 2.0) {
          grade = "D (Pass)";
          remark = "Minimum passing grade.";
          colorClass = "text-orange-800";
        } else {
          grade = "F (Fail)";
          remark = "Academic backlog. Retake required.";
          colorClass = "text-red-700";
        }
      }

      if (gradeEl) {
        gradeEl.textContent = grade;
        gradeEl.className = `font-bold text-base ${colorClass}`;
      }

      if (remarkEl) remarkEl.textContent = remark;
    }

    if (calcBtn) calcBtn.addEventListener("click", calculateCGPA);

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
        semesterInputs.forEach((input) => (input.value = ""));
        displayCGPAResult(0, 0);
        showToast("CGPA fields cleared", "info");
      });
    }

    if (presetHighBtn) {
      presetHighBtn.addEventListener("click", () => {
        const presets = ["3.85", "3.90", "3.78", "3.92", "3.80", "3.88", "3.95", "4.00"];
        semesterInputs.forEach((input, i) => {
          input.value = presets[i];
        });
        calculateCGPA();
        showToast("Sample First Class Honors GPAs loaded", "success");
      });
    }

    const exportCgpaBtn = document.getElementById("export-cgpa-btn");
    if (exportCgpaBtn) {
      exportCgpaBtn.addEventListener("click", () => {
        const { finalCGPA, countEntered } = calculateCGPA();
        openTranscriptModal(finalCGPA, countEntered);
      });
    }
  }

  // ==========================================
  // 6. Notice Board & Job Circulars
  // ==========================================
  function initNoticeBoard() {
    const noticeTabs = document.querySelectorAll(".notice-tab-btn");
    const noticeCards = document.querySelectorAll(".notice-item-card");

    noticeTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const category = tab.dataset.category;

        noticeTabs.forEach((t) => {
          t.classList.remove("active", "border-blue-600", "text-blue-600", "font-bold");
          t.classList.add("text-slate-500", "font-medium");
        });
        tab.classList.add("active", "border-blue-600", "text-blue-600", "font-bold");
        tab.classList.remove("text-slate-500", "font-medium");

        noticeCards.forEach((card) => {
          if (category === "all" || card.dataset.category === category) {
            card.classList.remove("hidden");
          } else {
            card.classList.add("hidden");
          }
        });
      });
    });

    document.querySelectorAll(".view-notice-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const title = btn.dataset.title || "BTEB Notice";
        const date = btn.dataset.date || "2026-11-05";
        const org = btn.dataset.org || "BTEB Authority";
        const desc = btn.dataset.desc || "Official notification for polytechnic institutions and students.";
        openNoticeModal(title, date, org, desc);
      });
    });
  }

  // ==========================================
  // 7. Mobile App & QR Code CTA
  // ==========================================
  function initMobileAppCTA() {
    const downloadApkBtn = document.getElementById("download-apk-btn");
    const qrBtn = document.getElementById("view-qr-btn");

    if (downloadApkBtn) {
      downloadApkBtn.addEventListener("click", () => {
        showToast("Starting DiplomaMate v2.4 APK download (18.4 MB)...", "info");
        setTimeout(() => {
          showToast("Download complete: diplomamate-bteb-v2.4.apk", "success");
        }, 1500);
      });
    }

    if (qrBtn) {
      qrBtn.addEventListener("click", () => {
        openQrModal();
      });
    }
  }

  // ==========================================
  // 8. Modals Management (QR, Transcript, Portal, Notice, Policy)
  // ==========================================
  // Portal Modal
  const portalModal = document.getElementById("portal-login-modal");
  const portalBackdrop = document.getElementById("portal-login-backdrop");
  const portalCloseBtn = document.getElementById("portal-login-close-btn");
  const portalSubmitBtn = document.getElementById("portal-submit-btn");

  function openPortalModal(poly) {
    if (!portalModal) return;
    const nameEl = document.getElementById("portal-modal-college-name");
    if (nameEl) nameEl.textContent = poly ? `${poly.name} (${poly.bn_name})` : "Government Polytechnic Institute";
    portalModal.classList.remove("hidden");
    if (portalBackdrop) portalBackdrop.classList.remove("hidden");
  }

  function closePortalModal() {
    if (portalModal) portalModal.classList.add("hidden");
    if (portalBackdrop) portalBackdrop.classList.add("hidden");
  }

  if (portalCloseBtn) portalCloseBtn.addEventListener("click", closePortalModal);
  if (portalBackdrop) portalBackdrop.addEventListener("click", closePortalModal);
  if (portalSubmitBtn) {
    portalSubmitBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const roll = document.getElementById("portal-roll-input")?.value;
      const reg = document.getElementById("portal-reg-input")?.value;
      if (!roll || !reg) {
        showToast("Please enter valid Student Roll and Registration Number", "error");
        return;
      }
      showToast(`Authenticated Student: Roll ${roll}. Redirecting...`, "success");
      setTimeout(() => closePortalModal(), 1000);
    });
  }

  // QR Modal
  const qrModal = document.getElementById("qr-code-modal");
  const qrBackdrop = document.getElementById("qr-code-backdrop");
  const qrCloseBtn = document.getElementById("qr-code-close-btn");
  const copyApkLinkBtn = document.getElementById("copy-apk-link-btn");

  function openQrModal() {
    if (!qrModal) return;
    qrModal.classList.remove("hidden");
    if (qrBackdrop) qrBackdrop.classList.remove("hidden");
  }

  function closeQrModal() {
    if (qrModal) qrModal.classList.add("hidden");
    if (qrBackdrop) qrBackdrop.classList.add("hidden");
  }

  if (qrCloseBtn) qrCloseBtn.addEventListener("click", closeQrModal);
  if (qrBackdrop) qrBackdrop.addEventListener("click", closeQrModal);
  if (copyApkLinkBtn) {
    copyApkLinkBtn.addEventListener("click", () => {
      navigator.clipboard.writeText("https://diplomamate.bd/download/diplomamate-v2.4.apk");
      showToast("APK link copied to clipboard!", "success");
    });
  }

  // Transcript Modal
  const transcriptModal = document.getElementById("transcript-modal");
  const transcriptBackdrop = document.getElementById("transcript-backdrop");
  const transcriptCloseBtn = document.getElementById("transcript-close-btn");
  const printTranscriptBtn = document.getElementById("print-transcript-btn");

  function openTranscriptModal(cgpa, count) {
    if (!transcriptModal) return;
    const valueEl = document.getElementById("transcript-cgpa-value");
    const gradeEl = document.getElementById("transcript-grade-value");
    const dateEl = document.getElementById("transcript-date");
    const tbody = document.getElementById("transcript-table-body");

    if (valueEl) valueEl.textContent = count > 0 ? cgpa.toFixed(2) : "0.00";
    if (gradeEl) {
      const g = document.getElementById("cgpa-letter-grade")?.textContent || "N/A";
      gradeEl.textContent = g;
    }
    if (dateEl) {
      dateEl.textContent = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
    }

    if (tbody) {
      const inputs = document.querySelectorAll(".cgpa-sem-input");
      const weights = [5, 5, 5, 10, 15, 20, 25, 15];
      tbody.innerHTML = Array.from(inputs)
        .map((input, idx) => {
          const sem = idx + 1;
          const val = parseFloat(input.value);
          const score = !isNaN(val) ? val.toFixed(2) : "—";
          return `
          <tr class="border-b border-slate-200 text-xs">
            <td class="py-2.5 font-medium text-slate-800">Semester ${sem}</td>
            <td class="py-2.5 text-center font-mono text-blue-700 font-semibold">${score}</td>
            <td class="py-2.5 text-center font-mono text-slate-500">${weights[idx]}%</td>
            <td class="py-2.5 text-center text-slate-900 font-semibold">${!isNaN(val) ? (val * (weights[idx] / 100)).toFixed(3) : "—"}</td>
          </tr>
        `;
        })
        .join("");
    }

    transcriptModal.classList.remove("hidden");
    if (transcriptBackdrop) transcriptBackdrop.classList.remove("hidden");
  }

  function closeTranscriptModal() {
    if (transcriptModal) transcriptModal.classList.add("hidden");
    if (transcriptBackdrop) transcriptBackdrop.classList.add("hidden");
  }

  if (transcriptCloseBtn) transcriptCloseBtn.addEventListener("click", closeTranscriptModal);
  if (transcriptBackdrop) transcriptBackdrop.addEventListener("click", closeTranscriptModal);
  if (printTranscriptBtn) {
    printTranscriptBtn.addEventListener("click", () => {
      window.print();
    });
  }

  // Notice Viewer Modal
  const noticeModal = document.getElementById("notice-modal");
  const noticeBackdrop = document.getElementById("notice-backdrop");
  const noticeCloseBtn = document.getElementById("notice-close-btn");
  const noticeDownloadBtn = document.getElementById("notice-download-doc-btn");

  function openNoticeModal(title, date, org, desc) {
    if (!noticeModal) return;
    document.getElementById("notice-modal-title").textContent = title;
    document.getElementById("notice-modal-date").textContent = date;
    document.getElementById("notice-modal-org").textContent = org;
    document.getElementById("notice-modal-desc").textContent = desc;

    noticeModal.classList.remove("hidden");
    if (noticeBackdrop) noticeBackdrop.classList.remove("hidden");
  }

  function closeNoticeModal() {
    if (noticeModal) noticeModal.classList.add("hidden");
    if (noticeBackdrop) noticeBackdrop.classList.add("hidden");
  }

  if (noticeCloseBtn) noticeCloseBtn.addEventListener("click", closeNoticeModal);
  if (noticeBackdrop) noticeBackdrop.addEventListener("click", closeNoticeModal);
  if (noticeDownloadBtn) {
    noticeDownloadBtn.addEventListener("click", () => {
      showToast("Downloading verified notice document (PDF)...", "success");
      setTimeout(() => closeNoticeModal(), 800);
    });
  }

  // Policy Modal
  const policyModal = document.getElementById("policy-modal");
  const policyBackdrop = document.getElementById("policy-backdrop");
  const policyCloseBtn = document.getElementById("policy-close-btn");

  function openPolicyModal(title, content) {
    if (!policyModal) return;
    document.getElementById("policy-modal-title").textContent = title;
    document.getElementById("policy-modal-content").innerHTML = content;
    policyModal.classList.remove("hidden");
    if (policyBackdrop) policyBackdrop.classList.remove("hidden");
  }

  function closePolicyModal() {
    if (policyModal) policyModal.classList.add("hidden");
    if (policyBackdrop) policyBackdrop.classList.add("hidden");
  }

  if (policyCloseBtn) policyCloseBtn.addEventListener("click", closePolicyModal);
  if (policyBackdrop) policyBackdrop.addEventListener("click", closePolicyModal);

  document.querySelectorAll(".footer-policy-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const type = link.dataset.type;
      if (type === "privacy") {
        openPolicyModal(
          "Privacy Policy",
          `<p class="mb-3 text-slate-700">DiplomaMate respects student privacy. We operate as an open educational utility and do not collect, sell, or monitor personal identifiable telemetry.</p>
           <p class="mb-3 text-slate-700">CGPA computations and routine entries are performed completely client-side in your web browser.</p>`
        );
      } else if (type === "terms") {
        openPolicyModal(
          "Terms of Service",
          `<p class="mb-3 text-slate-700">All syllabus documentation, subject codes, and academic regulations displayed on DiplomaMate are published for non-commercial educational guidance.</p>
           <p class="mb-3 text-slate-700">Diploma students, instructors, and researchers are free to access and reference this repository under open academic fair-use guidelines.</p>`
        );
      } else if (type === "disclaimer") {
        openPolicyModal(
          "BTEB Official Disclaimer",
          `<p class="mb-3 text-slate-700">DiplomaMate is an independent student academic resource aligned with official curricula published by the Bangladesh Technical Education Board (BTEB).</p>
           <p class="mb-3 text-slate-700">For binding legal circulars, official result sheets, and final transcripts, please consult official portals at <a href="http://www.bteb.gov.bd" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">bteb.gov.bd</a>.</p>`
        );
      }
    });
  });

  // Global ESC Key Close
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCollegeDrawer();
      closeSyllabusModal();
      closePortalModal();
      closeQrModal();
      closeTranscriptModal();
      closeNoticeModal();
      closePolicyModal();
    }
  });

  // ==========================================
  // 9. Toast Notification Helper
  // ==========================================
  function showToast(message, type = "info") {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast-msg flex items-center gap-2.5 px-4 py-3 rounded-xl shadow-lg border text-sm font-medium ${
      type === "success"
        ? "bg-emerald-50 text-emerald-900 border-emerald-200"
        : type === "error"
        ? "bg-rose-50 text-rose-900 border-rose-200"
        : "bg-white text-slate-800 border-slate-200"
    }`;

    const iconName = type === "success" ? "check-circle" : type === "error" ? "alert-circle" : "info";
    const iconColor = type === "success" ? "text-emerald-600" : type === "error" ? "text-rose-600" : "text-blue-600";
    toast.innerHTML = `
      <i data-lucide="${iconName}" class="w-4 h-4 shrink-0 ${iconColor}"></i>
      <span>${message}</span>
    `;

    container.appendChild(toast);
    lucide.createIcons();

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(-8px)";
      toast.style.transition = "all 0.25s ease";
      setTimeout(() => toast.remove(), 250);
    }, 2800);
  }

  window.showToast = showToast;

  // ==========================================
  // 10. Smooth Scroll & Mobile Navigation
  // ==========================================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileNavMenu = document.getElementById("mobile-nav-menu");
  if (mobileMenuBtn && mobileNavMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileNavMenu.classList.toggle("hidden");
    });

    mobileNavMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileNavMenu.classList.add("hidden");
      });
    });
  }

  // ==========================================
  // Initialization Sequence
  // ==========================================
  initBangladeshMap();
  initDepartmentExplorer();
  initCGPACalculator();
  initNoticeBoard();
  initMobileAppCTA();
  lucide.createIcons();

  console.log("✅ DiplomaMate BTEB Portal initialized with clean educational interface.");
});
