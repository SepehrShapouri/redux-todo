import React from 'react'
const today = new Date().getDate();
const month = new Date().toLocaleString("default", { month: "long" });
function Header() {
  return (
    <div className="header">
    <h2 className="header-title">My Todos</h2>
    <span className="date">
      {month} &bull; {today}
    </span>
  </div>
  )
}

export default Header