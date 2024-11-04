import { useEffect } from "react";

const About = () => {
    useEffect(() => {
        document.title = 'About | Gadget'; // "Dashboard" is the route-specific name
      }, []);
    return (
        <div>
            
        </div>
    );
};

export default About;