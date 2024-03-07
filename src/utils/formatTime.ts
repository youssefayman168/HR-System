const formatTime = (hours: any) => {
    const hoursPerDay = 24;
    const daysPerMonth = 30;

    let remainingHours = hours;

    const months = Math.floor(remainingHours / (hoursPerDay * daysPerMonth));
    remainingHours -= months * hoursPerDay * daysPerMonth;

    const days = Math.floor(remainingHours / hoursPerDay);
    remainingHours -= days * hoursPerDay;

    let result = "";
    if (months > 0) result += `${months}m `;
    if (days > 0) result += `${days}d `;
    if (remainingHours > 0) result += `${remainingHours}h`;

    return result.trim();
}

export default formatTime