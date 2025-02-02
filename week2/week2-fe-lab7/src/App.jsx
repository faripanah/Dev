import React from 'react';
import Article from "./Article";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Section from  "./Section";
import "./App.css"

//Dynamic content:
const appTitle = 'JSX and Props Showcase';
const section1Content = 'This is the content of section 1';
const article1Title = 'Article 1';
const article1Text = 'content of Article';
const sidebarContent = 'Sidebar content goes here.';
const section2Content = 'This is the content of section 2.';
const footerText = 'Copyright 2025 JSX Props App';

function App(){
  return(
    <>
    <Header title={appTitle} />
    <Section heading="Section1" content={section1Content} />
    <Article title={article1Title} text={article1Text}/>
    <Sidebar content={sidebarContent}/>
    <Section heading="Section 2" content={section2Content}/>
    <Footer text={footerText}/>


   
    </>
  )
}
