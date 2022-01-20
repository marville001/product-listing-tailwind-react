import Footer from "./components/Footer";
import Header from "./components/Header";
import ProjectsListing from "./components/ProjectsListing";

function App() {
  return (
    <div className="min-h-[100vh] bg-slate-400">
      <Header />
      <ProjectsListing />
      <Footer />
    </div>
  );
}

export default App;
