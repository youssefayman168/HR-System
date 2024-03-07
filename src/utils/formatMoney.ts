const formatMoney = (amount: number) => {
    amount = Number(amount);
    if (amount >= 1000000000000) {
        return `${(amount / 1000000000000).toFixed(2)}T`;
    } else if (amount >= 1000000000) {
        return `${(amount / 1000000000).toFixed(1)}B`;
    } else if (amount >= 1000000) {
        return `${(amount / 1000000).toFixed(1)}M`;
    } else if (amount >= 1000) {
        return `${(amount / 1000).toFixed(0)}K`;
    } else {
        return amount.toString();
    }
}

export default formatMoney