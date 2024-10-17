'use client';
import React, { useEffect, useState } from 'react';
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from 'next-themes';


export default function DarkModeSwitch() {
  const {theme,setTheme,systemTheme} = useTheme();
  const [mounted,setMounted] = useState(false);
  const currentTheme = theme === 'system' ? systemTheme : theme;
  useEffect(() => setMounted(true), []);

   // Update theme if mounted and systemTheme changes
  useEffect(() => {
    if (mounted) {
      setTheme(systemTheme); //automatically update the theme
    }
  }, [systemTheme, mounted, setTheme])
  return (
    <div>
      {mounted && (currentTheme === 'dark' ? <MdLightMode className='text-xl cursor-pointer hover:text-amber-500' onClick={()=>setTheme('light')}/> 
      : <MdDarkMode className='text-xl cursor-pointer hover:text-amber-500' onClick={()=>setTheme('dark')}/>)}
    </div>
  )
}
