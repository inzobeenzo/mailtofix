const params = new URLSearchParams(location.search);
const mailto = params.get("uri");

if (mailto) {
  const url = new URL(mailto);
  const to = url.pathname;
  const gmail = new URLSearchParams({ to });
  if (url.searchParams.get("subject")) gmail.set("su", url.searchParams.get("subject"));
  if (url.searchParams.get("body")) gmail.set("body", url.searchParams.get("body"));
  if (url.searchParams.get("cc")) gmail.set("cc", url.searchParams.get("cc"));
  if (url.searchParams.get("bcc")) gmail.set("bcc", url.searchParams.get("bcc"));
  location.replace("https://mail.google.com/mail/u/0/?" + gmail.toString() + "#inbox?compose=new");
} else {
  navigator.registerProtocolHandler(
    "mailto",
    location.origin + location.pathname + "?uri=%s",
    "Gmail"
  );
}
