import { useState } from 'react';
import './Repositories.css'
import useRepositoriesModel from "./RepositoriesModel";

export default function HomeView() {
    const {
        getProjects,
        onChangeValue,
        projects,
    } = useRepositoriesModel();
    
    return (
        <article>
            <header>
                <h2>Repositories</h2>
            </header>
            <ul>
                {projects.map(item => (
                    <li>{item.title}</li>
                ))}
            </ul>

        </article>
    );
}
