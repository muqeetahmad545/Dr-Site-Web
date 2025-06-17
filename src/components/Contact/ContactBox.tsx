import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { COLORS } from "../../constants/theme";

const ContactBox = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const serviceID = "service_fozsmpc";
      const templateID = "template_bs37qm5";
      const userID = "7fUcKlr9Mq1K1QQLh";

      emailjs
        .send(serviceID, templateID, data, userID)
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Email sent successfully");
        })
        .catch((err) => {
          console.log("FAILED...", err);
          alert("Error sending email");
        });
    } catch (error) {
      console.log(error);
      alert("Error sending email");
    }
  };

  return (
    <div
      style={{ background: COLORS.gradientPrimary }}
      className="text-black p-10 rounded-xl w-[50%] max-lg:w-[90%] mx-10 mb-40"
    >
      <h1 className="text-2xl text-center font-medium">
        Make an online enquiry
      </h1>
      <p className="pb-5 max-sm:text-sm text-center">
        Got questions? Ideas? Fill out the form below to get our proposal.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex max-sm:flex-col gap-5 mb-5">
          <div className="w-full">
            <span className="mb-1 max-sm:text-sm">First Name</span>
            <input
              className="bg-white outline-none text-textcolor p-2 px-5 w-full rounded-lg"
              type="text"
            />
          </div>
          <div className="w-full">
            <span className="mb-1 max-sm:text-sm">Last Name</span>
            <input
              className="bg-white outline-none text-textcolor p-2 px-5 w-full rounded-lg"
              type="text"
            />
          </div>
        </div>
        <div className="mb-5">
          <span className="mb-1 max-sm:text-sm">Email Address</span>
          <input
            className="bg-white outline-none text-textcolor p-2 px-5 w-full rounded-lg"
            type="email"
            {...register("email", { required: true })}
          />
        </div>
        <div className="mb-5">
          <p className="mb-1 max-sm:text-sm">Message*</p>
          <textarea className="bg-white outline-none text-textcolor p-2 px-5 w-full rounded-lg min-h-40" />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-white text-secondary p-2 px-5 rounded-xl text-lg font-bold"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactBox;
