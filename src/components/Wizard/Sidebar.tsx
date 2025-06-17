import {
  FaCalendarAlt,
  FaUser,
  FaCreditCard,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { COLORS } from "../../constants/theme";
import type { Appointment } from "../../types/appointment";
import { useState } from "react";

interface SidebarProps {
  selectedDate: string;
  selectedTime: string;
  step: number;
  formData: Appointment;
}

const Sidebar: React.FC<SidebarProps> = ({
  selectedDate,
  selectedTime,
  step,
}) => {
  const [collapsed, setCollapsed] = useState(false);

  const stepTitles = {
    1: {
      label: "Choose Date & Time",
      icon: <FaCalendarAlt className="text-lg" />,
    },
    2: { label: "Enter Your Details", icon: <FaUser className="text-lg" /> },
    3: { label: "Payment", icon: <FaCreditCard className="text-lg" /> },
  };

  return (
    <div
      className={`p-4 h-full flex flex-col justify-between transition-all duration-300 ${
        collapsed ? "!w-20" : "!w-1/3"
      }`}
      style={{ background: COLORS.gradientPrimary }}
    >
      {/* Top Section */}
      <div>
        <h2
          className={`text-white text-center font-semibold mb-4 transition-all duration-300 ${
            collapsed ? "text-md" : "text-xl text-center"
          }`}
        >
          Clinvia
        </h2>

        {!collapsed && (
          <div className="text-white mb-4 text-sm">
            <p>
              <strong>Date:</strong> {selectedDate || <em>Not selected</em>}
            </p>
            <p>
              <strong>Time:</strong> {selectedTime || <em>Not selected</em>}
            </p>
          </div>
        )}

        {!collapsed && <hr className="my-2 border-white border-t-2" />}

        {/* Step List */}
        <ul>
          {Object.entries(stepTitles).map(([key, { label, icon }]) => {
            const isActive = Number(key) === step;
            return (
              <li
                key={key}
                className={`flex items-center mb-2 p-2 rounded transition-colors duration-200 ${
                  isActive
                    ? "bg-[#7bb6a9] text-white"
                    : "bg-white text-[#5aa967]"
                }`}
              >
                <div className="flex items-center justify-center w-6">
                  {icon}
                </div>
                {!collapsed && <span className="ml-2">{label}</span>}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Bottom Section */}
      <div className="text-white text-sm font-bold mt-6">
        {!collapsed && (
          <div className="opacity-80 text-center mb-4">
            <hr className="my-2 border-white border-t-2" />
            Can't find your desired slot? <br />
            Contact{" "}
            <a
              href="mailto:support@doxonline.ie"
              className="underline text-white"
            >
              support@doxonline.ie
            </a>
            <hr className="my-2 border-white border-t-2" />
          </div>
        )}

        {/* Collapse/Expand Button */}
        <div className="flex justify-center">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-white flex items-center gap-12 font-medium"
          >
            {!collapsed && "Collapse Menu"}
            {collapsed ? (
              <FaChevronLeft className="text-lg" />
            ) : (
              <FaChevronRight className="text-lg" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
