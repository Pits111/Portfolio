import Skill from './Skill'; 

const SkillsList = ({ skillsInfo }) => {
    return (
        <div className="cards-frame">
            {skillsInfo.map((skill) => <Skill key={skill.heading} {...skill}/> )}
        </div>
    );
};

export default SkillsList; 