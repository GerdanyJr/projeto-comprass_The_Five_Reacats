export function getErrorMessageByCode(httpCode: number): string {
    switch(httpCode) {
      case 401:
        return "Your email or password is incorrect";
      case 403:
        return "Forbidden. You do not have permission to access this resource.";
      default:
        return "Something happened, try again later";
    }
  }