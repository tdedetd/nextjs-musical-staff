export function debounce<EventName extends keyof HTMLElementEventMap>(
  target: HTMLElement,
  eventName: EventName,
  delay: number,
  callback: (event: HTMLElementEventMap[EventName]) => void
): typeof callback;

export function debounce<EventName extends keyof WindowEventMap>(
  target: Window,
  eventName: EventName,
  delay: number,
  callback: (event: WindowEventMap[EventName]) => void
): typeof callback;

export function debounce(
  target: EventTarget,
  eventName: string,
  delay: number,
  callback: (event: Event) => void
): typeof callback {
  let timeoutId: number | null = null;

  const listener: typeof callback = (event) => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      callback(event);
    }, delay, '');
  };

  target.addEventListener(eventName, listener);
  return listener;
}
