abstract class Validator<T> {
    abstract validate(object: T):boolean;

    protected throwError(message: string): void{
        toastr.error(message);
        throw message;
    }
}