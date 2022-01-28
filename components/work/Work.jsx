import React from 'react';
import { WorkButton, WorkCard, WorkCartTitle, WorkComp, WorkContainer, WorkFilter, WorkImg, WorkItem, WorkSubtitle, WorkTitle } from './Style';
import { BsArrowRightShort } from 'react-icons/bs';

const Work = () => {

    const lastId = "tag1";
    const Filter = (e, mode ,selection) => {
        e.preventDefault();
        if (lastId &&  e.target.id !== lastId) {
            document.getElementById(lastId).classList.remove('active-work');
        }
        e.target.classList.add('active-work');
        lastId = e.target.id;

        // handle filter
        const element = document.getElementsByClassName("workitem");
        if(mode === "all"){
            for (var i = 0, len = element.length; i < len; i++) {
                element[i].classList.remove('hide-item');
            }
        } else {
            for (var i = 0, len = element.length; i < len; i++) {
                if (element[i].classList.contains(selection) === false) {
                    element[i].classList.add('hide-item')
                } else{
                    element[i].classList.remove('hide-item');
                }
            }
        }

    }

    return (
        <WorkComp id="work">
            <WorkSubtitle>My Work</WorkSubtitle>
            <WorkTitle>Recent Works</WorkTitle>
            <WorkFilter>
                <WorkItem id="tag1" className='active-work' onClick={(e) => Filter(e, "all", "all")}>All</WorkItem>
                <WorkItem id="tag2" onClick={(e) => Filter(e, "front", "a1")}>Frontend</WorkItem>
                <WorkItem id="tag4" onClick={(e) => Filter(e, "apis", "a3")}>Backend</WorkItem>
            </WorkFilter>
            <WorkContainer className='work-Container'>
                <WorkCard  className='a1 workitem'>
                    <WorkImg src="https://www.andrewmin.info/assets/images/react-setup/cover.jpg" alt="" />
                    <WorkCartTitle>Aibnb Clone Next.js</WorkCartTitle>
                    <WorkButton target="_blank" href="https://github.com/Joshua-Enrico/AirbnbClone-React-Next.js"> Demo <BsArrowRightShort/> </WorkButton>
                </WorkCard>
                <WorkCard  className='a1 workitem'>
                    <WorkImg src="https://cdn.discordapp.com/attachments/815422205558784000/936747201592438835/unknown.png" alt="" />
                    <WorkCartTitle>Admin Dashboard Next.js</WorkCartTitle>
                    <WorkButton target="_blank" href="https://github.com/Joshua-Enrico/DashboardV2"> Demo <BsArrowRightShort/> </WorkButton>
                </WorkCard>
                <WorkCard className='a1 workitem'>
                    <WorkImg src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2314367/settings_images/8rLcukJS2b8PzQDSdDjw_13-july-react-amazon-clone.png" alt="" />
                    <WorkCartTitle>Amazon Clone React</WorkCartTitle>
                    <WorkButton target="_blank" href="https://github.com/Joshua-Enrico/Amzon-React-Firebase"> Demo <BsArrowRightShort/> </WorkButton>
                </WorkCard>

                <WorkCard className='a3 workitem'>
                    <WorkImg src="https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/777184/secure-rest-api-in-nodejs-18f43b3033c239da5d2525cfd9fdc98f.png" alt="" />
                    <WorkCartTitle>Api RESTful Node.js</WorkCartTitle>
                    <WorkButton target="_blank" href="https://github.com/Joshua-Enrico/Ecommerce-Api-Nodejs"> Demo <BsArrowRightShort/> </WorkButton>
                </WorkCard>
                <WorkCard className='a3 workitem'>
                    <WorkImg src="https://miro.medium.com/max/1200/1*z6KGBIxGxXpzcS7AKlDT_A.jpeg" alt="" />
                    <WorkCartTitle>Api GraphQl</WorkCartTitle>
                    <WorkButton target="_blank" href="https://github.com/Joshua-Enrico/GraphQL-api-MongoDb"> Demo <BsArrowRightShort/> </WorkButton>
                </WorkCard>

                <WorkCard className='a3 workitem'>
                    <WorkImg src="https://i.ytimg.com/vi/D6LZnrDbQPM/maxresdefault.jpg" alt="" />
                    <WorkCartTitle>Api RESTful Flask</WorkCartTitle>
                    <WorkButton target="_blank" href="https://github.com/Joshua-Enrico/AirBnB_clone_v3/tree/master/api/v1/views"> Demo <BsArrowRightShort/> </WorkButton>
                </WorkCard>
            </WorkContainer>
        </WorkComp>
    )
};

export default Work;
