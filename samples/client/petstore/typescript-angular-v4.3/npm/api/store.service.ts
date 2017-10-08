/**
 * Swagger Petstore
 * This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams }               from '@angular/common/http';

import { Observable }                                        from 'rxjs/Observable';
import '../rxjs-operators';

import { Order } from '../model/order';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { CustomQueryEncoderHelper }                          from '../encoder';


@Injectable()
export class StoreService {

    protected basePath = 'http://petstore.swagger.io/v2';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Delete purchase order by ID
     * For valid response try integer IDs with value &lt; 1000. Anything above 1000 or nonintegers will generate API errors
     * @param orderId ID of the order that needs to be deleted
     */
    public deleteOrder(orderId: string): Observable<{}> {
        if (orderId === null || orderId === undefined) {
            throw new Error('Required parameter orderId was null or undefined when calling deleteOrder.');
        }

        let headers = this.defaultHeaders;

        return this.httpClient.delete<any>(`${this.basePath}/store/order/${encodeURIComponent(orderId)}`, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    }

    /**
     * Returns pet inventories by status
     * Returns a map of status codes to quantities
     */
    public getInventory(): Observable<{ [key: string]: number; }> {

        let headers = this.defaultHeaders;

        // authentication (api_key) required
        if (this.configuration.apiKeys["api_key"]) {
            headers = headers.set('api_key', this.configuration.apiKeys["api_key"]);
        }

        return this.httpClient.get<any>(`${this.basePath}/store/inventory`, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    }

    /**
     * Find purchase order by ID
     * For valid response try integer IDs with value &lt;&#x3D; 5 or &gt; 10. Other values will generated exceptions
     * @param orderId ID of pet that needs to be fetched
     */
    public getOrderById(orderId: number): Observable<Order> {
        if (orderId === null || orderId === undefined) {
            throw new Error('Required parameter orderId was null or undefined when calling getOrderById.');
        }

        let headers = this.defaultHeaders;

        return this.httpClient.get<any>(`${this.basePath}/store/order/${encodeURIComponent(orderId)}`, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    }

    /**
     * Place an order for a pet
     * 
     * @param body order placed for purchasing the pet
     */
    public placeOrder(body: Order): Observable<Order> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling placeOrder.');
        }

        let headers = this.defaultHeaders;

        return this.httpClient.post<any>(`${this.basePath}/store/order`, body, {
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    }

}