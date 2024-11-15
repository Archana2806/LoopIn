import './App.css';
import { NavBar } from './components/navbar';
import { Banner } from './components/banner';
import { About } from './components/about';
import { Workout } from './components/workout';
import { Subscription } from './components/subscription';
import { LoopHart } from './components/LoopHart';
import { Footer } from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Workout />
      <Subscription />
      <LoopHart />
      <Footer />
    </div>
  );
}

export default App;
