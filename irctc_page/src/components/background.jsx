
import back from "../images/bg.png"
const Background  = () => {
  return (
    <>
    <div className="h-[45rem] bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className=" flex justify-center items-center">
        <img className=" h-[45rem] w-full	  m-2" src={back} alt="" />
        </div>
    </div>
    </>
  )
}

export default Background