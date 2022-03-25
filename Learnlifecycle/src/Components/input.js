// import React from 'react'

// function input({setTest}) {
//   console.log('input');
//   return (
//       <>
//         <input onChange={(e) => {
//             // console.log(e.target.value);
//             setTest(e.target.value);
//         }} />
//       </>
//   )

// }

// // const InputMemo = React.memo(input);
// // export default InputMemo
// export default input;

import React from "react";

export default function Input({ press }) {
  return <input onChange={(e) => press(e.target.value)} />;
}