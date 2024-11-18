import './App.css';
import { NavBar } from './components/navbar';
import { Banner } from './components/banner';
import { About } from './components/about';
import { Workout } from './components/workout';
import { Subscription } from './components/subscription';
import { LoopHart } from './components/LoopHart';
import { Footer } from './components/footer';

import { Seller } from './components/seller';
import { SellerNavBar } from './components/seller_navbar';
import { SellerLogin } from './components/sellerlogin.js';
import { SRegister } from './components/sregister.js';
import { GstPage } from './components/GSTPage.js';
import { SellerDetails } from './components/sellerdetails.js';
import { ShipPreference } from './components/ship_pref.js';
import { BankDetails } from './components/bankdetails.js';
import { ProductUpload } from './components/productupload.js';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Home page */}
          <Route 
            path="/" 
            element={
              <>
                <NavBar />
                <Banner />
                <About />
                <Workout />
                <Subscription />
                <LoopHart />
                <Footer />
              </>
            } 
          />

          {/* Seller page */}
          <Route 
            path="/seller" 
            element={
              <>
                <SellerNavBar />
                <Seller />
                <Footer />
              </>
            } 
          />

          <Route path="/sellerlogin" element={<SellerLogin />} />
          <Route path="/sregister" element={<SRegister />} />
          <Route path="/GSTPage" element={<GstPage />} />
          <Route path="/sellerdetails" element={<SellerDetails />} />
          <Route path="/ship_pref" element={<ShipPreference />} />
          <Route path="/bankdetails" element={<BankDetails />} />
          
          {/* Product Upload page */}
          <Route 
            path="/productupload" 
            element={
              <>
                <SellerNavBar />
                <ProductUpload />
                <Footer />
              </>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


