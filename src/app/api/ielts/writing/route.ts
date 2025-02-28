import { NextRequest, NextResponse } from "next/server";
import { askGemini } from "@/utils/ai";
import { RequestBody, ResponseData } from "@/app/api/ielts/writing/type";
export const runtime = "edge";

export type ResponseFormat = {
  overallFeedback: string;
  estimatedBandScore?: string;
  breakdownByCriterion?: {
    taskResponse: {
      feedback: string;
      score: string;
      suggestions: string[];
    };
    coherenceAndCohesion: {
      feedback: string;
      score: string;
      suggestions: string[];
    };
    lexicalResource: {
      feedback: string;
      score: string;
      suggestions: string[];
    };
    grammaticalRangeAndAccuracy: {
      feedback: string;
      score: string;
      suggestions: string[];
    };
    phraseByPhraseSuggestions: {
      feedback: string;
      sentenceIndex: number;
      startIndex: number;
      endIndex: number;
      suggestions: string[];
    }[];
  };
};
async function askAi(data: RequestBody) {
  const exampleResponse: ResponseFormat = {
    overallFeedback:
      "Overall feedback based on breakdownByCriterion and the target score.",
    estimatedBandScore:
      "Average score from breakdownByCriterion and rounded to nearest .5 or whole number.",
    breakdownByCriterion: {
      taskResponse: {
        feedback:
          "Feedback based on the task response, topic and the target score.",
        score: "Integer from 1 to 9",
        suggestions: [
          "Provide a list of details suggestion and example to reach the target score",
        ],
      },
      coherenceAndCohesion: {
        feedback:
          "Feedback based on the coherence, cohesion, topic and the target score.",
        score: "Integer from 1 to 9",
        suggestions: [
          "Provide a list of details suggestion and example to reach the target score",
        ],
      },
      lexicalResource: {
        feedback:
          "Feedback based on the lexical resource, topic and the target score.",
        score: "Integer from 1 to 9",
        suggestions: [
          "Provide a list of details suggestion and example to reach the target score",
        ],
      },
      grammaticalRangeAndAccuracy: {
        feedback:
          "Feedback based on the grammatical range, accuracy, topic and the target score.",
        score: "Integer from 1 to 9",
        suggestions: [
          "Provide a list of details suggestion and example to reach the target score",
        ],
      },
      phraseByPhraseSuggestions: [
        {
          feedback: "Some phrases need rewording for clarity and formality.",
          sentenceIndex: 2,
          startIndex: 5,
          endIndex: 12,
          suggestions: ["Provide better replacement"],
        },
      ],
    },
  };
  const prompt: string = `I am practicing writing for IELTS. I have to write a ${data.target} point essay about ${data.topic}. My work is ${data.work}. Please give me my feedback about my work based on the IELTS scoring criteria so that I can reach my target. Return in json string based on this example ${JSON.stringify(exampleResponse)}`;
  return await askGemini(prompt);
}

export async function POST(req: NextRequest) {
  const data: RequestBody = await req.json();
  if (data?.target && data?.topic && data?.work) {
    const answer = await askAi(data);
    const responseData: ResponseData = {
      answer: answer ?? "",
    };
    return NextResponse.json(
      {
        success: true,
        data: responseData,
      },
      {
        status: 200,
      },
    );
  } else {
    return NextResponse.json(
      {
        error: "Missing required fields: target, topic, work",
      },
      {
        status: 400,
      },
    );
  }
}
