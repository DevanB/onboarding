import {assign, Machine} from 'xstate';

export default Machine(
  {
    id: 'onboarding',
    initial: 'steps',
    context: {
      maximumSteps: 9,
      step: 1,
    },
    states: {
      steps: {
        on: {
          '': {
            target: 'completed',
            cond: 'allStepsCompleted'
          },
          BACK: {
            actions: 'decrementStep'
          },
          NEXT: {
            actions: 'incrementStep'
          }
        }
      },
      completed: {
        type: 'final'
      }
    }
  },
  {
    actions: {
      decrementStep: assign((ctx) => ({
        step: ctx.step - 1
      })),
      incrementStep: assign((ctx) => ({
        step: ctx.step + 1
      })),
    },
    guards: {
      allStepsCompleted: ctx => {
        return (
          ctx.step === (ctx.maximumSteps + 1) && true
        )
      },
    }
  }
);

