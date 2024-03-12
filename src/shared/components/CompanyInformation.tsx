import React from 'react';

interface CompanyInformationProps {
  currentURL: string;
}

const CompanyInformation: React.FC<CompanyInformationProps> = ({ currentURL }) => {
  return (
    <div>
      <h1>Company Information</h1>
      <p>Company URL: {currentURL}</p>
    </div>
  );
};

export default CompanyInformation;
