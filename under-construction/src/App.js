
import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web'

function App() {

  const container = useRef(null);

  useEffect(()=> {
      lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('./ani.json')
      })
  }, [])

  return (
    <div className="App">
     <p>
       THIS SITE IS
     </p>
     <p>
        UNDER DEVELOPMENT
     </p> 
     <div className="container" ref={container}></div>
    </div>
  );
}

export default App;
