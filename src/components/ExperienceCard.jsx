import React, { useState } from "react";
import { Card, Drawer } from "antd";

const ExperienceCard = ({
  companyName,
  role,
  period,
  skills,
  projectDescription,
}) => {
  const [open, setOpen] = useState(false);
  function showDrawer() {
    setOpen(true);
  }
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Card
        style={{ width: 320 }}
        hoverable={true}
        variant="outlined"
        cover={
          <div
            style={{
              backgroundColor: "#2E8B57",
              height: "60px",
              lineHeight: "60px",
              textAlign: "center",
              color: "white",
              fontSize: "1.2rem",
            }}
          >
            {companyName} ( {period} )
          </div>
        }
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            height: "80px",
            justifyContent: "space-around",
            fontSize: "1rem",
          }}
        >
          <p
            style={{
              textAlign: "center",
              color: "#2E8B57",
              fontWeight: "bold",
            }}
          >
            {role}
          </p>
          <p style={{ color: "#2E8B57" }}>{skills}</p>
        </div>
        <div
          style={{
            position: "absolute",
            right: "5px",
            bottom: "5px",
            color: "#FF8C00",
            fontWeight: "bold",
            fontSize:'1.2rem'
          }}
          onClick={showDrawer}
        >
          More
        </div>
      </Card>
      <Drawer
        title="Project Details"
        closable={{ "aria-label": "Close Button" }}
        onClose={onClose}
        open={open}
      >
        <div>{projectDescription}</div>
      </Drawer>
    </div>
  );
};

export default ExperienceCard;
