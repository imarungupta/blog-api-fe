import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import RouterPages from './routes/RouterPages';




function App() {
  return (
    <div className="App">
      
     <RouterPages/>
    </div>
    
  );
}
export default App;


// const cors = require('cors');
// const app = express();
// const corsOptions ={
//     origin:'http://localhost:8083', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// app.use(cors(corsOptions));