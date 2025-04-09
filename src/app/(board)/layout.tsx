import LeftBar from "@/app/componets/LeftBar";
import RightBar from "@/app/componets/RightBar";

export default function BoardLayout({
  children, modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <div className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto flex justify-between">
      <div className="px-2 sm:px-4 2xl:px-8">
        <LeftBar />
      </div>
      <div className="flex-1 lg:min-w-[600px] border-x-[1px] border-gray-500 ">
        {children}
        {modal}
      </div>
      <div className="hidden lg:flex ml-4 md:ml-8 flex-1 ">
        <RightBar />
        </div>
    </div>
  );
}