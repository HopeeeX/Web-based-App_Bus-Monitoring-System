import React from 'react';
import tw from 'tailwind-styled-components'
import AddButton from '../../components/Table/AddButton';
import SearchField from '../../components/Table/SearchFieldUser';



const Wrapper = tw.div`
    sm:w-full `;

const Container = tw.div`
    flex items-center justify-end gap-2`;


const AdminDriver = () => {
    return (
        <Wrapper>
            <Container>
                <AddButton/>
                <SearchField/>
            </Container>
        </Wrapper>
    );
}

export default AdminDriver;