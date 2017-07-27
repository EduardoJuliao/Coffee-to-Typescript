
import {ServiceCallerOptions} from "./ServiceCallerOptions";
import {HttpMethod} from "./HttpMethod";

export {ServiceCaller}
class ServiceCaller{
    
    private static baseUrl: string;
    private action: string;

    constructor(url: string){
        
    }

    private static resolveUrl(action: string, useBase: boolean = true): string {
        if(useBase && ServiceCaller.baseUrl == null){
            throw "base url is not setted!";
        }
        if(useBase){
            var url: string = ServiceCaller.baseUrl;
            if (!(url.indexOf('/', this.length - '/'.length) !== -1))
                url = url + "/"; 
            return `${url}${action}`;
        }else{
            return action;
        }
        
    }

    /**
     * Set service base Url, can only be setted once.
     * 
     * @static
     * @param {string} baseUrl 
     * @memberof ServiceCaller
     */
    public static setBaseUrl(baseUrl: string): void{
        if(ServiceCaller.baseUrl == null){
            ServiceCaller.baseUrl = baseUrl;
        }else{
            throw "Base Url already setted";
        }
    }

    public send(options?: ServiceCallerOptions): void {

        if(options == null){
            options = new ServiceCallerOptions();
        }
        $.ajax({
            url: this.action,
            async: options.async,
            beforeSend: options.beforeSend,
            success: options.success,
            error: options.error,
            complete: options.complete,
            method: options.method,
            contentType: options.contentType,
            data: options.method != HttpMethod.GET ? JSON.stringify(options.data) : options.data
        });
    }

    public getResultSync<T>(options: ServiceCallerOptions): T{
         var result = <T>{};

         $.ajax({
            url: this.action,
            async: false,
            beforeSend: options.beforeSend,
            success: (data: T, textStatus: string, jqXHR: JQueryXHR) => {
                result = data;
                if (options.success != undefined) {
                    options.success(data, textStatus, jqXHR);
                }
            },
            complete: options.complete,
            error: options.error,
            method: options.method,
            contentType: options.contentType,
            data: options.data
        });

        return result;
    }
}