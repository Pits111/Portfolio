import Skill from './Skill'; 

const SkillsList = ({ skillsInfo }) => {
    return (
        <div className="cards-frame">
            {skillsInfo.map((skill) => <Skill {...skill}/> )}
        </div>
    );
};

export default SkillsList; 