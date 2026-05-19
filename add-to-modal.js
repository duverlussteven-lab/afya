// ═══════════════════════════════════════════════════════════════
// ADD-TO-MODAL.JS — Système universel "Add to Wishlist / Program"
// À inclure dans index.html, restaurant.html, activity.html
// Requiert : window.sb (client Supabase) et fonction window.toast(msg)
// ═══════════════════════════════════════════════════════════════

(function() {
  // Injection du CSS
  const style = document.createElement('style');
  style.textContent = `
    .ato-overlay{position:fixed;inset:0;background:rgba(29,43,58,.6);backdrop-filter:blur(8px);z-index:9000;display:none;align-items:center;justify-content:center;padding:20px}
    .ato-overlay.open{display:flex;animation:atoFadeIn .2s ease}
    @keyframes atoFadeIn{from{opacity:0}to{opacity:1}}
    .ato-modal{background:var(--sur,white);border-radius:18px;max-width:480px;width:100%;max-height:80vh;overflow:hidden;display:flex;flex-direction:column;box-shadow:0 20px 60px rgba(0,0,0,.3);animation:atoSlideUp .3s ease}
    @keyframes atoSlideUp{from{transform:translateY(20px);opacity:0}to{transform:translateY(0);opacity:1}}
    .ato-header{padding:24px 24px 0;display:flex;align-items:flex-start;justify-content:space-between;gap:12px}
    .ato-title{font-family:var(--disp,'Cormorant Garamond',serif);font-size:24px;font-weight:400;color:var(--ink,#1D2B3A);line-height:1.2}
    .ato-subtitle{font-family:var(--ui,'Syne',sans-serif);font-size:11px;color:var(--ink3,#7A93A8);font-weight:600;letter-spacing:.08em;text-transform:uppercase;margin-top:4px}
    .ato-close{background:none;border:none;width:32px;height:32px;border-radius:8px;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--ink3);transition:background .15s;font-size:20px;flex-shrink:0}
    .ato-close:hover{background:var(--bg2,#F6F3EE);color:var(--ink)}
    .ato-content{flex:1;overflow-y:auto;padding:16px 24px 24px}
    .ato-option{display:flex;align-items:center;gap:12px;padding:14px 16px;border:1.5px solid var(--border,rgba(109,143,130,.18));border-radius:12px;cursor:pointer;transition:all .15s;background:var(--sur,white);margin-bottom:8px;width:100%;text-align:left;font-family:var(--body,'DM Sans',sans-serif)}
    .ato-option:hover{border-color:var(--sage,#6D8F82);background:rgba(109,143,130,.05);transform:translateY(-1px)}
    .ato-option.disabled{opacity:.5;cursor:not-allowed;pointer-events:none}
    .ato-option-icon{font-size:24px;flex-shrink:0}
    .ato-option-content{flex:1;min-width:0}
    .ato-option-title{font-family:var(--ui,'Syne',sans-serif);font-size:13px;font-weight:700;color:var(--ink,#1D2B3A);margin-bottom:2px}
    .ato-option-desc{font-size:11px;color:var(--ink3,#7A93A8);line-height:1.4}
    .ato-divider{height:1px;background:var(--border);margin:10px 0;border:none}
    .ato-divider-label{font-family:var(--ui);font-size:9px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--ink3);margin:14px 0 8px;padding-top:14px;border-top:1px dashed var(--border)}
    .ato-option-create{border-style:dashed;color:var(--sage);font-weight:600}
    .ato-option-create .ato-option-title{color:var(--sage)}
    .ato-empty{padding:30px 20px;text-align:center;color:var(--ink3);font-family:var(--ui);font-size:12px}
    .ato-empty-icon{font-size:36px;margin-bottom:8px;opacity:.4}
    .ato-loading{text-align:center;padding:30px;font-family:var(--ui);font-size:12px;color:var(--ink3)}
    
    /* Modal de création de programme */
    .ato-form-group{margin-bottom:14px}
    .ato-form-label{font-family:var(--ui);font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink2);margin-bottom:6px;display:block}
    .ato-form-input{width:100%;border:1.5px solid var(--border);border-radius:10px;padding:10px 14px;font-family:var(--body);font-size:13px;background:var(--sur);color:var(--ink);outline:none;transition:border-color .15s}
    .ato-form-input:focus{border-color:var(--sage)}
    .ato-form-row{display:grid;grid-template-columns:1fr 1fr;gap:12px}
    .ato-form-actions{display:flex;gap:10px;justify-content:flex-end;margin-top:18px}
    .ato-btn{padding:10px 18px;border-radius:100px;cursor:pointer;font-family:var(--ui);font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;transition:all .15s;border:1.5px solid var(--border)}
    .ato-btn-ghost{background:transparent;color:var(--ink2)}
    .ato-btn-ghost:hover{background:var(--bg2)}
    .ato-btn-primary{background:var(--ink);color:white;border-color:var(--ink)}
    .ato-btn-primary:hover{background:var(--sage);border-color:var(--sage);transform:translateY(-1px)}
    .ato-btn-primary:disabled{opacity:.5;cursor:not-allowed}
    
    /* Modal day picker pour programme */
    .ato-day-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(80px,1fr));gap:8px;margin:14px 0}
    .ato-day-btn{padding:14px 8px;border:1.5px solid var(--border);border-radius:10px;cursor:pointer;text-align:center;background:var(--sur);transition:all .15s;font-family:var(--ui)}
    .ato-day-btn:hover{border-color:var(--sage)}
    .ato-day-btn.selected{background:var(--ink);color:white;border-color:var(--ink)}
    .ato-day-number{font-size:18px;font-weight:700;line-height:1}
    .ato-day-label{font-size:9px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;opacity:.7;margin-top:4px}
  `;
  document.head.appendChild(style);

  // Injection du HTML de la modal
  const modalHtml = `
    <div class="ato-overlay" id="atoOverlay" onclick="if(event.target===this)closeAddToModal()">
      <div class="ato-modal" id="atoModal">
        <div class="ato-header">
          <div>
            <h3 class="ato-title" id="atoTitle">Add to...</h3>
            <p class="ato-subtitle" id="atoSubtitle">Choose where to save</p>
          </div>
          <button class="ato-close" onclick="closeAddToModal()" aria-label="Close">×</button>
        </div>
        <div class="ato-content" id="atoContent">
          <div class="ato-loading">Loading...</div>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHtml);

  // État interne
  let currentItem = null; // { type: 'restaurant' | 'activity', id, name }
  let userPrograms = [];

  // ═══ API publique ═══
  window.openAddToModal = async function(type, id, name) {
    currentItem = { type, id, name };
    
    // Vérifier auth
    const { data: { user } } = await window.sb.auth.getUser();
    if (!user) {
      window.toast('🔒 Please sign in to save items');
      closeAddToModal();
      setTimeout(() => {
        if (typeof window.openAuthModal === 'function') window.openAuthModal('signin');
        else window.location.href = 'index.html';
      }, 800);
      return;
    }

    document.getElementById('atoTitle').textContent = `Add "${name}" to...`;
    document.getElementById('atoSubtitle').textContent = type === 'restaurant' ? '🍽️ Restaurant' : '🎯 Activity';
    document.getElementById('atoOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';

    await loadOptions();
  };

  window.closeAddToModal = function() {
    document.getElementById('atoOverlay').classList.remove('open');
    document.body.style.overflow = '';
    currentItem = null;
  };

  // ═══ Charger les options ═══
  async function loadOptions() {
    const content = document.getElementById('atoContent');
    content.innerHTML = '<div class="ato-loading">Loading your lists...</div>';

    const { data: { user } } = await window.sb.auth.getUser();
    if (!user) return;

    // Vérifier si déjà dans wishlist
    const wishlistField = currentItem.type === 'restaurant' ? 'restaurant_id' : 'activity_id';
    const { data: existingWishlist } = await window.sb
      .from('user_wishlist')
      .select('id')
      .eq('user_id', user.id)
      .eq(wishlistField, currentItem.id)
      .maybeSingle();

    const inWishlist = !!existingWishlist;

    // Charger les programmes de l'user
    const { data: programs } = await window.sb
      .from('programs')
      .select('id, name, city, start_date, end_date')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    userPrograms = programs || [];

    // Pour chaque programme, vérifier si l'item est déjà dedans
    const itemField = currentItem.type === 'restaurant' ? 'restaurant_id' : 'activity_id';
    const programChecks = await Promise.all(
      userPrograms.map(async (p) => {
        const { data: existing } = await window.sb
          .from('program_items')
          .select('id')
          .eq('program_id', p.id)
          .eq(itemField, currentItem.id)
          .maybeSingle();
        return { programId: p.id, exists: !!existing };
      })
    );
    const programItemsMap = {};
    programChecks.forEach(c => programItemsMap[c.programId] = c.exists);

    // Rendu
    let html = `
      <button class="ato-option" onclick="addToWishlist()" ${inWishlist ? 'disabled' : ''}>
        <span class="ato-option-icon">${inWishlist ? '✓' : '❤️'}</span>
        <div class="ato-option-content">
          <div class="ato-option-title">${inWishlist ? 'Already in Wishlist' : 'Wishlist'}</div>
          <div class="ato-option-desc">${inWishlist ? 'This item is already saved as favorite' : 'Save as favorite for later'}</div>
        </div>
      </button>
    `;

    if (userPrograms.length > 0) {
      html += `<div class="ato-divider-label">📅 Add to a program</div>`;
      userPrograms.forEach(p => {
        const inProgram = programItemsMap[p.id];
        const cityLabel = p.city ? `${p.city} · ` : '';
        const datesLabel = p.start_date ? `${formatDate(p.start_date)}${p.end_date ? ' → ' + formatDate(p.end_date) : ''}` : 'No dates';
        html += `
          <button class="ato-option" onclick="addToProgram('${p.id}', '${escapeAttr(p.name)}')" ${inProgram ? 'disabled' : ''}>
            <span class="ato-option-icon">${inProgram ? '✓' : '📅'}</span>
            <div class="ato-option-content">
              <div class="ato-option-title">${inProgram ? 'Already in: ' : ''}${escapeHtml(p.name)}</div>
              <div class="ato-option-desc">${cityLabel}${datesLabel}</div>
            </div>
          </button>
        `;
      });
    }

    html += `
      <button class="ato-option ato-option-create" onclick="showCreateProgramForm()">
        <span class="ato-option-icon">➕</span>
        <div class="ato-option-content">
          <div class="ato-option-title">Create new program</div>
          <div class="ato-option-desc">Start a new trip or itinerary</div>
        </div>
      </button>
    `;

    content.innerHTML = html;
  }

  // ═══ Wishlist ═══
  window.addToWishlist = async function() {
    if (!currentItem) return;
    const { data: { user } } = await window.sb.auth.getUser();
    if (!user) return;

    const data = { user_id: user.id };
    if (currentItem.type === 'restaurant') data.restaurant_id = currentItem.id;
    else data.activity_id = currentItem.id;

    const { error } = await window.sb.from('user_wishlist').insert(data);
    if (error) {
      window.toast(`❌ Error: ${error.message}`);
      return;
    }
    window.toast(`❤️ "${currentItem.name}" added to your wishlist!`);
    closeAddToModal();
  };

  // ═══ Add to Program ═══
  window.addToProgram = async function(programId, programName) {
    if (!currentItem) return;
    
    // Récupère les infos du programme pour proposer les jours
    const program = userPrograms.find(p => p.id === programId);
    if (!program) return;

    let daysToShow = 1;
    if (program.start_date && program.end_date) {
      const start = new Date(program.start_date);
      const end = new Date(program.end_date);
      daysToShow = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
    }

    // Affiche le sélecteur de jour
    const content = document.getElementById('atoContent');
    document.getElementById('atoTitle').textContent = `Which day?`;
    document.getElementById('atoSubtitle').textContent = `Adding to ${programName}`;

    let dayGrid = `<div class="ato-day-grid">`;
    for (let d = 1; d <= daysToShow; d++) {
      let label = `Day ${d}`;
      if (program.start_date) {
        const date = new Date(program.start_date);
        date.setDate(date.getDate() + (d - 1));
        label = date.toLocaleDateString('en-US', { weekday: 'short' });
      }
      dayGrid += `
        <button class="ato-day-btn" onclick="confirmAddToProgram('${programId}', ${d})">
          <div class="ato-day-number">${d}</div>
          <div class="ato-day-label">${label}</div>
        </button>
      `;
    }
    dayGrid += `</div>`;
    
    content.innerHTML = `
      <p style="font-size:12px;color:var(--ink2);margin-bottom:8px;font-family:var(--body)">Select which day of the trip:</p>
      ${dayGrid}
      <div class="ato-form-actions">
        <button class="ato-btn ato-btn-ghost" onclick="loadOptions()">← Back</button>
      </div>
    `;
  };

  window.confirmAddToProgram = async function(programId, dayNumber) {
    if (!currentItem) return;

    const data = {
      program_id: programId,
      day_number: dayNumber
    };
    if (currentItem.type === 'restaurant') data.restaurant_id = currentItem.id;
    else data.activity_id = currentItem.id;

    const { error } = await window.sb.from('program_items').insert(data);
    if (error) {
      window.toast(`❌ Error: ${error.message}`);
      return;
    }
    
    const program = userPrograms.find(p => p.id === programId);
    window.toast(`📅 "${currentItem.name}" added to ${program.name} (Day ${dayNumber})`);
    closeAddToModal();
  };

  // ═══ Create new program ═══
  window.showCreateProgramForm = function() {
    const content = document.getElementById('atoContent');
    document.getElementById('atoTitle').textContent = 'Create new program';
    document.getElementById('atoSubtitle').textContent = 'Plan a new trip or itinerary';

    content.innerHTML = `
      <div class="ato-form-group">
        <label class="ato-form-label">Program name *</label>
        <input type="text" class="ato-form-input" id="atoNewName" placeholder="Weekend in Paris" maxlength="100">
      </div>
      <div class="ato-form-group">
        <label class="ato-form-label">City</label>
        <input type="text" class="ato-form-input" id="atoNewCity" placeholder="Paris" maxlength="80">
      </div>
      <div class="ato-form-row">
        <div class="ato-form-group">
          <label class="ato-form-label">Start date</label>
          <input type="date" class="ato-form-input" id="atoNewStart">
        </div>
        <div class="ato-form-group">
          <label class="ato-form-label">End date</label>
          <input type="date" class="ato-form-input" id="atoNewEnd">
        </div>
      </div>
      <div class="ato-form-actions">
        <button class="ato-btn ato-btn-ghost" onclick="loadOptions()">← Back</button>
        <button class="ato-btn ato-btn-primary" onclick="createProgram()">Create</button>
      </div>
    `;
    setTimeout(() => document.getElementById('atoNewName').focus(), 100);
  };

  window.createProgram = async function() {
    const name = document.getElementById('atoNewName').value.trim();
    const city = document.getElementById('atoNewCity').value.trim();
    const startDate = document.getElementById('atoNewStart').value;
    const endDate = document.getElementById('atoNewEnd').value;

    if (!name) {
      window.toast('⚠️ Please enter a program name');
      return;
    }

    const { data: { user } } = await window.sb.auth.getUser();
    if (!user) return;

    const programData = {
      user_id: user.id,
      name: name,
      city: city || null,
      start_date: startDate || null,
      end_date: endDate || null
    };

    const { data: newProgram, error } = await window.sb
      .from('programs')
      .insert(programData)
      .select()
      .single();

    if (error) {
      window.toast(`❌ Error: ${error.message}`);
      return;
    }

    window.toast(`✅ Program "${name}" created!`);
    
    // Auto-add l'item au programme (jour 1)
    if (currentItem) {
      const itemData = {
        program_id: newProgram.id,
        day_number: 1
      };
      if (currentItem.type === 'restaurant') itemData.restaurant_id = currentItem.id;
      else itemData.activity_id = currentItem.id;

      await window.sb.from('program_items').insert(itemData);
      window.toast(`📅 "${currentItem.name}" added to your new program (Day 1)`);
    }

    closeAddToModal();
  };

  window.loadOptions = loadOptions;

  // ═══ Helpers ═══
  function escapeHtml(text) {
    if (!text && text !== 0) return '';
    const div = document.createElement('div');
    div.textContent = String(text);
    return div.innerHTML;
  }

  function escapeAttr(text) {
    return String(text || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
  }

  function formatDate(d) {
    if (!d) return '';
    return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }
})();