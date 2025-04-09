import Feed from "../componets/Feed";
import Share from "../componets/Share";
import Link from "next/link";

const Homepage = () => {
  return (
    <div className="">
      <div className="flex justify-between text-gray-500 font-bold border-b-[1px] border-gray-500 p-5">
        <Link className="pb-3 flex items-center border-b-4 border-blue-500" href="/">For You</Link>
        <Link className="pb-3 flex items-center " href="/">Following</Link>
        <Link className="hidden pb-3 md:flex items-center " href="/">React Js</Link>
        <Link className="hidden pb-3 md:flex items-center " href="/">JavaScript</Link>
        <Link className="hidden pb-3 md:flex items-center " href="/">CSS</Link>
      </div>
      <Share/>
      <Feed/>
    </div>
  )
}

export default Homepage;