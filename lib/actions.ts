"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
});

export const addTodo = async (prevState: any, data: FormData) => {
  const name = data.get("name") as string;

  const validatedFields = schema.safeParse({
    name,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await prisma.todo.create({ data: { name } });
  } catch (e) {
    return {
      message: "Failed to add",
    };
  }
  revalidatePath("/todos");
  redirect("/todos");
};

export const deleteTodo = async (id: number) => {
  await prisma.todo.delete({
    where: {
      id,
    },
  });
  revalidatePath("/todos");
};

export const updateTodo = async (id: number, data: FormData) => {
  const name = data.get("name") as string;
  const isCompleted = data.get("isCompleted") as string;
  await prisma.todo.update({
    where: {
      id,
    },
    data: {
      name,
      isCompleted: isCompleted === "true" ? true : false,
    },
  });
  revalidatePath("/todos");
  redirect(`/todos`);
};
