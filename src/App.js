import './App.css';
import * as moment from 'moment';

import WeekDays from './components/WeekDays/WeekDays';
import TimeLine from './components/TimeLine/TimeLine';
import ItemsGrid from './components/ItemsGrid/ItemsGrid';

function App() {
  const weekDays = Array.from({length: 7}, (_, i) => moment().add(i, "days").format("DD dddd"));

  const quarterHours = ["00","30"];
  let times = [];
  for(let i = 0; i < 24; i++){
    for(let j = 0; j < 2; j++){
      times.push(i + ":" + quarterHours[j]);
    }
  }

  let items = [];
  for(let t = 0; t < 48; t++){
    for(let d = 0; d < 7; d++){
      items.push({
        day: weekDays[d],
        time: times[t]
      });
    }
  }

  console.log(items);
  return (
    <div className="App">
      <WeekDays days={weekDays} />

      <ItemsGrid items={items} />

      <TimeLine times={times} />
    </div>
  );
}

export default App;
