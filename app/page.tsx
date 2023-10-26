import AddNewPostButton from "@comp/AddNewPostButton";
import Posts from "@comp/Posts";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Modern Blogging Platform</h1>
        <AddNewPostButton/>
      </div>
      <Posts/>
    </div>
  )
}
