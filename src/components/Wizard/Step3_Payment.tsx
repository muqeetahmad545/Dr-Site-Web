import { Button } from "antd";
import { useState } from "react";

type Props = {
  onSubmit: () => void;
  onBack: () => void;
};

const Step3_Payment = ({ onSubmit, onBack }: Props) => {
  // const Step3_Payment = ({
  //   onNext,
  //   onBack,
  // }: {
  //   onNext: () => void;
  //   onBack: () => void;
  // }) => {
  const [paymentMethod, _setPaymentMethod] = useState<"now" | "later">("now");
  const price = 37.99;

  const payingNow = paymentMethod === "now" ? price : 0.0;
  const payingLater = paymentMethod === "now" ? 0.0 : price;

  return (
    <div className="max-w-xxl">
      <h2 className="text-xl text-center text-[#5aab50] font-bold mb-4">
        Payment
      </h2>

      {/* Consultation Summary */}
      <div className="bg-white shadow-sm border rounded p-4 mb-4">
        <p className="font-medium mb-2">
          Doctor Consultation (€{price.toFixed(2)}) x 1 person
        </p>
        <hr className="my-2" />
        <div className="flex justify-between font-semibold">
          <span>Total:</span>
          <span>€{price.toFixed(2)}</span>
        </div>
      </div>

      {/* Payment Breakdown */}
      <div className="bg-white shadow-sm border rounded p-4 mb-6">
        <div className="flex justify-between mb-2">
          <span className="font-medium">Total Amount:</span>
          <span>€{price.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="font-medium">Paying now:</span>
          <span>€{payingNow.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Paying later:</span>
          <span>€{payingLater.toFixed(2)}</span>
        </div>
      </div>

      {/* Back and Next Buttons */}
      <div className="flex justify-end gap-2 mt-4">
        <Button className="btn-back" onClick={onBack}>
          Back
        </Button>{" "}
        <Button type="primary" onClick={onSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Step3_Payment;
