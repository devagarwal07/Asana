"use client";

import React, { useState, useEffect, createContext, useContext } from "react";
import Loader from "@/components/ui/loader";

// Context to share loading state
export const LoadingContext = createContext<{ isLoaded: boolean }>({ isLoaded: false });

export const useLoading = () => useContext(LoadingContext);

interface LoaderWrapperProps {
    children: React.ReactNode;
}

const LoaderWrapper: React.FC<LoaderWrapperProps> = ({ children }) => {
    const [showLoader, setShowLoader] = useState(true);
    const [showContent, setShowContent] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Check if this is the first visit in this session
        const hasVisited = sessionStorage.getItem("asana-visited");
        if (hasVisited) {
            setShowLoader(false);
            setShowContent(true);
            // Small delay before triggering animations
            setTimeout(() => setIsLoaded(true), 100);
        }
    }, []);

    const handleLoaderComplete = () => {
        sessionStorage.setItem("asana-visited", "true");
        setShowLoader(false);
        // Delay content appearance for smooth transition
        setTimeout(() => {
            setShowContent(true);
            // Trigger animations after content is visible
            setTimeout(() => setIsLoaded(true), 200);
        }, 100);
    };

    return (
        <LoadingContext.Provider value={{ isLoaded }}>
            {showLoader && <Loader onComplete={handleLoaderComplete} duration={2500} />}
            <div
                style={{
                    opacity: showContent ? 1 : 0,
                    transition: "opacity 0.8s ease-out",
                }}
            >
                {children}
            </div>
        </LoadingContext.Provider>
    );
};

export default LoaderWrapper;
