const createHostingInfoData = (elmTr, val) => {
  const elmTd = document.createElement("td");
  const textNode = document.createTextNode(val);

  elmTd.appendChild(textNode);
  elmTr.appendChild(elmTd);
};

document.getElementById("decode").addEventListener("click", () => {
  createTable();
  document.getElementById("decode").disabled = true;
});

document
  .getElementById("clear")
  .addEventListener("click", (e) => location.reload());

const createTable = () => {
  const elmTextarea = document.getElementById("url");
  const elmUrl = elmTextarea.value;
  const elmParameters = document.getElementById("parameters");
  const decodedUrl = decodeURIComponent(elmUrl);
  const urlParams = decodedUrl.split(/[&?]/i);
  const elmThead = document.createElement("thead");
  const elmTbody = document.createElement("tbody");
  const elmTr = document.createElement("tr");
  const dContainer = document.querySelector(".d-container");
  dContainer.style.height = "400px";

  elmThead.append(elmTr);

  const columnNames = ["name", "value", ""];

  for (let i = 0; i < columnNames.length; i++) {
    const elmTh = document.createElement("th");
    elmTh.classList.add("col");
    elmTh.innerText = columnNames[i];
    elmTr.appendChild(elmTh);
  }

  elmParameters.appendChild(elmThead);

  for (let i = 1; i < urlParams.length; i++) {
    const elmTr = document.createElement("tr");
    let splitData = urlParams[i].split("=");

    for (let j = 0; j < 3; j++) {
      const elmTd = document.createElement("td");
      const elmInput = document.createElement("input");
      elmInput.setAttribute("name", `param-${j}`);
      elmInput.setAttribute("value", splitData[j]);
      elmInput.classList.add("param");

      const elmBtn = document.createElement("button");
      elmBtn.id = `btn-${i}`;
      elmBtn.classList.add("btn", "btn-success", "d-grid", "mx-auto");
      elmBtn.innerText = "copy";

      j < 2 ? elmTd.append(elmInput) : elmTd.appendChild(elmBtn);
      elmTr.append(elmTd);

      elmBtn.addEventListener("click", () => {
        const parentElm = elmBtn.parentNode.parentNode;
        const firstChildElm = parentElm.firstChild;
        const siblingElm = firstChildElm.nextSibling.firstChild;
        siblingElm.select();
        document.execCommand("copy");
      });
    }
    elmTbody.append(elmTr);
  }

  elmParameters.appendChild(elmTbody);
};
