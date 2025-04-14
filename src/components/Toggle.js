import { useState } from "react";

export default function Toggle({ children }) {
  const [on, setOn] = useState(false);
  const toggle = () => setOn((prev) => !prev);
  const close = () => setOn(false);

  return children({ on, toggle, close });
}
