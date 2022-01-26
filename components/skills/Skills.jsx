import React from 'react';
import {
    H2Title, SkillComp, SkillContainer, SkillContent,
    SkillName, SkillsBox, SkillsData, SkillsGroups,
    SkillTitle, SpanSubtitle, SkillLvl, SkillBoxContent
} from './Style';
import { HiBadgeCheck } from 'react-icons/hi';


const Skills = () => {
    return (
        <SkillComp id="skills">
            <SpanSubtitle>My Abilities</SpanSubtitle>
            <H2Title>My Experience</H2Title>
            <SkillContainer className='grid'>
                <SkillBoxContent>
                    <SkillTitle>Frontend Developer</SkillTitle>
                    <SkillsBox>
                        <SkillsGroups>
                            <SkillsData>
                                <HiBadgeCheck />
                                <SkillContent>
                                    <SkillName>HTML</SkillName>
                                    <SkillLvl>Itermediate</SkillLvl>
                                </SkillContent>
                            </SkillsData>
                            <SkillsData>
                                <HiBadgeCheck />
                                <SkillContent>
                                    <SkillName>CSS</SkillName>
                                    <SkillLvl>Intermediate</SkillLvl>
                                </SkillContent>
                            </SkillsData>
                            <SkillsData>
                                <HiBadgeCheck />
                                <SkillContent>
                                    <SkillName>JavaScript</SkillName>
                                    <SkillLvl>Intermediate</SkillLvl>
                                </SkillContent>
                            </SkillsData>
                        </SkillsGroups>
                        <SkillsGroups>
                            <SkillsData>
                                <HiBadgeCheck />
                                <SkillContent>
                                    <SkillName>React</SkillName>
                                    <SkillLvl>Intermidiate</SkillLvl>
                                </SkillContent>
                            </SkillsData>
                            <SkillsData>
                                <HiBadgeCheck />
                                <SkillContent>
                                    <SkillName>Tailwind</SkillName>
                                    <SkillLvl>Basic</SkillLvl>
                                </SkillContent>
                            </SkillsData>
                            <SkillsData>
                                <HiBadgeCheck />
                                <SkillContent>
                                    <SkillName></SkillName>
                                    <SkillLvl></SkillLvl>
                                </SkillContent>
                            </SkillsData>
                        </SkillsGroups>
                    </SkillsBox>
                </SkillBoxContent>
                <SkillBoxContent>
                    <SkillTitle>Backend Developer</SkillTitle>
                    <SkillsBox>
                        <SkillsGroups>
                            <SkillsData>
                                <HiBadgeCheck />
                                <SkillContent>
                                    <SkillName>JS</SkillName>
                                    <SkillLvl>Itermediate</SkillLvl>
                                </SkillContent>
                            </SkillsData>
                            <SkillsData>
                                <HiBadgeCheck />
                                <SkillContent>
                                    <SkillName>Python</SkillName>
                                    <SkillLvl>Intermediate</SkillLvl>
                                </SkillContent>
                            </SkillsData>
                            <SkillsData>
                                <HiBadgeCheck />
                                <SkillContent>
                                    <SkillName>Node.js</SkillName>
                                    <SkillLvl>Intermediate</SkillLvl>
                                </SkillContent>
                            </SkillsData>
                        </SkillsGroups>
                        <SkillsGroups>
                            <SkillsData>
                                <HiBadgeCheck />
                                <SkillContent>
                                    <SkillName>Next.js</SkillName>
                                    <SkillLvl>Intermidiate</SkillLvl>
                                </SkillContent>
                            </SkillsData>
                            <SkillsData>
                                <HiBadgeCheck />
                                <SkillContent>
                                    <SkillName>Rest Api</SkillName>
                                    <SkillLvl>Intermediate</SkillLvl>
                                </SkillContent>
                            </SkillsData>
                            <SkillsData>
                                <HiBadgeCheck />
                                <SkillContent>
                                    <SkillName>MySQL/MongoDB</SkillName>
                                    <SkillLvl>Intermediate</SkillLvl>
                                </SkillContent>
                            </SkillsData>
                            <SkillsData>
                                <HiBadgeCheck />
                                <SkillContent>
                                    <SkillName>GraphQL</SkillName>
                                    <SkillLvl>Intermediate</SkillLvl>
                                </SkillContent>
                            </SkillsData>
                        </SkillsGroups>
                    </SkillsBox>
                </SkillBoxContent>
            </SkillContainer>
        </SkillComp>
    );
};

export default Skills;
