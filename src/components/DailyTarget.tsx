import { useEffect, useState } from "react";

const getTodayKey = () => {
    const today = new Date().toISOString().split("T")[0];
    return today;
};

const DailyTarget = () => {
    const today = getTodayKey();

    const targetKey = `daily-target-${today}`;
    const doneKey = `daily-done-${today}`;

    const [target, setTarget] = useState<string>("");
    const [done, setDone] = useState<boolean>(false);

    useEffect(() => {
        const savedTarget = localStorage.getItem(targetKey);
        const savedDone = localStorage.getItem(doneKey);

        if (savedTarget) setTarget(savedTarget);
        if (savedDone === "true") setDone(true);
    }, [targetKey, doneKey]);

    useEffect(() => {
        localStorage.setItem(targetKey, target);
    }, [target, targetKey]);

    const markAsDone = () => {
        setDone(true);
        localStorage.setItem(doneKey, "true");
    };

    return (
        <div className="target-box">
            <h2>🎯 What's your target for today?</h2>

            <input
                className="target-input"
                type="text"
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                placeholder="Write your target here..."
                disabled={done}
            />

            {!done && target && (
                <button
                    onClick={markAsDone}
                    style={{
                        marginTop: "15px",
                        padding: "10px 20px",
                        fontSize: "16px",
                        borderRadius: "8px",
                        border: "none",
                        cursor: "pointer",
                    }}
                >
                    ✅ Mark as Done
                </button>
            )}

            {done && (
                <p style={{ marginTop: "15px", fontWeight: "bold" }}>
                    🎉 Great job! You completed today’s target!
                </p>
            )}
        </div>
    );
};

export default DailyTarget;
