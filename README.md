# AgriVet AI - AI-Powered Agriculture & Livestock Management Platform

A comprehensive full-stack web application that helps farmers and livestock owners with agriculture guidance, animal healthcare, government schemes, disease detection, weather updates, market prices, and expert consultations in Tamil and English.

## 🚀 Features

### Core Modules
- **Authentication System** - JWT-based role-based access (Farmer, Livestock Owner, Expert, Admin)
- **Dashboard** - Personalized with weather widget, schemes, notifications, activities
- **Agriculture Module** - Crop guides, fertilizer recommendations, irrigation management
- **Livestock Management** - Cow, buffalo, goat, sheep, poultry, pet care management
- **Government Schemes** - Dynamic database, eligibility checker, benefits tracking
- **AI Chat Assistant** - Gemini 3 Flash integration with Tamil/English support, voice I/O
- **Disease Detection** - Image-based crop & animal disease detection with AI predictions
- **Weather Dashboard** - Real-time weather, rain prediction, farming alerts
- **Market Prices** - Real-time crop prices with trend charts
- **Vaccination Module** - Schedules, reminders, health tracking
- **Expert Consultation** - Request, tracking, status updates
- **Admin Dashboard** - User, scheme, consultation, analytics management

## 🛠️ Technology Stack

**Frontend:**
- React.js
- Tailwind CSS
- Recharts (for visualizations)
- Axios (API calls)
- React Router (navigation)

**Backend:**
- FastAPI (Python)
- MongoDB
- JWT Authentication
- Google Gemini API
- OpenWeatherMap API
- Google Text-to-Speech

**Deployment:**
- Docker
- MongoDB Atlas
- Render/Railway/Vercel

## 📁 Project Structure

```
agriverse/
├── frontend/                 # React.js application
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   ├── pages/            # Page components
│   │   ├── services/         # API integration
│   │   ├── context/          # Context API state
│   │   ├── styles/           # Tailwind configuration
│   │   └── App.js
│   └── package.json
├── backend/                  # FastAPI application
│   ├── app/
│   │   ├── api/              # API routes
│   │   ├── models/           # MongoDB models
│   │   ├── services/         # Business logic
│   │   ├── middleware/       # Authentication middleware
│   │   ├── config.py         # Configuration
│   │   └── main.py           # FastAPI app
│   ├── requirements.txt
│   └── .env.example
├── docker-compose.yml
├── .gitignore
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ & npm
- Python 3.8+
- MongoDB
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/vaishnavisundar1910-bot/agriverse.git
cd agriverse
```

2. **Frontend Setup**
```bash
cd frontend
npm install
npm start
```

3. **Backend Setup**
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python -m uvicorn app.main:app --reload
```

4. **Environment Variables**
Create `.env` files in frontend and backend directories with required API keys

## 📚 API Documentation

Complete API documentation available at `http://localhost:8000/docs` (Swagger UI)

## 🗄️ Database Schema

MongoDB Collections:
- users
- schemes
- crops
- livestock
- consultations
- diseases
- vaccinations
- notifications
- chat_history
- market_prices

## 🔐 Authentication

JWT-based authentication with role-based access control:
- **Farmer** - Access agriculture and livestock modules
- **Livestock Owner** - Specialized livestock management
- **Expert** - Consultation assignment and expertise
- **Admin** - Full platform management

## 📱 Responsive Design

- Mobile-first approach
- Tablet optimization
- Desktop full experience
- Dark/Light mode support
- Accessible UI (WCAG 2.1)

## 🌐 Multi-Language Support

- English
- Tamil (தமிழ்)

## 📜 License

MIT License

## 👥 Contributors

- Vaishnavi Sundar

## 📞 Support

For issues and feature requests, please open an issue on GitHub.

---

**Status:** 🔧 In Development
