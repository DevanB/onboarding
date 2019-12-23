import { Heading, PrimaryText } from '@g2i/components';
import { useService } from '@xstate/react'
import React from 'react';
import { useTranslation } from 'react-i18next'
import { EventObject, Interpreter } from 'xstate'

interface SidebarProps {
  service: Interpreter<any, any, EventObject>
}

export const Sidebar: React.FC<SidebarProps> = ({service}) => {
  const {t} = useTranslation()
  const [current] = useService(service)

  switch (current.value) {
    case 'steps': 
      return (
        <>
          <Heading tag="h1" size="h1">{t('Sign-Up')}</Heading>
          <PrimaryText>{t('sidebar.steps-description')}</PrimaryText>
        </>
      )
    case 'completed': 
      return (
        <>
          <Heading tag="h1" size="h1">{t('Thank-You')}</Heading>
          <PrimaryText>{t('sidebar.completed-description')}</PrimaryText>
        </>
      )
    default: 
      return null
  }
}
