import React from 'react';
import './App.css';
import PriceCard from './PriceCard';

function App() {
  const basicPlanFeatures = ['5GB Storage', '10 Email Accounts', '24/7 Support'];
  const premiumPlanFeatures = ['20GB Storage', '50 Email Accounts', 'Priority Support'];

  return (
    <div className="App">
      <PriceCard plan="Free" price="0" features={basicPlanFeatures} />
      <PriceCard plan="Plus" price="9" features={basicPlanFeatures} />
      <PriceCard plan="Pr0" price="49" features={premiumPlanFeatures} />
    </div>
  );
}

export default App;