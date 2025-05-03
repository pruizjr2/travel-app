document.addEventListener('DOMContentLoaded', async () => {
    const dashboardLink = document.getElementById('dashboardLink');
    if (!dashboardLink) return;
  
    try {
      const res = await fetch('/api/auth/user');
      if (!res.ok) throw new Error('Not logged in');
  
      const user = await res.json();
      switch (user.role) {
        case 'admin':
          dashboardLink.href = 'admin-dashboard.html';
          break;
        case 'advertiser':
          dashboardLink.href = 'advertiser-dashboard.html';
          break;
        default:
          dashboardLink.href = 'dashboard.html';
          break;
      }
    } catch (err) {
      dashboardLink.href = 'login.html';
    }
  });
  