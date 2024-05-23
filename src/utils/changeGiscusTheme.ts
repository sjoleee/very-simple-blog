const changeGiscusTheme = (theme: "light" | "dark"): void => {
  const sendMessage = (message: { setConfig: { theme: string } }): void => {
    const shadowHost = document.querySelector("giscus-widget");
    const shadowRoot = shadowHost?.shadowRoot;
    const iframe = shadowRoot?.querySelector("iframe");

    if (!iframe || !iframe.contentWindow) return;
    iframe.contentWindow.postMessage({ giscus: message }, "https://giscus.app");
  };

  sendMessage({
    setConfig: {
      theme,
    },
  });
};

export default changeGiscusTheme;
