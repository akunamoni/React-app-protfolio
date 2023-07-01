import React, { useState } from 'react';
import ReactDOM from 'react-dom';

enum PricingOption {
  Monthly = 'monthly',
  Annually = 'annually',
}

interface PricingCardProps {
  title: string;
  month?:string;
  year?:string;
  priceMonthly: string;
  priceAnnually: string;
  features: string[];
}


const PricingCard: React.FC<PricingCardProps> = ({
  title,
  month,
  year,
  priceMonthly,
  priceAnnually,
  features,
}) => {
  const [selectedOption, setSelectedOption] = useState<PricingOption>(
    PricingOption.Monthly
  );

  const handleOptionChange = (option: PricingOption) => {
    setSelectedOption(option);
  };
  


  return (
    <div className="width-300 px-4">
      <div className="bg-transparent rounded-lg  p-6">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className='break-normal w-48 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
        <div className="flex justify-center">
          <div className="flex items-center mb-4">
            <span
              className={`text-3xl font-semibold mr-1 ${
                selectedOption === PricingOption.Monthly ? 'text-indigo-500' : ''
              }`}
            >
              {selectedOption === PricingOption.Monthly
                ? priceMonthly
                : priceAnnually}
            </span>
            <span className="">
            {selectedOption === PricingOption.Monthly ? month : year}
            </span>
          </div>
        </div>
        <ul className="mb-6 list-disc font-medium pl-2.5">
          {features.map((feature, index) => (
            <li key={index} className=" mb-2">
              {feature}
            </li>
          ))}
        </ul>
        <button className='border py-2.5 px-6 border-purple-600 rounded-md'>Strat Free Trial</button>
      </div>
    </div>
  );
};

export default PricingCard;


