import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "192892251523-bncpabckgs8lnpvj95rcmaelujkj8u4p.apps.googleusercontent.com",
        scope: "email",
      });
    });
  }
  render() {
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;
