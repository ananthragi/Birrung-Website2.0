(function () {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");

  function onScroll() {
    header.classList.toggle("is-stuck", window.scrollY > 8);
  }

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  function setMenu(open) {
    header.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    const label = toggle.querySelector(".sr-only");
    if (label) label.textContent = open ? "Close menu" : "Menu";
    document.body.classList.toggle("menu-open", open);
  }

  toggle.addEventListener("click", function () {
    setMenu(!header.classList.contains("is-open"));
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setMenu(false);
    });
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 900) setMenu(false);
  });

  let lastFocus = null;
  let active = null;

  function focusable(modal) {
    return Array.from(modal.querySelectorAll("a, button, input, select, textarea")).filter(function (el) {
      return !el.disabled && el.tabIndex !== -1 && !el.closest("[hidden]");
    });
  }

  function openModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    setMenu(false);
    lastFocus = document.activeElement;
    active = modal;
    modal.hidden = false;
    document.body.classList.add("modal-open");
    const field = modal.querySelector("input:not([tabindex='-1']), select, textarea, [data-close]");
    if (field) field.focus();
  }

  function closeModal() {
    if (!active) return;
    active.hidden = true;
    active = null;
    document.body.classList.remove("modal-open");
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  }

  document.querySelectorAll("[data-open]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      openModal(btn.getAttribute("data-open"));
    });
  });

  document.querySelectorAll("[data-close]").forEach(function (btn) {
    btn.addEventListener("click", closeModal);
  });

  document.querySelectorAll(".modal").forEach(function (modal) {
    modal.addEventListener("click", function (event) {
      if (event.target === modal) closeModal();
    });
  });

  document.addEventListener("keydown", function (event) {
    if (!active) return;
    if (event.key === "Escape") {
      event.preventDefault();
      closeModal();
      return;
    }
    if (event.key !== "Tab") return;
    const nodes = focusable(active);
    if (!nodes.length) return;
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  function clearField(field) {
    const wrap = field.closest(".field");
    if (!wrap) return;
    wrap.classList.remove("is-error");
    const msg = wrap.querySelector(".err");
    if (msg) msg.textContent = "";
    field.removeAttribute("aria-invalid");
  }

  function validate(form) {
    let ok = true;
    let first = null;
    form.querySelectorAll("input, select, textarea").forEach(function (field) {
      if (field.name === "company_website") return;
      const wrap = field.closest(".field");
      if (!wrap) return;
      const value = field.value.trim();
      let error = "";
      if (field.required && !value) error = "Please fill this in.";
      else if (field.type === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = "Enter a valid email address.";
      } else if (field.type === "tel" && value && value.replace(/\D/g, "").length < 8) {
        error = "Enter a phone number we can call.";
      }
      wrap.classList.toggle("is-error", Boolean(error));
      const msg = wrap.querySelector(".err");
      if (msg) msg.textContent = error;
      if (error) {
        field.setAttribute("aria-invalid", "true");
        ok = false;
        if (!first) first = field;
      } else {
        field.removeAttribute("aria-invalid");
      }
    });
    if (first) first.focus();
    return ok;
  }

  function showSuccess(form) {
    form.hidden = true;
    const success = form.parentElement.querySelector(".form-success");
    if (success) success.hidden = false;
  }

  document.querySelectorAll("form[data-form]").forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const trap = form.querySelector("[name=company_website]");
      if (trap && trap.value) {
        showSuccess(form);
        return;
      }
      if (!validate(form)) return;
      const subjects = {
        demo: "Birrung demo request",
        trial: "Birrung trial request",
        contact: "Birrung website enquiry"
      };
      const lines = [];
      const data = new FormData(form);
      data.forEach(function (value, key) {
        if (key === "company_website") return;
        lines.push(key + ": " + String(value).trim());
      });
      const subject = subjects[form.dataset.form] || "Birrung enquiry";
      window.location.href = "mailto:info@birrung.com.au?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(lines.join("\n"));
      showSuccess(form);
    });

    form.querySelectorAll("input, select, textarea").forEach(function (field) {
      field.addEventListener("input", function () {
        clearField(field);
      });
    });
  });
})();
