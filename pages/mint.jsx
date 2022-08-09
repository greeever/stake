import Presale from "../components/Presale"
import { useIsMounted } from "../hooks/useIsMounted"
const Mint = () => {
const isMounted = useIsMounted()
    return(
        <>
        {isMounted &&
        <Presale />
    }
        </>
    )
}

export default Mint