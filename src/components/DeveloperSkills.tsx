import React from 'react';
import { Button, Heading, PrimaryText } from '@g2i/components'

interface DeveloperSkillsProps {
  backAction: () => void;
  nextAction: () => void;
}
export const DeveloperSkills: React.FC<DeveloperSkillsProps> = ({
  backAction,
  nextAction
}) => {
  return (
    <>
      <Heading tag="h1" size="h1">What skills would you like to see in your hire?</Heading>
      <PrimaryText>Pick as many skills as you need.</PrimaryText>
      <Button onClick={backAction} icon="arrowleftalt">Back</Button>
      <Button filled rounded onClick={nextAction} icon="arrowrightalt">Next</Button>
    </>
  );
}
