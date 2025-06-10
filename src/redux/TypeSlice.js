import { createSlice } from "@reduxjs/toolkit";
export const TypeSlice = createSlice({
  name: "type",
  initialState: {
    selectedType: null,
    typeList: [
      { id: 0, content: "", color: "#EDEDED" },//默认类型，淡灰色
      { id: 1, content: "尽兴娱乐", color: "#09A1FF" },//蓝色
      { id: 2, content: "放松休闲", color: "#09FF77" },//绿色
      { id: 3, content: "高效工作", color: "#F7FF09" },//黄色
      { id: 4, content: "强迫工作", color: "#FFBD09" },//橙色
      { id: 5, content: "无效拖延", color: "#FF0909" },//橙色
    ],
  },
  reducers: {
    setSelectedType: (state, action) => {
      state.selectedType = action.payload;
    },
    setTypeList: (state, action) => {
      state.typeList = action.payload;
    },
  },
});
export const { setSelectedType, setTypeList } = TypeSlice.actions;

export default TypeSlice.reducer;
