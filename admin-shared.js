// ═══════════════════════════════════════════════════════════════════
// AFYA Admin — Shared utilities
// ═══════════════════════════════════════════════════════════════════

const AFYA_FOUNDER_ID = '6b687b03-90a6-472b-93c6-fa61ce0b88b6';

const AFYA_ROLES = {
  super_admin: { label: '🟣 SUPER ADMIN', short: 'Super Admin', color: '#9D4FCC' },
  admin: { label: '🔵 ADMIN', short: 'Admin', color: '#3B5068' },
  moderator: { label: '🟢 MODERATOR', short: 'Moderator', color: '#4A9E6F' },
  user: { label: '⚪ USER', short: 'User', color: '#7A93A8' }
};

// ═══ VÉRIFICATION D'ACCÈS ═══
async function afyaCheckAdminAccess(sb, allowedRoles) {
  if (!allowedRoles) allowedRoles = ['admin', 'super_admin', 'moderator'];

  const { data: { user } } = await sb.auth.getUser();
  if (!user) {
    alert('Please sign in to access the admin panel');
    window.location.href = 'index.html';
    return null;
  }

  const { data: profile, error } = await sb
    .from('profiles')
    .select('id, email, first_name, role, avatar_url')
    .eq('id', user.id)
    .single();

  if (error || !profile) {
    alert('Error loading your profile. Please sign in again.');
    window.location.href = 'index.html';
    return null;
  }

  if (!allowedRoles.includes(profile.role)) {
    alert('Access denied. You do not have permission to view this page.');
    window.location.href = 'index.html';
    return null;
  }

  return { user, profile };
}

// ═══ GÉNÉRATION DE LA SIDEBAR ═══
function afyaBuildSidebar(profile, activePage) {
  const role = profile.role;
  const isStaff = ['admin', 'super_admin'].includes(role);
  const isFounder = profile.id === AFYA_FOUNDER_ID;
  const displayName = profile.first_name || profile.email?.split('@')[0] || 'User';
  const roleInfo = AFYA_ROLES[role] || AFYA_ROLES.user;
  const avatarHtml = profile.avatar_url
    ? `<div class="afya-sb-avatar" style="background-image:url('${profile.avatar_url}')"></div>`
    : `<div class="afya-sb-avatar">${displayName.charAt(0).toUpperCase()}</div>`;

  const link = (href, icon, label, page) => {
    const active = page === activePage ? ' active' : '';
    return `<a href="${href}" class="sidebar-link${active}"><span class="sidebar-icon">${icon}</span><span>${label}</span></a>`;
  };

  let menuHtml = '';

  // ═══ MENU POUR ADMIN / SUPER_ADMIN ═══
  if (isStaff) {
    menuHtml = `
      <div class="sidebar-section-title">Overview</div>
      ${link('admin.html', '📊', 'Dashboard', 'dashboard')}

      <div class="sidebar-section-title">Content</div>
      ${link('admin-restaurants.html', '🍽️', 'Restaurants', 'restaurants')}
      ${link('admin-activities.html', '🎯', 'Activities', 'activities')}

      <div class="sidebar-section-title">Community</div>
      ${link('admin-users.html', '👥', 'Users', 'users')}
      ${link('admin-reviews.html', '⭐', 'Reviews', 'reviews')}
      ${link('admin-reports.html', '🚨', 'Reports', 'reports')}
      ${link('admin-suggestions.html', '💡', 'Suggestions', 'suggestions')}

      <div class="sidebar-section-title">Account</div>
      ${link('index.html', '↩️', 'Back to site', null)}
      <a href="#" onclick="afyaSignOut();return false" class="sidebar-link">
        <span class="sidebar-icon">🚪</span>
        <span>Sign Out</span>
      </a>
    `;
  }

  // ═══ MENU POUR MODERATOR ═══
  else if (role === 'moderator') {
    menuHtml = `
      <div class="sidebar-section-title">Overview</div>
      ${link('admin.html', '📊', 'Dashboard', 'dashboard')}

      <div class="sidebar-section-title">Community</div>
      ${link('admin-reviews.html', '⭐', 'Reviews', 'reviews')}
      ${link('admin-suggestions.html', '💡', 'My Suggestions', 'suggestions')}
      ${link('admin-reports.html', '🚨', 'My Reports', 'reports')}

      <div class="sidebar-section-title">Account</div>
      ${link('index.html', '↩️', 'Back to site', null)}
      <a href="#" onclick="afyaSignOut();return false" class="sidebar-link">
        <span class="sidebar-icon">🚪</span>
        <span>Sign Out</span>
      </a>
    `;
  }

  return `
    <aside class="sidebar" id="sidebar">
      <div class="sidebar-brand">
        <span class="sidebar-brand-text">AFYA</span>
        <span class="sidebar-brand-badge">ADMIN</span>
      </div>

      ${menuHtml}

      <div class="afya-sb-user">
        ${avatarHtml}
        <div class="afya-sb-user-info">
          <div class="afya-sb-name">
            ${displayName}
            ${isFounder ? '<span class="afya-sb-founder">👑</span>' : ''}
          </div>
          <div class="afya-sb-role" style="color:${roleInfo.color}">${roleInfo.label}</div>
        </div>
      </div>
    </aside>
  `;
}

// ═══ INJECTION ═══
function afyaInjectSidebar(profile, activePage) {
  const placeholder = document.getElementById('sidebarPlaceholder');
  if (!placeholder) {
    console.error('❌ No element with id="sidebarPlaceholder" found.');
    return;
  }
  placeholder.outerHTML = afyaBuildSidebar(profile, activePage);
}

// ═══ DÉCONNEXION ═══
async function afyaSignOut() {
  if (typeof sb !== 'undefined') {
    await sb.auth.signOut();
  }
  window.location.href = 'index.html';
}

// ═══ CSS UTILISATEUR EN BAS DE SIDEBAR ═══
function afyaInjectSidebarCSS() {
  const style = document.createElement('style');
  style.textContent = `
    .afya-sb-user {
      margin-top: auto;
      padding: 14px;
      margin-left: 12px;
      margin-right: 12px;
      margin-bottom: 12px;
      background: rgba(255,255,255,.05);
      border-radius: 10px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .afya-sb-avatar {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: #6D8F82;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Syne', sans-serif;
      font-weight: 700;
      font-size: 14px;
      flex-shrink: 0;
      background-size: cover;
      background-position: center;
    }
    .afya-sb-user-info {
      min-width: 0;
      flex: 1;
    }
    .afya-sb-name {
      font-family: 'Syne', sans-serif;
      font-size: 12px;
      font-weight: 700;
      color: white;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .afya-sb-role {
      font-family: 'Syne', sans-serif;
      font-size: 9px;
      font-weight: 700;
      letter-spacing: .1em;
      margin-top: 2px;
    }
    .afya-sb-founder {
      font-size: 12px;
    }
    /* S'assure que la sidebar prend toute la hauteur pour mettre le badge en bas */
    .sidebar {
      display: flex;
      flex-direction: column;
    }
  `;
  document.head.appendChild(style);
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', afyaInjectSidebarCSS);
}