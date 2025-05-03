document.addEventListener('DOMContentLoaded', async () => {
    const dashboardLink = document.getElementById('dashboardLink');
    const logoutBtn = document.getElementById('logoutBtn');
  
    // Set dashboard link based on role
    if (dashboardLink) {
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
    }
  
    // Add logout functionality
    if (logoutBtn) {
      logoutBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        const res = await fetch('/api/auth/logout');
        if (res.ok) {
          window.location.href = 'login.html';
        } else {
          alert('Logout failed.');
        }
      });
    }
  });
  