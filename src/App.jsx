import ReactDOM from 'react-dom';
import Pet from './Pet';

const App = () => {
  return (
    <>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Doink" animal="Cat" breed="Mixed" />
    </>
  )
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
