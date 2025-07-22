import Image from "next/image";
import Navbar from "../components/Navbar";
import { MdOutlineDoneOutline, MdPending } from "react-icons/md";
import { TbCalendarDue } from "react-icons/tb";
import { FaClock } from "react-icons/fa6";
import { MdIncompleteCircle } from "react-icons/md";

export default function Page() {
  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="flex-1 bg-[#F5E4E5] p-6 overflow-y-auto">
        <div className="w-full flex justify-between">
          <h1 className="text-3xl tracking-tight font-bold">
            Good Morning, Nasir!
          </h1>
          <div className="flex items-center space-x-2">
            <Image
              src={"/img/user.jpg"}
              alt="user"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <h4 className="text-lg font-medium">Nasir</h4>
          </div>
        </div>

        {/* Grid Section */}

        <div className="grid grid-cols-4 auto-rows-[110px] gap-3 w-full max-w-5xl mt-5">
          <div className="col-span-2 row-span-3  bg-white rounded-xl p-4">
            <h1 className="text-lg font-bold mb-4">My Task</h1>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#F9D9CB] rounded-lg p-4 flex flex-col justify-center items-center ">
                <MdOutlineDoneOutline className="text-4xl text-green-500 " />
                <h1 className="font-bold text-lg"> Priority Task</h1>
                <p>23/37 Completed</p>
              </div>
              <div className="bg-[#EBE6E6] rounded-lg p-4 flex flex-col justify-center items-center ">
                <MdIncompleteCircle className="text-4xl text-red-500 " />
                <h1 className="font-bold text-lg">Uncompleted Task</h1>
                <p>23/37 Completed</p>
              </div>
              <div className="bg-[#EBE6E6]  rounded-lg p-4 flex flex-col justify-center items-center ">
                <TbCalendarDue className="text-4xl text-red-500 " />
                <h1 className="font-bold text-lg">Overdue Task</h1>
                <p>23/37 Completed</p>
              </div>
              <div className="bg-[#F9D9CB]  rounded-lg p-4 flex flex-col justify-center items-center ">
                <MdPending className="text-4xl text-yellow-500 " />
                <h1 className="font-bold text-lg">Pending Task</h1>
                <p>23/37 Completed</p>
              </div>
            </div>
          </div>

          <div className="col-span-2 row-span-1 bg-white rounded-xl ">
            <div className="bg-white rounded-xl p-4 flex flex-col h-[300px]">
              <h2 className="text-lg font-bold mb-4">Client Messages</h2>

              <div className="grid gap-3 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                {/* Message 1 */}
                <div className="flex items-center justify-between bg-gray-50 p-2 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/img/user.jpg"
                      alt="John Doe"
                      width={42}
                      height={42}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-sm">Donna Paulsen</p>
                      <p className="text-xs text-gray-500">
                        Project meeting scheduled for tomorrow. Looking forward
                        to getting started!
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 whitespace-nowrap">
                    02:48 pm
                  </p>
                </div>

                {/* Message 2 (Active) */}
                <div className="flex items-center justify-between bg-black text-white p-2 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/img/user.jpg"
                      alt="John Doe"
                      width={42}
                      height={42}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-sm">Jessica Pearson</p>
                      <p className="text-xs text-gray-200">
                        Great news! The development phase is complete. Moving on
                        to testing.
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-300 whitespace-nowrap">
                    11:14 am
                  </p>
                </div>

                {/* Message 3 */}
                <div className="flex items-center justify-between bg-gray-50 p-2 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/img/user.jpg"
                      alt="John Doe"
                      width={42}
                      height={42}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-sm">Mike Ross</p>
                      <p className="text-xs text-gray-500">
                        Client feedback incorporated. Finalizing the design
                        elements now.
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 whitespace-nowrap">
                    30th Aug
                  </p>
                </div>

                {/* Add additional dummy messages for scroll testing */}
                <div className="flex items-center justify-between bg-gray-50 p-2 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/img/user.jpg"
                      alt="John Doe"
                      width={42}
                      height={42}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-sm">John Doe</p>
                      <p className="text-xs text-gray-500">
                        Please review the attached document for updates.
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 whitespace-nowrap">
                    Yesterday
                  </p>
                </div>
              </div>
              
            </div>
           
          </div>
        </div>
        

      </div>
    </div>
  );
}
