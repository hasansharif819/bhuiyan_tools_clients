import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className="question1">
                <h2>How will you improve the performance of a React Application?</h2>
                <p>
                    Ans:The answer often lies in when and how frequently components re-render, and whether those re-renders were even necessary. React doesn’t promise magical performance gains, but it provides just the right tools and functionalities to make it easy.Keeping component state local where necessary.
                    Memoizing React components to prevent unnecessary re-renders.
                    Code-splitting in React using dynamic import()
                    Windowing or list virtualization in React.
                </p>
            </div>
            <div className="question2">
                What are the different ways to manage a state in a React application?
                <p>Ans:
                    There are four main types of state in React apps, Local state. Global state.Server state.  URL state.
                    Managing state is arguably the hardest part of any application. It's why there are so many state management libraries available and more coming around every day . Despite the fact that state management is a hard problem, I would suggest that one of the things that makes it so difficult is that we often over-engineer our solution to the problem.




                </p>

            </div>
            <div className="question3">
                <h2>How does prototypical inheritance work?</h2>
                <p>Ans:
                    In a class-based model, which are represented by the triple “Parents, Variables, Methods”. Where:

                    Parents is the list of classes you’re extending. Classes may only extend other classes;
                    Variables is the number of variable slots that instances will have. For example, a “class Point2d(int x, int y) ” has 2 instance variables;
                    Methods is a table of “name → function” that describes which services each instance of the class will support;
                    Instances (or Objects) in a class-based model are represented with the tuple “Class, Values”. Where:

                    Class is a pointer to the class triple that defines how many variables this instance supports, and what methods you can call on it;
                    Values is a list of the values for each variable the instance has.
                </p>

            </div>
            <div className="question4">
                <h2>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                <p>Ans:
                    If update it directly, calling the setState() afterward may just replace the update you made.
                    When directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
                    You will lose control of the state across all components.
                </p>
            </div>
            <div className="question5">
                <h2> What is a unit test? Why should write unit tests?</h2>
                <p>Ans:
                    Unit testing is a software development process in which the smallest testable parts of an application, called units.
                    In an invalid situation, the function will notify us that we are doing something wrong.
                    The function will identify this invalid situation and log it.
                    The speed of detecting non-working code depends on the tools used for continuous integration. Tests can be set to run either a one-time check at a certain time interval or can be run immediately in real-time to review changes.
                </p>
            </div>
            <div className="question6">

            </div>
        </div>
    );
};

export default Blogs;