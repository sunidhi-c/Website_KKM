import React, { useEffect, useState, useRef } from "react";
import "./Stats.css";
import { FaArrowUpRightDots, FaUsers, FaChartLine, FaHandshake } from "react-icons/fa6";

const StatItem = ({ icon, end, label, suffix }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    // Detect when section is visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        observer.observe(ref.current);
    }, []);

    // Animate counter
    useEffect(() => {
        if (!visible) return;

        let start = 0;
        const duration = 2000; // 2 seconds
        const increment = end / (duration / 16);

        const counter = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(counter);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(counter);
    }, [visible, end]);

    return (
        <div className="stat-item" ref={ref}>
            <div className="stat-icon">{icon}</div>
            <h2>
                {count}
                {suffix}
            </h2>
            <p>{label}</p>
        </div>
    );
};

const Stats = () => {
    return (
        <section className="stats">
            <StatItem
                icon={<FaArrowUpRightDots />}
                end={21}
                suffix="+"
                label="YEARS OF EXPERIENCE"
            />
            <StatItem
                icon={<FaUsers />}
                end={20}
                suffix="+"
                label="EMPLOYEES"
            />
            <StatItem
                icon={<FaHandshake />}
                end={15}
                suffix="+"
                label="CLIENTS"
            />
        </section>
    );
};

export default Stats;