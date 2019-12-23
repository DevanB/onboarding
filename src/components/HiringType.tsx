import React from 'react';
import { Button, Heading, PrimaryText } from '@g2i/components'

interface HiringTypeProps {
  backAction: () => void;
  nextAction: () => void;
}
export const HiringType: React.FC<HiringTypeProps> = ({
  backAction,
  nextAction
}) => {
  return (
    <>
      <Heading tag="h1" size="h1">What sort of arrangement are you looking for?</Heading>
      <PrimaryText>You can chose to hire remote developers on contract and direct hire basis, and hire the developer directly full-time later if you both agree on it.</PrimaryText>
      <Button onClick={backAction} icon="arrowleftalt">Back</Button>
      <Button filled rounded onClick={nextAction} icon="arrowrightalt">Next</Button>
    </>
  );
}
