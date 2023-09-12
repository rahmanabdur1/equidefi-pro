import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';

const ScheduleCalendar = () => {
  const [selectedTimezone, setSelectedTimezone] = useState('Asia/Kolkata');
  const [timeInTimeZone, setTimeInTimeZone] = useState('');

  useEffect(() => {
    const updateTimeInTimeZone = () => {
      const dateobj = new Date();
      const options = { timeZone: selectedTimezone, hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
      const formattedTime = dateobj.toLocaleTimeString(undefined, options);
      setTimeInTimeZone(formattedTime);
    };

    updateTimeInTimeZone();
    const intervalId = setInterval(updateTimeInTimeZone, 1000);

    return () => clearInterval(intervalId);
  }, [selectedTimezone]);

  const handleTimezoneChange = (event) => {
    setSelectedTimezone(event.target.value);
  };

  return (
    <div>
      <h1>Time Zone Display</h1>
      <select value={selectedTimezone} onChange={handleTimezoneChange}>
        <option value="Asia/Kolkata">Asia/Kolkata  {timeInTimeZone}</option>
        <option value="Asia/Dubai">Dubai Time  {timeInTimeZone}</option>
        <option value="Asia/Dhaka">Dhaka Time   {timeInTimeZone}</option>
        <option value="America/New_York">America/New_York</option>
        <option value="America/Los_Angeles">America/Los_Angeles</option>
      </select>
      <p>Time in {selectedTimezone}: {timeInTimeZone}</p>
    </div>
  );
};

export default ScheduleCalendar;
