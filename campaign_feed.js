fetch("https://cueverse-monitor.vercel.app/CampaignPlans.json")
  .then(res => res.json())
  .then(data => {
    const container = document.createElement("div");
    container.style = "padding:1rem;margin-top:2rem;background:#fefce8;border:1px solid #facc15;";
    container.innerHTML = `
      <h3 style="margin-bottom:0.5rem;">📢 Live Campaign Tracker</h3>
      <p>Auto-synced from AI loop</p>
      ${Object.entries(data).map(([brand, entries]) => `
        <div style='margin-top:1rem;'>
          <strong>${brand}</strong>
          <ul>
            ${entries.map(c => `<li><strong>${c.campaign}</strong> – ${c.status} (${c.goal})</li>`).join("")}
          </ul>
        </div>
      `).join("")}
    `;
    document.body.appendChild(container);
  })
  .catch(err => console.error("Failed to load campaign data:", err));