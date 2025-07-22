import Image from "next/image";
import Navbar from "../components/Navbar";
import { IoIosArrowDown } from "react-icons/io";


export default function Dashboard() {
  return (
    <>
    <div className=" flex h-screen ">
      <div className=" w-full flex justify-between p-4">
        <h1 className="font-semibold text-2xl tracking-tight">
          Good Morning, Nasir!
        </h1>

        <div className="w-10 h-10 rounded-full flex items-center justify-center gap-4">
          <Image
            alt="User"
            width={48}
            height={48}
            src={"/img/user.jpg"}
            className="object-cover rounded-full"
          />
          <h1 className="font-bold text-lg flex items-center gap-2">
            Nasir <IoIosArrowDown />
          </h1>
        </div>
      </div>

      
    
    </div>
   
  </>  
  );
}
