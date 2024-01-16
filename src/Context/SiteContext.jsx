import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SiteContext = createContext();
function SiteContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [themeName, setThemeName] = useState("light");
  function handleTheme(){
    setThemeName (prev=>{
      const themeInfo = prev =="light" ? "dark":"light";
      changeTheme(themeInfo)
      localStorage.setItem('theme', themeInfo)
      return themeInfo
    })
  }

  function changeTheme(themeInfo){
    document.documentElement.setAttribute('data-bs-theme',themeName);
   
  }
  
  function getPreferredTheme(){
    const storedTheme=localStorage.getItem('theme')
    if(storedTheme){
      setThemeName(storedTheme)
    }else{
      setThemeName(window.matchMedia("(prefers-color-scheme: dark)").matches? "dark" : "light")
    }
  }





  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")) ?? null)
    changeTheme(getPreferredTheme())
    setThemeName(getPreferredTheme())
  }, []);
  const handleLogin = () => {
    const user = { id: 1, name: "Berivan Özdemir" };
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/");
  };
  const handleLogOut = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <SiteContext.Provider value={{ user, handleLogin, handleLogOut,themeName,handleTheme }}>
      {children}
    </SiteContext.Provider>
  );
}
export { SiteContext, SiteContextProvider };
