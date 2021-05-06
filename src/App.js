import './App.css';
import ContactForm from "./contactform";

function App() {
  return (
    <div className="container">
      <div className="col-md-6 offset-md-3">
    <header>
      <h1>Enquiry form</h1>
    </header>
    <ContactForm></ContactForm>
    </div>
    </div>
  );
}

export default App;
