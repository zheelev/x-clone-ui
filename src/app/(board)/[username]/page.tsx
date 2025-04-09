import Feed from "@/app/componets/Feed";
import FollowButton from "@/app/componets/FollowButton";
import Image from "@/app/componets/Image";
import { prisma } from "@/prisma";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { notFound } from "next/navigation";



const UserPage = async ({ params }: { params: Promise<{ username: string }> }) => {

    const { userId } = await auth();

    const user = await prisma.user.findUnique({
        where: { username: (await params).username },
        include: {
            _count: { select: { followers: true, following: true } },
            following: userId ? { where: { followerId: userId } } : undefined,
        },
    });

    console.log("Current ID is: "+userId)
    if (!user) return notFound()

    return (
        <div className="">
            {/* PROFILE TITLE*/}
            <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-[#00000084]">
                <Link href={"/"}>
                    <Image path="icons/back.svg" alt="back" w={24} h={24} />
                </Link>
                <h1 className="font-bold text-lg">{user.displayName}</h1>
            </div>
            {/*INFO*/}
            <div className="">
                {/* COVER & AVATAR CONTAINER*/}
                <div className="relative w-full">
                    <div className="w-full aspect-[3/1] relative">
                        <Image path={user.cover || "general/noCover.png"}
                            alt="cover"
                            w={800}
                            h={300}
                            tr={true} />
                    </div>
                    <div className="w-1/5 aspect-square rounded-full overflow-hidden border-4 border-black bg-gray-500 absolute left-4 -translate-y-1/2">
                        <Image path={user.img || "general/noAvatar.png"}
                            alt="cover"
                            w={100}
                            h={100}
                            tr={true} />
                    </div>
                </div>
                <div className="flex w-full items-center justify-end gap-2 p-2">
                    <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
                        <Image path="icons/more.svg" alt="more" w={20} h={20} />
                    </div>
                    <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
                        <Image path="icons/explore.svg" alt="more" w={20} h={20} />
                    </div>
                    <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
                        <Image path="icons/message.svg" alt="more" w={20} h={20} />
                    </div>
                    {userId && 
                    <FollowButton 
                    userId={user.id} 
                    isFollowed={!! user.following.length}/>}
                </div>
                {/*  USER INFO */}
                <div className="p-4 flex flex-col gap-2 ">
                    {/* USERNAME & HANDLE */}
                    <div className="">
                        <h1 className="text-2xl font-bold">{user.displayName}</h1>
                        <span className="text-sm text-gray-500">@{user.username}</span>
                    </div>
                    {user.bio && <p>{user.bio} Chanel</p>}
                    {/* JOB & LOCATION & DATE */}
                    <div className="flex gap-4 text-gray-500 text-[15px]">
                        {user.location && <div className="flex items-center gap-2">
                            <Image
                                path="icons/userLocation.svg"
                                alt="userLocation"
                                w={20}
                                h={20} />
                            <span>{user.location}</span>
                        </div>}
                        <div className="flex items-center gap-2">
                            <Image
                                path="icons/date.svg"
                                alt="userLocation"
                                w={20}
                                h={20} />
                            <span>
                                Joined{" "}
                                {new Date(user.createdAt.toString()).toLocaleDateString(
                                    "en-US",
                                    { month: "long", year: "numeric" }
                                )}
                            </span>
                        </div>
                    </div>
                    {/* FOLLOWING & FOLLOWERS */}
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2">
                            <span className="font-bold">{user._count.followers}</span>
                            <span className="text-gray-500 text-[15px]">Followers</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-bold">{user._count.following}</span>
                            <span className="text-gray-500 text-[15px]">Followings</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* FEED */}
            <Feed userProfileId={user.id} />
        </div>
    );
}

export default UserPage;
