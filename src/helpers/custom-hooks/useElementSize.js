import { useCallback, useState } from "react";

export const useElementSize = () => {

  const [ref, setRef] = useState(null);
  const [size, setSize] = useState({
    width: 0,
    height: 0
  })

  const handleSize = useCallback(() => {
    setSize({
      width: ref?.offsetWidth || 0,
      height: ref?.offsetHeight || 0,
    })
  }, [ref?.offsetHeight, ref?.offsetWidth]);

}