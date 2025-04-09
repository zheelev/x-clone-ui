import React from 'react';
import Link from 'next/link';
import Image from './Image';

const menuList = [
    {
        id: 1,
        name: "Homepage",
        link: "/",
        icon: "home.svg",
    },
    {
        id: 2,
        name: "Explore",
        link: "/",
        icon: "explore.svg",
    },
    {
        id: 3,
        name: "Notification",
        link: "/",
        icon: "notification.svg",
    },
    {
        id: 4,
        name: "Messages",
        link: "/",
        icon: "message.svg",
    },
    {
        id: 5,
        name: "Bookmarks",
        link: "/",
        icon: "bookmark.svg",
    },
    {
        id: 6,
        name: "Jobs",
        link: "/",
        icon: "job.svg",
    },
    {
        id: 7,
        name: "Communities",
        link: "/",
        icon: "community.svg",
    },
    {
        id: 8,
        name: "Premium",
        link: "/",
        icon: "logo.png",
    },
    {
        id: 9,
        name: "Profile",
        link: "/profile",
        icon: "profile.svg",
    },
    {
        id: 10,
        name: "More",
        link: "/",
        icon: "more.svg",
    },
];

const LeftBar = () => {
    return (
        <div className="h-screen sticky top-0 flex flex-col justify-between">
            {/*LOGO MENU BUTTON*/}
            <div className="flex flex-col gap-4 text-lg items-center 2xl:items-start">
                {/*LOGO*/}
                <Link href="/" className="p-2 rounded-full hover:bg-[#181818]">
                    <Image path="icons/logo.png" alt='logo' w={24} h={24} />
                </Link>
                {/*MENU LIST*/}
                <div className="flex flex-col gap-4">
                    {menuList.map(item => (
                        <Link href={item.link} className="p-2 rounded-full hover:bg-[#181818] flex items-center gap-4" key={item.id}>
                            <Image
                                path={`icons/${item.icon}`}
                                alt={item.name}
                                w={24}
                                h={24} />
                            <span className="hidden 2xl:inline">{item.name}</span>
                        </Link>
                    ))}
                </div>
                {/*BUTTONM*/}
                <Link href="/compose/post" className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center 2xl:hidden">
                    <Image path="icons/post.svg" alt="new post" w={24} h={24} />
                </Link>
                <Link href="/compose/post" className="hidden 2xl:block bg-white text-black rounded-full font-bold py-2 px-20">
                    Post
                </Link>
            </div>
            {/*USER*/}
            <div className="flex items-center justify-between pb-3">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 relative rounded-full overflow-hidden">
                        <Image path="/general/avatarb.png" alt='avatar' w={100} h={100} tr={true} />
                    </div>
                    <div className=" hidden 2xl:flex flex-col">
                        <span className="font-bold">BenderQx</span>
                        <span className="text-sm text-gray-500">@benderqx</span>
                    </div>
                </div>
                <div className="hidden 2xl:block cursor-pointer font-bold">...</div>
            </div>
        </div>
    );
}
export default LeftBar;
