
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const[newsCategories, setNewsCategories] = useState([]);

    useEffect(() =>{
        fetch("categories.json")
        .then(res => res.json())
        .then(data => setNewsCategories(data))
    }, [])
    

    return (
        <div>
            <h2 className="text-xl font-semibold">All Category</h2>
            {
                newsCategories?.map(newsCatagery => <Link 
                    to={`/category/${newsCatagery.id}`}
                    className="block pl-7 pt-7 text-[#9F9F9F] text-xl font-medium" 
                    key={newsCatagery.id}
                    >{newsCatagery.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;