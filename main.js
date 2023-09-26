import OpenAI from "openai";

const openai = new OpenAI({
  organization: process.env.ORG,
  apiKey: process.env.OPENAI_API_KEY,
});
const response = await openai.listEngines();

let ac = Number;
let health = Number;
let xp = Number;
let hunger = Number;

let start = prompt(
  "Welcome to Cynes Dragons. Type begin when you would like to begin."
);

if ((start = "begin")) {
  let responseContent = ` You are going to be the "Dungeon Master" for a role playing game. You will explain the current
  and generate incounters of various sort. In this game there is Armor defined as AC which is a number.
  Health defined as health which is a number. Experience defined as xp which is a number. Hunger
  defined as hunger which is a number. The value of each of these will be provided with each prompt
  which will also contain the actions the user wants to take. You will provide short explainations of the
  surrounding area limited to 4 sentences. Every enemy will have AC, health and xp. Provide everything
  in a json array and only the json array.`;

  console.log(responseContent);

  const startGame = async () => {
    const repsone = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `${responseContent}`,
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

  startGame();
}

// content: `Action: ${userInput}
//                     AC: ${ac}
//                     Health: ${health}
//                     Experience: ${xp}
//                     Hunger: ${hunger}`;
