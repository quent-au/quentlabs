import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CaseStudyLayout from './layouts/CaseStudyLayout';
import HomePage from './pages/HomePage';
import CaseStudiesIndexPage from './pages/CaseStudiesIndexPage';
import InstantScriptsCaseStudyPage from './pages/InstantScriptsCaseStudyPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-studies" element={<CaseStudyLayout />}>
          <Route index element={<CaseStudiesIndexPage />} />
          <Route path="instant-scripts" element={<InstantScriptsCaseStudyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
