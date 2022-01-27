import React from 'react';
import { H2title, ModalContent, ModalDescription, ModalItemInfo, ModalList, ModalListItem, ModalTittle, ServiceButton, ServiceCard, ServiceComp, ServiceContainer, ServiceModal, ServiceTitle, SpanSubtitle } from './Style';
import { BsArrowRightShort } from 'react-icons/bs';
import { GrFormClose } from 'react-icons/gr';
import { AiOutlineCheck } from 'react-icons/ai';

const Services = () => {

    const ActiveModal = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        element.classList.add('active-Modal');
    }
    const CloseModal = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        element.classList.remove('active-Modal');
    }

    return (
        <ServiceComp>
            <SpanSubtitle>My Services</SpanSubtitle>
            <H2title>What I offer</H2title>
            <ServiceContainer className="grid">
                <ServiceCard>
                    <ServiceTitle>Frontend <br /> Develovement</ServiceTitle>
                    <ServiceButton onClick={(e) => ActiveModal(e, "a")}>See More <BsArrowRightShort /></ServiceButton>
                    {/*modal Container*/}
                    <ServiceModal id="a">
                        <ModalContent>
                            <GrFormClose onClick={(e) => CloseModal(e, "a")}/>
                            <ModalTittle>Frontend <br /> Develovement</ModalTittle>
                            <ModalDescription>
                                Development in React in a Node.js and Nextjs environment, focused on the consumption of apis and logic in the front
                                following security and optimization patterns
                            </ModalDescription>
                            <ModalList>
                                <ModalListItem>
                                    <AiOutlineCheck />
                                    <ModalItemInfo>
                                        Modeling from design
                                    </ModalItemInfo>
                                </ModalListItem>
                                <ModalListItem>
                                    <AiOutlineCheck />
                                    <ModalItemInfo>
                                        Developing the logic
                                    </ModalItemInfo>
                                </ModalListItem>
                                <ModalListItem>
                                    <AiOutlineCheck />
                                    <ModalItemInfo>
                                        API Consumption
                                    </ModalItemInfo>
                                </ModalListItem>

                            </ModalList>
                        </ModalContent>
                    </ServiceModal>
                    {/*End*/}
                </ServiceCard>

                <ServiceCard>
                    <ServiceTitle>Backend <br /> Develovement</ServiceTitle>
                    <ServiceButton onClick={(e) => ActiveModal(e, "b")}>See More <BsArrowRightShort /></ServiceButton>
                    {/*modal Container*/}
                    <ServiceModal id="b">
                        <ModalContent>
                            <GrFormClose onClick={(e) => CloseModal(e, "b")}/>
                            <ModalTittle>Backend <br /> Develovement</ModalTittle>
                            <ModalDescription>
                                Development in Node.js, Next.js, MySQL database, MongoDb
                            </ModalDescription>
                            <ModalList>
                                <ModalListItem>
                                    <AiOutlineCheck />
                                    <ModalItemInfo>
                                        Database modeling
                                    </ModalItemInfo>
                                </ModalListItem>
                                <ModalListItem>
                                    <AiOutlineCheck />
                                    <ModalItemInfo>
                                        Developing the logic
                                    </ModalItemInfo>
                                </ModalListItem>
                                <ModalListItem>
                                    <AiOutlineCheck />
                                    <ModalItemInfo>
                                        API Consumption
                                    </ModalItemInfo>
                                </ModalListItem>

                            </ModalList>
                        </ModalContent>
                    </ServiceModal>
                    {/*End*/}
                </ServiceCard>

                <ServiceCard>
                    <ServiceTitle>Api <br /> Design</ServiceTitle>
                    <ServiceButton onClick={(e) => ActiveModal(e, "c")}>See More <BsArrowRightShort /></ServiceButton>
                    {/*modal Container*/}
                    <ServiceModal id="c">
                        <ModalContent>
                            <GrFormClose onClick={(e) => CloseModal(e, "c")}/>
                            <ModalTittle>Api Design</ModalTittle>
                            <ModalDescription>
                                Construction of Rest API and graphQL api
                            </ModalDescription>
                            <ModalList>
                                <ModalListItem>
                                    <AiOutlineCheck />
                                    <ModalItemInfo>
                                        Api Construction
                                    </ModalItemInfo>
                                </ModalListItem>
                                <ModalListItem>
                                    <AiOutlineCheck />
                                    <ModalItemInfo>    
                                        Microservices
                                    </ModalItemInfo>
                                </ModalListItem>
                                <ModalListItem>
                                    <AiOutlineCheck />
                                    <ModalItemInfo>
                                        API Consumption
                                    </ModalItemInfo>
                                </ModalListItem>

                            </ModalList>
                        </ModalContent>
                    </ServiceModal>
                    {/*End*/}
                </ServiceCard>
            </ServiceContainer>
        </ServiceComp>
    );
};

export default Services;
