class HttpMethod{
    /**
     * The POST method is used to submit an entity to the specified resource, often causing a change in state or side effects on the server
     * 
     * @static
     * @type {string}
     * @memberof HttpMethod
     */
    public static readonly POST: string = "POST";

    /**
     * The PATCH method is used to apply partial modifications to a resource.
     * 
     * @static
     * @type {string}
     * @memberof HttpMethod
     */
    public static readonly PATCH: string = "PATCH";

    /**
     * The TRACE method performs a message loop-back test along the path to the target resource.
     * 
     * @static
     * @type {string}
     * @memberof HttpMethod
     */
    public static readonly TRACE: string = "TRACE";

    /**
     * The OPTIONS method is used to describe the communication options for the target resource.
     * 
     * @static
     * @type {string}
     * @memberof HttpMethod
     */
    public static readonly OPTIONS: string = "OPTIONS";

    /**
     * The CONNECT method establishes a tunnel to the server identified by the target resource.
     * 
     * @static
     * @type {string}
     * @memberof HttpMethod
     */
    public static readonly CONNECT: string = "CONNECT";

    /**
     * The DELETE method deletes the specified resource.
     * 
     * @static
     * @type {string}
     * @memberof HttpMethod
     */
    public static readonly DELETE: string = "DELETE";

    /**
     * The PUT method replaces all current representations of the target resource with the request payload.
     * 
     * @static
     * @type {string}
     * @memberof HttpMethod
     */
    public static readonly PUT: string = "PUT";
    
    /**
     * The HEAD method asks for a response identical to that of a GET request, but without the response body.
     * 
     * @static
     * @type {string}
     * @memberof HttpMethod
     */
    public static readonly HEAD: string = "HEAD";

    /**
     * The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.
     * 
     * @static
     * @type {string}
     * @memberof HttpMethod
     */
    public static readonly GET: string = "GET";
}