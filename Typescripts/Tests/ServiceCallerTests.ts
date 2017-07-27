

import {ServiceCallerOptions} from "../ServiceCaller/ServiceCallerOptions";
import {ServiceCaller} from "../ServiceCaller/ServiceCaller";
import {HttpMethod} from "../ServiceCaller/HttpMethod"; 

class ServiceCallerTests{

    constructor(){
        ServiceCallerOptions.setDefaultSuccess((result) => {
            console.log("method executed succesfully");
            console.log("response object: "); 
            console.log(result);
        });
    } 

    public testGet(): void{
        new ServiceCaller("viacep.com.br/ws/01001000/json/").send();
    }

    public runTests(): void{
        this.testGet();
    } 
}

 new ServiceCallerTests().runTests();