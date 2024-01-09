import { Footer } from "./Footer";
import React from "react"
import { Navbar } from "./Navbar";

export const DefaultTemplate = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};