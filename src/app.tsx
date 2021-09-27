import { ToastProvider } from '_/hooks/use-toasts';
import Collections from '_/views/collections';
import GlobalStyle from '_/theme/global-styles';
import * as React from 'react';
import { Header } from './app.style';
import { SiHackaday } from 'react-icons/si';

const App: React.FC = (): JSX.Element => (
  <ToastProvider>
    <GlobalStyle />
    <Header>
      <h1>
        <SiHackaday /> Hacker News
      </h1>
    </Header>
    <Collections />
  </ToastProvider>
);

export default App;
