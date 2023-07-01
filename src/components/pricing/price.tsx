import React from 'react';
import PricingCard  from './pricing';


const pricecard: React.FC = () => {
    const pricingOptions = [
      {
        title: 'Basic',
        priceMonthly: '$9',
        priceAnnually: '$99',
        features: ['5 Projects', '10 GB Storage', 'Unlimited Users'],
      },
      {
        title: 'Pro',
        priceMonthly: '$19',
        priceAnnually: '$199',
        features: ['20 Projects', '50 GB Storage', 'Unlimited Users'],
      },
      {
        title: 'Enterprise',
        priceMonthly: '$99',
        priceAnnually: '$999',
        features: ['Unlimited Projects', '1 TB Storage', 'Unlimited Users'],
      },
    ];
  
    return (
      <div className="flex flex-wrap -mx-4">
        {pricingOptions.map((option, index) => (
          <PricingCard key={index} {...option} />
        ))}
      </div>
    );
  };


  export default pricecard;