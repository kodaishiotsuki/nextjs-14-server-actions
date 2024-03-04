"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`bg-blue-600 px-2 py-1 rounded-lg text-sm text-white  ${
        pending ? "opacity-50" : ""
      }`}
    >
      Add Todo
    </button>
  );
}
