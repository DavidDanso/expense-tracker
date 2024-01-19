import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Form from "./components/Form";
import CardSection from "./components/CardSection";
import { TransactionProvider } from "./context/TransactionContext";

//
function App() {
  return (
    <div className="app">
      <TransactionProvider>
        <Header />
        <Form />
        <CardSection />
      </TransactionProvider>
    </div>
  );
}

export default App;
