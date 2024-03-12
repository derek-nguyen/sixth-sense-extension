import React from 'react';

interface CompanyInformationProps {
  currentURL: string;
}

const CompanyInformation: React.FC<CompanyInformationProps> = (props) => {
  const { currentURL } = props;

  return (
    <div>
      <h1>Company Information</h1>
      <hr />
      <p>URL: {currentURL}</p>
    </div>
  );
};

export default CompanyInformation;

