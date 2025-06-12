import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedType } from "../../redux/TypeSlice";
import styles from "../../css/time/TypePicker.module.css";

const TypePicker = React.memo(() => {
  const typeList = useSelector((state) => state.type.typeList);
  const dispatch = useDispatch();
  function clickHanle(id, color, content) {
    dispatch(setSelectedType({ id, color, content }));
  }
  return (
    <div className={styles.TypePickerContainer} style={{ display: "flex" }}>
      <h2>Event Type:</h2>
      {typeList.map((type, index) => {
        return (
          <div
            key={index}
            className={styles.block}
            style={{ backgroundColor: type.color }}
            onClick={() => {
              clickHanle(type.id, type.color, type.content);
            }}
          >
            {type.content}
          </div>
        );
      })}
    </div>
  );
});

export default TypePicker;
