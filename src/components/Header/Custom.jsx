import React, { useEffect, useState } from 'react';
import api from '../../api/business.json';
const Custom = () => {
    const [data, setData] = useState([]);
    useEffect(() =>{
        setData(api);
    },[data])
    // console.log(data)
    return (
        <div>
           
            
        </div>
    );
};

export default Custom;