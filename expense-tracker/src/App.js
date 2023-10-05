import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import Card from './components/Card/Card';

function App() {
  return (
    <div>
      <h1>Lets gets started!</h1>
      <Card className="expenses">
        {
          <Expenses />
        }
      </Card>
    </div>
  );
}

export default App;
