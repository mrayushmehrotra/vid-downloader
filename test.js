import axios from "axios";

const options = {
  method: "GET",
  url: "https://instagram-downloader-download-instagram-videos-stories.p.rapidapi.com/index",
  params: {
    url: "https://www.instagram.com/reel/CxgAOUUR8R6/",
  },
  headers: {
    "X-RapidAPI-Key": "94e4390530msh1aba0690f7c7d8cp100edejsnab1459cfcd45",
    "X-RapidAPI-Host":
      "instagram-downloader-download-instagram-videos-stories.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
