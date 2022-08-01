import React from "react";

const OurStatus = () => {
  const status = [
    {
      id: "stat-1",
      number: "40",
      name: "Happy Clients",
      hasPlus: true,
    },
    {
      id: "stat-2",
      number: "120",
      name: "Project Compalate",
      hasPlus: true,
    },
    {
      id: "stat-3",
      number: "130",
      name: "Win Awards",
      hasPlus: false,
    },
    {
      id: "stat-4",
      number: "24",
      name: "Team Member",
      hasPlus: false,
    },
  ];
  return (
    <div className="w-full status__custom flex flex-row items-center justify-center status__custom">
      <div className="w-5/6 h-1/2 flex flex-row items-center justify-between p-20 ourStatusInner__custom">
        {status.map((item) => {
          return (
            <div
              key={item.id}
              className="w-1/5 h-full flex flex-col items-center justify-evenly "
            >
              <span className="text-7xl main-font" style={{ color: "#CB0F4C" }}>
                {item.number} {item.hasPlus && "+"}
              </span>
              <span className="box-border pt-5 main-font">{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurStatus;
