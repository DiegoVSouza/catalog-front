import { useEffect, useState } from 'react';
import './Repositories.css'
import useRepositoriesModel from "./RepositoriesModel";

export default function Projects() {
    const {
        getProjects,
        onChangeValue,
        projects,
    } = useRepositoriesModel();
    useEffect(()=>{
        getProjects()
    },[])
    
    return (
        <article>
            <header>
                <h2>Projects</h2>
            </header>
            <ul>
                {projects.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
            <footer>

            </footer>
        </article>
    );
}
