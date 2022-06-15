import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Login';
import Dash from './Dash';

const urlParam = new URLSearchParams(window.location.search).get("urlParam")

function App() {
  return urlParam ? <Dash urlParam={urlParam}/> : <Login/>
}

export default App;
