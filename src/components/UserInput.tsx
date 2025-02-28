import { Select } from "@/components/atom/Select";
import { Button, TextField } from "@mui/material";
import { useRef, useState } from "react";
import React from "react";

export function UserInput({
  onSubmit,
}: {
  onSubmit: (target: number, topic: string, work: string) => Promise<void>;
}) {
  const [target, setTarget] = useState<number>(1);
  const topic = useRef<string>("");
  const work = useRef<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Select
        value={target.toString()}
        onChange={(value) => setTarget(Number(value))}
        label={"Target"}
        items={Array.from({ length: 9 }, (_, i) => ({
          label: (i + 1).toString(),
          value: (i + 1).toString(),
        }))}
        id={"target"}
      ></Select>
      <TextField
        type={"text"}
        multiline={true}
        label={"Topic"}
        rows={4}
        onChange={(event) => {
          topic.current = event.target.value;
        }}
        fullWidth={true}
      ></TextField>
      <TextField
        type={"text"}
        multiline={true}
        label={"Work"}
        rows={20}
        onChange={(event) => {
          work.current = event.target.value;
        }}
        fullWidth={true}
      ></TextField>
      <Button
        variant={"contained"}
        loading={isLoading}
        disabled={isLoading}
        onClick={() => {
          setLoading(true);
          onSubmit(target, topic.current, work.current).finally(() => {
            setLoading(false);
          });
        }}
      >
        Submit to score
      </Button>
    </div>
  );
}
