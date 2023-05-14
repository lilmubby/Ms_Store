import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorBoundary = () => {
  const error = useRouteError()

  console.log(error);
  let title = `An Error Occured`;
  let message = `An Error Occured`;

  if (error.status === 500) {
    message = error.data.message;
  };

  if (error.status === 404) {
    title = `Not found!`
    message = ` Page could not be found`;
  }

  return (
    <div>
      <h1>
        {title}
      </h1>
      <p>
        {`Error ${error.status} `}
      </p>
      <p>
        {message}
      </p>
      {/* {error.error.message} */}
    </div>
  )
}

export default ErrorBoundary