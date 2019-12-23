import React from 'react';
import { Button, Heading, PrimaryText } from '@g2i/components'

interface ScheduleIntroCallProps {
  backAction: () => void;
  nextAction: () => void;
}
export const ScheduleIntroCall: React.FC<ScheduleIntroCallProps> = ({
  backAction,
  nextAction
}) => {
  return (
    <>
      <Heading tag="h1" size="h1">Schedule time to talk to us</Heading>
      <PrimaryText>A member of our customer success team would like to jump on a quick call with you to better understand what it is that you’re looking for.</PrimaryText>
      <Button onClick={backAction} icon="arrowleftalt">Back</Button>
      <Button filled rounded onClick={nextAction} icon="arrowrightalt">Next</Button>
    </>
  );
}
