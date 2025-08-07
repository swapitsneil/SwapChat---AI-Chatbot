import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({ apiKey: "" });  //paste your api key
const History = [];

export async function chatWithGemini(userProblem) {
  History.push({ role: 'user', parts: [{ text: userProblem }] });
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: History
  });
  History.push({ role: 'model', parts: [{ text: response.text }] });
  return response.text;
}
