"use client"; // This is a client component

import React, { useState, ChangeEvent } from "react";

const ConverterForm: React.FC = () => {
  const [nepAmount, setNepAmount] = useState<number | undefined>(); // state to store nep amount
  const [busdAmount, setBusdAmount] = useState<number | undefined>(); // state to store busd amount

  // handle nep change
  const handleNepChange = (e: ChangeEvent<HTMLInputElement>) => {
    const nepValue = parseFloat(e.target.value);
    setNepAmount(nepValue);
    setBusdAmount(nepValue * 3); // assume 1 NEP = 3 BUSD
  };

  // handle busd change
  const handleBusdChange = (e: ChangeEvent<HTMLInputElement>) => {
    const busdValue = parseFloat(e.target.value);
    setBusdAmount(busdValue);
    setNepAmount(busdValue / 3); // assume 1 NEP = 3 BUSD
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
