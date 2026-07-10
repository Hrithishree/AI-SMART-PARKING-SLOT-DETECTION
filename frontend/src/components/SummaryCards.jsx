import React from "react";

function SummaryCards({ data }) {
  const total = Object.keys(data).length;
  const occupied = Object.values(data).filter(s => s === "Occupied").length;
  const empty = Object.values(data).filter(s => s === "Empty").length;
  const transition = Object.values(data).filter(s => s === "Transition").length;

  const cardClass = "card p-4 rounded-lg shadow-md text-center";

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className={`${cardClass} bg-green-600`}>Empty: {empty}</div>
      <div className={`${cardClass} bg-red-600`}>Occupied: {occupied}</div>
      <div className={`${cardClass} bg-yellow-400 text-black`}>Transition: {transition}</div>
      <div className={`${cardClass} bg-blue-600`}>Total: {total}</div>
    </div>
  );
}

export default SummaryCards;
