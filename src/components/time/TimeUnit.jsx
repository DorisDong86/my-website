import { useEffect, useState } from "react";
import styles from "../../css/time/TimeUnit.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setCurentList } from "../../redux/RecordSlice";

function TimeUnit({ idx, initColor, initContent }) {
  const [isChecked, setIsChecked] = useState(false);
  const [color, setColor] = useState(initColor);
  const [content, setContent] = useState(initContent);
  const selectedType = useSelector((state) => state.type.selectedType);
  const dispatch = useDispatch();

  useEffect(() => {
    setColor(initColor);
    setContent(initContent);
  }, [initColor, initContent]);

  useEffect(() => {
    if (isChecked && selectedType) {
      setColor(selectedType.color);
      setContent(selectedType.content);
      setIsChecked(false);
      dispatch(setCurentList({ typeId: selectedType.id, idx }));
    }
  }, [selectedType]);

  function handleClick() {
    setIsChecked(!isChecked);
  }
  return (
    <div>
      {/* 方块 */}
      <div
        className={styles.block}
        style={{ backgroundColor: color }}
        onClick={handleClick}
      >
        {/* 方块内容 */}
        {content}
        {/* 方块遮罩 */}
        <div
          className={styles.mask}
          style={{ visibility: isChecked ? "visible" : "hidden" }}
        >
          {/* 勾选符号 */}
          <div className={styles.checkbox}></div>
        </div>
      </div>
    </div>
  );
}

export default TimeUnit;
