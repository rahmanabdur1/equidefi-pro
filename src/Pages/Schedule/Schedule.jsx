import React, { useState, useEffect } from 'react';
import './Schedule.css';
import 'react-day-picker/dist/style.css';
import { DayPicker } from 'react-day-picker';
import { format, addMonths, startOfMonth, endOfMonth } from 'date-fns';

const Schedule = () => {
    const [slots, setSlots] = useState([]);
    const [selectedDay, setSelectedDay] = useState(new Date());

    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const [selectedTimezone, setSelectedTimezone] = useState(userTimezone);
    const [currentTimeSlots, setCurrentTimeSlots] = useState([]);
    const [timeInTimeZone, setTimeInTimeZone] = useState('');

    const footer = selectedDay ? (
        <p>{format(selectedDay, 'PPP')}</p>
    ) : (
        <p></p>
    );
    const currentMonth = new Date();
    const nextMonth = addMonths(currentMonth, 1);

    useEffect(() => {
        if (selectedDay) {
            const newSlots = ['9:00', '9:30', '10:00', '10:30', '11:00'];
            setSlots(newSlots);
        } else {
            setSlots([]);
        }
    }, [selectedDay]);

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

    useEffect(() => {
        const combinedCurrentTimeSlots = () => {
            const localTimeSlots = slots.map((slot) => {
                const slotTime = new Date();
                const options = { timeZone: selectedTimezone, hour12: true, hour: 'numeric', minute: 'numeric' };
                slotTime.setHours(Number(slot.split(':')[0]));
                slotTime.setMinutes(Number(slot.split(':')[1]));
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
        <div className='scheduleContainer'>
            <div className='schedules'>
                <div className='euideiDes'>
                    <h3>EquiDeFi Platform Demo</h3>
                    <p>A walkthrough demonstration of the EquiDeFi platform.</p>
                </div>
                <div className='calendar'>
                    <h3>Select a Date & Time</h3>
                    <DayPicker
                        mode="single"
                        selected={selectedDay}
                        onSelect={setSelectedDay}
                        fromMonth={startOfMonth(currentMonth)}
                        toMonth={endOfMonth(nextMonth)}
                        disabled={disabledDays}
                    />
                    <div className='timeZone'>
                        <h4>Time Zone</h4>
                        <select value={selectedTimezone} onChange={handleTimezoneChange}>
                            <option value="Asia/Kolkata">Kolkata Time {new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' })}</option>
                            <option value="Asia/Dubai">Dubai Time {new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Dubai' })}</option>
                            <option value="Asia/Dhaka">Dhaka Time {new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Dhaka' })}</option>
                            <option value="America/New_York">America/New_York  {new Date().toLocaleTimeString('en-US', { timeZone: 'America/New_York' })}</option>
                            <option value="America/Los_Angeles">America/Los_Angeles  {new Date().toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles' })}</option>
                        </select>
                    </div>
                </div>
                <div className='timeSlots'>
                    <p>{footer}</p>
                <p>Select time slots</p>
                    {currentTimeSlots.map((slot, index) => (
                        <div
                            key={index}
                            className={`timeSlot`}
                        >
                            {slot}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Schedule;
