import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const PaymentRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Parse mollie checkout URL from query params
  const params = new URLSearchParams(location.search);
  const checkoutUrl = params.get("url");

  useEffect(() => {
    if (!checkoutUrl) {
      // No URL, redirect to appointment immediately
      navigate("/appointment");
      return;
    }

    // Open mollie URL in a new tab/window
    window.open(checkoutUrl, "_blank");

    // After 30 seconds redirect user back to /appointment
    const timeout = setTimeout(() => {
      navigate("/appointment");
    }, 30000); // 30 seconds

    return () => clearTimeout(timeout);
  }, [checkoutUrl, navigate]);

  return (
    <div>
      <h2>Redirecting to payment...</h2>
      <p>
        If you are not redirected automatically,{" "}
        <a href={checkoutUrl || "#"} target="_blank" rel="noreferrer">
          click here
        </a>
      </p>
      <p>
        You will be redirected back to the appointment page if payment is not
        completed within 30 seconds.
      </p>
    </div>
  );
};

export default PaymentRedirect;
