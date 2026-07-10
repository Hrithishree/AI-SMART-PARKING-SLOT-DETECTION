// src/components/SlotGrid2D.jsx
import React from "react";

// Pastel colors
const COLORS = { Empty: "#90EE90", Occupied: "#FF6B6B", Transition: "#FFD580", Unknown: "#ccc" };

export default function SlotGrid2D({ slotMarkers, currentFrameSlots }) {
  // slotMarkers = { slot1: [x, y], ... }
  // currentFrameSlots = { slot1: "Empty", slot2: "Occupied", ... }

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 60px)",
      gridTemplateRows: "repeat(3, 60px)",
      gap: "10px",
      background: "#222",
      padding: "20px",
      borderRadius: "12px"
    }}>
      {Object.keys(slotMarkers).map((slotId) => {
        const status = currentFrameSlots[slotId] || "Unknown";
        return (
          <div key={slotId} style={{
            width: "60px",
            height: "60px",
            background: COLORS[status] || COLORS.Unknown,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "6px",
            fontWeight: "bold",
            color: "#111"
          }}>
            {slotId}
          </div>
        );
      })}
    </div>
  );
}
