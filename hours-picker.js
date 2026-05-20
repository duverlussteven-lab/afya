// ═══════════════════════════════════════════════════════════════
// HOURS-PICKER.JS — Composant horaires d'ouverture pour AFYA
// Réutilisable dans admin-restaurants.html et admin-activities.html
// Format JSONB : { "monday": [{"open":"12:00","close":"14:30"},...], ... }
// ═══════════════════════════════════════════════════════════════

(function() {
  'use strict';

  const DAYS = [
    { key: 'monday', label_en: 'Monday', label_fr: 'Lundi' },
    { key: 'tuesday', label_en: 'Tuesday', label_fr: 'Mardi' },
    { key: 'wednesday', label_en: 'Wednesday', label_fr: 'Mercredi' },
    { key: 'thursday', label_en: 'Thursday', label_fr: 'Jeudi' },
    { key: 'friday', label_en: 'Friday', label_fr: 'Vendredi' },
    { key: 'saturday', label_en: 'Saturday', label_fr: 'Samedi' },
    { key: 'sunday', label_en: 'Sunday', label_fr: 'Dimanche' }
  ];

  // Génère les heures avec granularité 15min
  function generateTimeOptions() {
    const options = [];
    for (let h = 0; h < 24; h++) {
      for (let m of [0, 15, 30, 45]) {
        const hh = h.toString().padStart(2, '0');
        const mm = m.toString().padStart(2, '0');
        options.push(`${hh}:${mm}`);
      }
    }
    return options;
  }

  const TIME_OPTIONS = generateTimeOptions();

  // ═══════════════════════════════════════════════════════════
  // STYLES (auto-injectés)
  // ═══════════════════════════════════════════════════════════
  
  function injectStyles() {
    if (document.getElementById('afya-hours-picker-style')) return;
    const style = document.createElement('style');
    style.id = 'afya-hours-picker-style';
    style.textContent = `
      .hours-picker { font-family: 'DM Sans', sans-serif; }
      .hours-picker-header {
        display: flex; align-items: center; justify-content: space-between;
        margin-bottom: 14px; padding-bottom: 12px;
        border-bottom: 1px solid rgba(109,143,130,.18);
      }
      .hours-picker-title { font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 700; color: #1D2B3A; letter-spacing: .05em; }
      .hours-picker-actions { display: flex; gap: 8px; flex-wrap: wrap; }
      .hours-btn {
        padding: 6px 12px; border: 1px solid rgba(109,143,130,.3); background: #FFF;
        border-radius: 8px; cursor: pointer; font-family: 'Syne', sans-serif;
        font-size: 10px; font-weight: 700; color: #3B5068;
        letter-spacing: .05em; text-transform: uppercase; transition: all .15s;
      }
      .hours-btn:hover { background: #F6F3EE; border-color: #6D8F82; }
      .hours-btn-primary { background: #6D8F82; color: #FFF; border-color: #6D8F82; }
      .hours-btn-primary:hover { background: #5a7a6e; }
      .hours-btn-danger { color: #C94F3A; }
      .hours-btn-danger:hover { background: #fee; border-color: #C94F3A; }
      
      .hours-day {
        display: flex; align-items: flex-start; gap: 14px;
        padding: 12px 0; border-bottom: 1px solid rgba(0,0,0,.06);
      }
      .hours-day:last-child { border-bottom: none; }
      .hours-day-label {
        flex-shrink: 0; width: 110px; padding-top: 9px;
        font-family: 'Syne', sans-serif; font-size: 12px; font-weight: 600;
        color: #1D2B3A; text-transform: capitalize;
      }
      .hours-day-slots { flex: 1; display: flex; flex-direction: column; gap: 8px; }
      .hours-slot {
        display: flex; align-items: center; gap: 6px;
      }
      .hours-slot select {
        padding: 7px 8px; border: 1px solid rgba(109,143,130,.3);
        border-radius: 6px; font-family: 'DM Sans', sans-serif; font-size: 13px;
        background: #FFF; cursor: pointer; color: #1D2B3A;
      }
      .hours-slot select:focus { outline: 2px solid #6D8F82; outline-offset: 1px; }
      .hours-slot-sep { color: #7A93A8; font-size: 13px; }
      .hours-slot-remove {
        margin-left: 4px; background: transparent; border: none;
        cursor: pointer; padding: 4px 6px; color: #C94F3A; font-size: 16px;
        border-radius: 4px; transition: background .15s;
      }
      .hours-slot-remove:hover { background: #fee; }
      .hours-day-empty {
        font-family: 'DM Sans', sans-serif; font-size: 12px; color: #7A93A8;
        font-style: italic; padding-top: 9px;
      }
      .hours-day-controls { display: flex; gap: 6px; margin-top: 4px; }
      .hours-add-slot {
        background: transparent; border: 1px dashed rgba(109,143,130,.5);
        padding: 6px 12px; border-radius: 6px; cursor: pointer;
        font-family: 'Syne', sans-serif; font-size: 10px; font-weight: 700;
        color: #6D8F82; letter-spacing: .05em; text-transform: uppercase;
        transition: all .15s;
      }
      .hours-add-slot:hover { border-color: #6D8F82; background: rgba(109,143,130,.05); }
      .hours-toggle-closed {
        background: transparent; border: 1px solid rgba(0,0,0,.1);
        padding: 6px 12px; border-radius: 6px; cursor: pointer;
        font-family: 'Syne', sans-serif; font-size: 10px; font-weight: 700;
        color: #7A93A8; letter-spacing: .05em; text-transform: uppercase;
        transition: all .15s;
      }
      .hours-toggle-closed:hover { background: #F6F3EE; }
      .hours-toggle-closed.active { background: #1D2B3A; color: #FFF; border-color: #1D2B3A; }
      
      @media (max-width: 600px) {
        .hours-day { flex-direction: column; gap: 8px; }
        .hours-day-label { width: auto; padding-top: 0; }
      }
    `;
    document.head.appendChild(style);
  }

  // ═══════════════════════════════════════════════════════════
  // RENDU HTML
  // ═══════════════════════════════════════════════════════════
  
  function renderTimeSelect(value) {
    return TIME_OPTIONS.map(t => 
      `<option value="${t}" ${t === value ? 'selected' : ''}>${t}</option>`
    ).join('');
  }

  function renderSlot(daySlots, slotIdx, daySlot, hideRemove) {
    return `
      <div class="hours-slot">
        <select data-slot-open data-slot-idx="${slotIdx}">${renderTimeSelect(daySlot.open)}</select>
        <span class="hours-slot-sep">→</span>
        <select data-slot-close data-slot-idx="${slotIdx}">${renderTimeSelect(daySlot.close)}</select>
        ${hideRemove ? '' : `<button type="button" class="hours-slot-remove" data-slot-remove data-slot-idx="${slotIdx}" title="Remove">×</button>`}
      </div>
    `;
  }

  function renderDay(dayKey, dayLabel, slots) {
    const isClosed = !slots || slots.length === 0;
    const slotsHtml = isClosed ? '' : slots.map((s, idx) => renderSlot(slots, idx, s, false)).join('');
    
    return `
      <div class="hours-day" data-day="${dayKey}">
        <div class="hours-day-label">${dayLabel}</div>
        <div class="hours-day-slots">
          ${isClosed ? '<div class="hours-day-empty">Closed all day</div>' : slotsHtml}
          <div class="hours-day-controls">
            ${slots.length < 2 ? `<button type="button" class="hours-add-slot" data-add-slot>+ Add ${slots.length === 0 ? 'hours' : 'second slot'}</button>` : ''}
            ${slots.length > 0 ? `<button type="button" class="hours-toggle-closed" data-mark-closed>Mark closed</button>` : ''}
          </div>
        </div>
      </div>
    `;
  }

  // ═══════════════════════════════════════════════════════════
  // CLASSE PRINCIPALE
  // ═══════════════════════════════════════════════════════════
  
  class HoursPicker {
    constructor(container, initialValue) {
      injectStyles();
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      if (!this.container) {
        console.error('HoursPicker: container not found');
        return;
      }
      this.value = this.normalizeValue(initialValue);
      this.render();
      this.attachEvents();
    }

    normalizeValue(input) {
      // Toujours retourner un objet avec les 7 jours
      const result = {};
      for (const day of DAYS) {
        const incoming = input && input[day.key];
        if (Array.isArray(incoming)) {
          result[day.key] = incoming.filter(s => s && s.open && s.close);
        } else {
          result[day.key] = [];
        }
      }
      return result;
    }

    render() {
      const daysHtml = DAYS.map(d => renderDay(d.key, d.label_en, this.value[d.key])).join('');
      this.container.innerHTML = `
        <div class="hours-picker">
          <div class="hours-picker-header">
            <div class="hours-picker-title">📅 Opening Hours</div>
            <div class="hours-picker-actions">
              <button type="button" class="hours-btn" data-action="copy-mon-to-all">Copy Monday to all</button>
              <button type="button" class="hours-btn" data-action="copy-weekdays">Mon–Fri same</button>
              <button type="button" class="hours-btn hours-btn-danger" data-action="clear-all">Clear all</button>
            </div>
          </div>
          <div class="hours-days">${daysHtml}</div>
        </div>
      `;
    }

    attachEvents() {
      this.container.addEventListener('click', (e) => {
        const target = e.target;
        const dayEl = target.closest('.hours-day');
        const dayKey = dayEl?.dataset.day;
        
        // Add new slot
        if (target.dataset.addSlot !== undefined && dayKey) {
          this.addSlot(dayKey);
        }
        // Remove slot
        else if (target.dataset.slotRemove !== undefined && dayKey) {
          const idx = parseInt(target.dataset.slotIdx);
          this.removeSlot(dayKey, idx);
        }
        // Mark day as closed
        else if (target.dataset.markClosed !== undefined && dayKey) {
          this.value[dayKey] = [];
          this.render();
        }
        // Global actions
        else if (target.dataset.action === 'copy-mon-to-all') {
          this.copyMondayToAll();
        }
        else if (target.dataset.action === 'copy-weekdays') {
          this.copyMondayToWeekdays();
        }
        else if (target.dataset.action === 'clear-all') {
          if (confirm('Clear all hours?')) {
            for (const day of DAYS) this.value[day.key] = [];
            this.render();
          }
        }
      });
      
      this.container.addEventListener('change', (e) => {
        const target = e.target;
        const dayEl = target.closest('.hours-day');
        const dayKey = dayEl?.dataset.day;
        if (!dayKey) return;
        const idx = parseInt(target.dataset.slotIdx);
        if (isNaN(idx)) return;
        
        if (target.dataset.slotOpen !== undefined) {
          this.value[dayKey][idx].open = target.value;
        } else if (target.dataset.slotClose !== undefined) {
          this.value[dayKey][idx].close = target.value;
        }
      });
    }

    addSlot(dayKey) {
      if (this.value[dayKey].length >= 2) return;
      // Slot par défaut intelligent
      let defaultSlot;
      if (this.value[dayKey].length === 0) {
        defaultSlot = { open: '09:00', close: '18:00' };
      } else {
        // 2e slot = après-midi/soir
        defaultSlot = { open: '19:00', close: '23:00' };
      }
      this.value[dayKey].push(defaultSlot);
      this.render();
    }

    removeSlot(dayKey, idx) {
      this.value[dayKey].splice(idx, 1);
      this.render();
    }

    copyMondayToAll() {
      const mondaySlots = JSON.parse(JSON.stringify(this.value.monday || []));
      for (const day of DAYS) {
        this.value[day.key] = JSON.parse(JSON.stringify(mondaySlots));
      }
      this.render();
    }

    copyMondayToWeekdays() {
      const mondaySlots = JSON.parse(JSON.stringify(this.value.monday || []));
      for (const key of ['tuesday', 'wednesday', 'thursday', 'friday']) {
        this.value[key] = JSON.parse(JSON.stringify(mondaySlots));
      }
      this.render();
    }

    // ═══ API PUBLIQUE ═══
    
    getValue() {
      // Retourne un objet propre pour Supabase JSONB
      const result = {};
      for (const day of DAYS) {
        result[day.key] = this.value[day.key].map(s => ({ open: s.open, close: s.close }));
      }
      return result;
    }

    setValue(newValue) {
      this.value = this.normalizeValue(newValue);
      this.render();
    }

    isEmpty() {
      return DAYS.every(d => this.value[d.key].length === 0);
    }
  }

  // ═══════════════════════════════════════════════════════════
  // HELPER : Vérifier si un lieu est ouvert à une heure donnée
  // ═══════════════════════════════════════════════════════════
  
  window.AfyaHours = {
    create: function(container, initialValue) {
      return new HoursPicker(container, initialValue);
    },
    
    // Vérifie si un lieu est ouvert à un moment donné
    // dateStr: "2026-05-20", timeStr: "14:30"
    isOpenAt: function(openingHours, dateStr, timeStr) {
      if (!openingHours) return true; // Pas d'horaires définis = supposé ouvert
      
      const date = new Date(dateStr + 'T00:00:00');
      const dayKeys = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
      const dayKey = dayKeys[date.getDay()];
      
      const slots = openingHours[dayKey];
      if (!slots || slots.length === 0) return false; // Jour fermé
      
      const targetMinutes = this.timeToMinutes(timeStr);
      
      for (const slot of slots) {
        const openMin = this.timeToMinutes(slot.open);
        let closeMin = this.timeToMinutes(slot.close);
        // Gestion fermeture après minuit
        if (closeMin <= openMin) closeMin += 24 * 60;
        
        let target = targetMinutes;
        if (target < openMin) target += 24 * 60;
        
        if (target >= openMin && target <= closeMin) return true;
      }
      return false;
    },
    
    timeToMinutes: function(timeStr) {
      const [h, m] = timeStr.split(':').map(Number);
      return h * 60 + m;
    },
    
    // Formate les horaires pour affichage user-friendly
    formatHours: function(openingHours, lang) {
      if (!openingHours) return '';
      lang = lang || 'en';
      const dayLabels = {
        en: { monday:'Mon', tuesday:'Tue', wednesday:'Wed', thursday:'Thu', friday:'Fri', saturday:'Sat', sunday:'Sun' },
        fr: { monday:'Lun', tuesday:'Mar', wednesday:'Mer', thursday:'Jeu', friday:'Ven', saturday:'Sam', sunday:'Dim' }
      };
      const labels = dayLabels[lang] || dayLabels.en;
      const closedLabel = lang === 'fr' ? 'Fermé' : 'Closed';
      
      const lines = [];
      for (const day of DAYS) {
        const slots = openingHours[day.key];
        if (!slots || slots.length === 0) {
          lines.push(`${labels[day.key]}: ${closedLabel}`);
        } else {
          const slotsStr = slots.map(s => `${s.open}–${s.close}`).join(', ');
          lines.push(`${labels[day.key]}: ${slotsStr}`);
        }
      }
      return lines.join('\n');
    }
  };
  
  console.log('✅ AFYA Hours Picker loaded');
})();