import React from 'react';
import { Button, Heading, PrimaryText } from '@g2i/components'

interface NumberOfDevelopersProps {
  backAction: () => void;
  nextAction: () => void;
}
export const NumberOfDevelopers: React.FC<NumberOfDevelopersProps> = ({
  backAction,
  nextAction
}) => {
  return (
    <>
      <Heading tag="h1" size="h1">How many developers are you looking to hire?</Heading>
      <PrimaryText>You can start with as many developers as you'd like, and hire more later.</PrimaryText>
      <Button onClick={backAction} icon="arrowleftalt">Back</Button>
      <Button filled rounded onClick={nextAction} icon="arrowrightalt">Next</Button>
    </>
  );
}
