const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    }

    if (xhr.status === 400) {
      console.log("File not found");
    }
  }
};

xhr.open("get", "./dom.txt", true);
xhr.send();
