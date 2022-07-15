import { useState } from "react";
import CreateButton from "./CreateButton";
import backspace from "../assets/backspace.png";
var op = "";

let regex = /^[/* )( +-]+$/;
let reg = /[+*()/-]/g;
const Calculator = () => {
  const [pastResults, setPastResults] = useState([]);
  const [isDisable, setIsDisable] = useState(false);
  const [operacion, setOperacion] = useState("");
  const [result, setResult] = useState();
  const [lastCal, setLastCal] = useState();

  const handleValue = (e) => {
    var valor = e.target.value;

    valor = valor.toString();
    op += valor;
    if (valor === "/") {
      setOperacion(operacion + "÷");
    } else if (valor === "*") {
      setOperacion(operacion + "x");
    } else {
      setOperacion(operacion + valor);
    }

    console.log(op[0]);
    if (op[0].match(reg)) {
      setOperacion(operacion.slice(0));
      op.slice(0);
    }

    if (!regex.test(op.charAt(op.length - 1))) {
      // console.log(op[0].match(regex));
      setIsDisable(false);
      // console.log(string.match(reg));
      if (op.match(reg)) {
        try {
          let res = eval(op);
          setResult(res);
          // console.log(op);
        } catch (e) {
          return;
        }
      }
    } else {
      setIsDisable(true);
    }
  };

  const del = (e) => {
    var valor = e.target.value;
    if (valor === "one-character") {
      setOperacion(operacion.slice(0, -1));
      op = op.slice(0, -1);

      try {
        let res = eval(op);
        setResult(res);
      } catch (e) {
        return;
      }
    }
    if (valor === "del-all") {
      op = "";
      setOperacion();
      setResult();
    }
  };
  const getResult = () => {
    // alert("jaj");
    setLastCal(operacion);
    setPastResults([...pastResults, operacion]);
    // console.log(pastResults);
    setOperacion(result);

    // setResult();
    setOperacion("");
    op = "";
  };

  return (
    <>
      <h1>Calculator</h1>
      {/* <h5>{lastCal}</h5> */}
      <div className="container-info">
        <h2>{result}</h2>
        <div>{operacion}</div>
      </div>
      <div className="container-calc">
        <div className="container-nums">
          <button
            style={{ backgroundColor: "#989898", color: "black" }}
            onClick={del}
            value="del-all"
          >
            C
          </button>
          <button style={{ backgroundColor: "#989898", color: "black" }}>
            %
          </button>
          <button
            style={{ backgroundColor: "#989898" }}
            onClick={del}
            value="one-character"
          >
            <img src={backspace} alt="" style={{ width: "30px" }} />
          </button>
          <CreateButton handleValue={handleValue} />
          <button onClick={handleValue} value="00">
            00
          </button>
          <button value="0" onClick={handleValue}>
            0
          </button>
          <button onClick={handleValue} value=".">
            .
          </button>
        </div>
        <div className="operators">
          <button
            disabled={isDisable}
            className="operator"
            onClick={handleValue}
            value="/"
          >
            &#247;
          </button>
          <button
            disabled={isDisable}
            className="operator"
            value="*"
            onClick={handleValue}
          >
            x
          </button>
          <button
            disabled={isDisable}
            className="operator"
            value="-"
            onClick={handleValue}
          >
            &#45;
          </button>
          <button
            disabled={isDisable}
            className="operator"
            value="+"
            onClick={handleValue}
          >
            +
          </button>

          <button onClick={getResult} disabled={isDisable} className="operator">
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
