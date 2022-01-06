const getMeaning = () => {
  const formdata = new FormData();
  formdata.append("key", "106acfaa5bbf3825dd05e7c7fe65235c");
  formdata.append("txt", "This product is really sucks. I hate it.");
  formdata.append("lang", "en"); // 2-letter code, like en es fr ...

  const requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  const response = fetch(
    "https://api.meaningcloud.com/sentiment-2.1",
    requestOptions
  )
    .then((response) => ({
      status: response.status,
      body: response.json(),
    }))
    .then(({ status, body }) => console.log(status, body))
    .catch((error) => console.log("error", error));
};

export { getMeaning };
