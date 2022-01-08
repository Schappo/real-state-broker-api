export interface ErrorResponse {
  message: string | Array<{ [key: string]: string }>;
  error: string;
  statusCode: number;
}

export interface ErrorReponseData {
  message: string;
  statusCode: number;
}
