import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Chatbot } from "./components/chat/Chatbot";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { LoginPage } from "./pages/LoginPage";
import { MapPage } from "./pages/MapPage";
import { DashboardPage } from "./pages/DashboardPage";
import { AdminDashboard } from "./pages/AdminDashboard";
import { ContactPage } from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />

        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<MapPage />} />
        </Routes>

        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
