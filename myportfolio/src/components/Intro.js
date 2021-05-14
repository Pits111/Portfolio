import ReadMore from "./ReadMore";
import Typography from "@material-ui/core/Typography";
import { useSpring, animated } from "react-spring";
import { Switch, Unstable_TrapFocus } from '@material-ui/core';
import './Intro.css'; 




const Intro = () => {
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
                <h1 classname="maintitle-desktop">Hi, I am Curious</h1>
                <br></br>
                <img
                    src="https://thumbs2.imgbox.com/be/df/rnjnBtOn_t.png"
                    alt="Avatar"
                    className="Avatar"
                >
                </img>
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
            <Switch>
            </Switch>
        </div>
    );
};

export default Intro; 