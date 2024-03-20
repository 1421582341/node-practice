enum commonErrors {
  resourceNotFound,
  otherError,
}

enum commonHTTPErrors {
  notFound = 404,
}

class appError extends Error {
  errName: commonErrors;
  httpCode: commonHTTPErrors;
  description: string;
  isOperational: boolean; // 用于区分操作型错误和程序型错误

  constructor (
    name: commonErrors,
    httpCode: commonHTTPErrors,
    description: string,
    isOperational: boolean
  ) {
    super();
    this.errName = name;
    this.httpCode = httpCode;
    this.description = description;
    this.isOperational = isOperational;
  }
}