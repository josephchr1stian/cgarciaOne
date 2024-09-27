"use client";

import { AppBar, Typography,Toolbar,Tabs, Tab } from "@mui/material";
import * as React from 'react';
import { PiCodeLight } from "react-icons/pi";
import { PiLinkedinLogoThin } from "react-icons/pi";
import Cheese from "./blog";
import { useState, useEffect } from "react";



export default function Home() {
  const [text, setText] = useState('hiiiii');

  function handleTabSwitch(){
    setText('oh tabby!!')
  
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <AppBar color = "transparent" >
        <Toolbar >
          Toolbar
          <Tabs onChange = {handleTabSwitch}>
            <Tab disableRipple label="my dearest " />
            <Tab disableRipple label="x" />
            <Tab disableRipple label="hello!" />
            <Tab disableRipple label="blog" href ="/blog" />
          </Tabs>
        </Toolbar>
      </AppBar>
    
      <Typography> {text} </Typography>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/josephchr1stian"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PiCodeLight />
          Github
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/christiangarciadev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PiLinkedinLogoThin />
          LinkedIn
        </a>
      </footer>
    </div>
  );
}
