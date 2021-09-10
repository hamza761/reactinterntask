import { Header } from "./components/header";
import { HolidaysCalendar } from "./components/calendar";
import "./App.css";
function App() {
  return (
      <div className="App">
        <Header title="Cool Internship Task" />
        <section>
          <HolidaysCalendar />
        </section>
      </div>
  );
}

export default App;
