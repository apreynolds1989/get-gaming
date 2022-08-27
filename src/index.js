import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
    BrowserRouter,
    Routes,
    Route,
   } from "react-router-dom";
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { Library } from './Library';
import { Gallery } from './Gallery';
import { ContactForm } from './ContactForm';
import { Galleries } from './Galleries';
import { EventOneImages, EventOneImageNames } from './imageFiles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/get-gaming/" element={<App />} />
            <Route path="get-gaming/Library" element={<Library />} />
            <Route path="get-gaming/Gallery" element={<Galleries />} />
            <Route 
                path="/Aug26-2022-Gallery" 
                element={
                    <Gallery 
                        header='Get Coding - August 26 2022' 
                        images={EventOneImages} 
                        imageNames={EventOneImageNames} 
                    />} 
            />
            <Route path="get-gaming/ContactForm" element={<ContactForm />} />
            <Route
                path="*"
                element={
                    <main style={{ padding: "1rem" }}>
                    <p>Hmm.. something is missing..</p>
                    </main>
                }
            />
        </Routes>
    </BrowserRouter>
    // <React.StrictMode >
    //     <App / >
    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();