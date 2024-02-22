// Projects.js

import { useEffect, useState } from 'react';
import './Projects.css';
import useRepositoriesModel from './RepositoriesModel';

export default function Projects() {
    const {
        getProjects,
        onChangeValue,
        projects,
        project,
    } = useRepositoriesModel();

    useEffect(() => {
        getProjects();
    }, []);

    console.log(project)

    const SeeProject = (link: string) => {
        window.location.href = link

    }


    return (
        <article id='projects'>
            <header>
                <h2>Projects</h2>
            </header>
            <div>
                <ul className="project-list">
                    <li className="headerTable">
                        <p>Title</p>
                        <p>Description</p>
                        <p>Is complete</p>
                        {/* Adicione mais colunas conforme necessário */}
                    </li>
                    {projects.map((item) => (
                        <li
                            key={item.id}
                            onClick={() => onChangeValue(item.id)}
                            className={project && project.id === item.id ? 'active rowTab' : 'rowTab'}
                        >
                            <p>{item.title}</p>
                            <p>{item.description}</p>
                            <p>{item.isComplete ? "True" : "False"}</p>
                        </li>
                    ))}
                </ul>

                {project && (
                    <footer>
                        <ul>
                            <li>Stacks Utilizadas:</li>
                            {project.stacks.map(item => (
                                <li>{item}</li>
                            ))}
                        </ul>
                        <img src={project.image} alt='Project Image' />
                        <button onClick={() => SeeProject(project.link)} >Ver projeto</button>
                    </footer>
                )}
            </div>

        </article>
    );
}
