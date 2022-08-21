import { Header } from './components/Header';
import { Avatar } from './components/Avatar';
import { PersonalInfo } from './components/PersonalInfo';
import { Repos } from './components/Repos';
import { Links } from './components/Links';
import './index.css';

import { useState } from 'react';

export const GithubUserSearch = () => {
  const [theme, setTheme] = useState('dark');

  return (
    <section className="main-container w-[980px] my-4 mx-auto">
      <header>
        <Header theme={theme} setTheme={setTheme} />
      </header>
      <main className="flex items-start justify-between m-auto p-12 bg-white mt-8 shadow-shadow rounded-2xl">
        <Avatar />
        <div className="w-[700px] max-w-[700px]">
          <PersonalInfo />
          <Repos />
          <Links />
        </div>
      </main>
    </section>
  );
};
