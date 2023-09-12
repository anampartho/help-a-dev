"use client";
import React, { useEffect, useState } from "react";
import { Textarea, Checkbox, Label, TextInput } from "flowbite-react";
import Button from "@/components/Button";
import { useMutation } from "react-query";
import { fetchPassword } from "@/helpers/api";
import { toast } from "react-toastify";

const PasswordGenerator = () => {
  const [selectedOptions, setSelectedOptions] = useState(["lcaz"]);
  const [passwordLength, setPasswordLength] = useState(6);
  const [generatedPassword, setGeneratedPassword] = useState("");

  const { mutate, isLoading } = useMutation(fetchPassword, {
    onSuccess: ({ data }) => {
      setGeneratedPassword(data.password);
    },
    onError: () => {
      toast.error("There was an error generating the password!");
    },
  });

  function handleOptionChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { id, checked } = e.target;
    const selectedOptoptionsCopy = [...selectedOptions];

    if (checked) {
      setSelectedOptions([...selectedOptoptionsCopy, id]);
    } else {
      const index = selectedOptions.findIndex((item) => item === id);
      selectedOptoptionsCopy.splice(index, 1);
      setSelectedOptions(selectedOptoptionsCopy);
    }

    if (!selectedOptoptionsCopy.length) {
      setSelectedOptions(["lcaz"]);
    }
  }

  async function handlePasswordGeneration() {
    let lenght = passwordLength;
    let queryParams = "";

    if (lenght < 6) {
      length = 6;
    }

    if (passwordLength > 128) {
      lenght = 128;
    }

    setPasswordLength(lenght);

    queryParams += `length=${lenght}&${selectedOptions.join("&")}`;

    mutate(`/api/random?${queryParams}`);
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex col-span-1 justify-start rounded h-40 dark:bg-gray-800">
          <div className="flex flex-col items-start gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Label htmlFor="length">
                Password Length:
                <br /> 6 - 128{" "}
              </Label>
              <TextInput
                id="length"
                type="number"
                value={passwordLength}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const value = Number(e.target.value);
                  setPasswordLength(value);
                }}
              />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="lcaz"
                checked={selectedOptions.includes("lcaz")}
                onChange={handleOptionChange}
              />
              <Label htmlFor="lcaz">a-z</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="ucaz"
                onChange={handleOptionChange}
                checked={selectedOptions.includes("ucaz")}
              />
              <Label htmlFor="ucaz">A-Z</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="nums"
                onChange={handleOptionChange}
                checked={selectedOptions.includes("nums")}
              />
              <Label htmlFor="nums">0-9</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="sc"
                onChange={handleOptionChange}
                checked={selectedOptions.includes("sc")}
              />
              <Label htmlFor="sc">!@#$%^&*</Label>
            </div>
            <div className="flex items-center gap-4">
              <Button
                onClick={handlePasswordGeneration}
                loading={isLoading}
                disabled={isLoading}
              >
                Generate
              </Button>
            </div>
          </div>
        </div>

        <div className="flex col-span-2 justify-center rounded h-40 dark:bg-gray-800">
          <Textarea
            id="generated-password"
            rows={4}
            readOnly
            value={generatedPassword}
          ></Textarea>
        </div>
      </div>
    </>
  );
};

export default PasswordGenerator;
