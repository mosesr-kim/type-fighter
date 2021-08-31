
export default function formatTime(sec) {
  if (sec < 0) return '00:00';
  let minutes = Math.floor(sec / 60);
  let seconds = sec % 60;

  if (minutes < 10) minutes = `0${minutes}`;
  if (seconds < 10) seconds = `0${seconds}`;
  return `${minutes}:${seconds}`;
}
