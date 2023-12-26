import React, { useState, useEffect } from "react";
import "./Schedule.css";
import "react-day-picker/dist/style.css";
import { DayPicker } from "react-day-picker";
import { format, addMonths, startOfMonth, endOfMonth } from "date-fns";
import { Link } from "react-router-dom";

const Schedule = () => {

  

  const [showEmailForm, setShowEmailForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [workflow, setWorkflow] = useState('');
  const [capitalRaises, setCapitalRaises] = useState('');

  const handleNextButtonClick = () => {
    // Add any logic you need before showing the email form
    // For example, you might want to check if a time slot is selected

    // Set the state to show the email form
    setShowEmailForm(true);
  };

  const handleEmailFormSubmit = () => {
    // Add logic to handle form submission
    // You can access the form values from the state (name, email, workflow, capitalRaises)
    // Perform any necessary actions, such as sending the data to a server
    // For simplicity, you can log the form data to the console for now
    console.log('Form submitted:', { name, email, workflow, capitalRaises });
  };
  const [selectedSlotIndex, setSelectedSlotIndex] = useState(null);

  const handleTimeSlotClick = (index) => {
    setSelectedSlotIndex(index);
  };

  const [slots, setSlots] = useState([]);
  const [selectedDay, setSelectedDay] = useState(new Date());

  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const [selectedTimezone, setSelectedTimezone] = useState(userTimezone);
  const [currentTimeSlots, setCurrentTimeSlots] = useState([]);
  const [timeInTimeZone, setTimeInTimeZone] = useState("");

  const footer = selectedDay ? <p>{format(selectedDay, "PPP")}</p> : <p></p>;
  const currentMonth = new Date();
  const nextMonth = addMonths(currentMonth, 1);

  useEffect(() => {
    if (selectedDay) {
      const newSlots = ["9:00", "9:30", "10:00", "10:30", "11:00"];
      setSlots(newSlots);
    } else {
      setSlots([]);
    }
  }, [selectedDay]);

  useEffect(() => {
    const updateTimeInTimeZone = () => {
      const dateobj = new Date();
      const options = {
        timeZone: selectedTimezone,
        hour12: true,
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      };
      const formattedTime = dateobj.toLocaleTimeString(undefined, options);
      setTimeInTimeZone(formattedTime);
    };

    updateTimeInTimeZone();
    const intervalId = setInterval(updateTimeInTimeZone, 1000);

    return () => clearInterval(intervalId);
  }, [selectedTimezone]);

  useEffect(() => {
    const combinedCurrentTimeSlots = () => {
      const localTimeSlots = slots.map((slot) => {
        const slotTime = new Date();
        const options = {
          timeZone: selectedTimezone,
          hour12: true,
          hour: "numeric",
          minute: "numeric",
        };
        slotTime.setHours(Number(slot.split(":")[0]));
        slotTime.setMinutes(Number(slot.split(":")[1]));
        const formattedTime = slotTime.toLocaleTimeString(undefined, options);
        return formattedTime;
      });

      return localTimeSlots;
    };

    const localTimeSlots = combinedCurrentTimeSlots();
    setCurrentTimeSlots(localTimeSlots);
  }, [selectedTimezone, selectedDay]);

  const handleTimezoneChange = (event) => {
    const newTimezone = event.target.value;
    setSelectedTimezone(newTimezone);
  };

  const disabledDays = {
    before: new Date(),
  };

  return (

    <div className="scheduleContainer">
    
     <div className="schedules">
      {showEmailForm ? (
          // Show the extended email form
          <div className="emailForm your-custom-class"> {/* Add your custom class here */}
            <label>
              Name:
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
              Email:
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
              Do you currently have a workflow to manage your deals?
              <input type="text" value={workflow} onChange={(e) => setWorkflow(e.target.value)} />
            </label>
            <label>
              If you do have a method to track your capital raises, tell us in a couple of words what it is?
              <textarea
                value={capitalRaises}
                onChange={(e) => setCapitalRaises(e.target.value)}
                placeholder="Enter Details"
              />
            </label>
            <button onClick={handleEmailFormSubmit}>Submit</button>
          </div>
        ) : (
        <div className="selected-time-date-slot">
          <div className="calendar">
            <DayPicker
              mode="single"
              selected={selectedDay}
              onSelect={setSelectedDay}
              fromMonth={startOfMonth(currentMonth)}
              toMonth={endOfMonth(nextMonth)}
              disabled={disabledDays}
            />
          </div>
          {/* timeslits   */}
          <div className="timeSlots">
            <div className="timeslot-nextbtn">
              {currentTimeSlots.map((slot, index) => (
                <div
                  key={index}
                  className={`${
                    index === selectedSlotIndex ? "time" : "timeSlot"
                  }`}
                  onClick={() => handleTimeSlotClick(index)}
                >
                  {slot && (
                    <div
                      key={index}
                      className={`${
                        index === selectedSlotIndex ? "selected" : ""
                      }`}
                    >
                      {/* Your other content goes here */}
                      {slot}
                    </div>
                  )}

                  {/* <div> */}
                  {index === selectedSlotIndex && (
                    <Link
                      className="nextButton"
                      onClick={() => handleNextButtonClick()}
                    >
                      Next
                    </Link>
                  )}
                  {/* </div> */}
                </div>
              ))}
            </div>
          </div>
        </div>
         )}
          {!showEmailForm && (
        <div className="timeZone">
          <h4>Time Zone</h4>
          <select value={selectedTimezone} onChange={handleTimezoneChange}>
            <option value="Asia/Kolkata">
              Kolkata Time{" "}
              {new Date().toLocaleTimeString("en-US", {
                timeZone: "Asia/Kolkata",
              })}
            </option>
            <option value="Asia/Dubai">
              Dubai Time{" "}
              {new Date().toLocaleTimeString("en-US", {
                timeZone: "Asia/Dubai",
              })}
            </option>
            <option value="Asia/Dhaka">
              Dhaka Time{" "}
              {new Date().toLocaleTimeString("en-US", {
                timeZone: "Asia/Dhaka",
              })}
            </option>
            <option value="America/New_York">
              America/New_York{" "}
              {new Date().toLocaleTimeString("en-US", {
                timeZone: "America/New_York",
              })}
            </option>
            <option value="America/Los_Angeles">
              America/Los_Angeles{" "}
              {new Date().toLocaleTimeString("en-US", {
                timeZone: "America/Los_Angeles",
              })}
            </option>
          </select>
        
        </div>
)}
      </div>
    
    </div>
  );
 }; 
 export default Schedule;