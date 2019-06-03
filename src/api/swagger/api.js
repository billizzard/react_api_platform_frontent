/*jshint esversion: 6 */
/*global fetch, btoa */
import Q from 'q';
/**
 * 
 * @class Api
 * @param {(string|object)} [domainOrOptions] - The project domain or options object. If object, see the object's optional properties.
 * @param {string} [domainOrOptions.domain] - The project domain
 * @param {object} [domainOrOptions.token] - auth token - object with value property and optional headerOrQueryName and isQuery properties
 */
let Api = (function() {
    'use strict';

    function Api(options) {
        let domain = (typeof options === 'object') ? options.domain : options;
        this.domain = domain ? domain : '';
        if (this.domain.length === 0) {
            throw new Error('Domain parameter must be specified as a string.');
        }
        this.apiKey = (typeof options === 'object') ? (options.apiKey ? options.apiKey : {}) : {};
    }

    function serializeQueryParams(parameters) {
        let str = [];
        for (let p in parameters) {
            if (parameters.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + '=' + encodeURIComponent(parameters[p]));
            }
        }
        return str.join('&');
    }

    function mergeQueryParams(parameters, queryParameters) {
        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                .forEach(function(parameterName) {
                    let parameter = parameters.$queryParameters[parameterName];
                    queryParameters[parameterName] = parameter;
                });
        }
        return queryParameters;
    }

    /**
     * HTTP Request
     * @method
     * @name Api#request
     * @param {string} method - http method
     * @param {string} url - url to do request
     * @param {object} parameters
     * @param {object} body - body parameters / object
     * @param {object} headers - header parameters
     * @param {object} queryParameters - querystring parameters
     * @param {object} form - form data object
     * @param {object} deferred - promise object
     */
    Api.prototype.request = function(method, url, parameters, body, headers, queryParameters, form, deferred) {
        const queryParams = queryParameters && Object.keys(queryParameters).length ? serializeQueryParams(queryParameters) : null;
        const urlWithParams = url + (queryParams ? '?' + queryParams : '');

        if (body && !Object.keys(body).length) {
            body = undefined;
        }

        fetch(urlWithParams, {
            method,
            headers,
            body: JSON.stringify(body)
        }).then((response) => {
            return response.json();
        }).then((body) => {
            deferred.resolve(body);
        }).catch((error) => {
            deferred.reject(error);
        });
    };

    /**
     * Set Api Key
     * @method
     * @name Api#setApiKey
     * @param {string} value - apiKey's value
     * @param {string} headerOrQueryName - the header or query name to send the apiKey at
     * @param {boolean} isQuery - true if send the apiKey as query param, otherwise, send as header param
     */
    Api.prototype.setApiKey = function(value, headerOrQueryName, isQuery) {
        this.apiKey.value = value;
        this.apiKey.headerOrQueryName = headerOrQueryName;
        this.apiKey.isQuery = isQuery;
    };
    /**
     * Set Auth headers
     * @method
     * @name Api#setAuthHeaders
     * @param {object} headerParams - headers object
     */
    Api.prototype.setAuthHeaders = function(headerParams) {
        let headers = headerParams ? headerParams : {};
        if (!this.apiKey.isQuery && this.apiKey.headerOrQueryName) {
            headers[this.apiKey.headerOrQueryName] = this.apiKey.value;
        }
        return headers;
    };

    /**
     * Retrieves a Product resource.
     * @method
     * @name Api#getProductItem
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.id - 
     */
    Api.prototype.getProductItem = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        let deferred = Q.defer();
        let domain = this.domain,
            path = '/api/products/{id}';
        let body = {},
            queryParameters = {},
            headers = {},
            form = {};

        headers = this.setAuthHeaders(headers);
        headers['Accept'] = ['application/ld+json, application/json, text/html'];

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Retrieves the collection of Message resources.
     * @method
     * @name Api#getMessageCollection
     * @param {object} parameters - method options and parameters
     * @param {integer} parameters.page - The collection page number
     */
    Api.prototype.getMessageCollection = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        let deferred = Q.defer();
        let domain = this.domain,
            path = '/api/profile/messages';
        let body = {},
            queryParameters = {},
            headers = {},
            form = {};

        headers = this.setAuthHeaders(headers);
        headers['Accept'] = ['application/ld+json, application/json, text/html'];

        if (parameters['page'] !== undefined) {
            queryParameters['page'] = parameters['page'];
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Retrieves a Message resource.
     * @method
     * @name Api#getMessageItem
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.id - 
     */
    Api.prototype.getMessageItem = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        let deferred = Q.defer();
        let domain = this.domain,
            path = '/api/profile/messages/{id}';
        let body = {},
            queryParameters = {},
            headers = {},
            form = {};

        headers = this.setAuthHeaders(headers);
        headers['Accept'] = ['application/ld+json, application/json, text/html'];

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Removes the Message resource.
     * @method
     * @name Api#deleteMessageItem
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.id - 
     */
    Api.prototype.deleteMessageItem = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        let deferred = Q.defer();
        let domain = this.domain,
            path = '/api/profile/messages/{id}';
        let body = {},
            queryParameters = {},
            headers = {},
            form = {};

        headers = this.setAuthHeaders(headers);

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Creates a ProductWatcher resource.
     * @method
     * @name Api#postProductWatcherCollection
     * @param {object} parameters - method options and parameters
     * @param {} parameters.productWatcher - The new ProductWatcher resource
     */
    Api.prototype.postProductWatcherCollection = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        let deferred = Q.defer();
        let domain = this.domain,
            path = '/api/profile/product_watchers';
        let body = {},
            queryParameters = {},
            headers = {},
            form = {};

        headers = this.setAuthHeaders(headers);
        headers['Accept'] = ['application/ld+json, application/json, text/html'];
        headers['Content-Type'] = ['application/ld+json,application/json,text/html'];

        if (parameters['productWatcher'] !== undefined) {
            body = parameters['productWatcher'];
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Retrieves the collection of ProductWatcher resources.
     * @method
     * @name Api#getProductWatcherCollection
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.orderCreatedAt - 
     * @param {string} parameters.orderTitle - 
     * @param {string} parameters.title - 
     * @param {integer} parameters.page - The collection page number
     */
    Api.prototype.getProductWatcherCollection = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        let deferred = Q.defer();
        let domain = this.domain,
            path = '/api/profile/product_watchers';
        let body = {},
            queryParameters = {},
            headers = {},
            form = {};

        headers = this.setAuthHeaders(headers);
        headers['Accept'] = ['application/ld+json, application/json, text/html'];

        if (parameters['orderCreatedAt'] !== undefined) {
            queryParameters['order[createdAt]'] = parameters['orderCreatedAt'];
        }

        if (parameters['orderTitle'] !== undefined) {
            queryParameters['order[title]'] = parameters['orderTitle'];
        }

        if (parameters['title'] !== undefined) {
            queryParameters['title'] = parameters['title'];
        }

        if (parameters['page'] !== undefined) {
            queryParameters['page'] = parameters['page'];
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Retrieves a ProductWatcher resource.
     * @method
     * @name Api#getProductWatcherItem
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.id - 
     */
    Api.prototype.getProductWatcherItem = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        let deferred = Q.defer();
        let domain = this.domain,
            path = '/api/profile/product_watchers/{id}';
        let body = {},
            queryParameters = {},
            headers = {},
            form = {};

        headers = this.setAuthHeaders(headers);
        headers['Accept'] = ['application/ld+json, application/json, text/html'];

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Removes the ProductWatcher resource.
     * @method
     * @name Api#deleteProductWatcherItem
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.id - 
     */
    Api.prototype.deleteProductWatcherItem = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        let deferred = Q.defer();
        let domain = this.domain,
            path = '/api/profile/product_watchers/{id}';
        let body = {},
            queryParameters = {},
            headers = {},
            form = {};

        headers = this.setAuthHeaders(headers);

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Replaces the ProductWatcher resource.
     * @method
     * @name Api#putProductWatcherItem
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.id - 
     * @param {} parameters.productWatcher - The updated ProductWatcher resource
     */
    Api.prototype.putProductWatcherItem = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        let deferred = Q.defer();
        let domain = this.domain,
            path = '/api/profile/product_watchers/{id}';
        let body = {},
            queryParameters = {},
            headers = {},
            form = {};

        headers = this.setAuthHeaders(headers);
        headers['Accept'] = ['application/ld+json, application/json, text/html'];
        headers['Content-Type'] = ['application/ld+json,application/json,text/html'];

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        if (parameters['productWatcher'] !== undefined) {
            body = parameters['productWatcher'];
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Retrieves a Product resource.
     * @method
     * @name Api#api_product_watchers_product_get_subresource
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.id - 
     */
    Api.prototype.api_product_watchers_product_get_subresource = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        let deferred = Q.defer();
        let domain = this.domain,
            path = '/api/profile/product_watchers/{id}/product';
        let body = {},
            queryParameters = {},
            headers = {},
            form = {};

        headers = this.setAuthHeaders(headers);
        headers['Accept'] = ['application/ld+json, application/json, text/html'];

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Creates a User resource.
     * @method
     * @name Api#postUserCollection
     * @param {object} parameters - method options and parameters
     * @param {} parameters.user - The new User resource
     */
    Api.prototype.postUserCollection = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        let deferred = Q.defer();
        let domain = this.domain,
            path = '/api/users';
        let body = {},
            queryParameters = {},
            headers = {},
            form = {};

        headers = this.setAuthHeaders(headers);
        headers['Accept'] = ['application/ld+json, application/json, text/html'];
        headers['Content-Type'] = ['application/ld+json,application/json,text/html'];

        if (parameters['user'] !== undefined) {
            body = parameters['user'];
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };
    /**
     * Retrieves a User resource.
     * @method
     * @name Api#getUserItem
     * @param {object} parameters - method options and parameters
     * @param {string} parameters.id - 
     */
    Api.prototype.getUserItem = function(parameters) {
        if (parameters === undefined) {
            parameters = {};
        }
        let deferred = Q.defer();
        let domain = this.domain,
            path = '/api/users/{id}';
        let body = {},
            queryParameters = {},
            headers = {},
            form = {};

        headers = this.setAuthHeaders(headers);
        headers['Accept'] = ['application/ld+json, application/json, text/html'];

        path = path.replace('{id}', parameters['id']);

        if (parameters['id'] === undefined) {
            deferred.reject(new Error('Missing required  parameter: id'));
            return deferred.promise;
        }

        queryParameters = mergeQueryParams(parameters, queryParameters);

        this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

        return deferred.promise;
    };

    return Api;
})();

exports.Api = Api;