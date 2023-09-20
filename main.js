import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  organization: "YOUR_ORG_ID",
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();

let ac = Number;
let health = Number;
let xp = Number;
let hunger = Number;

const getResponse = async () => {
  const repsone = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: `Suggest 5 catchy titles for a blog post about ${userInput}`,
      },
    ],
    temperture: 0,
    max_tokens: 500,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presense_penalty: 0.0,
  });

  console.log(response.data.choices[0].message);
};

getResponse();
