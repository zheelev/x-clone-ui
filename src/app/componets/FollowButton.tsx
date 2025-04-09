"client"

const FollowButton = ({userId,isFollowed}:{userId:string, isFollowed:boolean}) => {
    return (
       <div className="">
        <button className="py-2 px-4 bg-white text-black font-bold rounded-full cursor-pointer"> 
            {isFollowed ? "Unfollowing" : "Follow"}
            </button>
       </div>
    );
}

export default FollowButton;
