import { Link } from 'react-router-dom';
import './Skill.css';


const SkillDetails = ({ routeProps }) => {
    console.log(routeProps);
    
    const skillContent = [
        {
            title: "Tech Skills",
            subone: "Between Java Script and React",
            paraone: "Business executives have notoriously struggled to assess the business value of AI.Business executives have notoriously struggled to assess the business value of AI. They understand the potential value of it, but the general lack of institutional AI knowledge has made the evaluation process rather uncertain.Business executives have notoriously struggled to assess the business value of AI. They understand the potential value of it, but the general lack of institutional AI knowledge has made the evaluation process rather uncertain.Business executives have notoriously struggled to assess the business value of AI. They understand the potential value of it, but the general lack of institutional AI knowledge has made the evaluation process rather uncertain.",
            subtwo: "New title",
            paratwo: "Business executives have notoriously struggled to assess the business value of AI.Business executives have notoriously struggled to assess the business value of AI.Business executives have notoriously struggled to assess the business value of AI. They understand the potential value of it, but the general lack of institutional AI knowledge has made the evaluation process rather uncertain.Business executives have notoriously struggled to assess the business value of AI. They understand the potential value of it, but the general lack of institutional AI knowledge has made the evaluation process rather uncertain.Business executives have notoriously struggled to assess the business value of AI. They understand the potential value of it, but the general lack of institutional AI knowledge has made the evaluation process rather uncertain.",
            subthree: "To See More About > WILD CODE SCHOOL < click on the image below ",
            imgone: "https://i.postimg.cc/dtntBqs0/Tech-Stack-Hochaufloesung.png",
            imgtwo: "https://i.postimg.cc/4ycvf02G/WCS.png",
            Link: "https://www.youtube.com/watch?v=AD-IUNA4YZw",
            id: 5,
        },
        {
            title: "Soft Skills",
            subone: "From Teamwork To Leadership",
            paraone: "Business executives have notoriously struggled to assess the business value of AI.Business executives have notoriously struggled to assess the business value of AI.Business executives have notoriously struggled to assess the business value of AI. They understand the potential value of it, but the general lack of institutional AI knowledge has made the evaluation process rather uncertain.Business executives have notoriously struggled to assess the business value of AI. They understand the potential value of it, but the general lack of institutional AI knowledge has made the evaluation process rather uncertain.",
            subtwo: "New title",
            paratwo: "Business executives have notoriously struggled to assess the business value of AI.Business executives have notoriously struggled to assess the business value of AI.Business executives have notoriously struggled to assess the business value of AI.Business executives have notoriously struggled to assess the business value of AI.Business executives have notoriously struggled to assess the business value of AI.Business executives have notoriously struggled to assess the business value of AI. They understand the potential value of it, but the general lack of institutional AI knowledge has made the evaluation process rather uncertain.",
            subthree: "To see more about KIBALOU click on the image below",
            imgone: "https://i.postimg.cc/jdgjVSzW/Soft-Skills-Hochaufloesung.png",
            imgtwo: "https://i.postimg.cc/6Ts7M50J/Kibalou.png",
            Link: "https://battyrabbit.com/portfolio/kibalou/",
            id: 6, 
        },
        {
            title: "Strategy",
            subone: "From Vision To Positioning",
            paraone: "Business executives have notoriously struggled to assess the business value of AI.Business executives have notoriously struggled to assess the business value of AI.Business executives have notoriously struggled to assess the business value of AI.Business executives have notoriously struggled to assess the business value of AI. They understand the potential value of it, but the general lack of institutional AI knowledge has made the evaluation process rather uncertain.Business executives have notoriously struggled to assess the business value of AI. They understand the potential value of it, but the general lack of institutional AI knowledge has made the evaluation process rather uncertain.",
            subtwo: "newtitle",
            paratwo: "Business executives have notoriously struggled to assess the business value of AI.Business executives have notoriously struggled to assess the business value of AI.Business executives have notoriously struggled to assess the business value of AI.Business executives have notoriously struggled to assess the business value of AI.Business executives have notoriously struggled to assess the business value of AI.Business executives have notoriously struggled to assess the business value of AI.Business executives have notoriously struggled to assess the business value of AI. They understand the potential value of it, but the general lack of institutional AI knowledge has made the evaluation process rather uncertain.",
            subthree: "To read the WHITEPAPER click on the image below",
            imgone: "https://i.postimg.cc/rshqLft6/Chess-Hochaufloesung.png",
            imgtwo: "https://i.postimg.cc/hv8J3R3X/TKCover.png",
            Link: "https://www.tk.de/resource/blob/2057560/79350ea011f613307781908115772d6c/position-digitale-gesundheit-data.pdf",
            id: 7, 
            
        },
        {
            title: "Creativity",
            subone: "Always Have Ideas!",
            paraone: "Business executives have notoriously struggled to assess the business value of AI. They understand the potential value of it, but the general lack of institutional AIBusiness executives have notoriously struggled to assess the business value of AI. They understand the potential value of it, but the general lack of institutional AIBusiness executives have notoriously struggled to assess the business value of AI. They understand the potential value of it, but the general lack of institutional AIBusiness executives have notoriously struggled to assess the business value of AI. They understand the potential value of it, but the general lack of institutional AI knowledge has made the evaluation process rather uncertain.",
            subtwo: "New title",
            paratwo: "Business executives have notoriously struggled to assess the business value of AI. They understand the potential value of it, but the general lack of institutional AIBusiness executives have notoriously struggled to assess the business value of AI. They understand the potential value of it, but the general lack of institutional AIBusiness executives have notoriously struggled to assess the business value of AI. They understand the potential value of it, but the general lack of institutional AIBusiness executives have notoriously struggled to assess the business value of AI. They understand the potential value of it, but the general lack of institutional AI knowledge has made the evaluation process rather uncertain.",
            subthree: "To see the AI-Video click on the image below.",
            imgone: "https://i.postimg.cc/8kdFYGKW/Ligth-Bulb-Hochaufloesung.png",
            imgtwo: "https://i.postimg.cc/DZHdKhg5/TKVideo-Two.png",
            Link: "https://www.youtube.com/watch?v=VIr0YKX5Fbk",
            id: 8, 
        },
    ] 

    const foundMatch = skillContent.find((skillCategory) => skillCategory.title === routeProps.match.params.skilltitle)
        console.log(foundMatch);
    return (
        <div>
         <h1 className="skill-titles">{foundMatch.title}</h1>
        <div className="skill-frame">
        <div className="skill-container">
                <div className="imgone-container">
                    <img src={foundMatch.imgone} alt='picture' />
                </div>
                <div className="skill-content">
                    <div className="skill-subtitle">
                        <h2>{foundMatch.subone}</h2>
                    </div>
                    <div className="skill-textone">
                        <p>{foundMatch.paraone}</p>
                    </div>
                    <div className="skill-subtitle">
                        <h2>{foundMatch.subtwo}</h2>
                    </div>
                    <div className="skill-textwo">
                        <p>{foundMatch.paratwo}</p>
                    </div>
                    <div className="skill-subthree">
                        <h3>{foundMatch.subthree}</h3>
                    </div>
                    <div className="imgtwo-container">
                        <a href={foundMatch.Link}>
                         <img src={foundMatch.imgtwo} alt='picture' />
                        </a>
                    </div>
                   
                    <div className="skill-btn">
                        <Link to = {`/portfolio`}>
                        <button>
                            <a>Go back</a>
                        </button>
                        </Link>
                       
                    </div>
                </div>
        </div>
        </div>
        </div>
    );
};

export default SkillDetails; 