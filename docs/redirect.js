const params = new URLSearchParams(location.search);
const mailto = params.get("uri");

if (mailto) {
  const body = mailto.replace(/^mailto:/i, "");
  location.replace(
    "https://mail.google.com/mail/?extbody=" + encodeURIComponent(body) + "&view=cm&fs=1"
  );
} else {
  navigator.registerProtocolHandler(
    "mailto",
    location.origin + location.pathname + "?uri=%s",
    "Gmail"
  );
}
