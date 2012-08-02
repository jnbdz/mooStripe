/*
---
description: Simple class to help Mootools developers intergrate Stripe payment service (API) on their website.

authors:
  - Jean-Nicolas Boulay (http://jean-nicolas.com/)

license:
  - MIT-style license

requires:
 - core/1.4:   '*'
 - more:/Form.Validator

provides:
  - mooStripe
...
*/

var mooStripe = new Class({

    Implements: [Options, Events],

    options: {/*
                onStripeLibLoaded: function(){},
                onStripeError: function(response.error.message, status){},
                onCreatedToken: function(status, response){},*/
                setCreditCardFormValidators: true,
                requestJSON: true,
                requestMethod: 'post',
                requestData: {},
                requestOptions: {}
    },

    initialize: function(element, stripePublishableKey, stripeCreateTokenFields, options) {

        this.form = document.id(element);
        this.stripeCreateTokenFields = stripeCreateTokenFields;
        this.setOptions(options || {});
        
        this.requestOptions = this.options.requestOptions;
        this.requestData = this.options.requestData;
        this.requestMethod = this.options.requestMethod;

        this.submitButton = $$('#' + element + ' button[type="submit"], #' + element + ' input[type="submit"]')[0];

        if (!Object.keys(this.requestOptions).contains('url')) {
            Object.merge(this.requestOptions, {url: this.form.get('action')});
        }

        this.validateKey(stripePublishableKey);

        Stripe.setPublishableKey(stripePublishableKey);
        this.submitButton.addEvent('click', this.createToken.bind(this));
        
        if (this.options.setCreditCardFormValidators) {
            this.setCreditCardFormValidators();
        }
        
    },
    
    createToken: function(e) {

        e.preventDefault();

        var fields = Object.map(this.stripeCreateTokenFields, function(item){
            return document.id(item).get('value');
        });

        var result = Function.attempt(function(){
                return Stripe.createToken(fields, this.responseHandler.bind(this));
            }.bind(this));
            
        if(typeOf(result) == 'null'){throw new Error('You did not inserted the right information in the "stripeCreateTokenFields".');}

    },
    
    responseHandler: function(status, response) {
    
        if (response.error) {

            this.submitButton.set('disabled', '');
            this.fireEvent('StripeError', [response.error.message, status]);
            return;
        
        }
        
        this.fireEvent('createdToken', [status, response]);

        Object.merge(this.requestData, {'token': response['id']});

        if (this.options.requestJSON) {

            new Request.JSON(this.requestOptions)[this.requestMethod](this.requestData);
            return;
            
        }
        
        new Request(this.requestOptions)[this.requestMethod](this.requestData);

    },
    
    setCreditCardFormValidators: function() {

        Form.Validator.addAllThese([
            ['IsCreditCardNumber', {
                    errorMsg: 'This is not a credit card number.',
                    test: function(field) {
                        return this.validateCardNumber(field.get('value'));
                    }.bind(this)
                }],
            ['IsCreditCardCVCNumber', {
                    errorMsg: 'This is not a CVC number.',
                    test: function(field) {
                        return this.validateCVC(field.get('value'));
                    }.bind(this)
                }],
            ['IsCreditCardExpiry', {
                    errorMsg: 'The month or the year or both expery date is/are wrong.',
                    test: function(field, props) {
                        return this.validateExpiry(document.id(props.creditCardExpiryMonth).get('value'), field.get('value'));
                    }.bind(this)
                }]
        ]);
    
    },
    
    validateKey: function(key) {
        if (!key.test(/^pk_/) || !(key.length > 10)) {
            throw new Error('You need to use a Stripe publishable key.\nFor more info, see https://stripe.com/docs/stripe.js');
        }
    },
    
    validateCardNumber: function(cardNum) {
        return Stripe.validateCardNumber(cardNum);
    },
    
    validateExpiry: function(month, year) {
        return Stripe.validateExpiry(month, year);
    },
    
    validateCVC: function(cvc) {
        return Stripe.validateCVC(cvc);
    },
    
    cardType: function(type) {
        return Stripe.cardType(type);
    },
    
    getToken: function(token, callback) {
        return Stripe.getToken(token, callback(status, response));
    }
    
});