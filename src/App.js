import React from "react";
import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from "./components/index.js";

const App = () => (
  <div className="bg-gray-900 w-full overflow-hidden">
    <div>
      <Navbar />
    </div>

    <div>
      <Hero />
    </div>

    <div>
      <Stats />
      <Business />
      <div id="product">
        <Billing />
        <CardDeal />
      </div>
      <div id="clients">
        <Testimonials />
        <Clients />
      </div>
      <CTA />
      <Footer />
    </div>
  </div>
);

export default App;
