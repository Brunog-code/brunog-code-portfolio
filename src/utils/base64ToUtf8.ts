export const base64ToUtf8 = (base64: string) => {
  // Decodifica base64 para bytes
  const bytes = atob(base64);
  // Converte bytes para percent encoding
  const percentEncoded = bytes
    .split("")
    .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
    .join("");
  // Decodifica percent encoding para UTF-8
  return decodeURIComponent(percentEncoded);
}
