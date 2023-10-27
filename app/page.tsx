import AddNewPostButton from "@comp/post/AddNewPostButton";
import Posts from "@comp/post/Posts";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between flex-wrap gap-6">
        <h1 className="text-xl font-semibold whitespace-nowrap">Modern Blogging Platform</h1>
        <AddNewPostButton />
      </div>
      <Posts />
    </div>
  )
}
