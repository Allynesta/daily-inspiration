import { useEffect, useState } from "react";

const StreakCounter = () => {
    const [streak, setStreak] = useState<number>(0);

    useEffect(() => {
        let count = 0;

        for (let i = 0; i < 30; i++) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            const keyDate = date.toISOString().split("T")[0];
            const doneKey = `daily-done-${keyDate}`;

            const done = localStorage.getItem(doneKey);

            if (done === "true") {
                count++;
            } else {
                break; // streak stops when a day is missed
            }
        }

        setStreak(count);
    }, []);

    return (
        <div style={{ marginTop: "20px", fontSize: "18px", fontWeight: "bold" }}>
            🔥 Current Streak: {streak} day{streak !== 1 && "s"}
        </div>
    );
};

export default StreakCounter;
