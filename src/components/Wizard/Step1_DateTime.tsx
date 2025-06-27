function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getDayOfWeek(year: number, month: number, day: number) {
  return new Date(year, month, day).getDay();
}

const Step1_DateTime = ({
  onNext,
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
}: {
  onNext: () => void;
  selectedDate: string;
  setSelectedDate: (date: string) => void;
  selectedTime: string;
  setSelectedTime: (time: string) => void;
}) => {
  const today = new Date();

  // Allowed selectable dates (next 5 days)
  const allowedDates = Array.from({ length: 5 }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    return d.toLocaleDateString("en-CA");
  });

  const year = today.getFullYear();
  const month = today.getMonth();

  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfWeek = getDayOfWeek(year, month, 1); // for padding empty slots

  // Generate time slots for the day (every 30 mins)
  const generateTimeSlots = (start: string, end: string, interval: number) => {
    const times: string[] = [];
    let [startH, startM] = start.split(":").map(Number);
    const [endH, endM] = end.split(":").map(Number);

    while (startH < endH || (startH === endH && startM <= endM)) {
      const ampm = startH >= 12 ? "PM" : "AM";
      const hour12 = startH % 12 === 0 ? 12 : startH % 12;
      const timeStr = `${hour12.toString().padStart(2, "0")}:${startM
        .toString()
        .padStart(2, "0")} ${ampm}`;
      times.push(timeStr);

      startM += interval;
      if (startM >= 60) {
        startM -= 60;
        startH++;
      }
    }

    return times;
  };

  const timeSlots = generateTimeSlots("07:00", "22:00", 30);

  // Format date string YYYY-MM-DD for comparison
  const formatDate = (day: number) => {
    const d = new Date(year, month, day);
    return d.toLocaleDateString("en-CA");
  };

  function isFutureTimeSlot(timeStr: string): boolean {
    const now = new Date();
    const [time, modifier] = timeStr.split(" ");
    let [hours, minutes] = time.split(":").map(Number);

    if (modifier === "PM" && hours !== 12) hours += 12;
    if (modifier === "AM" && hours === 12) hours = 0;

    const slotTime = new Date(now);
    slotTime.setHours(hours, minutes, 0, 0);

    return slotTime.getTime() > now.getTime();
  }

  return (
    <div>
      <h2 className="text-2xl text-center text-[#5aab50] font-bold mb-4">
        Select a Date & Time
      </h2>

      {/* Calendar */}
      <div className="grid grid-cols-7 gap-1 border p-2 rounded max-w-xxl mb-6 select-none">
        {/* Days of week */}
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="font-bold text-[#5aab50] text-center">
            {day}
          </div>
        ))}

        {/* Empty cells before first day */}
        {Array.from({ length: firstDayOfWeek }).map((_, i) => (
          <div key={"empty-" + i} />
        ))}

        {/* Days in month */}
        {Array.from({ length: daysInMonth }, (_, i) => {
          const day = i + 1;
          const dateStr = formatDate(day);
          const isSelectable = allowedDates.includes(dateStr);
          const isSelected = selectedDate === dateStr;

          return (
            <button
              key={dateStr}
              disabled={!isSelectable}
              onClick={() => setSelectedDate(dateStr)}
              className={`p-2 text-center rounded ${
                isSelected
                  ? "bg-[#5aab50] text-white"
                  : isSelectable
                  ? "hover:bg-[#5aab50]"
                  : "text-gray-400 cursor-not-allowed"
              }`}
            >
              {day}
            </button>
          );
        })}
      </div>

      {/* Time slots */}
      {selectedDate ? (
        <>
          <h3 className="mb-2 font-bold text-[#5aab50] text-lg">Select Time</h3>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-6 gap-2 max overflow-y-auto border p-2 rounded">
            {timeSlots
              .filter((time) => {
                const isToday =
                  selectedDate === today.toLocaleDateString("en-CA");
                return isToday ? isFutureTimeSlot(time) : true;
              })
              .map((time) => (
                <button
                  key={time}
                  type="button"
                  className={`px-2 py-1 text-sm border rounded ${
                    selectedTime === time ? "bg-[#5aab50] text-white" : ""
                  }`}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </button>
              ))}
          </div>
        </>
      ) : (
        <p className="text-gray-600 italic">Select a date to see time slots</p>
      )}

      <div className="w-full flex justify-end">
        <button
          disabled={!selectedDate || !selectedTime}
          className={`mt-4 mb-2 px-4 py-2 rounded text-white ${
            selectedDate && selectedTime
              ? "bg-[#5aab50]"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step1_DateTime;
