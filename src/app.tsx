import GlobalStyle from '_/theme/global-styles';
import Collections from '_/views/collections';
import * as React from 'react';
import { SiHackaday } from 'react-icons/si';
import { Header } from './app.style';

const App: React.FC = (): JSX.Element => (
  <>
    <GlobalStyle />
    <Header>
      <h1>
        <SiHackaday />
        <span>Hacker News</span>
      </h1>
    </Header>
    <Collections />
  </>
);

export default App;
