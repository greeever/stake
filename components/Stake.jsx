import { useState } from "react";
import {useAccount} from 'wagmi'

const Stake = () => {


    return (
        <>
        <div>
            <div className="">
            

                
                <div className="px-4">
                   
                    
                    <p className="text-left md:text-center pt-8 pb-8">STAKING POSITIONS</p>
                <div className="lg:flex lg:mx-auto lg:justify-center ">
                    <div className="border border-gray-500 px-4 lg:w-1/3">
                    <div className="flex pt-6 justify-center space-x-6">
                        <img className="h-6 w-6" src="/logo.svg" />
                        <p>CHASE</p>
                    </div>
                    <div className="py-6">
                        <p className="text-gray-600">UCP CIRCULATING SUPPLY</p>
                        <p className="text-gray-300">100,000,000,000 CHASE</p>
                        </div>
                    <div className="py-6">
                        <p className="text-gray-600">TOTAL CHASE STAKED</p>
                        <p className="text-gray-300">100,000,000</p>
                    </div>
                    <div className="flex justify-between pb-6">

                        
                        <p className="">DURATION</p>
                        <p className="">APR <span className="">20%</span></p>
                    </div>
                    <div className="grid grid-cols-3 place-items-center gap-2">
                        <div className=" border border-white  w-full p-4 active:bg-[#24ff00] active:text-gray-200">
                            <p>14D</p>
                        </div>
                        <div className=" border border-white  w-full p-4 active:bg-[#24ff00] active:text-gray-200">
                            <p>14D</p>
                        </div>
                        <div className=" border border-white  w-full p-4 active:bg-[#24ff00] active:text-gray-200">
                            <p>14D</p>
                        </div>
                    </div>


                    <div className="mb-8">
                    <form className="mt-6">
        <label className="block text-sm pb-4 font-serif">AMOUNT</label>
        <div className="flex items-center pt-1 border rounded-md">
                       <img src='/logo.svg' className='h-8 w-8' />
                        <input
                            type=""
                            placeholder="0"
                            id="email"
                            className="w-full p-1 ml-3 text-gray-500 outline-none bg-transparent py-3"
                        />
                        <p className="font-normal">CHASE</p>
                    </div>
        </form>
                    </div>
                    </div> 


                    <section className="lg:border lg:border-l lg:border-gray-300 lg:my-0 my-8 border-t border-gray-300 lg:w-3/5 lg:px-6">
                        <div className="">
                    <h2 className="pt-6">SUMMARY</h2>

                    <div className="py-6">
                        <h2 className="text-gray-600">STAKE DATE</h2>
                        <p className="pt-1">AUG-09-2022 24:31</p>
                    </div>
                    <div className="">
                        <h2 className="text-gray-600">REDEMPTION DATE</h2>
                        <p className="pt-1">AUG-23-2022 24:31</p>
                    </div>
                    <div className="pt-6">
                        <h2 className="text-gray-600">CURRENTLY STAKED</h2>
                        <p className="pt-1">-</p>
                    </div>
                    <div className="py-6">
                        <h2 className="text-gray-600">NEW STAKE AMOUNT</h2>
                        <p className="pt-1">-</p>
                    </div>
                    </div>

                    <div className="border-t border-gray-300 pb-6">
                    <div className="pt-6">
                        <h2 className="text-gray-600">TOTAL STAKED</h2>
                        <p className="">-</p>
                    </div>
                    <div>
                        <h2 className="text-gray-600">AVERAGE APR</h2>
                        <p>-</p>
                    </div>
                    <div>
                        <h2 className="text-gray-600">CREWARDS ON UNLOCK</h2>
                        <p>-</p>
                    </div>

                    <p className="text-[#ebff00] pt-6 pb-6">
                    ONCE STAKED, YOUR UXP WILL BE LOCKED AND ONLY RELEASED AFTER REDEMPTION PERIOD.
                    STAKING STARTS AFTER PRESALE.
                    </p>

                    <button type="button"
                className="w-full  py-6  mt-6 text-[#24ff00] font-medium text-lg transition-colors duration-200 transform  focus:outline-none border border-gray-700">
                STAKE CHASE
            </button>   
                    </div>
                    </section>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Stake;