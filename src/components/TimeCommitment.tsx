import React from 'react';
import { Button, Heading, PrimaryText } from '@g2i/components'

interface TimeCommitmentProps {
  backAction: () => void;
  nextAction: () => void;
}
export const TimeCommitment: React.FC<TimeCommitmentProps> = ({
  backAction,
  nextAction
}) => {
  return (
    <>
      <Heading tag="h1" size="h1">What level of time commitment are you looking for?</Heading>
      <PrimaryText>We offer developers on full-time and part-time basis for as long as you need.</PrimaryText>
      <Button onClick={backAction} icon="arrowleftalt">Back</Button>
      <Button filled rounded onClick={nextAction} icon="arrowrightalt">Next</Button>
    </>
  );
}
