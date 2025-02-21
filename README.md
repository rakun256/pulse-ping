# PulsePing 🚀
A modern, lightweight ping monitoring application built with React, Firebase, and Axios. PulsePing allows users to track the availability of websites in real time, manage monitored URLs, and receive visual feedback on uptime status.

## ✨ Features
    - 🔐 Secure Authentication – Powered by Firebase Authentication
    - 📡 Real-Time Ping Monitoring – Track website availability
    - 📊 User-Specific Data – Each user sees and manages only their own monitored URLs
    - ⚡ Fast and Modular – React components with scoped CSS for maintainability
    - 🎨 Theme Support – Light & dark mode toggle

## 📂 Project Structure
```
pulse-ping/
│── src/
│   ├── components/         # UI components
│   │   ├── Card/           
│   │   │   ├── Card.js         # Individual URL status card
│   │   │   ├── Card.css        # Custom CSS for the Card component
│   │   ├── StatusIndicator/
│   │   │   ├── StatusIndicator.js  # Status indicator (Green/Red)
│   │   │   ├── StatusIndicator.css  # Custom CSS for the status indicator
│   │   ├── Controls/
│   │   │   ├── Controls.js     # Play & Stop buttons
│   │   │   ├── Controls.css    # Custom CSS for buttons
│   │   ├── InputField/
│   │   │   ├── InputField.js   # URL input field
│   │   │   ├── InputField.css  # Custom CSS for the input field
│   │   ├── FloatingButton/
│   │   │   ├── FloatingButton.js  # FAB button
│   │   │   ├── FloatingButton.css  # Custom CSS for the FAB button
│   │   ├── Header/
│   │   │   ├── Header.js       # Application title
│   │   │   ├── Header.css      # Custom CSS for the title
│   │   ├── Toast/
│   │   │   ├── Toast.js        # Notifications and error messages
│   │   │   ├── Toast.css       # Custom CSS for notifications
│   │   ├── ThemeToggle/
│   │   │   ├── ThemeToggle.js  # Light/Dark mode toggle
│   │   │   ├── ThemeToggle.css # Custom CSS for theme toggler
│   ├── pages/              # Page-based components
│   │   ├── Home/
│   │   │   ├── Home.js         # Home page (Lists all pings)
│   │   │   ├── Home.css        # Custom CSS for the Home page
│   │   ├── Login/
│   │   │   ├── Login.js        # User login page
│   │   │   ├── Login.css       # Custom CSS for the Login page
│   │   ├── Dashboard/
│   │   │   ├── Dashboard.js    # Page where users manage their own pings
│   │   │   ├── Dashboard.css   # Custom CSS for the Dashboard page
│   ├── services/           # Firebase and API operations
│   │   ├── api.js          # API layer handling ping requests (Axios)
│   │   ├── firebase.js     # Firebase connection and authentication settings
│   ├── context/            # Global state management (Auth & Ping Context)
│   │   ├── AuthContext.js  # Firebase user session management
│   │   ├── PingContext.js  # User-based ping management
│   ├── hooks/              # Custom hooks (State and effect management)
│   │   ├── usePing.js      # Custom hook for ping operations
│   │   ├── useAuth.js      # Custom hook for Firebase auth operations
│   ├── App.js              # Main application component
│   ├── index.js            # Root component
│── firebase-config.json    # Firebase API key and other settings (Should be added to .gitignore for security)
│── package.json            # Dependencies and scripts
│── .gitignore              # List of unnecessary files
```

## 🛠️ Interesting Techniques & Libraries
### React Context API for Global State
    - The project uses the React Context API to manage authentication and ping data efficiently.
### Axios for API Requests
    - Instead of the Fetch API, the project leverages Axios for cleaner and more efficient HTTP requests.
### Firebase Firestore for User-Specific Data
    - Each user's monitored URLs are stored in Firebase Firestore, ensuring real-time updates and secure, user-specific data.
### Scoped CSS for Component Isolation
    - Every component has its own CSS file, preventing unintended style conflicts and improving maintainability.
### React Router for Navigation
    - Page navigation is handled using React Router, making it easy to switch between Login, Dashboard, and Home views.

## 📦 Notable Dependencies
### Package	Description
### React	Core UI framework
### React Router	Handles navigation
### Firebase	Authentication & Firestore database
### Axios	API requests
### FontAwesome	Icons for UI elements

## 🎨 Fonts & Design
    - Primary Font: Inter (Loaded via Google Fonts)
    - Color Palette:
        - Primary Blue: #007bff
        - Dark Mode Background: #121212
        - Success (Online): #28a745
        - Error (Offline): #dc3545