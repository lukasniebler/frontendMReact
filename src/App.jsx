import ReactDOM from 'react-dom';
import SearchParams from './SearchParams';


const App = () => {
  return (
    <>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </>
  )
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
