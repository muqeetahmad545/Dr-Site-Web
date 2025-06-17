export interface Appointment {
  first_name: string;
  last_name: string;
  email?: string;
  phone: string;
  gender: string;
  address: string;
  dob: string;
  pharmacy: string;
  symptoms: string;
  // payment_method?: string;
  appointment?: {
    appointment_date: string;
    appointment_time: string;
  };
}
