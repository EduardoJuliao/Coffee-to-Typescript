class StringHelper{
    public stringIsNullOrEmpty(value: string):boolean {
        return value == null || value == "" || (value.replace(/\s/g, '').length == 0);
    }
}