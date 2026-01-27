import ImageBanner from './components/ImageBanner'
import QuoteBox from './components/QuoteBox'
import DailyTarget from './components/DailyTarget';

function App() {
  return (
    <div className="app-container">
      <ImageBanner />
      <div className="title">🌞 Daily Inspiration Board</div>
      <QuoteBox />
      <DailyTarget />
    </div>
  );
}

export default App;
