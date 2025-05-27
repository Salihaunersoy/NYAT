import React from 'react';

function StatsBar({ total, completed }) {
  return (
    <div className="stats-bar">
      <p>📋 Toplam: {total}</p>
      <p>✅ Tamamlanan: {completed}</p>
      <p>⏳ Kalan: {total - completed}</p>
    </div>
  );
}

export default StatsBar;
