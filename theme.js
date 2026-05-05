// Tema claro/oscuro (solo UI). No afecta la lógica del test.
(function(){
  const KEY = "proyectate_theme"; // "light" | "dark"
  const body = () => document.body;

  function systemPrefersDark(){
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  function getMode(){
    try{
      const v = localStorage.getItem(KEY);
      if (v === "light" || v === "dark") return v;
    }catch(e){}
    return systemPrefersDark() ? "dark" : "light";
  }

  function applyMode(mode){
    body().classList.toggle("theme-dark", mode === "dark");
    const btn = document.getElementById("btnTheme");
    if (btn){
      btn.textContent = mode === "dark" ? "☀️ Modo claro" : "🌙 Modo oscuro";
      btn.setAttribute("aria-pressed", mode === "dark" ? "true" : "false");
    }
  }

  function setMode(mode){
    try{ localStorage.setItem(KEY, mode); }catch(e){}
    applyMode(mode);
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyMode(getMode());
    const btn = document.getElementById("btnTheme");
    if (btn){
      btn.addEventListener("click", () => {
        const next = body().classList.contains("theme-dark") ? "light" : "dark";
        setMode(next);
      });
    }
  });
})();
