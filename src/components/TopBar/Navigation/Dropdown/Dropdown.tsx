import { FC, useState } from "react";
import styled from "styled-components";

import { Colors } from "../../../../styledHelpers/Colors";

import NavigationSection from '../NavigationSection/NavigationSection';
import NavigationFilter from '../NavigationFilter/NavigationFilter';

import navigationItems from '../NavigationItems/NavigationItems'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 2.3em;
    background-color: ${Colors.White};
    flex-basis: 100%;

    border: ${Colors.Silver} solid 1px;
    border-top: 0;
    border-radius: 6px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
`;

const Dropdown = () => {
    
    const [filterText, setFilterText] = useState<string>('');
    
    const handleFilterChange = (props: string) => {
        setFilterText(props)
    }

    return (
        <Wrapper>
                <NavigationFilter value={filterText} onChangeFn={handleFilterChange} />

                {navigationItems.map(({title, items}) => (
                    <NavigationSection title={title} sectionItems={items} filterText={filterText}/>
                ))}
        </Wrapper>
    )
}

export default Dropdown
