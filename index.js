const elmTextarea = document.getElementById('url');

const isValidUrl = (url) => {
  try {
    new URL(url);
  } catch(e) {
    alert(e.message);
    return false;
  }
  return true;
}

const createHostingInfoData = (elmTr, val) => {
  const elmTd = document.createElement('td');
  const textNode = document.createTextNode(val);

  elmTd.appendChild(textNode);
  elmTr.appendChild(elmTd);
}

document.getElementById('decode').addEventListener('click', () => {
  const elmUrl = elmTextarea.value;
  const elmResult = document.getElementById('result');
  const elmParameters = document.getElementById('parameters');
  const elmHostingInfo = document.getElementById('hosting-info');
  const elmDisplayInfo = document.getElementById('display-info');
  
  // try {
   const decodedUrl = decodeURIComponent(elmUrl);
   const urlParams = decodedUrl.split(/[&?]/i);
  //  console.log(expression.exec(decoedUrl));
  // console.log(urlParams);
  // console.log('****************************');
  //  console.log(decodedUrl.search('/&/i', 'xxxx'));
  // }
  
  // if (isValidUrl(elmUrl)) {
  //   let pathArray = elmUrl.split('/');
  //   let protocol = pathArray[0].slice(0, -1);
  //   let host = pathArray[2];
  //   let baseUrl = protocol + '//' + host;
  //   let parameters = pathArray[3];
  //   elmDisplayInfo.style.display = 'block';
  //   console.log(decodeURIComponent(elmUrl));

  //   const domainInfo = {
  //     protocol,
  //     host,
  //     baseUrl,
  //   };

  //   // const test =  Object.values(domainInfo);
  //   // console.log(domainInfo.protocol);
  //   // console.log(Object.keys(domainInfo));
  //   // domainInfo.push(protocol, host, baseUrl);

  //   for (const [key, value] of Object.entries(domainInfo)) {
  //     const elmTr = document.createElement('tr');
  
  //     for (let i = 0; i < 2; i++) {
  //       i === 0 ? createHostingInfoData(elmTr, key) : createHostingInfoData(elmTr, value);
  //     }

  //     elmHostingInfo.appendChild(elmTr);
  //   }

  //   // console.log('prot:' + protocol);
  //   // console.log('host: ' + host);
  //   // console.log('baseUrl' + baseUrl);

  const elmThead = document.createElement('thead');
  const elmTbody = document.createElement('tbody');
  const elmTr = document.createElement('tr');
  elmThead.append(elmTr);

  const columnNames = ['name', 'value', ''];

  for (let i = 0; i < columnNames.length; i++) {
    const elmTh = document.createElement('th');
    elmTh.classList.add('col');
    elmTh.innerText = columnNames[i];
    elmTr.appendChild(elmTh);
  }

  elmParameters.appendChild(elmThead);


  for (let i = 1; i < urlParams.length; i++) {
    const elmTr = document.createElement('tr');
    let splitData = urlParams[i].split('=');

    for (let j = 0; j < 3; j++) {
      const elmTd = document.createElement('td');
      const elmInput = document.createElement('input');
      elmInput.setAttribute('name', `param-${j}`);
      elmInput.setAttribute('value', splitData[j]);
      elmInput.classList.add('param');
      
      const elmBtn = document.createElement('button');
      elmBtn.id = `btn-${i}`;
      elmBtn.classList.add('btn', 'btn-success', 'd-grid', 'mx-auto');
      elmBtn.innerText = 'copy';
    
      j < 2 ? elmTd.append(elmInput) : elmTd.appendChild(elmBtn);
      elmTr.append(elmTd);
        
      elmBtn.addEventListener('click', () => {
        const gecici = document.createElement('input');
        gecici.setAttribute('type', 'text');
        // gecici.setAttribute('value', `${splitData[--i]}`);
        const input1 = document.querySelector(`[name="param-${i}"]`);
        const input2 = document.querySelector(`[name="param-${i}"]`);
        
        gecici.value = `${input1.value}=${input2.value}`; 
        console.log(gecici.value);
        gecici.select();
        gecici.setSelectionRange(0, 99999)
        document.execCommand("copy");
      });
    }

    elmTbody.append(elmTr);
  }

  elmParameters.appendChild(elmTbody);


  // elmTbody.appendChild(elmTr);

  // elmParameters.appendChild(elmTbody);

      // for (let i = 1; i < urlParams.length; i++) {
      // elmThead.appendChild(elmTr);
      // elmParameters.appendChild(elmThead);
      //   const elmLi = document.createElement('LI');
      //   elmLi.classList.add('list-group-item');

      //   const textNode = document.createTextNode(urlParams[i]);
      //   const elmButton = document.createElement('button');
      //   elmButton.id = `btn-${i}`;
      //   elmButton.classList.add('btn', 'btn-success', 'float-end');
      //   elmButton.innerText = 'copy';


      //   const elmBr = document.createElement('BR');
      //   elmLi.appendChild(textNode);
      //   elmLi.appendChild(elmButton);
      //   elmLi.appendChild(elmBr);
      //   elmParameters.appendChild(elmLi);
      // }

  //   for (let i = 3; i < pathArray.length; i++) {
  //     let params = pathArray[i].split('&');
  //     for(let j = 0; j < params.length; j++) {
  //       const elmLi = document.createElement('LI');
  //       elmLi.classList.add('list-group-item');

  //       const textNode = document.createTextNode(params[j]);
  //       const elmButton = document.createElement('button');
  //       elmButton.id = `btn-${j}`;
  //       elmButton.classList.add('btn', 'btn-success', 'float-end');
  //       elmButton.innerText = 'copy';


  //       const elmBr = document.createElement('BR');
  //       elmLi.appendChild(textNode);
  //       elmLi.appendChild(elmButton);
  //       elmLi.appendChild(elmBr);
  //       elmParameters.appendChild(elmLi);
  //     }
  //   }
  // }

    // elmResult.innerText = decodeURI(elmUrl);
});


elmTextarea.addEventListener('input', (e) => {
  // location.reload();
});

