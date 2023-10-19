import apiService from "./apiService";

const apiEndpoint =
  "https://k801xpmd12.execute-api.eu-north-1.amazonaws.com/default/googleVisionOcr";

async function ocr(image: string | undefined | null) {
  if (!image) return "";
  const response = await apiService.instance.post(apiEndpoint, {
    image64: image,
  });
  console.log(response.data);
  return response.data.text;
}

export default { ocr };
