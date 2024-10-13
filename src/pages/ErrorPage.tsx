import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import './ErrorPage.css'; 

const ErrorPage = () => {
  const error = useRouteError();
  
  let errorMessage = "An unexpected error occurred.";
  let errorType = "Unknown Error";

  if (isRouteErrorResponse(error)) {
    
    errorMessage = error.statusText;
    errorType = error.status >= 400 && error.status < 500 ? "Client-side Error" : "Server-side Error";
  }

  return (
    <div className="error-page">
      <img src="/Logo.png" alt="Error Logo" className="error-logo" />
      <h1>Oops!</h1>
      <p>{errorMessage}</p>
      <p>Error Type: {errorType}</p>
    </div>
  );
};

export default ErrorPage;
