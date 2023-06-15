import './App.css';
import Graph from './Components/Graph/Graph';
import Header from './Components/Header/Header';
import { velocity } from './Data/Velocity';
import { userStoryAcceptance } from './Data/UserStoryAcceptance';
import { velocityVariance } from './Data/VelocityVariance';
import { reviewEffectiveness } from './Data/ReviewEffectiveness';
import { defectRemovalEfficiency } from './Data/DefectRemovalEfficiency';
import { sprintStretchFactor } from './Data/SprintStretchFactor';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='graphs'>
        <Graph data={velocity} name="Velocity" goal={27}/>
        <Graph data={userStoryAcceptance} name="User Story Acceptance" goal={94.86}/>
        <Graph data={velocityVariance} name="Velocity Variance" goal={0}/>
        <Graph data={reviewEffectiveness} name="Review Effectiveness" goal={39.96}/>
        <Graph data={defectRemovalEfficiency} name="Defect Removal Efficiency" goal={85.97}/>
        <Graph data={sprintStretchFactor } name="Sprint Stretch Factor" goal={3.96}/>
      </div>
    </div>
  );
}

export default App;
