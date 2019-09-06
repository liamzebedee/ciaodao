import SpacePage from '../../components/pages/SpacePage'
import Box3Wrapper from '../../components/wrapper/Box3Wrapper';
import Web3Wrapper from '../../components/wrapper/Web3Wrapper';
import { useRouter } from 'next/router';


export default () => {
    const router = useRouter()
    const { addr } = router.query

    return <Web3Wrapper>
        <Box3Wrapper>
            <SpacePage {...{addr}}/>
        </Box3Wrapper>
    </Web3Wrapper>
}