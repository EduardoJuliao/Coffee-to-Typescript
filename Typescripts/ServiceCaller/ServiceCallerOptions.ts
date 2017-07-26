class ServiceCallerOptions{
    private static defaultBeforeSend:  (jqXHR: JQueryXHR, settings: JQueryAjaxSettings) => any;
    private static defaultSuccess:  (data: any, textStatus: string, jqXHR: JQueryXHR) => any;
    private static defaultError: (jqXHR: JQueryXHR, textStatus: string, errorThrown: string) => any;
    private static defaultComplete:  (jqXHR: JQueryXHR, textStatus: string) => any;


/**
 * beforeSend handler of the call
 * 
 * @memberof ServiceCallerOptions
 */
    public beforeSend: (jqXHR: JQueryXHR, settings: JQueryAjaxSettings) => any;

    /**
     * Success handler of the call
     * 
     * @memberof ServiceCallerOptions
     */
    public success: (data: any, textStatus: string, jqXHR: JQueryXHR) => any;

    /**
     * Error handler of the call.
     * 
     * @memberof ServiceCallerOptions
     */
    public error: (jqXHR: JQueryXHR, textStatus: string, errorThrown: string) => any;

    /**
     * Action to be called at the end of the call
     * 
     * @memberof ServiceCallerOptions
     */
    public complete: (jqXHR: JQueryXHR, textStatus: string) => any;

    /**
     * The data sent to the server
     * 
     * @type {*}
     * @memberof ServiceCallerOptions
     */
    public data: any;

    /**
     * Tells if the calls has to made async or not
     * 
     * @type {boolean}
     * @memberof ServiceCallerOptions
     */
    public async: boolean;

    /**
     * Http Method
     * 
     * @type {string}
     * @memberof ServiceCallerOptions
     */
    public method: string;

    /**
     * More info about content types: https://www.freeformatter.com/mime-types-list.html
     * 
     * @type {string}
     * @memberof ServiceCallerOptions
     */
    public contentType: string; 

    constructor(){
        this.data = null;
        this.async = true;
        this.method = HttpMethod.GET;
        this.contentType = "application/json";
        
        this.success = ServiceCallerOptions.defaultSuccess;
        this.beforeSend = ServiceCallerOptions.defaultBeforeSend;
        this.complete = ServiceCallerOptions.defaultComplete;

        if(ServiceCallerOptions.defaultError != null){
            this.error = ServiceCallerOptions.defaultError;
        }else{
            this.error = (jqXHR: JQueryXHR, textStatus: string, errorThrown: string) => {
                if (jqXHR.responseJSON != null) {
                        toastr.error(jqXHR.responseJSON.ResponsePhrase);
                    } else {
                        toastr.error("Couldn't complete your request");
                    }
                    console.error(jqXHR);
            }
        }
    }

/**
 * Configure beforeSend for the instance, it overrides the default
 * 
 * @param {(jqXHR: JQueryXHR, settings: JQueryAjaxSettings) => any} beforeSend 
 * @returns {ServiceCallerOptions} 
 * @memberof ServiceCallerOptions
 */
    public setBeforeSend(beforeSend: (jqXHR: JQueryXHR, settings: JQueryAjaxSettings) => any ): ServiceCallerOptions{
        this.beforeSend = beforeSend;
        return this;
    }

/**
 * Configure success for the instance, it overrides the default
 * 
 * @param {(data: any, textStatus: string, jqXHR: JQueryXHR) => any} success 
 * @returns {ServiceCallerOptions} 
 * @memberof ServiceCallerOptions
 */
    public setSuccess(success: (data: any, textStatus: string, jqXHR: JQueryXHR) => any ): ServiceCallerOptions{
        this.success = success;
        return this;
    }


/**
 * Configure error for the instance, it overrides the default
 * 
 * @param {(jqXHR: JQueryXHR, textStatus: string, errorThrown: string)=> any} error 
 * @returns {ServiceCallerOptions} 
 * @memberof ServiceCallerOptions
 */
    public setError(error: (jqXHR: JQueryXHR, textStatus: string, errorThrown: string)=> any): ServiceCallerOptions{
        this.error = error;
        return this;
    }

/**
 * Configure complete for the instance, it overrides the default
 * 
 * @param {(jqXHR: JQueryXHR, textStatus: string) => any} complete 
 * @returns {ServiceCallerOptions} 
 * @memberof ServiceCallerOptions
 */
    public setComplete(complete:(jqXHR: JQueryXHR, textStatus: string) => any ): ServiceCallerOptions{
        this.complete = complete;
        return this;
    }

/**
 * Make the call synchronous
 * 
 * @returns {ServiceCallerOptions} 
 * @memberof ServiceCallerOptions
 */
    public makeSync():ServiceCallerOptions{
        this.async = true;
        return this;
    }

/**
 * Set the content type of the instance
 * 
 * @param {string} contentType 
 * @returns {ServiceCallerOptions} 
 * @memberof ServiceCallerOptions
 */
    public setContentType(contentType: string):ServiceCallerOptions{
        this.contentType = contentType;
        return this;
    }

/**
 * Set the instace data
 * 
 * @param {*} data 
 * @returns {ServiceCallerOptions} 
 * @memberof ServiceCallerOptions
 */
    public setData(data: any): ServiceCallerOptions{
        this.data = data;
        return this;
    }

    public setMethod(method: string): ServiceCallerOptions{
        this.method = method;
        return this;
    }


/**
 * Configure the default beforeSend action
 * Should be setted when page is created
 * @static
 * @param {(jqXHR: JQueryXHR, settings: JQueryAjaxSettings) => any} beforeSend 
 * @memberof ServiceCallerOptions
 */
    public static setDefaultBeforeSend(beforeSend: (jqXHR: JQueryXHR, settings: JQueryAjaxSettings) => any ):void{
        if(ServiceCallerOptions.defaultBeforeSend  == null){
            ServiceCallerOptions.defaultBeforeSend = beforeSend;
        }else {
            throw "defaultBeforeSend is already setted!";
        }
        
    }

/**
 * Configure the default success action
 * Should be setted when page is created
 * @static
 * @param {(data: any, textStatus: string, jqXHR: JQueryXHR) => any} success 
 * @memberof ServiceCallerOptions
 */
    public static setDefaultSuccess(success: (data: any, textStatus: string, jqXHR: JQueryXHR) => any ): void{
        if(ServiceCallerOptions.defaultSuccess  == null){
            ServiceCallerOptions.defaultSuccess = success;
        }else {
            throw "defaultSuccess is already setted!";
        }
    }

/**
 * Configure the default complete action
 * Should be setted when page is created
 * @static
 * @param {(jqXHR: JQueryXHR, textStatus: string) => any} complete 
 * @memberof ServiceCallerOptions
 */
    public static setDefaultComplete(complete: (jqXHR: JQueryXHR, textStatus: string) => any): void{
        if(ServiceCallerOptions.defaultComplete == null){
            ServiceCallerOptions.defaultComplete = complete;
        }else{
            throw "defaultComplete is already setted!";
        }
    }

/**
 * Configure the default error action
 * Should be setted when page is created
 * @static
 * @param {(jqXHR: JQueryXHR, textStatus: string, errorThrown: string) => any} error 
 * @memberof ServiceCallerOptions
 */
    public static setDefaultError(error: (jqXHR: JQueryXHR, textStatus: string, errorThrown: string) => any):void{
        if(ServiceCallerOptions.defaultError == null){
            ServiceCallerOptions.defaultError = error;
        }else{
            throw "defaultError is already setted!";
        }
    }
} 