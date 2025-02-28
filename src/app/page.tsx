"use client";

import { Divider } from "@mui/material";
import { useState } from "react";
import { UserInput } from "@/components/UserInput";
import { ResponseFormat } from "@/app/api/ielts/writing/route";
import { Result } from "@/components/Result";
import React from "react";

async function submit(
  target: number,
  topic: string,
  work: string,
): Promise<string> {
  const response = await fetch("api/ielts/writing", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ target, topic, work }),
  });

  const jsonData = await response.json();
  return jsonData.data.answer;
}

export default function Home() {
  const [result, setResult] = useState<ResponseFormat | null>(null);
  const [work, setWork] = useState<string>("");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <UserInput
        onSubmit={async (target, topic, work) => {
          setResult(null);
          setWork(work);
          const result1 = await submit(target, topic, work);
          try {
            setResult(JSON.parse(result1) as ResponseFormat);
          } catch {
            setResult({
              overallFeedback: "Your essay is not complete.",
            });
          }
        }}
      />
      <Divider></Divider>
      {result === null ? null : <Result work={work} answer={result} />}
    </div>
  );
}
