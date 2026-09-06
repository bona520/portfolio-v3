
import DisableDevtool from 'disable-devtool'

function blackout() {
  // Works if the tab was opened via script (window.open, target="_blank", etc.)
  window.close();

  // Trick: reassigning window.opener to itself tricks some browsers
  // (Chrome/Edge) into allowing close() even on tabs not opened by script.
  window.open("", "_self");
  window.close();

  // Fallback if the tab still couldn't be closed: navigate to a blank page.
  window.location.href = "about:blank";
}

export function initDisableDevtool() {
  if (import.meta.env.DEV) return

  DisableDevtool({
    disableMenu: true,
    clearLog: true,
    ondevtoolopen: blackout,
  })
}
