import { Link } from 'react-router-dom';
import './Skill.css';


const SkillDetails = ({ routeProps }) => {
    console.log(routeProps);
    
    const skillContent = [
        {
            title: "Tech Skills",
            subone: "Between {Java Script} & Debugging ",
            paraone: "To be honest, I never thought that I would learn how to code one day. So it is no coincidence that my GitHup Name is -Pits- which stands for Pie in the sky. Nonetheless, here I am. Pariticpating in a full time bootcamp from the Wild Code School and hammering Java Script (JS), React, Express and SQL every day and night in my head. My facit: I am not a good programmer. I miss curley braces, forget semicolons and accidently switch letters. So half the time I spent with debugging. However, once I fixed all my bugs and the code works, it is the most amazing feeling that I can not describe in words. That is until I import a new library and nothing works again. So I start over.  ",
            subtwo: "Managing The Workflow",
            paratwo: "In  my last job I worked as a project manger and it took me a while to understand, why not every wish I had was possible to realise. Especially not in the given time. Wearing now the shoes of a programmer, I have a better insight on how to manage workflows. Using collaboration and management tools such as GitHub and Jira, writing clear and precise user stories and beeing able to draw mock ups, are very useful in speeding up the process to visualise ideas, communicate milestones and track the overall progress. And of course the bugs as well. I do not want to miss on those tools ever again.",
            subthree: "Best Practice",
            parathree: "All my coding projects and the one's that I have participated in, can be found on my gitHub account. This also includes this website. My newest project that I am currently working on, whithin the Wild Code School, is a responsive web application for a fintech startup in Spain, called WWH. The core of WWH is a Customer Data Platform (CDP) that is built on top of NoSQL database. In a team of four, we work on the frontend and backend. As a scrum team we are self-organizing and take turns with regard to the scrum roles. The aim is to create an MVP where bank customers can view their personal banking behavior and payment patterns. This kind of data analytics is possible due to the european Revised Payment Services Directive (PSD2), that basically allows third parties to access bank infrastructures and thereby create a new line of business.",
            subfour: "If you want to know more about < WWH > click on the image below",
            imgone: "https://i.postimg.cc/dtntBqs0/Tech-Stack-Hochaufloesung.png",
            imgtwo: "https://i.postimg.cc/hGTSjXFY/wwh.png",
            Link: "https://whenwhyhow.tech/product.html",
            id: 5,
        },
        {
            title: "Soft Skills",
            subone: "Leadership",
            paraone: "There is a difference between a leader and a boss. From my point of view, good leaders are able to learn, listen and inspire. If people are working out of instrinsic motivation in a respectful and honest environment, it will add value to the product you are developing. This is also the reason, why I am a big fan of agile frameworks such as scrum. Scrum encourages people to live the values of commitment, courage, focus, openness and respect. If these values are embodied within the team, the scrum pillars of transparency, inspection and adaption come to life and build trust for everyone. In the end this results in high value prodcuts for customers.",
            subtwo: "Teamwork",
            paratwo: "The last project I have been working on in the Techniker Krankenkasse, was KIBALOU. What started with a hackathon, grew over time and ended up in an agile software development circle, that lasted over 1.5 years. The product we developed was a serious game for children, called KIBALOU. It was the first time that I was working as a project manager and product owner. So on one hand I had an eye on tracking the budget, time and finding busines partners. On the other hand I was managing the development team, backlog and the communication with internal and external stakeholders. Working agile with a cross-functional highly motivated and professional team, was an amazing experience that made me continue my journey in the agile software development. ",
            subfour: "To see more about KIBALOU click on the image below",
            imgone: "https://i.postimg.cc/jdgjVSzW/Soft-Skills-Hochaufloesung.png",
            imgtwo: "https://i.postimg.cc/6Ts7M50J/Kibalou.png",
            Link: "https://battyrabbit.com/portfolio/kibalou/",
            id: 6, 
        },
        {
            title: "Strategy",
            subone: "From Vision To Positioning",
            paraone: "Business executives have notoriously struggled to assess the business value of AI.Business executives have notoriously struggled to assess the business value of AI.Business executives have notoriously struggled to assess the business value of AI.Business executives have notoriously struggled to assess the business value of AI. They understand the potential value of it, but the general lack of institutional AI knowledge has made the evaluation process rather uncertain.Business executives have notoriously struggled to assess the business value of AI. They understand the potential value of it, but the general lack of institutional AI knowledge has made the evaluation process rather uncertain.",
            subtwo: "Break It Down",
            paratwo: "Digitization, KI/AI, eHealth, humanize and show the real relevance",
            subfour: "To read the WHITEPAPER click on the image below",
            imgone: "https://i.postimg.cc/rshqLft6/Chess-Hochaufloesung.png",
            imgtwo: "https://i.postimg.cc/hv8J3R3X/TKCover.png",
            Link: "https://www.tk.de/resource/blob/2057560/79350ea011f613307781908115772d6c/position-digitale-gesundheit-data.pdf",
            id: 7, 
            
        },
        {
            title: "Creativity",
            subone: "Ideas With Impact",
            paraone: "I never had a problem coming up with new ideas. Of course not every idea I had made it to the final stage of realisation. But the fact that some of them did and even got adapted and spread by others made me happy. I do not have a special source of inspriation. My network is very diverse and multicutlural. So of course, I do get many impulses directly from my peers, colleagues and friends. However, it could also be just an article from the newspaper or the construction site around the corner.",
            subtwo: "See The Opportunity",
            paratwo: "One of the projects that I enjoyed very much was, when I had the chance to work as a creative producer in 2019. Back then I was focusing at work on artificial intelligence (ai) and what role it would play in future health care. Diving deep into the subject I realised, that many people, including our target group, did not really know what ai is. Many terms such as machine learning, deep ai, weak ai etc. were floating around. So as a policy adivsor I thought it must be possible to cooperate with stakeholders, communicate a meaningful message and do stomething dynamic and fun at the same time. I wanted our target group got get excited and educated at the same time. With the green light of my employee I ended up writing a concept and a story board and carrying out interviews with politicans. It took me days just to find the right stockfootage and another 2 weeks to get the right cut and background music. In the end the video was a huge success. Our target group was very pleased, our audience was excited and the message found its way into peoples head. Later the video was adapted to different purposes and spread in the whole company",
            subfour: "To see the AI-Video click on the image below.",
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
                    <div className="skill-subtitle">
                        <h2>{foundMatch.subthree}</h2>
                    </div>
                    <div className="skill-textthree">
                        <p>{foundMatch.parathree}</p>
                    </div>

                    <div className="skill-subtitle">
                        <h3>{foundMatch.subfour}</h3>
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