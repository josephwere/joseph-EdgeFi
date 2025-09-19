import React from "react";

export default function Dashboard() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Analytics & AI Dashboard</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow text-black">
          <h3 className="font-semibold mb-2">User Analytics</h3>
          <p>Chart/graph placeholder</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-black">
          <h3 className="font-semibold mb-2">NeuroEdge AI Insights</h3>
          <p>AI prediction/insight placeholder</p>
        </div>
      </div>
    </div>
  );
}