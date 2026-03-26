// Timer configuration
// Target date for countdown: April 26, 2026, 21:00 (9 PM)

export const TIMER_CONFIG = {
  targetDate: new Date(2026, 3, 26, 21, 0, 0), // April 26, 2026, 21:00
  // Format: new Date(year, month (0-11), day, hours, minutes, seconds)
};

export const getFormattedDeadline = () => {
  const date = TIMER_CONFIG.targetDate;
  const day = date.getDate().toString().padStart(2, '0');
  const month = date.toLocaleDateString('en-US', { month: 'short' });
  return `${day} ${month}`;
};
