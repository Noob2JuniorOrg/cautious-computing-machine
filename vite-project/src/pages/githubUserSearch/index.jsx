import './index.css';
import { Header } from './components/Header';
import { Avatar } from './components/Avatar';
import { PersonalInfo } from './components/PersonalInfo';
import { Repos } from './components/Repos';
import { Links } from './components/Links';
import { useEffect, useState } from 'react';

export const GithubUserSearch = () => {
  const [theme, setTheme] = useState('Light');
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log('user', user);
  }, [user]);

  return (
    <div className={'m-0 bg-skin-background ' + theme}>
      <section
        className={
          'text-skin-base main-container w-[980px] my-4 mx-auto ' + theme
        }
      >
        <header>
          <Header theme={theme} setTheme={setTheme} setUser={setUser} />
        </header>
        <main
          className={
            'text-skin-base bg-skin-backgroundLight flex items-start justify-between m-auto p-12 mt-8 shadow-shadow rounded-2xl ' +
            theme
          }
        >
          {user && (
            <>
              <Avatar avatar={user.avatar_url} />
              <div className={'w-[700px] max-w-[700px] ' + theme}>
                <PersonalInfo
                  name={user.name}
                  username={user.login}
                  joined={user.created_at}
                  bio={user.bio}
                />
                <Repos
                  followers={user.followers}
                  following={user.following}
                  repos={user.public_repos}
                />
                <Links
                  location={user.location}
                  github={user.html_url}
                  twitter={user.twitter_username}
                  blog={user.blog}
                  company={user.company}
                />
              </div>
            </>
          )}
        </main>
      </section>
    </div>
  );
};
