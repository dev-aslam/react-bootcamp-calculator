import { useState } from "react";

function Calculator() {

    const [input, setInput] = useState(0);
    const [output, setOutput] = useState(0);
    const [lastInput, setLastInput] = useState(false);
    const [power, setPower] = useState(false);
    let result=0;
    const inputs = [
        { value: 7, className: "numbers" },
        { value: 8, className: "numbers" },
        { value: 9, className: "numbers" },
        { value: "/", className: "symbols" },
        { value: 4, className: "numbers" },
        { value: 5, className: "numbers" },
        { value: 6, className: "numbers" },
        { value: "*", className: "symbols" },
        { value: 1, className: "numbers" },
        { value: 2, className: "numbers" },
        { value: 3, className: "numbers" },
        { value: "-", className: "symbols" },
        { value: ".", className: "numbers" },
        { value: 0, className: "numbers" },
        { value: "=", className: "equals" },
        { value: "+", className: "symbols" },
    ]

    function onInput(value, type) {
        console.log(output);
        if(output !==0) setOutput(0);
        if (type === "equals") {
            try {
                result = eval(input);
                setOutput(result);
                return
            } catch (error) {
                alert("invalid input");
                return
            }
        }
        if (input === 0 && type === "numbers") {
            setInput(value);
            return
        }
        if (lastInput && type === "symbols") return;
        setLastInput(type === "symbols");
        setInput(input + "" + value);
    }

    function reset() {
        setInput(0);
        setOutput(0);
        setLastInput(false);
    }

    function powerCheck() {
        reset();
        setPower(!power);
    }

    return (
        < div className="container" >
            <section className="monitor">
                {power &&
                    <div className="input-data">
                        {input}
                    </div>}
                {power &&
                    <div className="result">
                        {output}
                    </div>}
            </section>
            <section className="controls">
                <button className="control-btn" onClick={() => reset()}>CE</button>
                <button className="control-btn" onClick={() => powerCheck()}>{power ? "OFF" : "ON"}</button>
            </section>
            <section className="input-buttons">
                {inputs.map(
                    ({ value, className }) =>
                        <button onClick={() => onInput(
                            value,
                            className
                        )} className={className} key={value}>{value}</button>
                )}
            </section>
        </div >
    );
}

export default Calculator
