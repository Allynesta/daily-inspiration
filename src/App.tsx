import ImageBanner from './components/ImageBanner'
import QuoteBox from './components/QuoteBox'
import DailyTarget from './components/DailyTarget';
import TargetHistory from "./components/TargetHistory";
import StreakCounter from "./components/StreakCounter";


function App() {
  return (
    <div className="app-container">
      <ImageBanner />
      <div className="title">✨ One Thing Today</div>
      <p style={{ marginTop: "-10px", color: "#666" }}>
        Start your day with focus. Do one thing that matters.
      </p>
      <StreakCounter />
      <QuoteBox />
      <DailyTarget />
      <TargetHistory />
    </div>
  );
}

export default App;
