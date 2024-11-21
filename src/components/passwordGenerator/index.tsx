import React, { useState, FC } from "react";
import Button from "@/components/formControls/button";
import CheckBox from "@/components/formControls/checkbox";
import Form from "@/components/formControls/form";
import FormGroup from "@/components/formControls/group";
import FormControl from "@/components/formControls/input";
import FormLabel from "@/components/formControls/label";
import InputGroup from "@/components/formControls/inputGroup";
import Heading from "@/components/formControls/heading";
import { generatePassword, copyToClipboard } from "@/utils";

const PasswordGenerator: FC = () => {
  const [length, setLength] = useState<number>(12);
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(true);
  const [includeSpecial, setIncludeSpecial] = useState<boolean>(true);
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="container mt-5">
      <Heading
        className="text-center mb-4"
        text="Password Generator"
        variant="h1"
      />
      <Form>
        <FormGroup className="mb-3">
          <FormLabel>Password Length</FormLabel>
          <FormControl
            type="number"
            value={length}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setLength(Number(e.target.value))
            }
            min={1}
            max={50}
          />
        </FormGroup>

        <CheckBox
          type="checkbox"
          label="Include Uppercase Letters"
          checked={includeUppercase}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setIncludeUppercase(e.target.checked)
          }
          className="mb-2"
        />

        <CheckBox
          label="Include Lowercase Letters"
          checked={includeLowercase}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setIncludeLowercase(e.target.checked)
          }
          className="mb-2"
        />

        <CheckBox
          label="Include Special Characters"
          checked={includeSpecial}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setIncludeSpecial(e.target.checked)
          }
          className="mb-4"
        />

        <Button
          title="Generate Password"
          variant="primary"
          onClick={() =>
            generatePassword(
              includeUppercase,
              includeLowercase,
              includeSpecial,
              length,
              setPassword
            )
          }
          className="mb-3"
        />
      </Form>

      {password && (
        <>
          <InputGroup className="mb-3">
            <FormControl
              type={showPassword ? "text" : "password"}
              value={password}
              readOnly
            />
            <Button
              variant="outline-secondary"
              title={showPassword ? "Hide" : "Show"}
              onClick={() => setShowPassword(!showPassword)}
            />
            <Button title="Copy" onClick={() => copyToClipboard(password)} />
          </InputGroup>
        </>
      )}
    </div>
  );
};

export default PasswordGenerator;
