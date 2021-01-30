import React from 'react';

const Main = (props) => {
  return ( 
    <main className={props.container} id={props.id}>
      {props.children}
    </main>
   );
}
 
export default Main;