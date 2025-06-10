export function getCurrentRecord(selectedDate){
  const localList = localStorage.getItem(selectedDate);

  let currentList;
  if(localList){
    currentList = JSON.parse(localList);
  }else{
    currentList = Array(48).fill(0);
   }
  return currentList;
}
export function saveToLocalStorage(selectedDate, list){
  localStorage.setItem(selectedDate, JSON.stringify(list));
}