import React from 'react';
import {EventObject, Interpreter} from 'xstate';
import {useService} from '@xstate/react'
import {
  CompanyDetails,
  DeveloperLocation,
  DeveloperSkills,
  HiringType,
  NumberOfDevelopers,
  PersonalDetails, 
  ScheduleIntroCall,
  StartDate,
  TimeCommitment
} from './';

interface StepsProps {
  service: Interpreter<any, any, EventObject>
}

export const Steps: React.FC<StepsProps> = ({ service }) => {
  const [current] = useService(service)

  const backAction = () => null

  const nextAction = () => null

  if (!current) return null

  switch (current.value) {
    case 'steps':
      switch (current.context.step) {
        case 1:
          return (<PersonalDetails nextAction={nextAction}/>)
        case 2:
          return (<CompanyDetails backAction={backAction} nextAction={nextAction}/>)
        case 3:
          return (<NumberOfDevelopers backAction={backAction} nextAction={nextAction}/>)
        case 4:
          return (<HiringType backAction={backAction} nextAction={nextAction}/>)
        case 5:
          return (<TimeCommitment backAction={backAction} nextAction={nextAction}/>)
        case 6:
          return (<StartDate backAction={backAction} nextAction={nextAction}/>)
        case 7:
          return (<DeveloperLocation backAction={backAction} nextAction={nextAction}/>)
        case 8:
          return (<DeveloperSkills backAction={backAction} nextAction={nextAction}/>)
        case 9:
          return (<ScheduleIntroCall backAction={backAction} nextAction={nextAction}/>)
        default:
          return null
      }
    case 'completed':
      return (<span>video</span>)
    default:
      return null
  }
}
