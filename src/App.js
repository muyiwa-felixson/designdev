import './App.css';
import Layout from './layout';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ButtonPresentation from './presentation/button';
import DocumentationPresentation from './presentation/documentation.core';
import DocumentationSystem from './presentation/documentation.system';
import DemoPage1 from './presentation/demo_page';

function App() {
  
  return (
    <Layout>
       <Router>
      <Routes>
        <Route exact path="/" element={<ButtonPresentation />}></Route>
        <Route exact path="/documentation/core" element={<DocumentationPresentation />}></Route>
        <Route exact path="/documentation/system" element={<DocumentationSystem />}></Route>
        <Route exact path="/demo" element={<DemoPage1 />}></Route>
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
