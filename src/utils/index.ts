import { toast } from "react-toastify";

export const generatePassword = (
  includeUppercase: boolean,
  includeLowercase: boolean,
  includeSpecial: boolean,
  length: number,
  setPassword: React.Dispatch<React.SetStateAction<string>>
) => {
  let chars = "";
  if (includeUppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeLowercase) chars += "abcdefghijklmnopqrstuvwxyz";
  if (includeSpecial) chars += "!@#$%^&*()_+[]{}|;:,.<>?";
  if (chars.length === 0) {
    setPassword("");
    return;
  }
  const generated = Array.from({ length }, () =>
    chars.charAt(Math.floor(Math.random() * chars.length))
  ).join("");
  setPassword(generated);
};

export const copyToClipboard = (password: string) => {
  navigator.clipboard.writeText(password).then(
    () => successToast("Password copied to clipboard!"),
    () => errorToast("Failed to copy password.")
  );
};

export const errorToast = (msg: string) => {
  toast.error(msg);
};
export const successToast = (msg: string) => {
  toast.success(msg);
};
export const warningToast = (msg: string) => {
  toast.warning(msg);
};
