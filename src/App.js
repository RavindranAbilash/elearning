
import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";
import Grade from "./pages/Grade";
import Subject from "./pages/Subject";
import Section from "./pages/Section";


function App() {
  return (

          <MainLayout>
            <Home/>
              <Grade/>
              <Subject/>
              <Section/>

          </MainLayout>


  );
}

export default App;
