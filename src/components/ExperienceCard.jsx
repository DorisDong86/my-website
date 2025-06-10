import React, { useState } from "react";
import { Card, Drawer  } from "antd";

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
        style={{ width: 260 }}
        hoverable={true}
        variant="outlined"
        cover={
          <div
            style={{
              backgroundColor: "#2E8B57",
              height: "50px",
              lineHeight: "50px",
              textAlign: "center",
              color: "white",
            }}
          >
            {companyName} ( {period} )
          </div>
        }
      >
        <div style={{display: 'flex',flexDirection:"column",alignItems:'flex-start',height:'60px',justifyContent: 'space-between'}}>
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
        <div style={{position:"absolute",right:"5px",bottom:"5px",color:"#FF8C00", fontWeight:"bold"}} onClick={showDrawer}>More</div>
      </Card>
      <Drawer
        title="Project Details"
        closable={{ 'aria-label': 'Close Button' }}
        onClose={onClose}
        open={open}
      >
        <div>{projectDescription}</div>
      </Drawer>
    </div>
    
  );
};

export default ExperienceCard;
