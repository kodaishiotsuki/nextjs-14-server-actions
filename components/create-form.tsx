"use client";

import { useFormState, useFormStatus } from "react-dom";
import { addTodo } from "@/lib/actions";
import { SubmitButton } from "./submit-button";

const initialState = {
  message: "",
  errors: undefined,
};

const CreateForm = () => {
  const [state, formAction] = useFormState(addTodo, initialState);

  return (
    <form className="mt-4" action={formAction}>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" className="border mx-2 p-1" />
      {state?.message && (
        <div className="text-red-600 font-bold my-2">{state?.message}</div>
      )}
      {state?.errors?.name &&
        state.errors.name.map((error: string) => (
          <div className="text-red-600 font-bold my-2" key={error}>
            {error}
          </div>
        ))}
      <SubmitButton />
    </form>
  );
};

export default CreateForm;
