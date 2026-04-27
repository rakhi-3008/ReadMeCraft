// ─── toast.js ─ Lightweight notification ──────────────────────────────────────

let _timer = null;

export function showToast(message, duration = 2500) {
  let el = document.getElementById("app-toast");
  if (!el) {
    el = document.createElement("div");
    el.id = "app-toast";
    document.body.appendChild(el);
  }
  el.textContent = message;
  el.classList.add("visible");

  clearTimeout(_timer);
  _timer = setTimeout(() => el.classList.remove("visible"), duration);
}