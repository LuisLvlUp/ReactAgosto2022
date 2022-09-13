export const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return state + 1;
      case 'decrement':
        return state - 1;
      case 'reset':
        return action.reset;
      default:
        throw new Error();
    }
  }
  