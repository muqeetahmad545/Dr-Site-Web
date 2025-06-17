import { useEffect, useState } from "react";
import type { Appointment } from "../types/appointment";
import { useBookAppointmentMutation } from "../features/api/appointment/appointmentApi";
import Sidebar from "./Wizard/Sidebar";
import Step1_DateTime from "./Wizard/Step1_DateTime";
import Step2_UserDetails from "./Wizard/Step2_UserDetails";
import Step3_Payment from "./Wizard/Step3_Payment";
// import Step4_CardDetails from "./Wizard/Step4_CardDetails";

const WizardContainer = () => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");
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

  // const submit = async (cardData: {
  //   cardNumber: string;
  //   expiry: string;
  //   cvv: string;
  // }) => {
  //   try {
  //     const payload: Appointment = {
  //       ...formData,
  //       appointment_date: selectedDate,
  //       appointment_time: selectedTime,
  //       payment_method: "card",
  //       card_info: cardData,
  //     };

  //     const res = await bookAppointment(payload).unwrap();
  //     alert("Appointment Booked: " + res.message);
  //   } catch (error: any) {
  //     alert(
  //       "Failed to book appointment: " +
  //         (error?.data?.message || "Unknown error")
  //     );
  //   }
  // };
  const submit = async () => {
    try {
      const payload: Appointment = {
        ...formData,
        appointment: {
          appointment_date: selectedDate,
          appointment_time: selectedTime,
        },
      };

      const res = await bookAppointment(payload).unwrap();

      if (res?.checkoutUrl) {
        window.location.href = res.checkoutUrl; // Mollie checkout page
      } else {
        alert("Missing checkout URL in response.");
      }
    } catch (error: any) {
      alert(
        "Failed to book appointment: " +
          (error?.data?.message || "Unknown error")
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
    <div className="flex" style={{ height: "620px" }}>
      <Sidebar
        step={step}
        selectedDate={selectedDate}
        selectedTime={selectedTime}
        formData={formData}
      />
      <div className="flex-1 p-4 overflow-auto ">
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
          />
        )}
        {/* {step === 3 && <Step3_Payment onNext={nextStep} onBack={prevStep} />} */}
        {step === 3 && <Step3_Payment onBack={prevStep} onSubmit={submit} />}
        {/* {step === 4 && <Step4_CardDetails onSubmit={submit} />} */}
      </div>
    </div>
  );
};

export default WizardContainer;
