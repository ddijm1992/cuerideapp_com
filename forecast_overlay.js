fetch("alerts.json")
  .then(res => res.json())
  .then(data => {
    const box = document.createElement("div");
    box.style = "margin:2rem 0;padding:1rem;border:2px solid #f99;background:#fff0f0;";
    box.innerHTML = `
      <h3 style="margin-bottom:0.5rem;">⚠️ Forecast & Alert Overlay</h3>
      <p>Last updated: <strong>${new Date(data.last_sync).toLocaleString()}</strong></p>
      <ul>
        ${data.alerts.map(alert => `<li><strong>${alert.entity}</strong>: ${alert.message}</li>`).join('')}
      </ul>
    `;
    document.body.appendChild(box);
  })
  .catch(err => console.error("Failed to load alerts:", err));