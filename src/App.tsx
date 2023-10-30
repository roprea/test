import { BrowserRouter } from 'react-router-dom';
// import { InteractionType, PublicClientApplication } from '@azure/msal-browser';
// import type { Configuration } from '@azure/msal-browser';
// import { MsalAuthenticationTemplate, MsalProvider } from '@azure/msal-react';
import Content from 'components/Content';
import Header from 'components/Header';

// const configuration: Configuration = {
//   auth: {
//     clientId: String(process.env.REACT_APP_CLIENT_ID),
//     authority: 'https://login.microsoftonline.com',
//     redirectUri: window.location.origin,
//   },
// };
// const application = new PublicClientApplication(configuration);

function App() {
  return (
    // <MsalProvider instance={application}>
      <BrowserRouter>
        {/* <MsalAuthenticationTemplate interactionType={InteractionType.Redirect}> */}
          <Header />
          <Content />
        {/* </MsalAuthenticationTemplate> */}
      </BrowserRouter>
    // </MsalProvider>
  );
}

export default App;
