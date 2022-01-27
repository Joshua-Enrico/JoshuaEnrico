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
                <WorkItem id="tag3" onClick={(e) => Filter(e, "back", "a2")}>Backend</WorkItem>
                <WorkItem id="tag4" onClick={(e) => Filter(e, "apis", "a3")}>Apis</WorkItem>
            </WorkFilter>
            <WorkContainer className='work-Container'>
                <WorkCard  className='a1 workitem'>
                    <WorkImg src="https://www.openproject.org/assets/images/cover/openproject-home-8eb61271.jpg" alt="" />
                    <WorkCartTitle>Work 1</WorkCartTitle>
                    <WorkButton href="#"> Demo <BsArrowRightShort/> </WorkButton>
                </WorkCard>
                <WorkCard className='a1 workitem'>
                    <WorkImg src="https://www.openproject.org/assets/images/cover/openproject-home-8eb61271.jpg" alt="" />
                    <WorkCartTitle>Work 1</WorkCartTitle>
                    <WorkButton href="#"> Demo <BsArrowRightShort/> </WorkButton>
                </WorkCard>
                <WorkCard className='a2 workitem'>
                    <WorkImg src="https://www.openproject.org/assets/images/cover/openproject-home-8eb61271.jpg" alt="" />
                    <WorkCartTitle>Work 2</WorkCartTitle>
                    <WorkButton href="#"> Demo <BsArrowRightShort/> </WorkButton>
                </WorkCard>
                <WorkCard className='a2 workitem'>
                    <WorkImg src="https://www.openproject.org/assets/images/cover/openproject-home-8eb61271.jpg" alt="" />
                    <WorkCartTitle>Work 2</WorkCartTitle>
                    <WorkButton href="#"> Demo <BsArrowRightShort/> </WorkButton>
                </WorkCard>
                <WorkCard className='a3 workitem'>
                    <WorkImg src="https://www.openproject.org/assets/images/cover/openproject-home-8eb61271.jpg" alt="" />
                    <WorkCartTitle>Work 3</WorkCartTitle>
                    <WorkButton href="#"> Demo <BsArrowRightShort/> </WorkButton>
                </WorkCard>
            </WorkContainer>
        </WorkComp>
    )
};

export default Work;
