
const SkillDetails = ({ routeProps }) => {
    console.log(routeProps);
    
    const skillContent = [
        {
            title: "Tech Skills",
            text: "Business executives have notoriously struggled to assess the business value of AI. They understand the potential value of it, but the general lack of institutional AI knowledge has made the evaluation process rather uncertain.",
            source: "Link",
            id: 5, 
        },
        {
            title: "Soft Skills",
            text: "Business executives have notoriously struggled to assess the business value of AI. They understand the potential value of it, but the general lack of institutional AI knowledge has made the evaluation process rather uncertain.",
            source: "Link",
            id: 6, 
        },
        {
            title: "Strategy",
            text: "Business executives have notoriously struggled to assess the business value of AI. They understand the potential value of it, but the general lack of institutional AI knowledge has made the evaluation process rather uncertain.",
            source: "Link",
            id: 7, 
        },
        {
            title: "Creativity",
            text: "Business executives have notoriously struggled to assess the business value of AI. They understand the potential value of it, but the general lack of institutional AI knowledge has made the evaluation process rather uncertain.",
            source: "Link",
            id: 8, 
        },
    ] 

    const foundMatch = skillContent.find((skillCategory) => skillCategory.title === routeProps.match.params.skilltitle)
        console.log(foundMatch);
    return (
        <div>
            <h1>{foundMatch.title}</h1>
            <p>{foundMatch.text}</p>
            <p>{foundMatch.source}</p>
        </div>
    );
};

export default SkillDetails; 