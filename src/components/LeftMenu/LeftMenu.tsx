import React, { FC } from 'react';
import styled from 'styled-components';

import Profile from './Profile/Profile';
import LeftMenuList from './LeftMenuList/LeftMenuList'
import {ILeftMenuListItem} from './LeftMenuList/LeftMenuListItem/LeftMenuListItem'

import publicationIcon from 'assets/icons/publications.svg'
import ecosystemIcon from 'assets/icons/ecosystem.svg'
import entitiesIcon from 'assets/icons/entities.svg'


const Wrapper = styled.aside`
    display: flex;
    flex-direction: column;
    flex: 0 0 300px;
    gap: 1em;
`;


const LeftMenu: FC = () => {
    const menuItems : Array<ILeftMenuListItem> = [
        {
            text: 'Publications',
            path: '/publications',
            icon: publicationIcon,
        },
        {
            text: 'Ecosystem',
            path: '/ecosystem',
            icon: ecosystemIcon,
        },
        {
            text: 'Entities',
            path: '/entities',
            icon: entitiesIcon,
        }
    ];

    return (
        <Wrapper>
            <Profile />
            <LeftMenuList listItems={menuItems} />
        </Wrapper>
    );
} 

export default LeftMenu;