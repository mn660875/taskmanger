"use client";

export default function GridCard({ title, value, color, icon }) {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 flex items-center justify-between">
            <div>
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className={`text-2xl font-bold ${color}`}>{value}</p>
            </div>
            <div className="text-4xl">
                {icon}
            </div>
        </div>
    );
}
