const themeButton = document.querySelector('#theme-toggle');
const themeColor = document.querySelector('meta[name="theme-color"]');
const systemTheme = matchMedia('(prefers-color-scheme: dark)');
let explicitTheme = false;
try { explicitTheme = Boolean(localStorage.getItem('sujan-theme')); } catch {}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const dark = theme === 'dark';
  themeButton.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} theme`);
  themeButton.setAttribute('aria-pressed', String(dark));
  themeColor.content = dark ? '#10121f' : '#f4f3fb';
}
applyTheme(document.documentElement.dataset.theme);
themeButton.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  explicitTheme = true;
  applyTheme(next);
  try { localStorage.setItem('sujan-theme', next); } catch {}
});
systemTheme.addEventListener('change', (event) => {
  if (!explicitTheme) applyTheme(event.matches ? 'dark' : 'light');
});

const copyButton = document.querySelector('#copy-email');
const copyStatus = document.querySelector('#copy-status');
let resetCopy;
copyButton.addEventListener('click', async () => {
  clearTimeout(resetCopy);
  try {
    await navigator.clipboard.writeText('2006sujantavare@gmail.com');
    copyStatus.textContent = 'Email copied. Say hello when you’re ready!';
    copyButton.setAttribute('aria-label', 'Email copied');
    resetCopy = setTimeout(() => {
      copyStatus.textContent = 'My inbox is open. Drop a hello.';
      copyButton.setAttribute('aria-label', 'Copy email address');
    }, 4000);
  } catch {
    copyStatus.textContent = 'Copy unavailable — select the email to copy it, or click to write.';
    copyButton.setAttribute('aria-label', 'Try copying email address again');
  }
});
document.querySelector('#year').textContent = new Date().getFullYear();
