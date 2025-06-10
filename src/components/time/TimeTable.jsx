import React from "react";
import TimeColumn from "./TimeColumn";
import { useSelector } from "react-redux";

function TimeTable() {
  const typeList = useSelector((state) => state.type.typeList);
  const currentList = useSelector((state) => state.record.currentList);
  const timeBlockList = [];
  if (currentList && currentList.length > 0) {
    for (let i = 0; i < 24; i++) {
      let type0 = getTypeformId(currentList[i * 2]);
      let type1 = getTypeformId(currentList[i * 2 + 1]);
      let types = [
        { color: type0.color, content: type0.content },
        { color: type1.color, content: type1.content },
      ];
      timeBlockList.push(<TimeColumn key={i} index={i} types={types} />);
    }
  }
  function getTypeformId(id) {
    return typeList.filter((type) => type.id === id)[0];
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", height:"500px", flexWrap: "wrap" }}>
      {timeBlockList}
    </div>
  );
}

export default TimeTable;
