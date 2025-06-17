// src/pages/patient/Appointments.tsx

import { Row, Col, Card, Typography } from "antd";
import DrSmithImg from "../../assets/driamge.jpg";
import "./styles.scss";
import { PrimaryButton } from "../PrimaryButton";
import { useGetDoctorsQuery } from "../../features/api/doctor/doctorApi";
import { decryptBase64, SECRET_KEY } from "../helper/Crypto";
import LoadingSpinner from "../LoadingSpinner";
import { useState } from "react";
import WizardContainer from "../WizardContainer";
import ClientReviews from "../Landing/Reviews";

const { Title, Paragraph } = Typography;

const AppointmentsCard = () => {
  const [showWizard, setShowWizard] = useState(false);
  const { data: doctors, isLoading } = useGetDoctorsQuery();
  const doctorsData = Array.isArray(doctors?.data) ? doctors.data : [];

  const [showAllDoctors, setShowAllDoctors] = useState(false);
  const doctorsToShow = showAllDoctors ? doctorsData : doctorsData.slice(0, 8);

  return (
    <div>
      <div>
        {isLoading ? (
          <div className="flex justify-center items-center h-screen">
            <LoadingSpinner />
          </div>
        ) : (
          <div className="wrapper">
            <div className="main">
              <div
                data-aos="fade-right"
                className="text-5xl flex gap-2 font-extrabold py-10 justify-center"
              >
                <span className="text-[#5bac52]"> Doctor Letters &</span> Sick
                Notes
              </div>
              <Paragraph className="titel">
                Same-day letters, sick notes, medical certificates and referral
                letters.
              </Paragraph>
              <div>
                <Title className="titel !text-[#5bac52]" level={4}>
                  Terms & Conditions – Certificates Consultation
                </Title>
                <div className="space-y-4 max-w-3xl mx-auto">
                  <p>
                    <strong>Doctor’s Discretion:</strong> All certificates are
                    issued at the discretion of the doctor after a consultation.
                  </p>
                  <p>
                    <strong>No Refund Policy:</strong> If a certificate is not
                    issued following the consultation, no refund will be
                    processed.
                  </p>
                  <p>
                    <strong>Pre-Consultation Confirmation:</strong> It is the
                    patient’s responsibility to confirm with our support team
                    before booking.
                  </p>
                  <p>
                    <strong>Independent Medical Judgment:</strong> Our doctors
                    work independently while adhering to the platform’s
                    policies.
                  </p>
                  <p>
                    <strong>Requirement for Face-to-Face Consultation:</strong>{" "}
                    In certain cases, where our doctors determine it’s
                    necessary.
                  </p>
                  <p>
                    By booking a consultation, you acknowledge and agree to
                    these terms and conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div
          data-aos="fade-right"
          className="text-5xl flex gap-2 font-extrabold py-20 justify-center"
        >
          <span className="text-[#5bac52]">Online Doctor </span> Consultation
        </div>

        <div className="card-container">
          {doctorsData.length > 8 && (
            <div className="flex justify-end mb-6">
              <PrimaryButton onClick={() => setShowAllDoctors(!showAllDoctors)}>
                {showAllDoctors ? "Show Less" : "View All"}
              </PrimaryButton>
            </div>
          )}
          <Row gutter={[16, 16]} justify="center">
            {doctorsToShow.map((doctor) => {
              let decryptedImage: string | null = null;
              if (doctor.profile_image) {
                decryptedImage = decryptBase64(
                  doctor.profile_image.data,
                  doctor.profile_image.iv,
                  SECRET_KEY
                );
              }

              return (
                <Col xs={24} sm={12} md={6} key={doctor.id}>
                  <Card
                    hoverable
                    cover={
                      <img
                        src={
                          decryptedImage?.startsWith("data:image/")
                            ? decryptedImage
                            : DrSmithImg
                        }
                        alt={`${doctor.first_name} ${doctor.last_name}`}
                        style={{
                          marginBottom: 8,
                          height: 200,
                          objectFit: "cover",
                          width: "100%",
                        }}
                      />
                    }
                    actions={[
                      <PrimaryButton
                        onClick={() => setShowWizard(true)}
                        htmlType="button"
                        style={{ width: "150px" }}
                        key="book"
                      >
                        Book an Appointment
                      </PrimaryButton>,
                    ]}
                  >
                    <Card.Meta
                      style={{ textAlign: "center" }}
                      title={
                        doctor.first_name || doctor.last_name
                          ? `${doctor.first_name ?? ""} ${
                              doctor.last_name ?? ""
                            }`.trim()
                          : "Doctor"
                      }
                      description={doctor?.doctor?.specialization || "N/A"}
                    />
                    <Paragraph style={{ textAlign: "center", marginTop: 8 }}>
                      {doctor.experience}
                    </Paragraph>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>

        <ClientReviews />
      </div>

      {showWizard && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setShowWizard(false)}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl mr-2"
              onClick={() => setShowWizard(false)}
            >
              &times;
            </button>
            <WizardContainer />
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentsCard;
