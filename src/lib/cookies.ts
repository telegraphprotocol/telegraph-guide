function cookieDomain() {
  const host = window.location.hostname;
  return host.endsWith("telegraphprotocol.com") ? ".telegraphprotocol.com" : "";
}

export function setCookie(name: string, value: string, days = 365) {
  const domain = cookieDomain();
  const maxAge = days * 24 * 60 * 60;
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; SameSite=Lax${domain ? `; domain=${domain}` : ""}`;
}

export function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}
