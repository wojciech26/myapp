import { FC } from 'react'
import styled from 'styled-components'

import Publications from 'components/MainContent/LatestPublications/LatestPublications';
import Workspaces from 'components/MainContent/Workspaces/Workspaces'
import ResumeYourWork from 'components/MainContent/ResumeYourWork/ResumeYourWork'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 1 100%;
    gap: 1.5em;
`;

const HomePage: FC = () => {
    return (
        <Wrapper>
            <Publications />
            <Workspaces />
            <ResumeYourWork />
        </Wrapper>
    );
}

export default HomePage;