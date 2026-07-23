// The last handful of principles, for the homepage rotator. Built on top of
// principles.js — see that file for where the actual data comes from.

import principles from "./principles.js";

export default function () {
  return principles().slice(0, 5);
}
