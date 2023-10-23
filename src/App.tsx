import { Container, Content } from "./styles/styles";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { useState } from "react";

function App() {
  const [displayNumber, setDisplayNumber] = useState<string>("");
  const [storedNumber, setStoredNumber] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);

  function handleAddNumber(value: number) {
    setDisplayNumber((prevState) => `${prevState}${value}`);
  }

  function handleAddNumberDot() {
    setDisplayNumber((prevState) => `${prevState}.`);
  }

  function handleOperationTypes(type: string) {
    if (storedNumber === null) {
      setStoredNumber(Number(displayNumber));
      setDisplayNumber("");
      setOperation(type);
    }
  }

  function handleEquals() {
    let result;

    switch (operation) {
      case "+":
        result = storedNumber! + Number(displayNumber);
        break;
      case "—":
        result = storedNumber! - Number(displayNumber);
        break;
      case "x":
        result = storedNumber! * Number(displayNumber);
        break;
      case "%":
        result = storedNumber! * (Number(displayNumber) / 100);
        break;
      case "÷":
        result = storedNumber! / Number(displayNumber);
    }
    setDisplayNumber(result!.toString());
    setOperation(null);
  }

  function handleCalculation(label: string | number) {
    if (typeof label === "number") {
      handleAddNumber(label);
    } else {
      switch (label) {
        case "C":
          setDisplayNumber("");
          setStoredNumber(null);
          break;
        case "+":
          handleOperationTypes("+");
          break;
        case "—":
          handleOperationTypes("—");
          break;
        case "x":
          handleOperationTypes("x");
          break;
        case "%":
          handleOperationTypes("%");
          break;
        case "÷":
          handleOperationTypes("÷");
          break;
        case ".":
          handleAddNumberDot();
          break;
        case "=":
          handleEquals();
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={displayNumber} />
        <div className="button-container">
          <div className="row">
            {["C", "%", "÷"].map((label) => (
              <Button
                key={label}
                label={label}
                onClick={() => handleCalculation(label)}
              />
            ))}
          </div>
          <div className="row">
            {[7, 8, 9, "x"].map((label) => (
              <Button
                key={label}
                label={label}
                onClick={() => handleCalculation(label)}
              />
            ))}
          </div>
          <div className="row">
            {[4, 5, 6, "—"].map((label) => (
              <Button
                key={label}
                label={label}
                onClick={() => handleCalculation(label)}
              />
            ))}
          </div>
          <div className="row">
            {[1, 2, 3, "+"].map((label) => (
              <Button
                key={label}
                label={label}
                onClick={() => handleCalculation(label)}
              />
            ))}
          </div>
          <div className="row">
            {[0, ".", "="].map((label) => (
              <Button
                key={label}
                label={label}
                onClick={() => handleCalculation(label)}
              />
            ))}
          </div>
        </div>
      </Content>
    </Container>
  );
}

export default App;
