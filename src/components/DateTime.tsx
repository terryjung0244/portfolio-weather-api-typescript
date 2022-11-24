import React, { useEffect, useState } from 'react';

const DateTime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div>
      <p> {date.toLocaleDateString()}</p>
      <p> {date.toLocaleTimeString()}</p>
    </div>
  );
};

export default DateTime;
