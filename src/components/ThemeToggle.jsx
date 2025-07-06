import React , {useState,useEffect} from 'react';


import {Sun, Moon} from 'lucide-react';

export const ThemeToggle = () =>{

    const [isDark,setToDark] = useState(false) ;

    useEffect(() => { /*this effect remembers previos theme */
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setToDark(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setToDark(false);
    }
  }, []);


    const toggleTheme=()=>{
        if(isDark){
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme","light");
            setToDark(false);
        }
        else{
            document.documentElement.classList.add("dark");
            /*
            document → পুরো HTML ডকুমেন্টকে বোঝায়
            documentElement → মানে <html> ট্যাগ
            classList.add("dark") → <html> ট্যাগে "dark" নামের CSS ক্লাস যোগ করে
             */

            localStorage.setItem("theme","dark");
            setToDark(true);
        }
    }

    return <button onClick={toggleTheme}>{isDark?<Sun className='h-6 w-6 text-yellow-300' />:
    <Moon className='h-6 w-6 text-blue-300'/>}</button>
}