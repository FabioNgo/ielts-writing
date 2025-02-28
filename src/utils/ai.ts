import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.GENIMI_API_KEY || "");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export async function askGemini(prompt: string) {
  if (!prompt) return;

  const result = await model.generateContent(prompt);
  const text = result.response.text();
  return text.replaceAll("```json", "").replaceAll("```", "");
}
