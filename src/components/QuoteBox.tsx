import { useEffect, useState } from "react";

const getTodayKey = () => {
    const today = new Date().toISOString().split("T")[0];
    return `daily-quote-${today}`;
};

const QuoteBox = () => {
    const [quote, setQuote] = useState<string>("Loading quote...");
    const todayKey = getTodayKey();

    useEffect(() => {
        const savedQuote = localStorage.getItem(todayKey);

        if (savedQuote) {
            setQuote(savedQuote);
        } else {
            fetch("https://dummyjson.com/quotes/random")
                .then((res) => res.json())
                .then((data) => {
                    setQuote(data.quote);
                    localStorage.setItem(todayKey, data.quote);
                });
        }
    }, [todayKey]);

    return (
        <div className="quote-box">
            "{quote}"
        </div>
    );
};

export default QuoteBox;
