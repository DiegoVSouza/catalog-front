import { useEffect } from "react";
import useViewModel from "../../Todo/TodoList/HomeViewModel";
import './Header.css'
export default function Header() {
    return (
        <nav>
            <ul>
                <li><a href="#aboutme">About me</a></li>
                <li><a href="#projects">Projects</a></li>
            </ul>
        </nav>
    );
}
