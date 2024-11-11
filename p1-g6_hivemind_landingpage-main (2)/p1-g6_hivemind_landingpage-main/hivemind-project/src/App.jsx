import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/navbar.jsx";
import HeroSection from "./components/herosection.jsx";
import FeaturesSection from "./components/features.jsx";
import Testimonis from "./components/testimonis";
import TeamsSection from "./components/teams.jsx";
import ProductsContent from './components/products.jsx';
import Contact from './pages/Contact.jsx';
import Footer from './components/footer.jsx';

import './index.css';

function App() {
    return (
        <Router>
            <div>
                <NavigationBar />
                <Routes>
                    <Route path="/" element={
                        <>
                            <HeroSection />
                            <Testimonis />
                            <TeamsSection />
                            <FeaturesSection />
                        </>
                    } />
                    <Route path="/products" element={<ProductsContent />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;