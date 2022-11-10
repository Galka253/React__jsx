import "./index.css";
import PhotoProfile from "./component/PhotoProfile";
import FullName from "./component/FullName";
import Adress from "./component/Adress";
const App = () => {
  return (
    <div>
      <PhotoProfile />
      <FullName />
      <Adress />
    </div>
  );
};
export default App;
