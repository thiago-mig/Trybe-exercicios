
import './App.css';

const textJSX = 'Hello, JSX';
const element = <h1>{textJSX}</h1>

function App() {
  return (
    <>
    <h1>Hello World!</h1>
    {element};
    </>
  );
}

export default App;
