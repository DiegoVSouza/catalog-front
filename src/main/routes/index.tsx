// Routes
import Header from "../../Presentation/Components/Header/Header";
import AppRoutes from "./app.routes";
import { useEffect, useRef } from 'react';

export default function Routes() {

    return (
        <>
            <Header />
            <AppRoutes />
        </>
    )
} 
