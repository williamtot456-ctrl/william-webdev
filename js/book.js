function bookModal() {
  const heroBook = document.getElementById("hero_book");
  const book_modal = document.getElementById("book_modal");
  const book_close = document.getElementById("book_close");
  const book_form = document.getElementById("book_form");
  const book_form_panel = document.getElementById("book_form_panel");
  const book_submit_confirm = document.getElementById("book_submit_confirm");
  const book_content = document.querySelector(".book-content");

  const TRANSITION_TIME = 500;

  if (
    !heroBook ||
    !book_modal ||
    !book_close ||
    !book_form ||
    !book_form_panel ||
    !book_submit_confirm ||
    !book_content
  )
    return;

  // central reset
  function resetModal() {
    book_form_panel.classList.remove("hidden");
    book_submit_confirm.classList.remove("visible");
    book_content.classList.remove("submitted");
  }

  // initial state
  book_modal.classList.remove("is-open");
  resetModal();

  heroBook.addEventListener("click", () => {
    book_modal.classList.add("is-open");
    resetModal(); // prevents ghost state
  });

  book_close.addEventListener("click", () => {
    book_modal.classList.remove("is-open");
    setTimeout(() => {
      resetModal();
      book_form.reset();
    }, TRANSITION_TIME);
  });

  book_form.addEventListener("submit", (event) => {
    event.preventDefault();
    book_form_panel.classList.add("hidden");
    book_content.classList.add("submitted");

    book_submit_confirm.classList.add("visible");
  });
}
