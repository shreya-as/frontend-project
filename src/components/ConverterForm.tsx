"use client"; // This is a client component

import React, { useState, ChangeEvent } from "react";

const ConverterForm: React.FC = () => {
  const [nepAmount, setNepAmount] = useState<string | number>(""); // state to store nep amount
  const [busdAmount, setBusdAmount] = useState<string | number>(""); // state to store busd amount

  const convertAmount = (value: number, isNepToBusd: boolean) => {
    const ratio = 3; // 1 NEP is equal to 3 BUSD
    return isNepToBusd
      ? (value * ratio).toFixed(2)
      : (value / ratio).toFixed(2);
  };
  // handle nep change
  const handleNepChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    const nepValue = parseFloat(value);
    setNepAmount(nepValue);
    setBusdAmount(convertAmount(nepValue, true));
  };

  // handle busd change
  const handleBusdChange = (e: ChangeEvent<HTMLInputElement>) => {
    const busdValue = parseFloat(e.target.value);
    setBusdAmount(busdValue);
    setNepAmount(convertAmount(busdValue, false));
  };

  return (
    <div>
      <label>
        NEP:
        <input
          type="number"
          value={nepAmount ?? ""}
          onChange={handleNepChange}
        />
      </label>
      <br />
      <label>
        BUSD:
        <input
          type="number"
          value={busdAmount ?? ""}
          onChange={handleBusdChange}
        />
      </label>
    </div>
  );
};

export default ConverterForm;
