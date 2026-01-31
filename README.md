# **🌦️ Prodigy InfoTech Internship – Task 04**

### **Interactive Weather Portal: Neon-Glassmorphism Edition**

A visually immersive weather application developed during my Web Development Internship at **Prodigy InfoTech**. This project focuses on real-time API integration, dynamic UI state management, and high-end CSS styling to bring live weather data to life through cinematic visuals.

---

## ✨ Key Features

### 🖼️ **Dynamic Visual Engine**
* **Contextual Imagery:** The application intelligently swaps high-definition background images based on live atmospheric conditions (Clear, Clouds, Rain, Snow, Mist/Haze).
* **Smooth State Transitions:** Features a `1.2s ease-in-out` background transition, ensuring a professional and non-disruptive user experience during data refreshes.

### 💎 **Neon Glassmorphism UI**
* **Aesthetic Depth:** Implements `backdrop-filter: blur(15px)` and semi-transparent layers to create a "frosted glass" container for weather metrics.
* **Tactile Feedback:** Navigation and search elements utilize **Cubic-Bezier** transitions and neon glow effects to provide instant visual response to user input.

### 🌍 **Real-Time Data Intelligence**
* **Live API Integration:** Leverages the **OpenWeatherMap API** to fetch hyper-accurate metrics including Temperature (Celsius), Humidity, Wind Speed, and Condition Descriptions.
* **Advanced Error Handling:** Integrated logic to manage invalid city inputs (404 handling) and connectivity issues, ensuring the app remains stable during failed requests.

### 📱 **Responsive Engineering**
* **Adaptive Layout:** Optimized with **CSS Flexbox** and **Media Queries** to maintain high readability and visual balance across Mobile, Tablet, and Desktop screens.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | HTML5, CSS3 (Flexbox & Keyframes) |
| **Logic** | JavaScript ES6+ (Async/Await Fetch API) |
| **Styling** | Neon Glows, Glassmorphism, & Dynamic Switch-Case Logic |
| **Data** | OpenWeatherMap API |

---

## 📂 Project Structure

```text
├── index.html       # Semantic structure & UI container
├── style.css        # Glassmorphism styling & background animations
└── script.js        # API fetching, error handling & dynamic image logic
