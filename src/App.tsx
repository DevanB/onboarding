import { GlobalStyle, theme } from '@g2i/components';
import {useMachine} from '@xstate/react';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {
  Logo,
  Sidebar,
  Steps,
} from './components';
import machine from './machine';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const App: React.FC = () => {
  const appState = localStorage.getItem('app-state');
  const persistedState = appState ? JSON.parse(appState) : '';
  const [current, send, service] = useMachine(machine, {
    state: persistedState
  });

  const nextAction = () => send("NEXT")

  const confirmClose = (event: any) => {
    event.preventDefault();
    const confirmed = window.confirm('Are you sure you want to navigate away from the page');
    if (confirmed) saveState();
    event.returnValue = '';
    return;
  }

  React.useEffect(() => {
    window.addEventListener('beforeunload', confirmClose);
    return () => {
      window.removeEventListener('beforeunload', confirmClose);
    }
  })

  const resetState = () => {
    try {
      localStorage.removeItem('app-state')
    } catch (e) {
      console.error(e)
    }
  }

  const saveState = () => {
    const jsonState = JSON.stringify(current)
    try {
      localStorage.setItem('app-state', jsonState)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <>
          <Logo/>
          <span>progress</span>
        </>
        <>
          <Sidebar service={service} />
          <Steps service={service} />
        </>
        <button onClick={saveState}>Save</button>
        <button onClick={nextAction}>Next</button>
        <button onClick={resetState}>Reset</button>
      </Container>
    </ThemeProvider>
  )
}

export default App;
