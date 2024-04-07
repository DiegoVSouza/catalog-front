// Routes
import { useSelector } from "react-redux";
import Footer from "../../Presentation/Components/Footer/Footer";
import Header from "../../Presentation/Components/Header/HeaderStore";
import AppRoutes from "./app.routes";
import { useEffect, useRef } from 'react';
import { UserStore } from "../../Domain/Model/Token";
import HeaderAdmin from "../../Presentation/Components/Header/HeaderAdmin";

export default function Routes() {
    const { admin, store } = useSelector((store: UserStore) => store);
    const verifyLogin = (): string => {
        if (admin)
            if (admin.id !== '')
                return 'admin'
        if (store)
            if (store.id !== '')
                return 'store'

        return ''

    }

    const RenderHeader = () => {
        switch (verifyLogin()) {
            case 'admin':
                return <HeaderAdmin />
            case 'store':
                return <HeaderAdmin />
            default:
                <Header/>
        }
    }
    
    return (
        <>

            {RenderHeader()}
            <AppRoutes />
            <Footer />
        </>
    )
} 
