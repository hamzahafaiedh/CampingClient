import React from 'react';
import {
    InfoContainer,
    ImgWrap,
    Img,
    TextOverlay,
    Subtitle,
    Heading,
    Button,
    TopLine,
} from './CampingElements';
import Car from '../../images/home1.png';

const InfoSection = ({ lightBg, id, alt }) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <ImgWrap>
                    <Img src={Car} alt={alt} />
                    <TextOverlay>
                    <TopLine>Campings</TopLine>
                        <Heading>There are new campings for you!</Heading>
                        <Subtitle>Check our list now.</Subtitle>
                        <Button>View List</Button>
                    </TextOverlay>
                </ImgWrap>
            </InfoContainer>
        </>
    );
};

export default InfoSection;
