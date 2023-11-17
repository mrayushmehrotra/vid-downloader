import axios from "axios";

const api = axios.create({
  baseURL:
    "https://instagram-downloader-download-instagram-videos-stories.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": "94e4390530msh1aba0690f7c7d8cp100edejsnab1459cfcd45",
    "X-RapidAPI-Host":
      "instagram-downloader-download-instagram-videos-stories.p.rapidapi.com",
  },
});

export const downloadInstagramVideo = async (url) => {
  try {
    const response = await api.get("/index", {
      params: {
        url: url,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
