import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import More from "./components/More";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router basename="/">
      <Navbar />

      <main className="text-gray-400 bg-gray-900 body-font h-screen">
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/more" component={More} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/testimonials" component={Testimonials} />
          <Route exact path="/contact" component={Contact} />
        </Switch>

        <Footer />
      </main>
    </Router>
  );
};

export default App;
