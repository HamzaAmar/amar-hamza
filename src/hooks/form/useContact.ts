// import React from 'react';

// function fetchReducer(state: State, action: Action): State {
//   switch (action.type) {
//     case 'fetching': {
//       return { data: null, error: null, status: 'loading' };
//     }
//     case 'fetched': {
//       return { data: action.data, error: null, status: 'success' };
//     }
//     case 'error': {
//       return { data: null, error: action.error, status: 'error' };
//     }
//     default:
//       throw new Error(`Unsupported type`);
//   }
// }

// const handleSubmit =
//   (dispatch: React.Dispatch<Action>) =>
//   async (values: InitialValue, event: React.FormEvent) => {
//     event.preventDefault();
//     dispatch({ type: 'fetching' });
//     try {
//       const response = await fetch('/api/contact', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(values),
//       });
//       const { data } = await response.json();
//       if (response.ok) {
//         dispatch({ type: 'fetched', data });
//       }
//     } catch (error) {
//       dispatch({
//         type: 'error',
//         error: error as Error,
//       });
//     }
//   };
// const useContact = () => {
//   const [state, dispatch] = React.useReducer(fetchReducer, {
//     data: null,
//     error: null,
//     status: 'idle',
//   });

//   const handleContact = handleSubmit(dispatch);

//   return { state, handleContact };
// };

// export default useContact;
