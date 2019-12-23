import React from 'react';
import { Button, Heading, PrimaryText } from '@g2i/components'

interface StartDateProps {
  backAction: () => void;
  nextAction: () => void;
}
export const StartDate: React.FC<StartDateProps> = ({
  backAction,
  nextAction
}) => {
  return (
    <>
      <Heading tag="h1" size="h1">When are you looking to start?</Heading>
      <PrimaryText>We take pride in quick turnaround time, if it's necessary.</PrimaryText>
      <Button onClick={backAction} icon="arrowleftalt">Back</Button>
      <Button filled rounded onClick={nextAction} icon="arrowrightalt">Next</Button>
    </>
  );
}
