import { useEffect, useState } from "react";

type HistoryItem = {
    date: string;
    target: string;
};

const TargetHistory = () => {
    const [history, setHistory] = useState<HistoryItem[]>([]);

    useEffect(() => {
        const items: HistoryItem[] = [];

        for (let i = 1; i <= 7; i++) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            const keyDate = date.toISOString().split("T")[0];
            const targetKey = `daily-target-${keyDate}`;

            const target = localStorage.getItem(targetKey);

            if (target) {
                items.push({
                    date: keyDate,
                    target,
                });
            }
        }

        setHistory(items);
    }, []);

    return (
        <div className="history-container">
            <div className="history-title">📜 Your Last 7 Days</div>

            {history.length === 0 && <p>No history yet</p>}

            {history.map((item) => (
                <div key={item.date} className="history-card">
                    <div className="history-date">{item.date}</div>
                    <div className="history-target">{item.target}</div>
                </div>
            ))}
        </div>
    );
};

export default TargetHistory;
