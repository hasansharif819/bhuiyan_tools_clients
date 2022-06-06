import React from 'react';
import sharif from '../../assets/sharif1.jpg';

const Portfolio = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img height={200} width={200} src={sharif} alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Sharif Hasan</h1>
                        <p className="py-2">West dhanmondi, Dhaka</p>
                        <p className="py-2">+8801640911511</p>
                    </div>
                </div>
            </div>
            <section className='text-left bg-base-200 mt-5'>
                <div className='ml-5'>
                    <h2>Useful links & address</h2>
                    <p>Email: hs.sharif819@gmail.com</p>
                    <p>GitHub: https://github.com/hasansharif819</p>
                    <p>LinkedIn: https://www.linkedin.com/in/sharif-hasan-073a58218/</p>
                </div>
                <div className='ml-5'>
                    <h2>Languages</h2>
                    <p>C/C++, Java Script</p>
                    <h2>TECHNOLOGIES/FRAMEWORKS </h2>
                    <p>Bootstrap, Tailwind, React.JS, Firebase, Express.JS, MongoDB, MySQL, JWT
                    </p>
                </div>
                <div className='ml-5'>
                    <h2>Career Objective</h2>
                    <p>As a fresher, I want to utilize my educational and extra-curricular knowledge for organizations benefits as well as my careers development. As a competitive programming lover, I always wanted to take challenge to solve real life problems by learning and gathering experiences day by day. </p>
                </div>
            </section>

            <section className='text-left bg-base-200 mt-5'>
                <div className='ml-5 border-2'>
                    <h2>Personal Information</h2>
                    <small>Father's Name</small>
                    <h2>Md. Abdur Rab</h2>
                    <small>Mother's Name</small>
                    <h2>Nasrin Akter</h2>
                    <small>Date of Birth</small>
                    <h2>December 1, 1998</h2>
                    <small>Nationality</small>
                    <h2>Bangladeshi</h2>
                    <small>National Id No</small>
                    <h2>19987510787000164</h2>
                </div>
            </section>
            <section className='text-left bg-base-200 mt-5'>
                <div>
                    <h2>Technical Skill</h2>
                    <h2>Object Oriented Programming Language</h2>
                    <p>C, C++, Java Script</p>
                    <h2>DataBase Management System</h2>
                    <p>mysql, mongoDB</p>
                    <h2>Additional Programming Knowledge</h2>
                    <p>Data Structure, Algorithm Design, HTML, CSS, </p>
                </div>
            </section>
            <section className='text-left bg-base-200 mt-5'>
                <h2>Projects</h2>
                <div>                                             <h2>Bhuiyan Tools</h2>
                    <small>Private and protected route also using JWT</small>
                    <small>Tools booking system all over the world</small>
                    <small>Work with Front end also backend using react.js and express.js</small>
                    <small>Tools: React.JS, Firebase, MongoDB, Express.js, daisiUI</small>
                    <h2>https://bhuiyan-tools.web.app</h2>
                </div>
                <div>                                             <h2>Smart Zone</h2>
                    <small>Smartphone  management  system</small>
                    <small>Add new Phone And Deleted by one</small>
                    <small>Update and modify phone features and also Signin / signup system</small>
                    <small>Tools: React.JS, Firebase, MongoDB, Bootstrap</small>
                    <h2>https://smart-zone-819.web.app/</h2>
                </div>
                <div>                                             <h2>Tanjum’s Shop</h2>
                    <small>E-commerce front-end website
                    </small>
                    <small>Users can see sharee, lehenga, accessories
                    </small>
                    <small>User can see details about selected item
                    </small>
                    <small>Tools: React.js, Bootstrap
                    </small>
                    <h2>https://tanjums-shop.netlify.app/</h2>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;