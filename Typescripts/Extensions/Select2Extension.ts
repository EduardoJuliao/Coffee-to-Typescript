import * as Enumerable from "linq";

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
         
        select2.empty();
         
        var isFirst = true;
        Enumerable.from(data)
            .forEach((item:any) => {
                if(isFirst){
                    if (select2.attr("multiple") == undefined) {
                        select2.append(`<option value="0">Please, select</option>`);
                    }
                    isFirst = false;
                }
                var id = item[idFieldName];
                var text = item[nameFieldName];
                select2.append(`<option value="${id}">${text}</option>`);
            });
         
        if (selectedId != undefined) {
            select2.select2("val", selectedId);
        } 
        return select2;
    }

    /**
     * Creates a select2 if it can by a selector.
     * @param selectId
     */
    public static generateSelect2(selector: string, options?: Select2Options): JQuery {
        var select = $(`${selector}`);
        if (select.length == 0) {
            throw "Couldn't find the control."
        }
        if (options != null) {
            select.select2(options);
        } else {
            select.select2();
        } 
        return select;
    }
}