import {lazy, Suspense} from 'react';
import './App.css';

function App() {
  const Page = lazy(()=>import('./pagination/Page'))
  return (
    <div className="App">
     <Suspense fallback={<p>loading...</p>} >
      <Page/>
     </Suspense>
    </div>
  );
}

export default App;
