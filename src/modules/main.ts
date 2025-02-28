import { getData } from "./functions";
import { changeReadStatus } from "./functions";
import { changeReviewStatus } from "./functions";
import { writeBook } from "./functions";
import { deleteBook } from "./functions";

const form = document.querySelector('form');

async function displayBookIds() {
  try {
    const data = await getData();
    console.log(data);

    if (data.books && Array.isArray(data.books)) {
      data.books.forEach(function (book: {
        title: string;
        writer: string;
        read: boolean;
        review: string;
        ID: number;
      }) {
        const bookWrapper = document.createElement("div");
        bookWrapper.classList.add("bookwrapper");

        const saveBtn = document.createElement("button");
        saveBtn.innerText = "Save";

        const titleEl = document.createElement("p");
        const writerEl = document.createElement("p");
        const readElTxt = document.createElement("p");
        const readEl = document.createElement("input");

        readElTxt.innerText = `Read: ${book.read}`;
        readEl.setAttribute("type", "checkbox");
        readEl.checked = book.read;

        readEl.addEventListener("change", () => {
          reviewEl.disabled = !readEl.checked;
          const readStat = readEl.checked;
          readElTxt.innerText = `Read: ${readStat ? "true" : "false"}`;
          if (readStat && reviewEl.value === 'disliked') {
            addRemoveButton();
          } else {
            removeRemoveButton();
          }
        });

        const reviewEl = document.createElement("select");
        const options = ["no comment", "liked", "disliked"];
        options.forEach((optionText) => {
          const optionEl = document.createElement("option");
          optionEl.value = optionText;
          optionEl.innerText = optionText;
          reviewEl.appendChild(optionEl);
        });

        reviewEl.value = book.review;
        reviewEl.disabled = !readEl.checked;

        let reviewStat = '';
        reviewEl.addEventListener('change', () => {
          reviewStat = reviewEl.value;
          if (reviewStat === 'disliked' && readEl.checked) {
            addRemoveButton();
          } else {
            removeRemoveButton();
          }
        });
        function addRemoveButton() {
          if (!bookWrapper.querySelector('.removeBtn')) {
            const removeBtn = document.createElement('button');
            removeBtn.innerText = 'Remove';
            removeBtn.classList.add('removeBtn');
            bookWrapper.append(removeBtn);
            removeBtn.addEventListener('click', async () => {
              await deleteBook(book.ID, displayBookIds);
              location.reload();
            });
          }
        }
        function removeRemoveButton() {
          const removeBtn = bookWrapper.querySelector('.removeBtn');
          if (removeBtn) {
            removeBtn.remove();
          }
        }

        writerEl.innerText = `Writer: ${book.writer}`;
        titleEl.innerText = `Title: ${book.title}`;

        document.body.append(bookWrapper);
        bookWrapper.append(
          titleEl,
          writerEl,
          readEl,
          reviewEl,
          saveBtn,
          readElTxt
        );

        if (book.read && book.review === 'disliked') {
          addRemoveButton();
        }

        saveBtn.addEventListener("click", async () => {
          console.log(book.ID);
          const readStat = readEl.checked;
          await changeReadStatus(book.ID, readStat);
          await changeReviewStatus(book.ID, reviewStat);

          if (readStat && reviewEl.value === 'disliked') {
            addRemoveButton();
          } else {
            removeRemoveButton();
          }
        });
      });
    } else {
      console.log("Data is not in the expected format or 'books' property is missing.");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}




form?.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const title = formData.get('title') as string;
  const writer = formData.get('writer') as string;
  const read = formData.get('read');
  console.log(formData)

  const readBoolean = read !== null && typeof read === 'string' && read === 'on';

  try {
    await writeBook(title, writer, readBoolean);
    await displayBookIds();
  } catch (error) {
    console.error("Error writing book:", error);
  }
});

displayBookIds();
