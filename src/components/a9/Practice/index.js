import Movies from "./Movies";

import { Link } from "react-router-dom";
const Practice = () => {    
    return(
        <div>
            <h1>Practice</h1>
            <Link to="/a9/twitter/home">Twitter</Link>
            <Movies/>
        </div>
    )
};
export default Practice;
