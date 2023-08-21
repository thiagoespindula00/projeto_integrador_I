import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Eita!</h1>
      <p>Um erro inesperado aconteceu.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
