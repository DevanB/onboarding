import React from 'react';
import { Button, Heading, PrimaryText } from '@g2i/components'

interface CompanyDetailsProps {
  backAction: () => void;
  nextAction: () => void;
}
export const CompanyDetails: React.FC<CompanyDetailsProps> = ({
  backAction,
  nextAction
}) => {
  return (
    <>
      <Heading tag="h1" size="h1">Please also tell us about your company</Heading>
      <PrimaryText>We work with a wide range of clients - from small startups to Fortune 500 companies.</PrimaryText>
      <Button onClick={backAction} icon="arrowleftalt">Back</Button>
      <Button filled rounded onClick={nextAction} icon="arrowrightalt">Next</Button>
    </>
  );
}
