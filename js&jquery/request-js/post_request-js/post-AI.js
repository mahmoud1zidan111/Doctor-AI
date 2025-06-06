async function sendRequest() {
  let ret = localStorage.getItem("pain");
  // console.log("البيانات من localStorage:", ret);

  if (!ret) {
    document.getElementById("response-text").textContent =
      "No data found in localStorage.";
    return;
  }

  document.getElementById("btn").style.display = "block";
  document.getElementById("loader").style.display = "block";
  document.getElementById("response-text").textContent = "";

  let all = JSON.parse(localStorage.getItem("all"));

  const url =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" +
    all.a +
    all.c +
    all.s +
    all.d +
    all.n +
    all.su +
    all.x;

  const bodyData = {
    contents: [
      {
        parts: [
          {
            text: `${ret}`,
          },
        ],
      },
    ],
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
    });

    if (response.ok) {
      const data = await response.json();
      // console.log("البيانات المستلمة من API:", data);
      displayResponse(data);
      localStorage.removeItem("all");
    } else {
      document.getElementById("response-text").textContent =
        "Request failed with status: " + response.status;
    }
  } catch (error) {
    document.getElementById("response-text").textContent =
      "An error occurred: " + error.message;
  } finally {
    document.getElementById("loader").style.display = "none";
    document.getElementById("btn").style.display = "none";
  }
}

function typeWriterHTML(html, element, speed = 20) {
  let i = 0;
  function type() {
    if (i <= html.length) {
      element.innerHTML = html.slice(0, i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

function displayResponse(data) {
  const responseText = document.getElementById("response-text");
  responseText.innerHTML = "";

  if (
    data &&
    data.candidates &&
    Array.isArray(data.candidates) &&
    data.candidates[0] &&
    data.candidates[0].content &&
    data.candidates[0].content.parts
  ) {
    const markdownText = data.candidates[0].content.parts
      .map((part) => part.text || "")
      .join("\n\n");

    const html = marked.parse(markdownText);

    typeWriterHTML(html, responseText, 7);
  } else {
    responseText.textContent = "No valid response data received.";
  }
}

sendRequest();
