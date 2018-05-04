fetch('data.json')
  .then((rsp) => rsp.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(`data.json:: ${err}`));
