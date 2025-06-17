import { Typography } from "antd";
const { Title, Paragraph } = Typography;
const LandingAppointments = () => {
  return (
    <div className="wrapper">
      <div className="main">
        <Title className="titel mt-6" level={3}>
          Doctor Letters & Sick Notes
        </Title>
        <Paragraph className="titel">
          Same-day letters, sick notes, medical certificates and referral
          letters.
        </Paragraph>

        <div style={{ marginTop: 40, marginBottom: 40 }}>
          <Title className="titel" level={4}>
            Terms & Conditions – Certificates Consultation
          </Title>
          <Paragraph>
            <strong>Doctor’s Discretion:</strong> All certificates are issued at
            the discretion of the doctor after a consultation...
          </Paragraph>
          <Paragraph>
            <strong>No Refund Policy:</strong> If a certificate is not issued
            following the consultation, no refund will be processed...
          </Paragraph>
          <Paragraph>
            <strong>Pre-Consultation Confirmation:</strong> Please confirm with
            our support team before booking if unsure...
          </Paragraph>
          <Paragraph>
            <strong>Independent Medical Judgment:</strong> Doctors act
            independently, prioritizing patient safety...
          </Paragraph>
          <Paragraph>
            <strong>Requirement for Face-to-Face Consultation:</strong> In some
            cases, this may be necessary...
          </Paragraph>
          <Paragraph>
            By booking a consultation, you acknowledge and agree to these terms.
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default LandingAppointments;
