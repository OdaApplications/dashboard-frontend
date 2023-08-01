import axios from "axios";

axios.defaults.baseURL =
  "https://testserver.digital-zakarpattia.com.ua/api/cabinet/user-messages-join";

export async function getDepMessages(token) {
  try {
    const { data } = await axios.get("", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  } catch (error) {}
}
