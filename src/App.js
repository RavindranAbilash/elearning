
import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";
import Grade from "./pages/Grade";
import Subject from "./pages/Subject";


function App() {
  return (

          <MainLayout>
            <Home/>
              <Grade/>
              <Subject/>

          </MainLayout>


  );
}

export default App;
