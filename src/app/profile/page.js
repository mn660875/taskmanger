import Navbar from "../components/Navbar";

export default function Page(){
    return(
        <div className="flex min-h-screen">
            <Navbar/>
            <div className="grid grid-cols-4 auto-row-[200px] w-full gap-2 p-5">
                <div className="col-span-2 row-span-2 bg-[#F2F3F4] rounded-lg p-4">
                    <div  >
                        <p className="text-gray-600 font-semibold">Name:</p>
                        <h1 className="text-2xl font-bold tracking-tight">Muhammad Nasir</h1>
                    </div>
                    <div >
                        <p className="text-gray-600 font-semibold">Father Name:</p>
                        <h1 className="text-2xl font-bold tracking-tight">Hassan Akhtar</h1>
                    </div>

                </div>
                <div className="col-span-2  bg-yellow-400 rounded-lg"></div>
                <div className="col-span-1  bg-rose-500 rounded-lg"></div>
                <div className="col-span-1  bg-green-500 rounded-lg"></div>
                <div className="col-span-1  bg-sky-500 rounded-lg"></div>
                <div className="col-span-3  bg-indigo-500 rounded-lg"></div>

            </div>
            </div>
      
    )
}