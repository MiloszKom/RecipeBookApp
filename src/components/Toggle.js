import { useCallback, useState } from "react";

export default function Toggle({ children }) {
  const [on, setOn] = useState(false);
  const toggle = useCallback(() => setOn((prev) => !prev), []);
  const close = useCallback(() => setOn(false), []);

  return children({ on, toggle, close });
}
