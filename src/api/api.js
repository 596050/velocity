import axios from "axios";

export const Cache = { messages: [] };

const APIConstants = {
  base: "https://frontend-code-test.herokuapp.com/"
};

export const createMessage = async ({ data }) => {
  let result = null;
  try {
    result = await axios.post(`${APIConstants.base}messages`, {
      ...data
    });
    if (result && result.data && result.data.message) {
      Cache.messages = [...Cache.messages];
      Cache.messages.push(result.data);
      return Cache.messages;
    }
    return result;
  } catch (e) {
    console.error(e);
  }
  return null;
};
