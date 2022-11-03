function Calculator() {

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
        { value: "=", className: "symbols green" },
        { value: "+", className: "symbols" },
    ]
    return (
        < div className="container" >
            <section className="monitor">
                <div className="input-data">
                    25*25
                </div>
                <div className="result">
                    625
                </div>
            </section>
            <section className="input-button">
                {inputs.map(
                    ({ value, className }) => 
                        <button className={className} key={value}>{value}</button>
                )}
            </section>
        </div >
    );
}

export default Calculator