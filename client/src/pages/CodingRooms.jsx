import NavBar2 from "../components/NavBar2"

const CodingRoomSection = ()=>{
    const currentPage = "coding-room"
    return (
        <>
        <div>
        <div>
           <NavBar2 currentPage={currentPage} />
        </div>
        <div>
          <div>
            <h1>
               My Coding Room 
            </h1>
          </div>
            <div className="flex gap-2 flex-row flex-wrap flex-shrink-0">
                <div
                className="h-[40vmin] w-[80vmin] bg-white shadow-md
                rounded-[2vmin]"
                >
                <div className="flex items-center jus gap-[3vmin] mt-[2vmin] ml-[2vmin]">
                    <div className="h-[10vmin] w-[10vmin] bg-slate-400 rounded-full
                    flex justify-center items-center">
                       <span>pfp</span>
                    </div>
                    <div>
                        <div>
                           <h1 className="text-3vmin text-black font-poppins
                        font-bold mt">
                            Users Profile Name 
                        </h1>
                        </div>
                      
                    </div>
                </div>
                </div>
                <div>
                    coding-room2
                </div>
                <div>
                    coding-room3
                </div>
            </div>
        </div>
        </div>
       
        </>
    )
}
export default CodingRoomSection