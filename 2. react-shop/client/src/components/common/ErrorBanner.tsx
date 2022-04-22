import { FC } from "react";

interface ErrorBannerProps {
  message: string;
}

const ErrorBanner: FC<ErrorBannerProps> = ({ message }) => {
  return (
    <div
      data-testid="error-banner"
      style={{ backgroundColor: "red", color: "white" }}
    >
      {message}
    </div>
  );
};

export default ErrorBanner;
