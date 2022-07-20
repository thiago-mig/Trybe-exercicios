import React from "react";

class About extends React.Component {
    render () {
        const skills = ['HTML', 'CSS', 'JavaScript', 'DOM', 'ES6', 'Bootstrap', 'Jest'];
        const jsxSkills = skills.map((skill) => <li>{skill}</li>);
      return (
        <div>
            <h1>Thiago Miguel da Costa</h1>
            <p>Estou estudando para me tornar um programador</p>
            <h2>Minhas Habilidades</h2>
            <ul>{jsxSkills}</ul>
        </div>
      )
    }
};

export default About;