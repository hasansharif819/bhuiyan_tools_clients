import React from 'react';
import notF from '../../assets/NotF.jpg';

const NotFound = () => {
    return (
        <div>
            {/* <PageTitle title="Page Not Found"></PageTitle> */}
            <h2 className='text-5xl font bold text-red-400'>404</h2>
            <h2 className='text-5xl font bold text-red-400'>Page Not Found</h2>
            <br />
            <img w-full h-full src={notF} alt="" />
        </div>
    );
};

export default NotFound;