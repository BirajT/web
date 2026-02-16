# Futsal Booking System - Frontend

A complete React frontend application for the Futsal Booking System.

## 🚀 Features

### User Features
- ✅ User Registration & Login
- ✅ Browse Futsal Courts with Search & Filters
- ✅ View Futsal Details
- ✅ Book Time Slots with Conflict Detection
- ✅ View & Manage Bookings
- ✅ User Profile Management
- ✅ Change Password

### Owner Features
- ✅ Add New Futsal Courts
- ✅ Upload Court Images
- ✅ Manage Court Information

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Backend server running on `http://localhost:8080`

## 🛠️ Installation

1. Navigate to the frontend directory:
```bash
cd "Futsal frontend"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

## 📁 Project Structure

```
Futsal frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── FutsalCard.js
│   │   └── PrivateRoute.js
│   ├── context/
│   │   └── AuthContext.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Login.js
│   │   ├── Register.js
│   │   ├── FutsalDetails.js
│   │   ├── MyBookings.js
│   │   ├── Profile.js
│   │   └── AddFutsal.js
│   ├── services/
│   │   └── api.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🔧 Configuration

The API base URL is configured in `src/services/api.js`:
```javascript
const API_BASE_URL = 'http://localhost:8080/api';
```

Change this if your backend is running on a different port or domain.

## 📱 Pages & Routes

- `/` - Home page with futsal listings
- `/login` - User login
- `/register` - User registration
- `/futsal/:id` - Futsal details and booking
- `/my-bookings` - User's bookings (Protected)
- `/profile` - User profile (Protected)
- `/add-futsal` - Add new futsal court (Protected)

## 🎨 Features Breakdown

### Home Page
- Search futsals by name or address
- Filter by price range
- Pagination support
- Responsive grid layout

### Futsal Details
- View complete futsal information
- Real-time price calculation
- Book time slots
- Conflict detection

### My Bookings
- View all bookings
- Booking status tracking
- Cancel bookings
- Payment status

### Profile
- View user information
- Change password
- Account details

### Add Futsal
- Add new futsal courts
- Upload images
- Set pricing and timings

## 🔐 Authentication

The app uses JWT token-based authentication:
- Tokens are stored in localStorage
- Automatic token inclusion in API requests
- Protected routes redirect to login
- Logout clears all stored data

## 🎯 API Integration

All API calls are handled through the `services/api.js` file:
- Automatic token management
- Centralized error handling
- Axios interceptors for requests

## 📦 Dependencies

- `react` - UI library
- `react-router-dom` - Routing
- `axios` - HTTP client
- `react-scripts` - Build tools

## 🚀 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 🎨 Styling

The app uses custom CSS with:
- Responsive design
- Mobile-first approach
- Consistent color scheme
- Smooth transitions and animations

## 🔄 State Management

- React Context API for authentication
- Local state for component-specific data
- No external state management library needed

## 📝 Notes

- Make sure the backend server is running before starting the frontend
- Default backend URL is `http://localhost:8080/api`
- Images are uploaded to Cloudinary through the backend
- All protected routes require authentication

## 🐛 Troubleshooting

### CORS Issues
If you encounter CORS errors, make sure your backend has CORS enabled for `http://localhost:3000`

### API Connection Failed
- Verify backend is running on port 8080
- Check API_BASE_URL in `src/services/api.js`
- Ensure MongoDB is connected

### Image Upload Issues
- Check file size (max 5MB)
- Verify Cloudinary credentials in backend
- Ensure file format is supported (jpg, png, jpeg, webp)

## 📄 License

This project is part of the Futsal Booking System.
