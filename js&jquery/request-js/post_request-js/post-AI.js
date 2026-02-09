async function sendRequest() {
  const ret = localStorage.getItem("pain");

  if (!ret) {
    document.getElementById("response-text").textContent =
      "No data found in localStorage.";
    return;
  }

  document.getElementById("btn").style.display = "block";
  document.getElementById("loader").style.display = "block";
  document.getElementById("response-text").textContent = "";

  // Vercel Function endpoint (API key is stored on Vercel, not in frontend)
  const url = "https://doctor-ai-api-xi.vercel.app/api/generate";

  // IMPORTANT: our backend expects { text: "..." }
  const bodyData = { text: ret };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bodyData),
    });

    // Read JSON whether success or error (so we can show error message)
    const data = await response.json().catch(() => ({}));

    if (response.ok) {
      displayResponse(data);
    } else {
      const msg =
        data?.error?.message ||
        data?.error ||
        `Request failed with status: ${response.status}`;
      document.getElementById("response-text").textContent = msg;
      console.log("API error:", response.status, data);
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

    // Requires marked library loaded on the page
    const html = marked.parse(markdownText);

    typeWriterHTML(html, responseText, 7);
  } else {
    // Log full response to debug unexpected shapes
    console.log("Unexpected response shape:", data);
    responseText.textContent = "No valid response data received.";
  }
}

sendRequest();
