
import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";
import Grade from "./pages/Grade";
import Subject from "./pages/Subject";
import Section from "./pages/Section";
import SelectTeacher from "./pages/SelectTeacher";
import Content from "./pages/Content";


function App() {
  return (

          <MainLayout>
            <Home/>
              <Grade/>
              <Subject/>
              <Section/>
              <SelectTeacher/>
              <Content/>

          </MainLayout>


  );
}

export default App;
