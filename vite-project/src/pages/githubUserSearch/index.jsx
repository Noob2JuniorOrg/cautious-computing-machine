import './index.css';
import { Header } from './components/Header';
import { Avatar } from './components/Avatar';
import { PersonalInfo } from './components/PersonalInfo';
import { Repos } from './components/Repos';
import { Links } from './components/Links';
import { useState } from 'react';
import { useEffect } from 'react';

export const GithubUserSearch = () => {
  const [theme, setTheme] = useState('Light');

  useEffect(() => {
    setTheme(theme);
    console.log('thejme', theme);
  }, [theme]);

  // const ThemeButtons = ({ setTheme }) => {
  //   return (
  //     <div>
  //       <Button value="lightTheme" setTheme={setTheme}>
  //         Light
  //       </Button>
  //       <Button value="darkTheme" setTheme={setTheme}>
  //         Dark
  //       </Button>
  //     </div>
  //   );
  // };

  return (
    <div className={theme}>
      <section className="text-skin-base bg-skin-fill main-container w-[980px] my-4 mx-auto">
        <header>
          <Header theme={theme} setTheme={setTheme} />
        </header>
        <main
          className={
            'text-skin-base bg-skin-fill flex items-start justify-between m-auto p-12 mt-8 shadow-shadow rounded-2xl ' +
            theme
          }
        >
          <Avatar />
          <div className={'w-[700px] max-w-[700px] ' + theme}>
            <PersonalInfo />
            <Repos />
            <Links />
          </div>
        </main>
      </section>
    </div>
  );
};
