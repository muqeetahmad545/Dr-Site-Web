import {
  Form,
  Input,
  Row,
  Col,
  DatePicker,
  Radio,
  Button,
  message,
} from "antd";
import React, { useEffect } from "react";
import type { Appointment } from "../../types/appointment";
import dayjs, { isDayjs } from "dayjs";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useValidatePatientMutation } from "../../features/api/patient/patientApi";
import { usePaymentIntentMutation } from "../../features/api/payment/paymentApi";

interface Step2Props {
  formData: Appointment;
  setFormData: (data: Appointment) => void;
  onNext: () => void;
  onBack: () => void;
  setClientSecret: (secret: string) => void;
}

const Step2_UserDetails: React.FC<Step2Props> = ({
  formData,
  setFormData,
  onNext,
  onBack,
  setClientSecret,
}) => {
  const [form] = Form.useForm();
  const [validatePatient, { isLoading }] = useValidatePatientMutation();
  const [paymentIntent] = usePaymentIntentMutation();

  useEffect(() => {
    form.setFieldsValue({
      ...formData,
      dob: formData.dob ? dayjs(formData.dob) : null,
    });
  }, [formData, form]);

  const handleValuesChange = (_changedValues: any, allValues: any) => {
    if (allValues.dob instanceof dayjs) {
      allValues.dob = allValues.dob.format("YYYY-MM-DD");
    }
    setFormData(allValues);
  };
  const handleFinish = async (values: Appointment) => {
    try {
      if (isDayjs(values.dob)) {
        values.dob = values.dob.format("YYYY-MM-DD");
      }
      const response = await validatePatient(values).unwrap();

      if (response.message) {
        setFormData(values);
        onNext();
        const response = await paymentIntent().unwrap();
        const clientSecret = response?.data?.clientSecret;
        console.log("clientSecret", clientSecret);
        if (clientSecret) {
          setClientSecret(clientSecret);
        }
      } else {
        message.info(response.message || "Validation info");
      }
    } catch (error: any) {
      const errorMessage = error?.data?.message;
      message.error(errorMessage);
    }
  };

  return (
    <Form<Appointment>
      form={form}
      layout="vertical"
      size="middle"
      onFinish={handleFinish}
      onValuesChange={handleValuesChange}
    >
      <h2 className="text-2xl text-center text-[#5aab50] font-bold mb-4">
        Enter Your Details
      </h2>

      <Row gutter={24}>
        <Col span={12}>
          <Form.Item
            name="first_name"
            label="First Name"
            rules={[
              { required: true, message: "Please enter your first name" },
            ]}
          >
            <Input placeholder="Enter first name" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="last_name"
            label="Last Name"
            rules={[{ required: true, message: "Please enter your last name" }]}
          >
            <Input placeholder="Enter last name" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={12}>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Invalid email format" },
            ]}
          >
            <Input placeholder="Enter email" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              { required: true, message: "Please enter your phone number" },
            ]}
          >
            <PhoneInput
              country="ie"
              value={formData.phone}
              onChange={(phone) => {
                const newData = { ...formData, phone };
                setFormData(newData);
                form.setFieldsValue({ phone });
              }}
              inputStyle={{ width: "100%" }}
            />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={12}>
          <Form.Item
            name="dob"
            label="Date of Birth"
            rules={[
              { required: true, message: "Please select your date of birth" },
            ]}
          >
            <DatePicker
              style={{ width: "100%" }}
              disabledDate={(current) => current && current > dayjs()}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="pharmacy"
            label="Nearest Pharmacy"
            rules={[
              { required: true, message: "Please enter nearest pharmacy" },
            ]}
          >
            <Input placeholder="Enter nearest pharmacy" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={12}>
          <Form.Item
            name="address"
            label="Address"
            rules={[{ required: true, message: "Please enter your address" }]}
          >
            <Input placeholder="Enter your address" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="gender"
            label="Gender"
            rules={[{ required: true, message: "Please select your gender" }]}
          >
            <Radio.Group>
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <Form.Item
            name="symptoms"
            label="Symptoms"
            rules={[
              { required: true, message: "Please describe your symptoms" },
            ]}
          >
            <Input.TextArea placeholder="Describe symptoms" rows={4} />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item>
        <div className="flex justify-end gap-2 mt-4">
          <Button className="btn-back" onClick={onBack}>
            Back
          </Button>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Next
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};

export default Step2_UserDetails;
