import { useRef, useState } from "react"

const FaqsCard = (props) => {

    const answerElRef = useRef()
    const [state, setState] = useState(false)
    const [answerH, setAnswerH] = useState('0px')
    const { faqsList, idx } = props

    const handleOpenAnswer = () => {
        const answerElH = answerElRef.current.childNodes[0].offsetHeight
        setState(!state)
        setAnswerH(`${answerElH + 20}px`)
    }

    return (
        <div 
            className="text-white space-y-3 mt-5 overflow-hidden border-b"
            key={idx}
            onClick={handleOpenAnswer}
        >
            <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-white font-medium">
                {faqsList.q}
                {
                    state ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    )
                }
            </h4>
            <div
                ref={answerElRef} className="duration-300"
                style={state ? {height: answerH } : {height: '0px'}}
            >
                <div>
                    <p className="text-white">
                        {faqsList.a}
                    </p>
                </div>
            </div>
        </div>
    )
}

    const Faq = () => {

        const faqsList = [
            {
                q: "What is Chase Finance",
                a: "$CHASE is a Decentralised Autonomous Organisation (DAO) governance that provides the community members the ability to be share holders in the Tokonised Assets e.g NFT. The NFT market is worth over $17B, but the rich takes most share. Chase is changing that by giving power to the people throuhg share ownership of NFTs e.g BoredApe"
    
            },
            {
                q: "What is Chase?",
                a: "$CHASE is a Decentralised Autonomous Organisation (DAO) governance token on binance smart chain (BEP20). In the third quarter of 2022 the token is to become multichain and is going to be available on blockchains as Ethereum, Tron, Solana."
    
            },
            {
                q: "How's this possible?",
                a: "Member of the organisation purchase high value NFTs, while retainig their share without propostion to their contribution."
            },
            {
                q: "How safe is funds?",
                a: "Member of the organisation funds are held in an audited smart contract that cannot be changed or accesed without autorisation"
            },
            {
                q: "How to part of the community?",
                a: "Users wishing to join must first purchase $chase from popular marketplace "
            },
            {
                q: "How to earn?",
                a: "Holders who participate are able to own NFT and take profit as Tokenised assets grow in value"
            },     
        ]
  
    return (
        <section className="text-white leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 lg:px-8">
            <div className="space-y-3 text-center">
                <h1 className="text-3xl text-white font-semibold">
                    Frequently Asked Questions
                </h1>
                <p className="text-white max-w-lg mx-auto text-lg">
                    Answered all frequently asked questions, Still confused? feel free to contact us.
                </p>
            </div>
            <div className="mt-14 max-w-2xl mx-auto text-white">
                {
                    faqsList.map((item, idx) => (
                        <FaqsCard
                            key={idx}
                            faqsList={item}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default Faq;