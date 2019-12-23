import React from 'react';
import { Button, Heading, PrimaryText } from '@g2i/components'

interface DeveloperLocationProps {
  backAction: () => void;
  nextAction: () => void;
}
export const DeveloperLocation: React.FC<DeveloperLocationProps> = ({
  backAction,
  nextAction
}) => {
  return (
    <>
      <Heading tag="h1" size="h1">Where can the developer be located?</Heading>
      <PrimaryText>We only work with developers based close to the US. You can select multiple locations.</PrimaryText>
      <Button onClick={backAction} icon="arrowleftalt">Back</Button>
      <Button filled rounded onClick={nextAction} icon="arrowrightalt">Next</Button>
    </>
  );
}
