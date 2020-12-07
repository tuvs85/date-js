import toDate from "./toDate";
function formatTime(time){
  if (!time)return new Date();
  time = time.replace(/-/ig, '/');
  if ((typeof time).toLowerCase() === 'number'){
    return toDate(((time).toString().length === 10)?(time * 1000): time)
  }
  if (!Number.isNaN(Number(time))){
    return toDate(Number(time));
  }
  return toDate(time);
}
export default formatTime
