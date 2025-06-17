import { Form, Input, Row, Col, DatePicker, Radio, Button } from "antd";
import React from "react";
import type { Appointment } from "../../types/appointment";
import dayjs from "dayjs";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface Step2Props {
  formData: Appointment;
  setFormData: (data: Appointment) => void;
  onNext: () => void;
  onBack: () => void;
}

const Step2_UserDetails: React.FC<Step2Props> = ({
  formData,
  setFormData,
  onNext,
  onBack,
}) => {
  const [form] = Form.useForm();

  const handleFinish = (values: Appointment) => {
    setFormData(values);
    onNext();
  };

  return (
    <Form<Appointment>
      form={form}
      layout="vertical"
      size="middle"
      onFinish={handleFinish}
      initialValues={formData}
    >
      <h2 className="text-xl text-center text-[#5aab50] font-bold mb-4">
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
              country="pk"
              value={formData.phone}
              onChange={(phone) => {
                setFormData({ ...formData, phone });
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
          <Button type="primary" htmlType="submit">
            Next
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};

export default Step2_UserDetails;
