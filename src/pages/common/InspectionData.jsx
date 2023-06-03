import React, {useState} from 'react';
import tw from 'tailwind-styled-components'
import Back from '../../assets/icons/CircleBack.png'
import { Link } from 'react-router-dom';


const  Wrapper = tw.div`
    w-full md:w-3/5 sm:mx-auto md:mx-auto lg:mx-auto sm:mt-16 sm:mr-5 sm:ml-5 pb-10 rounded-lg shadow-lg`;

const Header = tw.div`
    flex gap-2 mb-3 p-5 border-b-2`;

const Row = tw.div`
    flex pl-6 mb-2`;

const InspectionDetailsWrapper = tw.div`
    flex items-center gap-2 pl-6 pr-12 pb-3`;

const InspectionDetailsHeading = tw.h2`
    pr-2`;

const HorizontalLine = tw.div`
    flex-grow border border-gray-200`;

const Container = tw.div`
    ml-3 lg:flex gap-36 md:ml-[59px] p-2 border border-gray-300 rounded-lg`;

const InspectionData = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(!isHovered);
    };

    return (
        <Wrapper>
            <Header>
                <Link className='border outline-none' to={'/mechanic'}>
                    <img src={Back} alt='back' className='w-[27px] h-[27px]'/>
                </Link>
                <h1 className='font-inter text-lg font-bold'>Inspection Overview</h1>
            </Header>
            <InspectionDetailsWrapper>
                <InspectionDetailsHeading className='font-inter text-[17px] font-medium'>Inspection Details</InspectionDetailsHeading>
                <HorizontalLine />
            </InspectionDetailsWrapper>
            <Row>
                <h3 className='font-inter font-medium text-[15px] text-gray-500'>Report ID:</h3>
                <p className='ml-16 md:ml-28 font-inter font-semibold text-[15px] text-gray-500'>000001</p>
            </Row>
            <Row>
                <h3 className='font-inter font-medium text-[15px] text-gray-500'>Inspection Date:</h3>
                <p className='ml-[18px] md:ml-[66px] font-inter font-semibold text-[15px] text-gray-500'>06/01/2023</p>
            </Row>
            <Row>
                <h3 className='font-inter font-medium text-[15px] text-gray-500'>Inspection Time:</h3>
                <p className='ml-[15px] md:ml-[64px] font-inter font-semibold text-[15px] text-gray-500'>08:30:37 PM</p>
            </Row>
            <Row>
                <h3 className='font-inter font-medium text-[15px] text-gray-500'>Inspected Items:</h3>
                <div>
                    <h3 className='ml-4 md:ml-16 font-inter font-medium text-[15px] text-gray-700 mb-2'>FRONT</h3>
                    <Container>
                        <h4 className='font-inter text-sm text-gray-500 mt-1 sm:mb-2'>Front Signage LED</h4>
                        <button className={`sm:ml-3 px-4 py-1 rounded-lg font-inter text-sm border outline-none ${
                            isHovered ? 'bg-primary text-white' : 'bg-[#FF8B85] text-white'} hover:bg-primary hover:text-white transition-colors duration-300`}
                                onMouseEnter={handleHover}
                                onMouseLeave={handleHover}>
                            {isHovered ? 'View Photo' : 'Damaged'}
                        </button>
                    </Container>
                </div>
            </Row>
        </Wrapper>  
    );
}

export default InspectionData;