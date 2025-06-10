import { useState, useEffect } from "react";
import TimeTable from "../components/time/TimeTable";
import TypePicker from "../components/time/TypePicker";
import TimeCharts from "../components/time/TimeCharts";
import { setSelectedDate } from "../redux/RecordSlice";
import { useDispatch } from "react-redux";
import styles from "../css/TimeTracker.module.css";

const TimeTracker = () => {
  const [date, setDate] = useState("");
  const dispatch = useDispatch();
  //组件第一次渲染时，将日期存入redux
  useEffect(() => {
    let currentDate = new Date().toISOString().substring(0, 10);
    setDate(currentDate);
    dispatch(setSelectedDate(currentDate));
  }, []);
  //日期改变时，将日期存入redux
  function clickHanle(e) {
    setDate(e.target.value);
    dispatch(setSelectedDate(e.target.value));
  }
  return (
    <div className={styles.TimeTrackerContainer}>
      <div className={styles.dateSetter}>
        <h3>Set Date:</h3>
        <input type="date" value={date} onChange={clickHanle} />
      </div>
      <TypePicker />
      <TimeTable />
      <TimeCharts />
    </div>
  );
};

export default TimeTracker;
