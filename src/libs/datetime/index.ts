export const parseDateToString = (date: Date) => {
  return `${date.getFullYear()}.${date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}.${
    date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
  }`;
};

export const parseDateToStringWithMinute = (date: Date) => {
  return `${date.getFullYear()}.${date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}.${
    date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
  } ${date.getHours() < 10 || date.getHours() == 0 ? `0${date.getHours()}` : date.getHours()}:${
    date.getMinutes() < 10 || date.getMinutes() == 0 ? `0${date.getMinutes()}` : date.getMinutes()
  }`;
};

export const secondsToMinAndSeconds = ({ seconds }: { seconds: number }): string => {
  const minutes = Math.floor(seconds / 60);
  const sec = seconds % 60;
  return `${minutes}:${sec < 10 ? `0${sec}` : sec}`;
};

export const REMAINING_AUTH_NUM_INPUT_INIT_SECONDS = 300;

export const SECOND = 1000;
export const MINUTE = SECOND * 60;
export const HOUR = MINUTE * 60;
export const DAY = HOUR * 24;
export const WEEK = DAY * 7;
export const MONTH = DAY * 30;

export const getBeforeTime = (date: Date) => {
  const now = new Date();
  if (now.getTime() - date.getTime() < MINUTE) {
    return '방금 전';
  } else if (now.getTime() - date.getTime() < HOUR) {
    return `${Math.floor((now.getTime() - date.getTime()) / MINUTE)}분전`;
  } else if (now.getTime() - date.getTime() < DAY) {
    return `${Math.floor((now.getTime() - date.getTime()) / HOUR)}시간 전`;
  } else if (now.getTime() - date.getTime() < WEEK) {
    return `${Math.floor((now.getTime() - date.getTime()) / DAY)}일 전`;
  } else if (now.getTime() - date.getTime() < MONTH) {
    return `${Math.floor((now.getTime() - date.getTime()) / WEEK)}주전`;
  } else if (now.getTime() - date.getTime() < MONTH * 4) {
    return `${Math.floor((now.getTime() - date.getTime()) / MONTH)} 달 전`;
  } else {
    return '';
  }
};
