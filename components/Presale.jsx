import { Tab } from '@headlessui/react'


const Presale = () => {

    return (
        <>
        <div className="mt-20 flex md:h-screen justify-center items-center font-serif">
            <div className="w-full md:max-w-2xl h-3/5 p-4">
            <div className=" border border-solid border-gray-600">
                <Tab.Group>
                {/* <Tab.List>
            <div className="flex items-center  border border-black">
               
            <Tab>
            <div className=" text-center py-4 border-r w-6/12 border-black">MINT</div>
            </Tab>
            <Tab>
            <div className="w-6/12 text-center py-4 border-l border-black">REDEEM</div>
            </Tab>
           
            </div>
            </Tab.List> */}
            <Tab.List className="flex items-center  border border-gray-200">
                    <Tab className={({selected}) => selected? "text-center py-4 border-r w-6/12 border-gray-200 text-[#ebff00]"
                    :
                    "text-center py-4 border-r w-6/12 border-gray-200 text-[#ebff00] bg-opacity-25"
                    }>MINT</Tab>
                    <Tab  className={({selected}) => selected? "text-center py-4 border-r w-6/12 border-gray-200 text-[#ff00f5]"
                    :
                    "text-center py-4 border-r w-6/12  border-gray-200 text-[#ff00f5] bg-opacity-25"
                    }>CLAIM</Tab>
                </Tab.List>
          
            <Tab.Panels>
               
                
    <div className="w-full h-full relative pt-6 m-auto rounded-md shadow-md">
    <Tab.Panel>
        <div className='px-6'>
        <form className="mt-6">
        <label className="block text-sm pb-4 font-serif">AMOUNT</label>
        <div className="flex items-center p-2 border rounded-md">
                       <img src='/bnb.svg' className='h-8 w-8' />
                        <input
                            type="email"
                            placeholder="amount"
                            id="email"
                            className="w-full p-1 ml-3 text-gray-500 outline-none bg-transparent"
                        />
                        <p className="font-normal">BNB</p>
                    </div>

            {/* <div class="mt-4">
            <label class="block text-sm pb-2">TO</label>
        <div className="flex items-center p-2 border rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-400 w-7 h-7" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        <input
                            type="email"
                            placeholder="amount"
                            id="email"
                            className="w-full p-1 ml-3 text-gray-500 outline-none bg-transparent"
                        />
                        <p className="font-normal">BNB</p>
                    </div>
            </div> */}

        
        </form>
       

        
        <div className="flex items-center justify-between mt-4">
            <p>PRICE</p>
            <p>10000 CHASE PER BNB</p>
        </div>
        <div className="flex items-center justify-between mt-4 mb-8">
            <p>MINIMUM RECEIVED</p>
            <p>-</p>
        </div>
        </div>
        <button type="button"
                className="w-full py-6  mt-6 text-[#24ff00] font-medium  text-lg transition-colors duration-200 transform  focus:outline-none border border-gray-700">
                BUY
            </button>   
        </Tab.Panel>

        <Tab.Panel>
        <div className='px-6'>
    <div className='bg-yellow-900 py-6 px-3 rounded-lg font-serif'>
      <p>Claim assets anytime. Referral rewards reflect here if referral link is used.</p>
      </div>
    <div className="flex items-center justify-between mt-4">
            <p>PRICE</p>
            <p>10000 CHASE PER BNB</p>
        </div>
    <div className="flex items-center justify-between mt-4">
            <p>REFERRAL COUNT</p>
            <p>0</p>
        </div>
    <div className="flex items-center justify-between mt-4 mb-6">
            <p> TOKEN REWARDS</p>
            <p>0</p>
        </div>
        </div>

        <button  type="button"
                className="w-full py-6  mt-6 text-[#24ff00] font-medium text-lg transition-colors duration-200 transform  focus:outline-none border border-gray-700">
                Claim
            </button>   
    </Tab.Panel>
    </div>
    </Tab.Panels>

    </Tab.Group>
            </div>
            </div>
        </div>
        </>
    )
}

export default Presale