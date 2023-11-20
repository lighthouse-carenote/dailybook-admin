const getIterator = ({ from, to, step }: { from: number; to: number; step: number }) => ({
  from,
  to,
  *[Symbol.iterator]() {
    for (let i = this.from; i < this.to; i += step) {
      yield i;
    }
  },
});

/**
 * python의 range와 동일
 *
 * - args[0] - start
 * - args[1] - end(not contains)
 * - args[2] - step
 *
 * @param {...number} args 최소 1개, 최대 3개의 number params를 가진다.
 */
export const range = (...args: number[]) => {
  if (args.some((arg) => !Number.isSafeInteger(arg))) {
    return [];
  }
  if (args.length === 1) {
    const from = 0;
    const to = args[0];
    const step = 1;
    return getIterator({ from, to, step });
  } else if (args.length === 2) {
    const from = args[0];
    const to = args[1];
    const step = 1;
    return getIterator({ from, to, step });
  } else if (args.length === 3) {
    const from = args[0];
    const to = args[1];
    const step = args[2];
    return getIterator({ from, to, step });
  } else {
    return [];
  }
};

export const toQueryString = (obj): string =>
  Object.entries(obj)
    .map(([k, v]) => {
      if (v === undefined || v === null || v === '') {
        return '';
      }
      if (Array.isArray(v)) {
        return v.map((arrV) => `${k}=${arrV}`).reduce((prev, cur) => `${prev}&${cur}`);
      } else {
        return `${k}=${v}`;
      }
    })
    .reduce((prev, cur) => `${prev}&${cur}`);

export const getDebounce = () => {
  let timeoutId: NodeJS.Timeout | undefined = undefined;
  return (callback: () => void, time: number) => {
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(callback, time);
  };
};

export const getThrottle = () => {
  let waiting = false;
  let willExecuteCallback: () => void;
  return (callback: () => void, time: number) => {
    willExecuteCallback = () => callback();
    if (!waiting) {
      waiting = true;
      setTimeout(() => {
        willExecuteCallback();
        waiting = false;
      }, time);
    }
  };
};
