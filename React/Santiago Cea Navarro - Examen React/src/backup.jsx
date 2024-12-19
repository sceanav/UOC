import { useCallback, useState } from "react";

const App = () => {
    const [price, setPrice] = useState(6);
    const [isChecked, setIsChecked] = useState(false);

    const options = [
        { price: 6, label: "Margarita" },
        { price: 7, label: "Vegetal" },
        { price: 8, label: "Carbonara" },
        { price: 9, label: "Barbacoa" },
    ];

    const sizes = [
        { priceCorrection: -2, label: "Pequeña" },
        { priceCorrection: 0, label: "Mediana" },
        { priceCorrection: 2, label: "Grande" },
    ];

    return (
        <div>
            <p>Seleccione el tipo de pizza: </p>

            <select
                value={price}
                onChange={useCallback(
                    (e) => {
                        setPrice(Number(e.target.value));
                    },
                    [price]
                )}
            >
                {options.map((option) => (
                    <option key={option.price} value={option.price}>
                        {option.label}
                    </option>
                ))}
            </select>

            <form className="radio">
                <h4>Tamaños</h4>
                {sizes.map((mySize) => (
                    <div key={mySize.label}>
                        <input
                            type="radio"
                            name="radio"
                            value={Number(price) + Number(mySize.priceCorrection)}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        {mySize.label}
                    </div>
                ))}
            </form>
            <div>
                <label htmlFor="">
                    <p>Introduce Código Promocional: </p>
                    <input
                        type="text"
                        onChange={(e) => {
                            if (e.target.value === "esfamiao") {
                                setPrice(price * 0.6);
                            }
                        }}
                    />
                </label>
                <div>
                    <label htmlFor="">
                        Entrega a domicilio:
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={(e) => {
                                if (!isChecked) {
                                    setPrice(Number(price) + 4);
                                } else {
                                    setPrice(Number(price) - 4);
                                }
                                setIsChecked(!isChecked);
                            }}
                        />
                    </label>
                </div>
            </div>
            <div>
                <h2>Tu precio es: {price}</h2>
            </div>
        </div>
    );
};

export default App;