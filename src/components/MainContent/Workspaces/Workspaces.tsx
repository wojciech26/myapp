import React, { FC } from 'react'
import styled from 'styled-components'
import {Colors} from 'styledHelpers/Colors'
import {WorkspacesItem, IWorkspacesItem} from './WorkspacesItem/WorkspacesItem'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import "./styles/swiper.css";

import CardIcon from 'assets/icons/entities.svg'
import ContractIcon from 'assets/icons/contract.svg'
import BookIcon from 'assets/icons/book.svg'
import { SectionTitle } from 'styledHelpers/Components';

const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
`;

const Title = styled(SectionTitle)`
    padding: 0 1em;
    margin-bottom: 0.2em;
`;

const Workspaces: FC = () => {

    const workspaces: Array<IWorkspacesItem> = [
        {
            title: "Client contract",
            icon: ContractIcon,
            lastUpdate: "1",
        },
        {
            title: "Supplier contract",
            icon: ContractIcon,
            lastUpdate: "2",
        },
        {
            title: "Corporate",
            icon: CardIcon,
            lastUpdate: "3",
        },
        {
            title: "Group Norms",
            icon: BookIcon,
            lastUpdate: "4",
        },
         {
             title: "Real estate contracts",
             icon: CardIcon,
             lastUpdate: "5",
         },
    ];

    return (
        <>
            <Container>
                <Title>Workspaces</Title>
                <Swiper slidesPerView="auto">
                    {
                        workspaces.map(({icon, title, lastUpdate}) => (
                            <SwiperSlide>
                                <WorkspacesItem icon={icon} title={title} lastUpdate={lastUpdate} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </Container>
        </>
    );
} 

export default Workspaces;