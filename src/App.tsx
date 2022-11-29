
// App.tsx
import React from 'react'
import ClickCount from './components/clickcounter/clickCount';
import MyFirstComponent from './components/example/myFirstComponent';
import SomeExampleComponent from './components/example/someExampleComponent';

const App: React.FC = () => {
  return (
    <div>
      <MyFirstComponent />
      <SomeExampleComponent />
      <ClickCount/>
    </div>
  )
}

export default App