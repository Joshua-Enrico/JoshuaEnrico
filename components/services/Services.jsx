import React from 'react';
import { H2title, ServiceCard, ServiceComp, ServiceContainer, ServiceTitle, SpanSubtitle } from './Style';


const Services = () => {
    return (
    <ServiceComp>
        <SpanSubtitle>My Services</SpanSubtitle>
        <H2title>What I offer</H2title>
        <ServiceContainer  className="grid">
            <ServiceCard>
                <ServiceTitle></ServiceTitle>


            </ServiceCard>
        </ServiceContainer>
    </ServiceComp>
    );
};

export default Services;
