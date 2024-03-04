import CreateForm from "@/components/create-form";
import Link from "next/link";

const Page = async () => {
  return (
    <div className="m-8">
      <Link href="/todos">戻る</Link>
      <h1 className="text-xl font-bold">Todo追加</h1>
      <CreateForm />
    </div>
  );
};

export default Page;
