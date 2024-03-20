export type ErrorType = {
    message: string
    error: string
    statusCode: number
}

export class ErrorResponse  {
    public message: string
    public error: string
    public statusCode: number
    
    constructor(error:ErrorType) {
        this.message = error.message;
        this.error = error.error;
        this.statusCode = error.statusCode;
        Object.assign(this)
    }
}