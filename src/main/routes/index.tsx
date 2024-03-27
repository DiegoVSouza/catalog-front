// Routes
import Footer from "../../Presentation/Components/Footer/Footer";
import Header from "../../Presentation/Components/Header/HeaderStore";
import AppRoutes from "./app.routes";
import { useEffect, useRef } from 'react';

export default function Routes() {

    return (
        <>
            <Header />
            <AppRoutes />
            <Footer />
        </>
    )
} 
