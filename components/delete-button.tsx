import { deleteTodo } from "@/lib/actions";

const DeleteButton = ({ id }: { id: number }) => {
  const deleteTodoWithId = deleteTodo.bind(null, id);

  return (
    <form action={deleteTodoWithId}>
      <button className="bg-red-500 px-2 py-1 rounded-lg text-sm text-white">
        削除
      </button>
    </form>
  );
};

export default DeleteButton;
