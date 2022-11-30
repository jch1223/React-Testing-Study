import { useState } from "react";
import CompletePage from "./pages/CompletePage/CompletePage";
import OrderPage from "./pages/OrderPage/OrderPage";
import SummaryPage from "./pages/SummaryPage/SummaryPage";

function App() {
  const [step, setStep] = useState(0);

  return (
    <div className="App" style={{ padding: "4rem" }}>
      {step === 0 && <OrderPage setStep={setStep} />}
      {step === 1 && <SummaryPage setStep={setStep} />}
      {step === 2 && <CompletePage />}
    </div>
  );
}

export default App;
