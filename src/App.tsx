
// App.tsx
import React from 'react'
import MyFirstComponent from './components/example/myFirstComponent';
import SomeExampleComponent from './components/example/someExampleComponent';

const App: React.FC = () => {
  return (
    <div>
      <MyFirstComponent />
      <SomeExampleComponent />
    </div>
  )
}

export default App