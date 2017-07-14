class Select2Extension{
    /**
     * Populate the designated select2 with jQuery data.
     * @param select2
     * @param data
     * @param idFieldName
     * @param nameFieldName
     */
    public static populateSelect2(select2: JQuery, data: any[], idFieldName: string
        , nameFieldName: string, selectedId?: any): JQuery {

        var arr = new Array();
        arr.push({ id: 0, text: "selecione" });
        for (var i = 0; i < data.length; i++) {
            arr.push({ id: data[i][idFieldName], text: data[i][nameFieldName] });
        }
        select2.select2({
            data: arr
        });

        if (selectedId != undefined) {
            select2.select2("val", selectedId);
        }

        return select2;
    }
}