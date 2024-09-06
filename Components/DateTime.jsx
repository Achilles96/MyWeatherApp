import React, { useEffect, useState } from 'react';

const FormattedDate = ({timezoneOffset }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Function to update the current time
    const updateCurrentTime = () => {
      setCurrentTime(new Date());
    };

    // Update the time every second
    const intervalId = setInterval(updateCurrentTime, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Convert the current time to the correct timezone
  const convertToLocalTime = (date, offset) => {
    // Create a new date in UTC
    const utcDate = new Date(date.getTime() + (date.getTimezoneOffset() * 60000));
    // Adjust for the timezone offset from the API
    return new Date(utcDate.getTime() + (offset * 1000));
  };

  // Format the date and time for display
  const formatDateTime = (date) => {
    const dateOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const timeOptions = {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };

    const formattedDate = date.toLocaleDateString('en-US', dateOptions);
    const formattedTime = date.toLocaleTimeString('en-US', timeOptions);

    return { formattedDate, formattedTime };
  };



  // Get the date to display using the timezone offset
  const localDateTime = convertToLocalTime(currentTime, timezoneOffset);
  const { formattedDate, formattedTime } = formatDateTime(localDateTime);

  return (
    <div className='time-and-date'>
      <p className='date'>{formattedDate}</p>
      <p className='time'>{formattedTime}</p>
    </div>
  );
};

export default FormattedDate;


