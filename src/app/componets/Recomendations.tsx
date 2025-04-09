
import Link from "next/link";
import Image from "./Image";
import { prisma } from "@/prisma";
import { auth } from "@clerk/nextjs/server";

const Recomendations = async () => {

    const { userId } = await auth()

    if (!userId) return;
    const followingsIds = await prisma.follow.findMany({
        where: { followerId: userId },
        select: { followingId: true },
    });
    const followedUserIds = followingsIds.map((f) => f.followingId);
    const friendRecomendations = await prisma.user.findMany({
        where: {
            id: { not: userId, notIn: followedUserIds },
            following: { some: { followerId: { in: followedUserIds } } }
        },
        take: 3,
        select: { id: true, displayName: true, username: true, img: true },
    });

    return (
        <div className="p-4 rounded-2xl border-[1px] border-gray-600 flex flex-col gap-4">

            {friendRecomendations.map(person=>(
            <div className="flex items-center justify-between" key={person.id}>
                {/*IMAGE & USER INFO*/}
                <div className="flex items-center gap-2">
                    <div className="relative rounded-full overflow-hidden w-10 h-10">
                        <Image
                            path={person.img || "general/noAvatar.png"}
                            alt= {person.username}
                            w={100} h={100}
                            tr={true}
                        />
                    </div>
                    <div className="">
                        <h1 className="text-md font-bold">{person.displayName || person.username}</h1>
                        <span className="text-gray-500 text-sm ">@{person.username}</span>
                    </div>
                </div>
                <button className="bg-white text-black rounded-full px-4 py-1 font-semibold">Follow</button>
            </div>
            ))}

        
            <Link href={"/"} className="text-blue-500">Show more</Link>
        </div>
    );
}

export default Recomendations;
