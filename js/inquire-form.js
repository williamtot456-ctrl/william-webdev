// ─── Name Validation ───────────────────────────────────────────
function validateName(inputId, errorId) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(errorId);
  let value = input.value;

  //First letter uppercase
  if (value.length > 0) {
    value = value.charAt(0).toUpperCase() + value.slice(1);
    input.value = value;
  }
  // FN LN
  const namePattern = /^[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ' -]*[A-Za-zÀ-ÿ]$|^[A-Za-zÀ-ÿ]$/;
  const consecutiveSpecial = /[' -]{2,}/;

  if (value.length === 0) {
    error.textContent = "";
    return false;
  } else if (value.trim().length < 2) {
    error.textContent = "Must be at least 2 characters.";
    return false;
  } else if (consecutiveSpecial.test(value)) {
    error.textContent = "Cannot contain consecutive special characters.";
    return false;
  } else if (!namePattern.test(value)) {
    error.textContent = "Must start and end with a letter.";
    return false;
  } else {
    error.textContent = "";
    return true;
  }
}

// Email
function validateEmail() {
  const input = document.getElementById("Inq-email");
  const error = document.getElementById("emailError");
  const value = input.value.trim();

  const showError = (msg) => {
    error.textContent = msg;
    return false;
  };
  const clearError = () => {
    error.textContent = "";
  };

  if (value.length === 0) {
    clearError();
    return false;
  }

  // lenght
  if (value.length < 6 || value.length > 32)
    return showError("Please enter a valid email address.");

  // one @
  const atCount = (value.match(/@/g) || []).length;
  if (atCount !== 1) return showError("Please enter a valid email address.");

  const atIndex = value.indexOf("@");
  const local = value.substring(0, atIndex);
  const domain = value.substring(atIndex + 1);

  // local
  if (local.length < 1 || local.length > 32)
    return showError("Your Email Address is too long");

  // Only allow: letters, digits, and . _ + -
  if (!/^[a-zA-Z0-9._+-]+$/.test(local))
    return showError("Please enter a valid email address.");

  // No consecutive special characters (.. __ +-)
  if (/[._+-]{2,}/.test(local))
    return showError("Cannot contain consecutive special characters.");

  // Cant start or end with a special character
  if (/^[._+-]|[._+-]$/.test(local))
    return showError(
      "Complete Email or Local part must start and end with a letter.",
    );

  // Domain
  if (domain.length < 4 || domain.length > 32)
    return showError("Your Email Address is too long");

  // Only letters, digits, hyphens, and dots allowed
  if (!/^[a-zA-Z0-9.\-]+$/.test(domain))
    return showError("Please enter a valid email address.");

  // No consecutive special characters (.. __ -- ++)
  if (/[.\-]{2,}/.test(domain))
    return showError("Cannot contain consecutive special characters.");

  // Cant start or end with a dot or hyphen
  if (/^[.\-]|[.\-]$/.test(domain))
    return showError("Please enter a valid email address.");

  // Must have at least one dot in the domain
  if (!domain.includes("."))
    return showError("Please enter a valid email address.");

  // TLD must be at least 2 letters and only contain letters
  const tld = domain.split(".").pop();
  if (!/^[a-zA-Z]{2,}$/.test(tld))
    return showError("Please enter a valid email address.");

  clearError();
  return true;
}

// Phone
function validatePhone() {
  const input = document.getElementById("Inq-phone");
  const error = document.getElementById("phoneError");
  const value = input.value.trim();

  // Only accept 09XXXXXXXXX format
  const phonePattern = /^09\d{9}$/;

  if (value.length === 0) {
    error.textContent = "";
    return false;
  } else if (!phonePattern.test(value)) {
    error.textContent = "Enter a valid PH number (e.g. 09XXXXXXXXX).";
    return false;
  } else {
    error.textContent = "";
    return true;
  }
}

// listeners & Filters
const fname = document.getElementById("Inq-fname");
const lname = document.getElementById("Inq-lname");
const email = document.getElementById("Inq-email");
const phone = document.getElementById("Inq-phone");

fname.addEventListener("input", function () {
  this.value = this.value.replace(/[^A-Za-zÀ-ÿ' -]/g, "");
  validateName("Inq-fname", "firstNameError");
});

lname.addEventListener("input", function () {
  this.value = this.value.replace(/[^A-Za-zÀ-ÿ' -]/g, "");
  validateName("Inq-lname", "lastNameError");
});

email.addEventListener("input", function () {
  // Only allow letters, digits, and valid email special chars
  this.value = this.value.replace(/[^a-zA-Z0-9@._+\-]/g, "");
  validateEmail();
});

phone.addEventListener("input", function () {
  this.value = this.value.replace(/[^\d]/g, "");
  if (this.value.length > 11) this.value = this.value.slice(0, 11);
  validatePhone();
});

// Guest
document.getElementById("Inq-guest").addEventListener("input", function () {
  if (this.value > 150) this.value = 150;
});

document.getElementById("Inq-guest").addEventListener("blur", function () {
  if (this.value < 1 && this.value !== "") this.value = 1;
});

document.getElementById("Inq-guest").addEventListener("keydown", function (e) {
  // Block e, E, +, -, and .
  if (["e", "E", "+", "-", "."].includes(e.key)) {
    e.preventDefault();
  }
});
