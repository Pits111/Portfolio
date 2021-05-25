import ReadMore from "./ReadMore";
import Typography from "@material-ui/core/Typography";
import { useSpring, animated } from "react-spring";
import './Intro.css'; 
import Avatar from './../img/Avatar.svg';
import Agile from "./Agile";




const Home = () => {
    const title = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        leave: { opacity: 0 },
        delay: 1000,
    
        config: {
          duration: 1000, // duration for the whole animation form start to end
        },
      });

      const text = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        leave: { opacity: 0 },
        delay: 2000,
    
        config: {
          duration: 1000, // duration for the whole animation form start to end
        },
      });

    return (
        <div className="Intro">
            <animated.div style={title}>
                <h1 classname="maintitle-desktop">Hi, I am Isa</h1>
                <br></br>
                <img 
                className="avatar" 
                src={Avatar} 
                alt="avatar"/>
            </animated.div>
            <br></br>
            <animated.div style={text}>
            <div className="intro-text-isa">
            <ReadMore>
                <Typography className="intro-isa">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                et justo duo dolores et ea rebum. Stet clita kasd gubergren, no 
                sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum 
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
                no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </Typography>
            </ReadMore>
            </div>
            </animated.div>
            <Agile 
            title="What is your return?" 
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " />
            <Agile 
            title="What is your return?" 
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " />
            <Agile 
            title="What is your return?" 
            content="
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </br>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </br>
            " />
        </div>
    );
};

export default Home; 