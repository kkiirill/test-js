const dataFromServer = [
  {
    "attribute_id": 1,
    "name": "test1",
    "text": 111
  },
  {
    "attribute_id": 2,
    "name": "test2",
    "text": 222
  },
  {
    "attribute_id": 3,
    "name": "test3",
    "text": 333
  },
  {
    "attribute_id": 4,
    "name": "test4",
    "text": 444
  },
  {
    "attribute_id": 5,
    "name": "test5",
    "text": 555
  }
];

const firstTab = document.querySelector('#tab-1');

firstTab.insertAdjacentHTML('afterbegin', `
  <table>
    <thead>
      <tr>
        <th>First</th>
        <th>Second</th>
      </tr>
    </thead>
    <tbody id="body">
    </tbody>
  </table>
`);

const body = document.querySelector('#body');

for (let i = 0; i < dataFromServer.length; i += 2) {
  if (!dataFromServer[i + 1]) {
    body.insertAdjacentHTML('beforeend', `
    <tr>
      <td>${dataFromServer[i].name} ${dataFromServer[i].text}</td>
    </tr>
    `);

    break;
  }

  body.insertAdjacentHTML('beforeend', `
    <tr>
      <td>${dataFromServer[i].name} ${dataFromServer[i].text}</td>
      <td>${dataFromServer[i + 1].name} ${dataFromServer[i + 1].text}</td>
    </tr>
    `);
}

