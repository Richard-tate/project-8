import React, { useState , useEffect} from 'react';
import data from './data';
import { CgDarkMode} from 'react-icons/cg';



const getStorageTheme = () => {
  let theme = 'light_theme';
  if(localStorage.getItem('theme')){
    theme = localStorage.getItem('theme');
  }
  return theme;
};


function App() {

  const [theme, setTheme] = useState(getStorageTheme);

  const toggleTheme = () => {
    if(theme === 'light_theme'){
       setTheme('dark_theme');
    }else {
      setTheme('light_theme');
    }
   
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  
  const [count, setCount] = useState(0);
  const [text,setText] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if(count <= 0 ){
      amount = 1;
    }
    if(count > 8 ){
      amount = 8;
    }
    setText(data.slice(0, amount));
  };

  return (
        <section className="section-center">
            <h3>Tired of boring Lorem Ipsum ?</h3>
            <button className="btn toggle-btn" onClick={toggleTheme}><CgDarkMode/></button>
            <form className='lorem-form' onSubmit={handleSubmit}>
                <label htmlFor="amount">
                    paragraphs:
                </label>
                <input type="number" name="amount" id="amount" value={count} onChange={(e)=>setCount(e.target.value)} />
                <button type="submit" className="btn">Generate</button>
            </form>
            <article className="lorem-text">
            {text.map((item, index) => {
              return(
                  <p key={index}>{item}</p>
              );
            })}
            </article>
        </section>
    )
}

export default App;
