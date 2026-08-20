(() => {
  const address = document.getElementById("tattvika-feed-address");
  const button = document.getElementById("tattvika-feed-copy");
  const status = document.getElementById("tattvika-feed-copy-status");

  if (!address || !button || !status) return;

  const showStatus = (message) => {
    status.textContent = message;
    window.setTimeout(() => {
      if (status.textContent === message) status.textContent = "";
    }, 4000);
  };

  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(address.value);
      showStatus("Feed address copied.");
    } catch (_error) {
      address.focus();
      address.select();

      try {
        document.execCommand("copy");
        showStatus("Feed address copied.");
      } catch (_fallbackError) {
        showStatus("Select the address and copy it manually.");
      }
    }
  });
})();
