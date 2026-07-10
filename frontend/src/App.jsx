import React, { useEffect, useRef, useState, useMemo } from "react";
import VideoPlayer from "./components/VideoPlayer";
import SlotGrid2D from "./components/SlotGrid2D";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  RadialBarChart,
  RadialBar,
} from "recharts";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./App.css";

const COLORS = {
  Empty: "#B5EAD7",
  Occupied: "#FF9AA2",
  Transition: "#FFD580",
  Total: "#C7CEEA",
};

export default function App() {
  const videoRef = useRef(null);
  const [slotHistory, setSlotHistory] = useState([]);
  const [currentSlots, setCurrentSlots] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/slot_status.json")
      .then((r) => r.json())
      .then((data) => {
        setSlotHistory(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error loading slot_status.json:", err));
  }, []);

  const handleTimeUpdate = () => {
    if (!videoRef.current || slotHistory.length === 0) return;
    const currentTime = videoRef.current.currentTime;
    const currentFrame = Math.round(currentTime * 30);

    const nearest = slotHistory.reduce((prev, curr) =>
      Math.abs(curr.frame_idx - currentFrame) <
      Math.abs(prev.frame_idx - currentFrame)
        ? curr
        : prev
    );

    const frameSlots = {};
    slotHistory.forEach((row) => {
      if (row.frame_idx === nearest.frame_idx)
        frameSlots[row.slot_id] = row.status;
    });
    setCurrentSlots(frameSlots);
  };

  const summaryStats = useMemo(() => {
    const counts = { Empty: 0, Occupied: 0, Transition: 0 };
    Object.values(currentSlots).forEach((s) => {
      if (counts[s] !== undefined) counts[s]++;
    });
    const total = Object.keys(currentSlots).length;
    return { ...counts, total };
  }, [currentSlots]);

  const pieData = useMemo(
    () => [
      { name: "Empty", value: summaryStats.Empty },
      { name: "Occupied", value: summaryStats.Occupied },
      { name: "Transition", value: summaryStats.Transition },
    ],
    [summaryStats]
  );

  const lastFrameData = useMemo(() => {
    if (slotHistory.length === 0) return [];
    const lastFrameIdx = slotHistory[slotHistory.length - 1].frame_idx;
    const lastFrameSlots = slotHistory.filter(
      (f) => f.frame_idx === lastFrameIdx
    );

    const counts = { Empty: 0, Occupied: 0, Transition: 0 };
    lastFrameSlots.forEach((f) => {
      if (counts[f.status] !== undefined) counts[f.status]++;
    });

    return [
      { name: "Empty", value: counts.Empty, fill: COLORS.Empty },
      { name: "Occupied", value: counts.Occupied, fill: COLORS.Occupied },
      { name: "Transition", value: counts.Transition, fill: COLORS.Transition },
    ];
  }, [slotHistory]);

  const utilization = summaryStats.total
    ? Math.round((summaryStats.Occupied / summaryStats.total) * 100)
    : 0;

  if (loading) return <div className="loading">Loading dashboard...</div>;

  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">📑 Table of Contents</h2>
        <ul>
          <li><a href="#summary">📊 Summary</a></li>
          <li><a href="#video">🎥 Video Feed</a></li>
          <li><a href="#slots">🅿 Slot Grid</a></li>
          <li><a href="#pie">🥧 Pie Chart</a></li>
          <li><a href="#lastframe">⭕ Last Frame Status</a></li>
          <li><a href="#map">🗺 Map</a></li>
          <li><a href="#download">⬇ Download Logs</a></li>
        </ul>

        <div id="download" style={{ marginTop: "20px", textAlign: "center" }}>
          <button
            onClick={() => {
              if (!slotHistory || slotHistory.length === 0) return;
              const headers = Object.keys(slotHistory[0]).join(",");
              const rows = slotHistory.map((row) =>
                Object.values(row).join(",")
              );
              const csvContent = [headers, ...rows].join("\n");
              const blob = new Blob([csvContent], { type: "text/csv" });
              const url = URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download = "slot_logs.csv";
              a.click();
            }}
          >
            Download CSV
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="main">
        <h1 className="title">Smart Parking Dashboard</h1>
        <p className="subtitle">Realtime AI-powered Parking Monitoring System</p>
        <hr className="divider" />

        {/* Summary */}
        <div id="summary" className="summary-row section">
          <div className="card" style={{ background: COLORS.Total }}>
            <h3>Total</h3>
            <p className="big-number">{summaryStats.total}</p>
          </div>
          <div className="card" style={{ background: COLORS.Empty }}>
            <h3>Empty</h3>
            <p className="big-number">{summaryStats.Empty}</p>
          </div>
          <div className="card" style={{ background: COLORS.Occupied }}>
            <h3>Occupied</h3>
            <p className="big-number">{summaryStats.Occupied}</p>
          </div>
          <div className="card" style={{ background: COLORS.Transition }}>
            <h3>Transition</h3>
            <p className="big-number">{summaryStats.Transition}</p>
          </div>
          <div className="card" style={{ background: "#8ecae6" }}>
            <h3>Utilization</h3>
            <p className="big-number">{utilization}%</p>
          </div>
        </div>

        {/* Video */}
        <div id="video" className="video-row section">
          <VideoPlayer
            videoRef={videoRef}
            onTimeUpdate={handleTimeUpdate}
            videoSrc="/output_parking_fixed.mp4"
            style={{ maxWidth: "700px" }}
          />
        </div>

        {/* Slot Grid + Pie */}
        <div id="slots" className="two-col section">
          <div className="card dark-card">
            <h3>2D Slot Grid</h3>
            <SlotGrid2D currentFrameSlots={currentSlots} colors={COLORS} />
            <div className="alerts">
              {utilization > 90 && <p className="alert-red">⚠ Almost Full</p>}
              {summaryStats.Empty > summaryStats.total / 2 && (
                <p className="alert-green">✅ Plenty of Slots Available</p>
              )}
            </div>
          </div>
          <div id="pie" className="card dark-card">
            <h3>Pie Chart</h3>
            <PieChart width={300} height={300}>
              <Pie data={pieData} dataKey="value" cx="50%" cy="50%" outerRadius={100} label>
                {pieData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[entry.name]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        </div>

        {/* Last Frame Status */}
        <div id="lastframe" className="center-row section">
          <div className="card dark-card">
            <h3>Last Frame Status</h3>
            <RadialBarChart
              width={420}
              height={260}
              cx="50%"
              cy="50%"
              innerRadius="20%"
              outerRadius="90%"
              barSize={28}
              data={lastFrameData}
              startAngle={180}
              endAngle={-180}
            >
              <RadialBar minAngle={15} background clockWise dataKey="value" />
              <Legend layout="horizontal" verticalAlign="bottom" align="center" />
              <Tooltip />
            </RadialBarChart>
          </div>
        </div>

        {/* Map */}
        <div id="map" className="map-container section">
          <h3 style={{ textAlign: "center", marginBottom: "10px" }}>
            📍 Saranathan College Parking Location
          </h3>
          <MapContainer
            center={[10.7574390, 78.6512397]}
            zoom={19}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              attribution="&copy; Esri, Maxar, Earthstar Geographics"
            />
            <Marker position={[10.7574390, 78.6512397]}>
              <Popup>Saranathan College of Engineering - Car Parking</Popup>
            </Marker>
          </MapContainer>
        </div>
      </main>
    </div>
  );
}