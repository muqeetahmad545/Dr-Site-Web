import { Button, message } from "antd";
import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import type { PaymentIntent } from "@stripe/stripe-js";

type Props = {
  clientSecret: string | null;
  onSubmit: (paymentIntent: PaymentIntent) => void;
  onBack: () => void;
};

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: "16px",
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      "::placeholder": { color: "#a0aec0" },
    },
    invalid: { color: "#fa755a" },
  },
};

const Step3_Payment = ({ clientSecret, onSubmit, onBack }: Props) => {
  const [loading, setLoading] = useState(false);
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [paymentIntent, setPaymentIntent] = useState<PaymentIntent | null>(
    null
  );

  const stripe = useStripe();
  const elements = useElements();
  const price = 9.99;

  const handlePayNow = async () => {
    if (!stripe || !elements) {
      message.error("Stripe has not loaded.");
      return;
    }

    if (!clientSecret) {
      message.error("Missing payment intent. Please go back and try again.");
      return;
    }

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      message.error("Card element not found.");
      return;
    }

    setLoading(true);

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {},
      },
    });

    setLoading(false);

    if (result.error) {
      message.error(result.error.message || "Payment failed.");
      return;
    }

    const intent = result.paymentIntent;

    if (intent?.status === "succeeded") {
      setPaymentCompleted(true);
      setPaymentIntent(intent);
      message.success(
        "Payment successful! You can now submit your appointment."
      );
    } else {
      message.error("Payment was not successful. Please try again.");
    }
  };

  const handleSubmit = () => {
    if (paymentIntent) {
      onSubmit(paymentIntent);
    } else {
      message.error("Please complete the payment before submitting.");
    }
  };

  return (
    <div className="max-w-xxl">
      <h2 className="text-2xl text-center text-[#5aab50] font-bold mb-4">
        Payment
      </h2>

      {/* Summary */}
      <div className="bg-white shadow-sm border rounded p-4 mb-4">
        <p className="font-medium mb-2">
          Doctor Consultation (${price.toFixed(2)}) x 1 person
        </p>
        <hr className="my-2" />
        <div className="flex justify-between font-semibold">
          <span>Total:</span>
          <span>${price.toFixed(2)}</span>
        </div>
      </div>

      {/* Card Entry */}
      <div className="bg-white shadow-sm border rounded p-4 mb-6">
        <label htmlFor="card-element" className="font-medium mb-2 block">
          Card Details
        </label>
        <CardElement options={CARD_ELEMENT_OPTIONS} />
        <div className="flex justify-end mt-4">
          <Button
            type="primary"
            onClick={handlePayNow}
            loading={loading}
            disabled={paymentCompleted}
          >
            Pay Now
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-end gap-2 mt-4">
        <Button onClick={onBack} disabled={loading}>
          Back
        </Button>
        <Button
          type="primary"
          disabled={!paymentCompleted}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Step3_Payment;
