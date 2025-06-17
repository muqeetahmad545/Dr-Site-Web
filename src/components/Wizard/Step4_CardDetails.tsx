import React, { useState } from "react";

type CardData = {
  cardNumber: string;
  expiry: string;
  cvv: string;
};

type Props = {
  onSubmit: (cardData: CardData) => void;
};

const Step4_CardDetails: React.FC<Props> = ({ onSubmit }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const formatCardNumber = (value: string) =>
    value
      .replace(/\D/g, "") // remove non-digits
      .slice(0, 16)
      .replace(/(\d{4})(?=\d)/g, "$1 "); // add space every 4 digits

  const formatExpiry = (value: string) =>
    value
      .replace(/\D/g, "") // remove non-digits
      .slice(0, 4)
      .replace(/(\d{2})(\d{1,2})/, "$1/$2");

  const validate = (): boolean => {
    const errs: typeof errors = {};

    if (cardNumber.replace(/\s/g, "").length !== 16) {
      errs.cardNumber = "Card number must be 16 digits";
    }

    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) {
      errs.expiry = "Expiry must be in MM/YY format";
    }

    if (!/^\d{3,4}$/.test(cvv)) {
      errs.cvv = "CVV must be 3 or 4 digits";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const payload: CardData = {
      cardNumber: cardNumber.replace(/\s/g, ""),
      expiry,
      cvv,
    };

    onSubmit(payload);
  };

  return (
    <div className="max-w-md">
      <h2 className="text-xl font-bold mb-6">Credit / Debit Card</h2>

      <div className="bg-white shadow-sm border rounded p-4 mb-6">
        {/* Card Number */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Card Number</label>
          <input
            type="text"
            className={`w-full border px-3 py-2 rounded ${
              errors.cardNumber ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="1234 5678 9012 3456"
            value={cardNumber}
            onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
          />
          {errors.cardNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>
          )}
        </div>

        {/* Expiry & CVV */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block font-medium mb-1">Expiration Date</label>
            <input
              type="text"
              className={`w-full border px-3 py-2 rounded ${
                errors.expiry ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="MM/YY"
              maxLength={5}
              value={expiry}
              onChange={(e) => setExpiry(formatExpiry(e.target.value))}
            />
            {errors.expiry && (
              <p className="text-red-500 text-sm mt-1">{errors.expiry}</p>
            )}
          </div>

          <div className="flex-1">
            <label className="block font-medium mb-1">Security Code</label>
            <input
              type="text"
              className={`w-full border px-3 py-2 rounded ${
                errors.cvv ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="CVV"
              maxLength={4}
              value={cvv}
              onChange={(e) => setCvv(e.target.value.replace(/\D/g, ""))}
            />
            {errors.cvv && (
              <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>
            )}
          </div>
        </div>
      </div>

      <button
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default Step4_CardDetails;
