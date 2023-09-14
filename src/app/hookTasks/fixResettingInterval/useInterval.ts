import { useEffect } from "react";
import { experimental_useEffectEvent as useEffectEvent } from "react";

export function useInterval(onTick: any, delay: number) {
  const onTimeChange = useEffectEvent(onTick);

  useEffect(() => {
    const id = setInterval(onTimeChange, delay);
    return () => {
      clearInterval(id);
    };
  }, [delay]);
}
