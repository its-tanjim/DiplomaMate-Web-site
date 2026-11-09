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
           <p class="mb-3 text-slate-700">CGPA computations and portal entries are performed completely client-side in your web browser.</p>`
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
      closePrintableResultModal();
      closePrintableAttendanceModal();
    }
  });

  // ==========================================
  // 6. BTEB Result Section / Portal Controller
  // ==========================================
  let currentResultData = null;

  function closePrintableResultModal() {
    const modal = document.getElementById("printable-result-modal");
    const backdrop = document.getElementById("printable-result-backdrop");
    if (modal) modal.classList.add("hidden");
    if (backdrop) backdrop.classList.add("hidden");
  }

  function openPrintableResultModal() {
    const modal = document.getElementById("printable-result-modal");
    const backdrop = document.getElementById("printable-result-backdrop");
    if (modal) modal.classList.remove("hidden");
    if (backdrop) backdrop.classList.remove("hidden");
    if (typeof lucide !== "undefined") lucide.createIcons();
  }

  function initBTEBResultPortal() {
    const form = document.getElementById("result-search-form");
    const deptSelect = document.getElementById("result-dept-select");
    const semSelect = document.getElementById("result-sem-select");
    const rollInput = document.getElementById("result-roll-input");
    const regInput = document.getElementById("result-reg-input");
    const yearSelect = document.getElementById("result-year-select");
    const clearBtn = document.getElementById("result-clear-btn");
    const sampleBtns = document.querySelectorAll(".sample-roll-btn");

    if (!form || !deptSelect) return;

    // Populate department options from TECHNOLOGIES_DATA
    if (typeof TECHNOLOGIES_DATA !== "undefined" && Array.isArray(TECHNOLOGIES_DATA)) {
      deptSelect.innerHTML = TECHNOLOGIES_DATA.map(tech => 
        `<option value="${tech.id}" ${tech.id === "cst" ? "selected" : ""}>${tech.name} (${tech.code})</option>`
      ).join("");
    }

    // Quick Sample Demo Buttons
    sampleBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const roll = btn.dataset.roll;
        const dept = btn.dataset.dept;
        const sem = btn.dataset.sem;
        const reg = btn.dataset.reg;

        // Set radio for regulation
        const regRadios = document.querySelectorAll('input[name="res-regulation"]');
        regRadios.forEach(r => {
          r.checked = (r.value === reg);
        });

        if (deptSelect) deptSelect.value = dept;
        if (semSelect) semSelect.value = sem;
        if (rollInput) rollInput.value = roll;
        if (regInput) regInput.value = "1502" + roll;
        if (yearSelect) yearSelect.value = "2024";

        executeResultSearch(roll, "1502" + roll, dept, sem, reg, "2024");
      });
    });

    // Form Submit
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const roll = rollInput ? rollInput.value.trim() : "";
      const regNo = regInput && regInput.value.trim() ? regInput.value.trim() : ("1502" + roll);
      const dept = deptSelect ? deptSelect.value : "cst";
      const sem = semSelect ? semSelect.value : "4";
      const year = yearSelect ? yearSelect.value : "2024";
      const regRadio = document.querySelector('input[name="res-regulation"]:checked');
      const reg = regRadio ? regRadio.value : "2022";

      if (!roll || roll.length < 4) {
        showToast("Please enter a valid 6-digit BTEB Roll number.", "error");
        if (rollInput) rollInput.focus();
        return;
      }

      executeResultSearch(roll, regNo, dept, sem, reg, year);
    });

    // Clear Button
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        form.reset();
        const initialCard = document.getElementById("result-initial-card");
        const loadingCard = document.getElementById("result-loading-card");
        const outputCard = document.getElementById("result-output-card");
        if (initialCard) initialCard.classList.remove("hidden");
        if (loadingCard) loadingCard.classList.add("hidden");
        if (outputCard) outputCard.classList.add("hidden");
        currentResultData = null;
      });
    }

    // New Search Button on Output Card
    const newSearchBtn = document.getElementById("res-new-search-btn");
    if (newSearchBtn) {
      newSearchBtn.addEventListener("click", () => {
        const initialCard = document.getElementById("result-initial-card");
        const outputCard = document.getElementById("result-output-card");
        if (initialCard) initialCard.classList.remove("hidden");
        if (outputCard) outputCard.classList.add("hidden");
        if (rollInput) {
          rollInput.focus();
          rollInput.select();
        }
      });
    }

    // Print Marksheet Action
    const printMarksheetBtn = document.getElementById("res-print-marksheet-btn");
    if (printMarksheetBtn) {
      printMarksheetBtn.addEventListener("click", () => {
        if (!currentResultData) return;
        populatePrintableResult(currentResultData);
        openPrintableResultModal();
      });
    }

    const printCloseBtn = document.getElementById("printable-result-close-btn");
    const printBackdrop = document.getElementById("printable-result-backdrop");
    if (printCloseBtn) printCloseBtn.addEventListener("click", closePrintableResultModal);
    if (printBackdrop) printBackdrop.addEventListener("click", closePrintableResultModal);

    const printActionBtn = document.getElementById("print-result-action-btn");
    if (printActionBtn) {
      printActionBtn.addEventListener("click", () => {
        window.print();
      });
    }
  }

  function executeResultSearch(roll, regNo, deptId, semester, regulation, year) {
    const initialCard = document.getElementById("result-initial-card");
    const loadingCard = document.getElementById("result-loading-card");
    const outputCard = document.getElementById("result-output-card");

    if (initialCard) initialCard.classList.add("hidden");
    if (outputCard) outputCard.classList.add("hidden");
    if (loadingCard) loadingCard.classList.remove("hidden");

    setTimeout(() => {
      // Normalize department alias
      const DEPT_MAP = {
        civil: "ct",
        electrical: "et",
        mechanical: "mt",
        power: "pt",
        computer: "cst",
        food: "ft",
        telecom: "tct",
        electronics: "ent",
        auto: "at",
        automobile: "at",
        chemical: "cht",
        architecture: "arch"
      };
      const normalizedDept = DEPT_MAP[String(deptId).toLowerCase()] || deptId;

      // Fetch official subjects from syllabusData
      let subjects = [];
      if (typeof getDepartmentSyllabus === "function") {
        subjects = getDepartmentSyllabus(regulation, normalizedDept, parseInt(semester));
      }

      // Robust fallback if empty
      if (!subjects || subjects.length === 0) {
        subjects = [
          { code: "28541", title: "Core Technology Practice & Engineering", credit: 4, fullMarks: 200 },
          { code: "28542", title: "Microprocessor & Embedded Systems", credit: 3, fullMarks: 150 },
          { code: "28543", title: "Database Systems & Administration", credit: 3, fullMarks: 150 },
          { code: "28544", title: "Applied Mathematics & Statistics", credit: 3, fullMarks: 150 },
          { code: "25841", title: "Business Communication & Ethics", credit: 2, fullMarks: 100 },
          { code: "28545", title: "Hardware Interfacing Project", credit: 2, fullMarks: 100 }
        ];
      }

      // Authentic Student Names Pool
      const STUDENT_NAMES = [
        "Md. Tanvir Hossain", "Sadia Sultana", "Md. Rakibul Hasan",
        "Fatema Tuz Zohra", "Shakil Ahmed", "Nusrat Jahan",
        "Arifur Rahman", "Mehedi Hasan", "Farhana Akter",
        "Sabbir Hossain", "Shahriar Kabir", "Jannatul Ferdous",
        "Md. Nayeem Islam", "Tasnim Ara", "Ashikur Rahman"
      ];

      // Deterministic roll hash for reproducible results
      let rollHash = 0;
      for (let i = 0; i < roll.length; i++) {
        rollHash = (rollHash * 31 + roll.charCodeAt(i)) % 100000;
      }
      const studentName = STUDENT_NAMES[rollHash % STUDENT_NAMES.length];

      // Find institute
      let institute = { name: "Dhaka Polytechnic Institute", code: "50117" };
      if (typeof POLYTECHNIC_DATA !== "undefined" && POLYTECHNIC_DATA.length > 0) {
        institute = POLYTECHNIC_DATA[rollHash % POLYTECHNIC_DATA.length];
      }

      // Find Technology Info
      let techInfo = { name: "Computer Science & Technology", code: "685" };
      if (typeof TECHNOLOGIES_DATA !== "undefined") {
        const found = TECHNOLOGIES_DATA.find(t => t.id === normalizedDept);
        if (found) techInfo = found;
      }

      // Compute Course Marks
      let totalEarnedCredits = 0;
      let totalFullMarks = 0;
      let totalObtainedMarks = 0;
      let weightedPointsSum = 0;

      const processedCourses = subjects.map((subj, idx) => {
        const credit = subj.credit || 3;
        const fullMarks = subj.fullMarks || (credit * 50);
        const codeNum = parseInt(String(subj.code).replace(/\D/g, "")) || (idx + 100);

        // Deterministic mark ratio between 76% and 93%
        const scoreRatio = 0.76 + (((rollHash + (codeNum * 7) + idx * 11) % 18) / 100);
        const obtained = Math.round(fullMarks * scoreRatio);

        // Splits for TC, TF, PC, PF
        const tc = Math.round(fullMarks * 0.20 * scoreRatio);
        const tf = Math.round(fullMarks * 0.40 * scoreRatio);
        const pc = Math.round(fullMarks * 0.20 * scoreRatio);
        const pf = obtained - (tc + tf + pc);

        const pct = (obtained / fullMarks) * 100;
        let gp = 4.00;
        let letter = "A+";

        if (pct >= 80)      { gp = 4.00; letter = "A+"; }
        else if (pct >= 75) { gp = 3.75; letter = "A"; }
        else if (pct >= 70) { gp = 3.50; letter = "A-"; }
        else if (pct >= 65) { gp = 3.25; letter = "B+"; }
        else if (pct >= 60) { gp = 3.00; letter = "B"; }
        else if (pct >= 55) { gp = 2.75; letter = "B-"; }
        else if (pct >= 50) { gp = 2.50; letter = "C+"; }
        else if (pct >= 45) { gp = 2.25; letter = "C"; }
        else if (pct >= 40) { gp = 2.00; letter = "D"; }
        else                { gp = 0.00; letter = "F"; }

        totalEarnedCredits += credit;
        totalFullMarks += fullMarks;
        totalObtainedMarks += obtained;
        weightedPointsSum += (gp * credit);

        return {
          code: subj.code,
          title: subj.title,
          credit: credit,
          fullMarks: fullMarks,
          tc: tc,
          tf: tf,
          pc: pc,
          pf: pf,
          obtained: obtained,
          gp: gp.toFixed(2),
          letter: letter
        };
      });

      const gpa = (weightedPointsSum / totalEarnedCredits).toFixed(2);
      const overallPct = ((totalObtainedMarks / totalFullMarks) * 100).toFixed(1);

      let overallLetter = "A+ (Outstanding)";
      let gradePillClass = "grade-pill-aplus";
      if (gpa >= 4.00) {
        overallLetter = "A+ (Outstanding)";
        gradePillClass = "grade-pill-aplus";
      } else if (gpa >= 3.75) {
        overallLetter = "A (Excellent)";
        gradePillClass = "grade-pill-a";
      } else if (gpa >= 3.50) {
        overallLetter = "A- (Very Good)";
        gradePillClass = "grade-pill-aminus";
      } else if (gpa >= 3.25) {
        overallLetter = "B+ (Good)";
        gradePillClass = "grade-pill-bplus";
      } else if (gpa >= 3.00) {
        overallLetter = "B (Satisfactory)";
        gradePillClass = "grade-pill-b";
      } else {
        overallLetter = "C+ (Pass)";
        gradePillClass = "grade-pill-cplus";
      }

      const resultData = {
        roll: roll,
        regNo: regNo,
        studentName: studentName,
        instituteName: institute.name,
        instituteCode: institute.code,
        techName: techInfo.name,
        techCode: techInfo.code,
        semester: semester,
        regulation: regulation,
        year: year,
        session: (parseInt(year) - 1) + "-" + String(year).slice(2),
        courses: processedCourses,
        totalCredits: totalEarnedCredits,
        totalFullMarks: totalFullMarks,
        totalObtainedMarks: totalObtainedMarks,
        overallPct: overallPct,
        gpa: gpa,
        overallLetter: overallLetter,
        gradePillClass: gradePillClass,
        publishedDate: "November 2026"
      };

      currentResultData = resultData;

      // Update Screen Output Card
      const regHeaderBadge = document.getElementById("res-badge-reg-header");
      if (regHeaderBadge) regHeaderBadge.textContent = `Curriculum ${regulation}`;

      const nameEl = document.getElementById("res-student-name");
      if (nameEl) nameEl.textContent = studentName;

      const rollDisp = document.getElementById("res-roll-display");
      if (rollDisp) rollDisp.textContent = roll;

      const regDisp = document.getElementById("res-reg-display");
      if (regDisp) regDisp.textContent = `Reg: ${regNo}`;

      const techDisp = document.getElementById("res-technology-name");
      if (techDisp) techDisp.textContent = techInfo.name;

      const techCodeDisp = document.getElementById("res-technology-code");
      if (techCodeDisp) techCodeDisp.textContent = `Code: ${techInfo.code}`;

      const semDisp = document.getElementById("res-semester-name");
      if (semDisp) semDisp.textContent = `${semester}th Semester Examination`;

      const sessionDisp = document.getElementById("res-session-display");
      if (sessionDisp) sessionDisp.textContent = `Session: ${resultData.session}`;

      const instDisp = document.getElementById("res-institute-name");
      if (instDisp) instDisp.textContent = institute.name;

      const instCodeDisp = document.getElementById("res-institute-code");
      if (instCodeDisp) instCodeDisp.textContent = institute.code;

      const gpaEl = document.getElementById("res-gpa-val");
      if (gpaEl) gpaEl.textContent = gpa;

      const gradeEl = document.getElementById("res-grade-val");
      if (gradeEl) {
        gradeEl.className = `grade-pill ${gradePillClass} text-sm px-3 py-0.5`;
        gradeEl.textContent = overallLetter;
      }

      const obtEl = document.getElementById("res-marks-obtained");
      if (obtEl) obtEl.textContent = totalObtainedMarks;

      const totEl = document.getElementById("res-marks-total");
      if (totEl) totEl.textContent = `/ ${totalFullMarks}`;

      const pctEl = document.getElementById("res-marks-percent");
      if (pctEl) pctEl.textContent = `${overallPct}% Marks`;

      const credEl = document.getElementById("res-credits-val");
      if (credEl) credEl.textContent = totalEarnedCredits;

      // Populate Table Body
      const tbody = document.getElementById("res-table-body");
      if (tbody) {
        tbody.innerHTML = processedCourses.map(c => `
          <tr class="hover:bg-slate-50/80 transition-colors">
            <td class="py-2.5 px-3 font-mono font-bold text-slate-900">${c.code}</td>
            <td class="py-2.5 px-3 font-medium text-slate-800">${c.title}</td>
            <td class="py-2.5 px-2 text-center font-mono">${c.credit}</td>
            <td class="py-2.5 px-2 text-center font-mono">${c.fullMarks}</td>
            <td class="py-2.5 px-2 text-center font-mono text-slate-500">${c.tc}</td>
            <td class="py-2.5 px-2 text-center font-mono text-slate-500">${c.tf}</td>
            <td class="py-2.5 px-2 text-center font-mono text-slate-500">${c.pc}</td>
            <td class="py-2.5 px-2 text-center font-mono text-slate-500">${c.pf}</td>
            <td class="py-2.5 px-2 text-center font-mono font-bold text-slate-900">${c.obtained}</td>
            <td class="py-2.5 px-2 text-center font-mono font-bold text-blue-700">${c.gp}</td>
            <td class="py-2.5 px-3 text-center">
              <span class="grade-pill ${getGradePillClass(c.letter)}">${c.letter}</span>
            </td>
          </tr>
        `).join("");
      }

      // Hide loading, show output
      if (loadingCard) loadingCard.classList.add("hidden");
      if (outputCard) outputCard.classList.remove("hidden");

      if (typeof lucide !== "undefined") lucide.createIcons();
      showToast(`Board result for Roll ${roll} retrieved successfully.`, "success");

      // Smooth scroll output card into view
      outputCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 450);
  }

  function getGradePillClass(letter) {
    switch (letter) {
      case "A+": return "grade-pill-aplus";
      case "A":  return "grade-pill-a";
      case "A-": return "grade-pill-aminus";
      case "B+": return "grade-pill-bplus";
      case "B":  return "grade-pill-b";
      case "B-": return "grade-pill-bminus";
      case "C+": return "grade-pill-cplus";
      case "C":  return "grade-pill-c";
      case "D":  return "grade-pill-d";
      default:   return "grade-pill-f";
    }
  }

  function populatePrintableResult(data) {
    document.getElementById("print-res-curriculum").textContent = `Curriculum ${data.regulation}`;
    document.getElementById("print-res-name").textContent = data.studentName;
    document.getElementById("print-res-roll").textContent = data.roll;
    document.getElementById("print-res-reg").textContent = data.regNo;
    document.getElementById("print-res-institute").textContent = data.instituteName;
    document.getElementById("print-res-inst-code").textContent = data.instituteCode;
    document.getElementById("print-res-tech").textContent = data.techName;
    document.getElementById("print-res-tech-code").textContent = data.techCode;
    document.getElementById("print-res-semester").textContent = `${data.semester}th Semester`;
    document.getElementById("print-res-session").textContent = data.session;
    document.getElementById("print-res-full-marks").textContent = data.totalFullMarks;
    document.getElementById("print-res-obtained-marks").textContent = data.totalObtainedMarks;
    document.getElementById("print-res-pct").textContent = `${data.overallPct}%`;
    document.getElementById("print-res-credits").textContent = data.totalCredits;
    document.getElementById("print-res-gpa").textContent = data.gpa;
    document.getElementById("print-res-grade").textContent = data.overallLetter.split(" ")[0];
    document.getElementById("print-res-status").textContent = "PASSED";

    const tbody = document.getElementById("print-res-tbody");
    if (tbody) {
      tbody.innerHTML = data.courses.map(c => `
        <tr class="text-slate-800">
          <td class="p-1.5 border-r border-slate-300 font-mono font-bold">${c.code}</td>
          <td class="p-1.5 border-r border-slate-300">${c.title}</td>
          <td class="p-1.5 border-r border-slate-300 text-center font-mono">${c.credit}</td>
          <td class="p-1.5 border-r border-slate-300 text-center font-mono">${c.fullMarks}</td>
          <td class="p-1.5 border-r border-slate-300 text-center font-mono">${c.tc}</td>
          <td class="p-1.5 border-r border-slate-300 text-center font-mono">${c.tf}</td>
          <td class="p-1.5 border-r border-slate-300 text-center font-mono">${c.pc}</td>
          <td class="p-1.5 border-r border-slate-300 text-center font-mono">${c.pf}</td>
          <td class="p-1.5 border-r border-slate-300 text-center font-mono font-bold">${c.obtained}</td>
          <td class="p-1.5 border-r border-slate-300 text-center font-mono font-bold text-blue-900">${c.gp}</td>
          <td class="p-1.5 text-center font-bold">${c.letter}</td>
        </tr>
      `).join("");
    }
  }

  // ==========================================
  // 7. Teacher Attendance Portal Controller
  // ==========================================
  const ATTENDANCE_ROSTER_DATA = [
    { roll: "612401", name: "Md. Tanvir Hossain", reg: "1502120001", status: "P", remarks: "" },
    { roll: "612402", name: "Sadia Sultana", reg: "1502120002", status: "P", remarks: "" },
    { roll: "612403", name: "Sakib Ahmed", reg: "1502120003", status: "P", remarks: "" },
    { roll: "612404", name: "Fatema Tuz Zohra", reg: "1502120004", status: "P", remarks: "" },
    { roll: "612405", name: "Arifur Rahman", reg: "1502120005", status: "A", remarks: "Sick leave notice" },
    { roll: "612406", name: "Mehedi Hasan", reg: "1502120006", status: "P", remarks: "" },
    { roll: "612407", name: "Nusrat Jahan", reg: "1502120007", status: "P", remarks: "" },
    { roll: "612408", name: "Shahriar Kabir", reg: "1502120008", status: "P", remarks: "" },
    { roll: "612409", name: "Jannatul Ferdous", reg: "1502120009", status: "P", remarks: "" },
    { roll: "612410", name: "Md. Nayeem Islam", reg: "1502120010", status: "P", remarks: "" },
    { roll: "612411", name: "Rashedul Islam", reg: "1502120011", status: "L", remarks: "Arrived 15 min late" },
    { roll: "612412", name: "Farzana Akter", reg: "1502120012", status: "P", remarks: "" },
    { roll: "612413", name: "Ashikur Rahman", reg: "1502120013", status: "P", remarks: "" },
    { roll: "612414", name: "Sumaiya Islam", reg: "1502120014", status: "P", remarks: "" },
    { roll: "612415", name: "Mahmudul Hasan", reg: "1502120015", status: "P", remarks: "" },
    { roll: "612416", name: "Tasnim Ara", reg: "1502120016", status: "P", remarks: "" },
    { roll: "612417", name: "Sabbir Hossain", reg: "1502120017", status: "P", remarks: "" },
    { roll: "612418", name: "Israt Jahan", reg: "1502120018", status: "A", remarks: "Hostel approval" },
    { roll: "612419", name: "Al Amin", reg: "1502120019", status: "P", remarks: "" },
    { roll: "612420", name: "Fahim Faisal", reg: "1502120020", status: "P", remarks: "" },
    { roll: "612421", name: "Afroza Khatun", reg: "1502120021", status: "P", remarks: "" },
    { roll: "612422", name: "Zahid Hasan", reg: "1502120022", status: "P", remarks: "" },
    { roll: "612423", name: "Rokeya Begum", reg: "1502120023", status: "P", remarks: "" },
    { roll: "612424", name: "Kazi Nazmul", reg: "1502120024", status: "P", remarks: "" },
    { roll: "612425", name: "Shafiul Alam", reg: "1502120025", status: "P", remarks: "" }
  ];

  let currentTeacherPunchedIn = false;

  function closePrintableAttendanceModal() {
    const modal = document.getElementById("printable-attendance-modal");
    const backdrop = document.getElementById("printable-attendance-backdrop");
    if (modal) modal.classList.add("hidden");
    if (backdrop) backdrop.classList.add("hidden");
  }

  function openPrintableAttendanceModal() {
    const modal = document.getElementById("printable-attendance-modal");
    const backdrop = document.getElementById("printable-attendance-backdrop");
    if (modal) modal.classList.remove("hidden");
    if (backdrop) backdrop.classList.remove("hidden");
    if (typeof lucide !== "undefined") lucide.createIcons();
  }

  function initTeacherAttendancePortal() {
    const clockEl = document.getElementById("attendance-live-clock");
    const punchBtn = document.getElementById("teacher-punch-btn");
    const punchStatusText = document.getElementById("teacher-punch-status-text");
    const punchLoggedTime = document.getElementById("teacher-punch-logged-time");

    const dateInput = document.getElementById("att-date-input");
    const deptSelect = document.getElementById("att-dept-select");
    const semSelect = document.getElementById("att-sem-select");
    const shiftSelect = document.getElementById("att-shift-select");
    const secSelect = document.getElementById("att-section-select");
    const subjectSelect = document.getElementById("att-subject-select");

    const bulkPresentBtn = document.getElementById("att-bulk-all-present");
    const bulkAbsentBtn = document.getElementById("att-bulk-all-absent");
    const bulkSampleBtn = document.getElementById("att-bulk-sample");
    const saveSessionBtn = document.getElementById("att-submit-save-btn");
    const exportCsvBtn = document.getElementById("att-export-csv-btn");
    const printRosterBtn = document.getElementById("att-print-roster-btn");
    const clearHistoryBtn = document.getElementById("att-clear-history-btn");

    if (!deptSelect || !subjectSelect) return;

    // 1. Digital Clock
    function updateClock() {
      if (clockEl) {
        const now = new Date();
        clockEl.textContent = now.toLocaleTimeString("en-US", { hour12: true });
      }
    }
    updateClock();
    setInterval(updateClock, 1000);

    // 2. Teacher Punch In State
    const savedPunch = localStorage.getItem("bteb_teacher_punch_status");
    if (savedPunch) {
      try {
        const punchObj = JSON.parse(savedPunch);
        if (punchObj.punchedIn) {
          currentTeacherPunchedIn = true;
          if (punchStatusText) punchStatusText.textContent = "Faculty Punched In";
          if (punchLoggedTime) punchLoggedTime.textContent = `Active: Since ${punchObj.time}`;
          if (punchBtn) {
            punchBtn.classList.remove("bg-emerald-600", "hover:bg-emerald-700");
            punchBtn.classList.add("bg-blue-600", "hover:bg-blue-700");
          }
        }
      } catch (err) {}
    }

    if (punchBtn) {
      punchBtn.addEventListener("click", () => {
        if (!currentTeacherPunchedIn) {
          currentTeacherPunchedIn = true;
          const timeStr = new Date().toLocaleTimeString("en-US", { hour12: true });
          localStorage.setItem("bteb_teacher_punch_status", JSON.stringify({ punchedIn: true, time: timeStr }));
          if (punchStatusText) punchStatusText.textContent = "Faculty Punched In";
          if (punchLoggedTime) punchLoggedTime.textContent = `Active: Since ${timeStr}`;
          punchBtn.classList.remove("bg-emerald-600", "hover:bg-emerald-700");
          punchBtn.classList.add("bg-blue-600", "hover:bg-blue-700");
          showToast(`Faculty punch-in recorded at ${timeStr}.`, "success");
        } else {
          currentTeacherPunchedIn = false;
          localStorage.removeItem("bteb_teacher_punch_status");
          if (punchStatusText) punchStatusText.textContent = "Faculty Punch In";
          if (punchLoggedTime) punchLoggedTime.textContent = "Status: Not Punched In";
          punchBtn.classList.remove("bg-blue-600", "hover:bg-blue-700");
          punchBtn.classList.add("bg-emerald-600", "hover:bg-emerald-700");
          showToast("Faculty signed out for the day.", "info");
        }
      });
    }

    // 3. Set Default Date
    if (dateInput) {
      const today = new Date().toISOString().split("T")[0];
      dateInput.value = today;
    }

    // 4. Populate Department Select
    if (typeof TECHNOLOGIES_DATA !== "undefined" && Array.isArray(TECHNOLOGIES_DATA)) {
      deptSelect.innerHTML = TECHNOLOGIES_DATA.map(t =>
        `<option value="${t.id}" ${t.id === "cst" ? "selected" : ""}>${t.name} (${t.code})</option>`
      ).join("");
    }

    // 5. Populate Dynamic Subject Dropdown based on Department & Semester
    function updateSubjectDropdown() {
      const deptId = deptSelect ? deptSelect.value : "cst";
      const sem = semSelect ? parseInt(semSelect.value) : 4;
      let subjects = [];

      if (typeof getDepartmentSyllabus === "function") {
        subjects = getDepartmentSyllabus("2022", deptId, sem);
      }

      if (!subjects || subjects.length === 0) {
        subjects = [
          { code: "28541", title: "Object Oriented Programming (Java/Python)" },
          { code: "28542", title: "Data Structure & Algorithms" },
          { code: "28543", title: "Operating System & System Administration" },
          { code: "28544", title: "Web Development & Database Systems" }
        ];
      }

      subjectSelect.innerHTML = subjects.map(s =>
        `<option value="${s.code} - ${s.title}">${s.code} - ${s.title}</option>`
      ).join("");
    }

    updateSubjectDropdown();

    if (deptSelect) deptSelect.addEventListener("change", updateSubjectDropdown);
    if (semSelect) semSelect.addEventListener("change", updateSubjectDropdown);

    // 6. Render Initial Student Attendance Roster
    renderAttendanceRoster();

    // 7. Bulk Action Buttons
    if (bulkPresentBtn) {
      bulkPresentBtn.addEventListener("click", () => {
        ATTENDANCE_ROSTER_DATA.forEach(s => s.status = "P");
        renderAttendanceRoster();
        showToast("Marked all 25 students as Present.", "success");
      });
    }

    if (bulkAbsentBtn) {
      bulkAbsentBtn.addEventListener("click", () => {
        ATTENDANCE_ROSTER_DATA.forEach(s => s.status = "A");
        renderAttendanceRoster();
        showToast("Marked all 25 students as Absent.", "info");
      });
    }

    if (bulkSampleBtn) {
      bulkSampleBtn.addEventListener("click", () => {
        ATTENDANCE_ROSTER_DATA.forEach((s, idx) => {
          if (idx === 4 || idx === 17) s.status = "A";
          else if (idx === 10) s.status = "L";
          else s.status = "P";
        });
        renderAttendanceRoster();
        showToast("Applied realistic class attendance distribution.", "success");
      });
    }

    // 8. Save Session Button
    if (saveSessionBtn) {
      saveSessionBtn.addEventListener("click", () => {
        const stats = computeAttendanceStats();
        const dateVal = dateInput ? dateInput.value : new Date().toISOString().split("T")[0];
        const shiftVal = shiftSelect ? shiftSelect.value : "1st Shift";
        const deptText = deptSelect ? deptSelect.options[deptSelect.selectedIndex].text : "Computer Science";
        const semVal = semSelect ? semSelect.value : "4";
        const secVal = secSelect ? secSelect.value : "Section A";
        const subjVal = subjectSelect ? subjectSelect.value : "General Subject";

        const sessionRecord = {
          id: Date.now(),
          date: dateVal,
          shift: shiftVal,
          dept: deptText,
          semester: semVal,
          section: secVal,
          subject: subjVal,
          total: stats.total,
          present: stats.present,
          absent: stats.absent,
          late: stats.late,
          rate: stats.presentRate,
          savedAt: new Date().toLocaleTimeString("en-US", { hour12: true })
        };

        saveAttendanceToStorage(sessionRecord);
        renderAttendanceHistory();
        showToast(`Attendance for ${secVal} (${stats.presentRate}% present) saved successfully.`, "success");
      });
    }

    // 9. Export CSV Button
    if (exportCsvBtn) {
      exportCsvBtn.addEventListener("click", () => {
        exportAttendanceCSV();
      });
    }

    // 10. Print Roster Button
    if (printRosterBtn) {
      printRosterBtn.addEventListener("click", () => {
        populatePrintableAttendance();
        openPrintableAttendanceModal();
      });
    }

    const printCloseBtn = document.getElementById("printable-attendance-close-btn");
    const printBackdrop = document.getElementById("printable-attendance-backdrop");
    if (printCloseBtn) printCloseBtn.addEventListener("click", closePrintableAttendanceModal);
    if (printBackdrop) printBackdrop.addEventListener("click", closePrintableAttendanceModal);

    const printActionBtn = document.getElementById("print-attendance-action-btn");
    if (printActionBtn) {
      printActionBtn.addEventListener("click", () => {
        window.print();
      });
    }

    // 11. Clear History Button
    if (clearHistoryBtn) {
      clearHistoryBtn.addEventListener("click", () => {
        localStorage.removeItem("bteb_attendance_history");
        renderAttendanceHistory();
        showToast("Attendance history cleared.", "info");
      });
    }

    // Load initial history
    renderAttendanceHistory();
  }

  function computeAttendanceStats() {
    let present = 0;
    let absent = 0;
    let late = 0;
    const total = ATTENDANCE_ROSTER_DATA.length;

    ATTENDANCE_ROSTER_DATA.forEach(s => {
      if (s.status === "P") present++;
      else if (s.status === "A") absent++;
      else if (s.status === "L") late++;
    });

    const presentRate = ((present / total) * 100).toFixed(1);
    const absentRate = ((absent / total) * 100).toFixed(1);
    const lateRate = ((late / total) * 100).toFixed(1);

    return { total, present, absent, late, presentRate, absentRate, lateRate };
  }

  function updateAttendanceKPIDisplay() {
    const stats = computeAttendanceStats();

    const totEl = document.getElementById("att-kpi-total");
    const presEl = document.getElementById("att-kpi-present");
    const presPctEl = document.getElementById("att-kpi-present-pct");
    const absEl = document.getElementById("att-kpi-absent");
    const absPctEl = document.getElementById("att-kpi-absent-pct");
    const lateEl = document.getElementById("att-kpi-late");
    const latePctEl = document.getElementById("att-kpi-late-pct");
    const quorumEl = document.getElementById("att-kpi-quorum");

    if (totEl) totEl.textContent = stats.total;
    if (presEl) presEl.textContent = stats.present;
    if (presPctEl) presPctEl.textContent = `${stats.presentRate}% Rate`;
    if (absEl) absEl.textContent = stats.absent;
    if (absPctEl) absPctEl.textContent = `${stats.absentRate}% Rate`;
    if (lateEl) lateEl.textContent = stats.late;
    if (latePctEl) latePctEl.textContent = `${stats.lateRate}% Rate`;

    if (quorumEl) {
      if (parseFloat(stats.presentRate) >= 75.0) {
        quorumEl.textContent = "Quorum Met";
        quorumEl.className = "text-2xl font-black font-mono text-emerald-700 mt-0.5 block";
      } else {
        quorumEl.textContent = "Below 75%";
        quorumEl.className = "text-2xl font-black font-mono text-rose-700 mt-0.5 block";
      }
    }
  }

  function renderAttendanceRoster() {
    const tbody = document.getElementById("att-roster-tbody");
    if (!tbody) return;

    tbody.innerHTML = ATTENDANCE_ROSTER_DATA.map((student, idx) => `
      <tr class="hover:bg-slate-50/70 transition-colors">
        <td class="py-2.5 px-3 text-center font-mono text-slate-400">${idx + 1}</td>
        <td class="py-2.5 px-3 font-mono font-bold text-slate-800">${student.roll}</td>
        <td class="py-2.5 px-3 font-medium text-slate-900">${student.name}</td>
        <td class="py-2.5 px-3 font-mono text-slate-500">${student.reg}</td>
        <td class="py-2.5 px-3 text-center">
          <div class="inline-flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
            <button type="button" class="att-toggle-btn w-7 h-7 rounded text-xs flex items-center justify-center font-bold ${student.status === 'P' ? 'active-present' : 'text-slate-600 hover:bg-slate-200'}" data-index="${idx}" data-status="P" title="Present">P</button>
            <button type="button" class="att-toggle-btn w-7 h-7 rounded text-xs flex items-center justify-center font-bold ${student.status === 'A' ? 'active-absent' : 'text-slate-600 hover:bg-slate-200'}" data-index="${idx}" data-status="A" title="Absent">A</button>
            <button type="button" class="att-toggle-btn w-7 h-7 rounded text-xs flex items-center justify-center font-bold ${student.status === 'L' ? 'active-late' : 'text-slate-600 hover:bg-slate-200'}" data-index="${idx}" data-status="L" title="Late">L</button>
          </div>
        </td>
        <td class="py-2.5 px-3">
          <input type="text" class="w-full px-2.5 py-1 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-700 placeholder:text-slate-400 focus:bg-white focus:ring-1 focus:ring-blue-500 att-remark-input" data-index="${idx}" value="${student.remarks}" placeholder="Add note...">
        </td>
      </tr>
    `).join("");

    // Attach Toggle Listeners
    tbody.querySelectorAll(".att-toggle-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const studentIdx = parseInt(btn.dataset.index);
        const status = btn.dataset.status;
        ATTENDANCE_ROSTER_DATA[studentIdx].status = status;
        renderAttendanceRoster();
      });
    });

    // Attach Remark Listeners
    tbody.querySelectorAll(".att-remark-input").forEach(inp => {
      inp.addEventListener("input", () => {
        const studentIdx = parseInt(inp.dataset.index);
        ATTENDANCE_ROSTER_DATA[studentIdx].remarks = inp.value;
      });
    });

    updateAttendanceKPIDisplay();
  }

  function saveAttendanceToStorage(record) {
    let history = [];
    try {
      const stored = localStorage.getItem("bteb_attendance_history");
      if (stored) history = JSON.parse(stored);
    } catch (e) {}

    history.unshift(record);
    if (history.length > 10) history = history.slice(0, 10);
    localStorage.setItem("bteb_attendance_history", JSON.stringify(history));
  }

  function renderAttendanceHistory() {
    const container = document.getElementById("att-history-container");
    if (!container) return;

    let history = [];
    try {
      const stored = localStorage.getItem("bteb_attendance_history");
      if (stored) history = JSON.parse(stored);
    } catch (e) {}

    // Default sample entries if none stored
    if (history.length === 0) {
      history = [
        {
          id: 1,
          date: "2026-11-09",
          shift: "1st Shift (Morning)",
          dept: "Computer Science & Technology (685)",
          semester: "4",
          section: "Section A",
          subject: "28541 - Object Oriented Programming",
          total: 25,
          present: 23,
          absent: 2,
          late: 0,
          rate: "92.0",
          savedAt: "10:30 AM"
        },
        {
          id: 2,
          date: "2026-11-08",
          shift: "1st Shift (Morning)",
          dept: "Computer Science & Technology (685)",
          semester: "4",
          section: "Section B",
          subject: "28542 - Data Structure & Algorithms",
          total: 25,
          present: 21,
          absent: 3,
          late: 1,
          rate: "84.0",
          savedAt: "11:45 AM"
        }
      ];
    }

    container.innerHTML = history.map(item => `
      <div class="p-3 rounded-xl border border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        <div>
          <div class="flex items-center gap-2">
            <span class="font-bold text-slate-800">${item.subject}</span>
            <span class="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-mono text-[10px] font-bold">${item.section}</span>
            <span class="px-2 py-0.5 rounded bg-slate-200 text-slate-700 text-[10px]">${item.shift}</span>
          </div>
          <div class="text-slate-500 mt-1 flex items-center gap-2 text-[11px]">
            <span>Date: <strong>${item.date}</strong></span>
            <span>&bull;</span>
            <span>Present: <strong class="text-emerald-700">${item.present}/${item.total}</strong> (${item.rate}%)</span>
            <span>&bull;</span>
            <span class="text-slate-400">Saved: ${item.savedAt}</span>
          </div>
        </div>
        <div class="flex items-center gap-2 self-end sm:self-center shrink-0">
          <button type="button" class="btn-history-export px-2.5 py-1 rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold text-[11px] transition-colors" data-id="${item.id}">
            Export CSV
          </button>
        </div>
      </div>
    `).join("");

    container.querySelectorAll(".btn-history-export").forEach(btn => {
      btn.addEventListener("click", () => {
        exportAttendanceCSV();
      });
    });
  }

  function exportAttendanceCSV() {
    const dateVal = document.getElementById("att-date-input")?.value || "2026-11-10";
    const shiftVal = document.getElementById("att-shift-select")?.value || "1st Shift";
    const deptText = document.getElementById("att-dept-select")?.options[document.getElementById("att-dept-select")?.selectedIndex]?.text || "Computer Science";
    const semVal = document.getElementById("att-sem-select")?.value || "4";
    const secVal = document.getElementById("att-section-select")?.value || "Section A";
    const subjVal = document.getElementById("att-subject-select")?.value || "Subject";
    const stats = computeAttendanceStats();

    let csvContent = "BANGLADESH TECHNICAL EDUCATION BOARD - CLASS ATTENDANCE REPORT\r\n";
    csvContent += `"Polytechnic:","Dhaka Polytechnic Institute"\r\n`;
    csvContent += `"Department:","${deptText}"\r\n`;
    csvContent += `"Semester:","${semVal}th Semester"\r\n`;
    csvContent += `"Section:","${secVal}"\r\n`;
    csvContent += `"Shift:","${shiftVal}"\r\n`;
    csvContent += `"Subject:","${subjVal}"\r\n`;
    csvContent += `"Session Date:","${dateVal}"\r\n`;
    csvContent += `"Faculty:","Engr. Md. Kamrul Islam (Senior Instructor)"\r\n`;
    csvContent += `\r\n`;
    csvContent += `"SL","Board Roll","Student Full Name","Registration No","Attendance Status","Faculty Remarks"\r\n`;

    ATTENDANCE_ROSTER_DATA.forEach((s, idx) => {
      const statusText = s.status === "P" ? "Present" : (s.status === "A" ? "Absent" : "Late");
      csvContent += `${idx + 1},"${s.roll}","${s.name}","${s.reg}","${statusText}","${s.remarks || ''}"\r\n`;
    });

    csvContent += `\r\n`;
    csvContent += `"SUMMARY","Total Enrolled: ${stats.total}","Present: ${stats.present}","Absent: ${stats.absent}","Late: ${stats.late}","Presence Rate: ${stats.presentRate}%"\r\n`;

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    const sanitizedDept = deptText.replace(/[^a-zA-Z0-9]/g, "_").slice(0, 15);
    link.setAttribute("href", url);
    link.setAttribute("download", `Attendance_${sanitizedDept}_Sem${semVal}_${dateVal}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast("Attendance CSV report exported successfully.", "success");
  }

  function populatePrintableAttendance() {
    const dateVal = document.getElementById("att-date-input")?.value || "2026-11-10";
    const shiftVal = document.getElementById("att-shift-select")?.value || "1st Shift (Morning)";
    const deptText = document.getElementById("att-dept-select")?.options[document.getElementById("att-dept-select")?.selectedIndex]?.text || "Computer Science & Technology";
    const semVal = document.getElementById("att-sem-select")?.value || "4";
    const secVal = document.getElementById("att-section-select")?.value || "Section A";
    const subjVal = document.getElementById("att-subject-select")?.value || "28541 - Object Oriented Programming";
    const stats = computeAttendanceStats();

    document.getElementById("print-att-dept").textContent = deptText;
    document.getElementById("print-att-sem-sec").textContent = `${semVal}th Semester • ${secVal}`;
    document.getElementById("print-att-shift").textContent = shiftVal;
    document.getElementById("print-att-subject").textContent = subjVal;
    document.getElementById("print-att-date").textContent = dateVal;
    document.getElementById("print-att-total").textContent = stats.total;
    document.getElementById("print-att-present").textContent = stats.present;
    document.getElementById("print-att-absent").textContent = stats.absent;
    document.getElementById("print-att-late").textContent = stats.late;
    document.getElementById("print-att-rate").textContent = `${stats.presentRate}%`;

    const tbody = document.getElementById("print-att-tbody");
    if (tbody) {
      tbody.innerHTML = ATTENDANCE_ROSTER_DATA.map((s, idx) => {
        const statusText = s.status === "P" ? "Present" : (s.status === "A" ? "Absent" : "Late");
        const statusClass = s.status === "P" ? "text-emerald-700 font-bold" : (s.status === "A" ? "text-rose-700 font-bold" : "text-amber-700 font-bold");
        return `
          <tr class="text-slate-800">
            <td class="p-1.5 border-r border-slate-300 text-center font-mono">${idx + 1}</td>
            <td class="p-1.5 border-r border-slate-300 font-mono font-bold">${s.roll}</td>
            <td class="p-1.5 border-r border-slate-300 font-medium">${s.name}</td>
            <td class="p-1.5 border-r border-slate-300 font-mono text-slate-600">${s.reg}</td>
            <td class="p-1.5 border-r border-slate-300 text-center ${statusClass}">${statusText}</td>
            <td class="p-1.5 border-r border-slate-300 text-center font-mono text-[10px] text-slate-400">${s.status === 'P' ? '✓ Signed' : '-'}</td>
            <td class="p-1.5 text-slate-600">${s.remarks || '-'}</td>
          </tr>
        `;
      }).join("");
    }
  }

  // ==========================================
  // 8. Toast Notification Helper
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
  // 9. Smooth Scroll & Mobile Navigation
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
  initBTEBResultPortal();
  initTeacherAttendancePortal();
  initMobileAppCTA();
  lucide.createIcons();

  console.log("✅ DiplomaMate BTEB Portal initialized with clean educational interface.");
});
