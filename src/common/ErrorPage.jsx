import { useEffect } from 'react';
import './ErrorPage.css';

export const ErrorPage = () => {
  useEffect(() => {
    document.title = "Page not found";
  }, []);

  return (
    <>
      <div className="c-page-layout">
        <h1>Error 404</h1>
        <br />
        There is no page here! Did you possibly mistype the URL?
      </div>
    </>
  )
}

export default ErrorPage;
