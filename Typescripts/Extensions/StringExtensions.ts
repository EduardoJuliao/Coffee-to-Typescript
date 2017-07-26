class StringExtensions{
    public static StringIsNullOrEmpty(value: string) {
        return value == null || value == "" || (value.replace(/\s/g, '').length == 0);
    }

    public static StartsWith(source: string, value: string): boolean {
        var position = position || 0;
        return source.indexOf(value, position) === position;
    }
}