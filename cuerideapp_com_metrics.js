(function() {
  const container = document.createElement('div');
  container.style = "padding:1rem;background:#f9f9f9;border:1px solid #ccc;margin-top:2rem;";
  container.innerHTML = `
    <h3 style='margin-bottom:0.5rem;'>📊 Live Metrics – CueRide</h3>
    <ul>
      <li>Status: <strong>Online</strong></li>
      <li>Campaigns Active: <strong>6</strong></li>
      <li>Goal Density: <strong>87%</strong></li>
      <li>Last Sync: <strong>2025-05-20 04:38</strong></li>
    </ul>
  `;
  document.body.appendChild(container);
})();