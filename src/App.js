import './App.css';
import Singletag from './singletag';
import Eventbtn from './eventbtn';
import Props from './props';
import Hookstate from './hooks-state';
import Hookstate2 from './hookstate2';
import Hookefect from './hook-effect';
import Hookeffect2 from './hook-effect2';
import Fecthproject from './fecthproject';
function App() {
  let title="RAJ"
  return (
    <div className="p">
        {/* <Eventbtn/> */}
        {/* <Singletag/> */}
        {/* <Props name="pavan" name1={title}/> */}
        {/* <Hookstate/> */}
        {/* <Hookstate2/> */}
        {/* <Hookefect/> */}
        {/* <Hookeffect2/> */}
        <Fecthproject/>
    </div>
  );
}

export default App;