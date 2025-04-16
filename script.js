function updateClock() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString();
    document.getElementById('clock').textContent = timeStr;
  }
  
  setInterval(updateClock, 1000);
  updateClock();
  