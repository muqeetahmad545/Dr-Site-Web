import { useEffect, useState } from "react";
import type { Appointment } from "../types/appointment";
import { useBookAppointmentMutation } from "../features/api/appointment/appointmentApi";
import Sidebar from "./Wizard/Sidebar";
import Step1_DateTime from "./Wizard/Step1_DateTime";
import Step2_UserDetails from "./Wizard/Step2_UserDetails";
import Step3_Payment from "./Wizard/Step3_Payment";
// import Step4_CardDetails from "./Wizard/Step4_CardDetails";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { message } from "antd";
import { PrimaryButton } from "./PrimaryButton";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const WizardContainer = () => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [isFinished, setIsFinished] = useState(false);

  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState<Appointment>({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    gender: "",
    address: "",
    dob: "",
    pharmacy: "",
    symptoms: "",
    appointment: {
      appointment_date: "",
      appointment_time: "",
    },
  });

  const [bookAppointment] = useBookAppointmentMutation();

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const submit = async (paymentIntent: any) => {
    try {
      const payload: Appointment = {
        ...formData,
        appointment: {
          appointment_date: selectedDate,
          appointment_time: selectedTime,
        },
        paymentIntent,
      };

      const res = await bookAppointment(payload).unwrap();

      if (res.message?.includes("Successfully")) {
        // message.success(res.message);
        setIsFinished(true);
      } else {
        console.error("Booking failed:", res);
        message.error(
          "Booking failed: " + (res.message ?? JSON.stringify(res))
        );
      }
    } catch (error: any) {
      console.error("Booking error:", error);
      alert(
        "Failed to book appointment: " +
          (error?.data?.message || error?.message || "Unknown error")
      );
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <Elements stripe={stripePromise}>
      {isFinished ? (
        <div className="p-6 text-center">
          <h2 className="mt-12 text-3xl font-bold mb-4 text-[#5aab50]">
            Appointment booked successfully!
          </h2>
          <p>Thank you for your appointment.</p>
          <div className="mt-6 mb-12">
            <PrimaryButton
              // className="mt-6 mb-12 px-4 py-2 bg-green-600 text-white rounded"
              onClick={() => {
                // Reset wizard or close modal
                setIsFinished(false);
                setStep(1);
                setSelectedDate("");
                setSelectedTime("");
                setFormData({
                  first_name: "",
                  last_name: "",
                  email: "",
                  phone: "",
                  gender: "",
                  address: "",
                  dob: "",
                  pharmacy: "",
                  symptoms: "",
                  appointment: {
                    appointment_date: "",
                    appointment_time: "",
                  },
                });
                setClientSecret(null);
              }}
            >
              Book another appointment
            </PrimaryButton>
          </div>
        </div>
      ) : (
        <div className="flex" style={{ height: "650px" }}>
          <Sidebar
            step={step}
            setStep={setStep}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            formData={formData}
          />
          <div className="flex-1 p-4 overflow-auto ">
            {/* existing step render logic */}
            {step === 1 && (
              <Step1_DateTime
                onNext={nextStep}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                selectedTime={selectedTime}
                setSelectedTime={setSelectedTime}
              />
            )}
            {step === 2 && (
              <Step2_UserDetails
                formData={formData}
                setFormData={setFormData}
                onNext={nextStep}
                onBack={prevStep}
                setClientSecret={setClientSecret}
              />
            )}
            {step === 3 && (
              <Step3_Payment
                clientSecret={clientSecret}
                onBack={prevStep}
                onSubmit={submit}
              />
            )}
          </div>
        </div>
      )}
    </Elements>
  );
};

export default WizardContainer;
