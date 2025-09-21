import { FaGithubSquare, FaLinkedinIn } from "react-icons/fa";

const Footer=()=>{
    return(
        <div className='max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
            <div className="space-y-4">
                <h3 className="text-2xl text-gray-200 font-semibold"> Emi Barrientos</h3>
                <div className="flex flex-row gap-6 text-gray-400 textt-4xl">
                    <a href="https://github.com/EmiBarrientos"><FaGithubSquare/></a>
                    <a href="https://www.linkedin.com/in/emiliano-barrientos/"><FaLinkedinIn/></a>
                    
                </div>

            </div>
            <p className="text-gray-400 ">@2025 Emiliano Barrientos</p>

        </div>
    )
}

export default Footer