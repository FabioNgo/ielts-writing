import { Typography } from "@mui/material";
import { ResponseFormat } from "@/app/api/ielts/writing/route";

function Breakdown({
  suggestions,
  feedback,
  score,
  title,
}: {
  title: string;
  feedback: string;
  score: string;
  suggestions: string[];
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Typography variant={"h5"} fontWeight={"bold"}>
        {title}:
      </Typography>
      <Typography variant={"h5"} fontWeight={"bold"}>
        Score: {score}
      </Typography>
      <Typography variant={"h5"} fontWeight={"bold"}>
        Feedback:
      </Typography>
      <Typography>{feedback} </Typography>
      <Typography variant={"h5"} fontWeight={"bold"}>
        Suggestion:
      </Typography>
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={`${title}-suggestion-${index}`}>
            <Typography variant={"body1"}>{suggestion}</Typography>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Result({
  work,
  answer,
}: {
  work: string;
  answer: ResponseFormat;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ border: "1px solid black", padding: 16 }}>
        <Typography>{work}</Typography>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <Typography variant={"h2"} fontWeight={"bold"}>
          Review:
        </Typography>
        <Typography variant={"h3"} fontWeight={"bold"}>
          Overall Feedback:
        </Typography>
        <Typography>{answer.overallFeedback}</Typography>
        <Typography variant={"h4"} fontWeight={"bold"}>
          Estimated Score: {answer.estimatedBandScore}
        </Typography>
        <Typography variant={"h4"} fontWeight={"bold"}>
          Breakdown
        </Typography>
        {answer.breakdownByCriterion && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Breakdown
              title={"Task Response"}
              feedback={answer.breakdownByCriterion.taskResponse.feedback}
              score={answer.breakdownByCriterion.taskResponse.score}
              suggestions={answer.breakdownByCriterion.taskResponse.suggestions}
            />
            <Breakdown
              title={"Coherence And Cohesion"}
              feedback={
                answer.breakdownByCriterion.coherenceAndCohesion.feedback
              }
              score={answer.breakdownByCriterion.coherenceAndCohesion.score}
              suggestions={
                answer.breakdownByCriterion.coherenceAndCohesion.suggestions
              }
            />
            <Breakdown
              title={"Lexical Resource"}
              feedback={answer.breakdownByCriterion.lexicalResource.feedback}
              score={answer.breakdownByCriterion.lexicalResource.score}
              suggestions={
                answer.breakdownByCriterion.lexicalResource.suggestions
              }
            />
            <Breakdown
              title={"Grammatical Range And Accuracy"}
              feedback={
                answer.breakdownByCriterion.grammaticalRangeAndAccuracy.feedback
              }
              score={
                answer.breakdownByCriterion.grammaticalRangeAndAccuracy.score
              }
              suggestions={
                answer.breakdownByCriterion.grammaticalRangeAndAccuracy
                  .suggestions
              }
            />
          </div>
        )}
      </div>
    </div>
  );
}
