mooStripe
===========

Simple class to help Mootools developers intergrate Stripe payment service (API) on their website.

![Screenshot](https://github.com/jnbdz/mooStripe/raw/master/stripe_logo.png)

How to use
----------

You just need to call mooStripe() class.

###Syntax:

    var mStripe = new mooStripe(form, stripePublishableKey, stripeCreateTokenFields, [options]);
    
###WARNING:

Do not use the name Stripe or mooStripe to name your variable.

###Implements:

[Events](http://mootools.net/docs/core/Class/Class.Extras#Events), [Options](http://mootools.net/docs/core/Class/Class.Extras#Options)

###Arguments:

1. form - (string) The id of the form.
2. stripePublishableKey - (string) Stripe publishable key. To get your publishable key go to your [Stripe account](https://manage.stripe.com/#account/apikeys).
3. stripeCreateTokenFields - (object) [](https://stripe.com/docs/stripe.js#createToken)

###Options:

* setCreditCardFormValidators - (bool) The default is true. This indicates if the class should add new validators to [Mootools form validator](http://mootools.net/docs/more/Forms/Form.Validator).
* requestJSON - (bool) The default is true. This is to determine if you will be using the [JSON request method](http://mootools.net/docs/core/Request/Request.JSON).
* requestMethod (string) The default is post. You can get a full list of all the request methods from [Mootools docs](http://mootools.net/docs/core/Request/Request#Request:send-aliases).
* requestData (object) The default is an empty object. The token is added by default to the request object later in the script. With this option you can send other information to the server at the same time of the token.
* requestOptions - (object) The default is an empty object. [Reques class options](http://mootools.net/docs/core/Request/Request).

###Events:

####stripeError

* (function) Executes when a error accures. It can come from Stripe or server Ajax request.

#####Signature:

    onStripeError(message, status)

####createdToken

* (function) Executes when a token is created with Stripe. For more information on the creation of Stripe tokens go to [Stripe documentation](https://stripe.com/docs/stripe.js#createToken).

#####Signature:

    onCreatedToken(status, response)

###Methods:

####createToken

* (function) To create a token with Stripe.

#####Signature:

    createToken(event)

####responseHandler

* (function) The callback for Stripe.createToken.

#####Signature:

    responseHandler(status, response)

####setCreditCardFormValidators

* (function) Called to set the custom form validators.

#####Signature:

    setCreditCardFormValidators()

####validateKey

* (function) For validating the publishable key.

#####Signature:

    validateKey(val)

####validateCardNumber

* (function) For validating credit card number.

#####Signature:

    validateCardNumber(cardNum)

####validateExpiry

* (function) For validating month and the year inserted in a input form.

#####Signature:

    validateExpiry(month, year)

####validateCVC

* (function) For validating the CVC number.

#####Signature:

    validateCVC(cvc)

####cardType

* (function) For detecting wich type of credit card is used.

#####Signature:

    cardType(type)

####getToken

* (function) For finding out whether or not the token has already been used. This will return an object with the same structure as the object returned from createToken. For more details go to Stripe [retrieving information about a token](https://stripe.com/docs/stripe.js#retrieving-information-about-a-token).

#####Signature:

    getToken(token, callback(status, response))

###InputValidators:

####Validator: IsCreditCardNumber

Evaluates if the input is a credit card number.

####Validator: IsCreditCardCVCNumber

Evaluates if the input has a valid CVC number.

####Validator: IsCreditCardExpiry

Evaluates if the input has a valid expery date.

###Server side:

The name of the variable is token for the token.
    
###Testing:

For more information on how to test mooStripe go to [Stripe website testing page](https://stripe.com/docs/testing).

-------


Copyright (C) 2012 Jean-Nicolas Boulay ([http://jean-nicolas.com/](http://jean-nicolas.com/))

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
