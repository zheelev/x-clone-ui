import Link from "next/link";
import Image from "./Image";

const PopularTags = () => {
    return (
        <div className="p-4 rounded-2xl border-[1px] border-gray-600 flex flex-col gap-4">
            <h1 className="text-xl font-bold text-gray-200">{"What's"} Happening?</h1>
            {/*TREND EVENT*/}
            <div className="flex gap-4">
                <div className="relative w-20 h-20 rounded-xl overflow-hidden ">
                    <Image path="general/post.jpeg" alt="event" w={120} h={120} tr={true}/>
                </div>
                <div className="flex-1">
                    <h2 className="font-bold text-gray-200">Lorem ipsum dolor sit amet consectetur.</h2>
                    <span className=" text-sm text-gray-500">Last night</span>
                </div>
            </div>
            {/*TOPICS*/}
            <div className="">
                <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">Technology * Trending</span>
                    <Image path="icons/infoMore.svg" alt="info" w={16} h={16}/>
                </div>
                <div className="">
                    <h2 className="text-gray-300 font-bold">Open AI</h2>
                    <span className="text-gray-500 text-sm">20k posts</span>
                </div>
            </div>
             {/*TOPICS*/}
             <div className="">
                <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">Technology * Trending</span>
                    <Image path="icons/infoMore.svg" alt="info" w={16} h={16}/>
                </div>
                <div className="">
                    <h2 className="text-gray-300 font-bold">Open AI</h2>
                    <span className="text-gray-500 text-sm">20k posts</span>
                </div>
            </div>
             {/*TOPICS*/}
             <div className="">
                <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">Technology * Trending</span>
                    <Image path="icons/infoMore.svg" alt="info" w={16} h={16}/>
                </div>
                <div className="">
                    <h2 className="text-gray-300 font-bold">Open AI</h2>
                    <span className="text-gray-500 text-sm">20k posts</span>
                </div>
            </div>
             {/*TOPICS*/}
             <div className="">
                <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">Technology * Trending</span>
                    <Image path="icons/infoMore.svg" alt="info" w={16} h={16}/>
                </div>
                <div className="">
                    <h2 className="text-gray-300 font-bold">Open AI</h2>
                    <span className="text-gray-500 text-sm">20k posts</span>
                </div>
            </div>
            <Link href={"/"} className="text-blue-500">Show more</Link>
        </div>
    );
}

export default PopularTags;
