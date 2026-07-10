


# 🚗 AI Smart Parking Slot Detection System
<img width="1024" height="572" alt="image" src="https://github.com/user-attachments/assets/fd24ef2c-be24-4230-b871-0e379eb046f7" />

<p align="center">
  <img src="images/banner.png" alt="AI Smart Parking Banner" width="100%">
</p>

<p align="center">

![Python](https://img.shields.io/badge/Python-3.10-blue?style=for-the-badge&logo=python)
![YOLOv8](https://img.shields.io/badge/YOLOv8-Ultralytics-red?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![OpenCV](https://img.shields.io/badge/OpenCV-Computer%20Vision-green?style=for-the-badge&logo=opencv)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?style=for-the-badge&logo=javascript)
![License](https://img.shields.io/badge/License-MIT-brightgreen?style=for-the-badge)

</p>

---

# 📖 Overview

AI Smart Parking Slot Detection System is an intelligent parking occupancy monitoring solution that automatically detects parked vehicles using **YOLOv8**, **OpenCV**, and **Python**.

The backend performs real-time parking slot detection and generates occupancy information, while the frontend provides an interactive **React Dashboard** for visualizing parking availability, occupancy statistics, charts, maps, and live monitoring.

The project is designed for smart campuses, hospitals, shopping malls, commercial parking lots, and smart city applications.

---

# ✨ Features

- 🚗 Automatic parking slot occupancy detection
- 🎯 YOLOv8-based vehicle detection
- 📹 Real-time video processing using OpenCV
- 📊 Interactive React Dashboard
- 🟢 Live parking availability monitoring
- 📈 Occupancy statistics and analytics
- 🥧 Pie chart visualization
- 🗺️ Parking map visualization
- 📦 JSON-based backend-to-frontend communication
- 📁 CSV export support
- 📹 Processed output video generation
- 📍 Smart parking monitoring interface

---

# 🏗️ System Architecture

```
Input Video
      │
      ▼
YOLOv8 Vehicle Detection
      │
      ▼
Parking Slot Occupancy Analysis
      │
      ▼
JSON Generation
      │
      ▼
React Dashboard
      │
      ├── Live Video
      ├── Slot Grid
      ├── Pie Chart
      ├── Heatmap
      ├── Map View
      └── Analytics
```

---

# 🛠️ Technology Stack

## Backend

- Python
- YOLOv8
- OpenCV
- NumPy

## Frontend

- React
- JavaScript
- HTML
- CSS

## Visualization

- Recharts
- React Three Fiber
- Three.js
- Leaflet

---

# 📂 Project Structure

```
AI-SMART-PARKING-SLOT-DETECTION

├── backend
│   ├── config
│   ├── input
│   ├── output
│   ├── models
│   └── source files

├── frontend
│   ├── public
│   ├── src
│   │    ├── components
│   │    ├── App.jsx
│   │    └── index.js
│   └── package.json

├── docs

├── images

├── models
│   └── parking82_best.pt

└── README.md
```

---

# 📷 Dashboard Preview

## Live Detection

<img width="1600" height="900" alt="image" src="https://github.com/user-attachments/assets/152119e9-2f49-4ff8-a5a6-e294b090f211" />

---

## Dashboard

<img width="1600" height="730" alt="image" src="https://github.com/user-attachments/assets/53846660-fb70-4c1d-b6ec-e013566fc0ad" />

---


## 2D Parking Slot Grid

<img width="675" height="487" alt="image" src="https://github.com/user-attachments/assets/72474c60-4146-4380-a5e8-c39944ae9c1e" />

---

## Pie Chart Analytics

<img width="537" height="501" alt="image" src="https://github.com/user-attachments/assets/27b34081-f37a-4450-9a0f-6cc2fc39b13d" />

---

## Parking Map

<img width="1397" height="527" alt="image" src="https://github.com/user-attachments/assets/98532067-faa0-418a-aead-ef0fc4381ac3" />

---

## Last Frame Status

<img width="1093" height="440" alt="image" src="https://github.com/user-attachments/assets/2d50449a-55cc-429e-9844-2c052ed06d69" />

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/Hrithishree/AI-SMART-PARKING-SLOT-DETECTION.git

cd AI-SMART-PARKING-SLOT-DETECTION
```

---

## Backend

```bash
cd backend

pip install -r requirements.txt
```

---

## Frontend

```bash
cd frontend

npm install

npm start
```

---

# 🚀 Working Procedure

1. Place the input parking video inside the backend input folder.
2. Load the trained YOLOv8 model.
3. Run the backend Python script.
4. Parking occupancy is detected.
5. Slot status is stored as JSON.
6. React dashboard reads the JSON files.
7. Dashboard updates automatically.

---

# 📊 Dashboard Modules

- Summary Cards
- Live Video Player
- Parking Occupancy Status
- 2D Slot Grid
- Pie Chart
- Parking Map
- Heatmap
- Last Frame Analysis

---

# 🧠 AI Model

Model Used

**YOLOv8**

Purpose

Vehicle Detection for Parking Slot Occupancy

Output

- Occupied Slots
- Available Slots
- Parking Statistics
- JSON Data

---

# 📈 Applications

- Smart Cities
- Shopping Malls
- Hospitals
- Airports
- Universities
- Corporate Offices
- Railway Stations
- Public Parking Lots

---

# 🔮 Future Improvements

- Multi-camera support
- License Plate Recognition (ANPR)
- Mobile Application
- Cloud Deployment
- Automatic Parking Reservation
- Real-time IoT Integration
- Edge AI Deployment using NVIDIA Jetson
- Parking Fee Management

---

# 👩‍💻 Authors

**Hrithi Shree**

Department of Electronics and Communication Engineering

Saranathan College of Engineering

---

**Harshini N.**

Department of Electronics and Communication Engineering

Saranathan College of Engineering

---

# 🙏 Acknowledgements

- Ultralytics YOLOv8
- OpenCV
- React
- Recharts
- Three.js
- React Three Fiber
- Leaflet

---

# 📄 License

This project is licensed under the MIT License.

See the LICENSE file for details.

---

# ⭐ Support

If you found this project useful,

⭐ Star this repository

🍴 Fork the repository

💡 Contribute with improvements

📬 Share your feedback

---

<p align="center">

Made with ❤️ by **Hrithi Shree & Harshini N.**

</p>

