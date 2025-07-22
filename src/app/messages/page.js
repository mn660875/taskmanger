import Navbar from "../components/Navbar";

export default  function Page(){
    return(
        <div className="flex min-h-screen">
            <Navbar/>
            <div>
                <h1 className="text-4xl">Messages</h1>
            </div>
        </div>
    )
}