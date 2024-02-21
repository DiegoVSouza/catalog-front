import { useEffect } from "react";
import useViewModel from "../../Todo/TodoList/HomeViewModel";
import './Header.css'
export default function Header() {
    return (
        <nav>
            <ul>
                <li><a href="#aboutme">About me</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#services">Repositories</a></li>
                <li><a href="#mailingaddress">Contact me</a></li>
            </ul>
        </nav>
    );
}
