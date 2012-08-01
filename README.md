mooStripe
===========

Simple class to help Mootools developers intergrate Stripe payment service (API) on their website.

![Screenshot](https://github.com/jnbdz/mooStripe/raw/master/stripe_logo.png)

How to use
----------

You just need to call mooStripe() class.

###Syntax:

    var mStripe = new mooStripe(form, stripePublishableKey, [options]);
    
###WARNING:

Do not use the name Stripe or mooStripe to name your variable.

###Implements:

[Events](http://mootools.net/docs/core/Class/Class.Extras#Events), [Options](http://mootools.net/docs/core/Class/Class.Extras#Options)

###Arguments:

1. form - (string) The id of the form.
2. stripePublishableKey - (string) Stripe publishable key. To get your publishable key go to your [Stripe account](https://manage.stripe.com/#account/apikeys).
3. stripeCreateTokenFields - (object) [](https://stripe.com/docs/stripe.js#createToken)

###Options:

* stripeLib - (string) This is the url of Stripe javascript library that is loaded with Assets class found in Mootools More. The default is: [https://js.stripe.com/v1/](https://js.stripe.com/v1/).
* loadStripeLib - (bool) The default is true. This tells the class if loads Stripe javascript library.
* setCreditCardFormValidators - (bool) The default is true. This indicates if the class should add new validators to [Mootools form validator](http://mootools.net/docs/more/Forms/Form.Validator).
* requestJSON - (bool) The default is true. This is to determine if you will be using the [JSON request method](http://mootools.net/docs/core/Request/Request.JSON).
* requestMethod (string) The default is post. You can get a full list of all the request methods from [Mootools docs](http://mootools.net/docs/core/Request/Request#Request:send-aliases).
* requestData (object) The default is an empty object. The token is added by default to the request object later in the script. With this option you can send other information to the server at the same time of the token.
* requestOptions - (object) The default is an empty object. [Reques class options](http://mootools.net/docs/core/Request/Request).
* submitButton - (string) The default is null. 

###Events:

####stripeLibLoaded

* (function) Executes when the Stripe javascript framework is loaded.

#####Signature:

    onStripeLibLoaded()

####stripeError

* (function) Executes when a error accures. It can come from Stripe or server Ajax request.

#####Signature:

    onStripeError(message, status)

####createdToken

* (function) Executes when a token is created with Stripe. For more information on the creation of Stripe tokens go to [Stripe documentation](https://stripe.com/docs/stripe.js#createToken).

#####Signature:

    onCreatedToken(status, response)
    
###Server side:

The name of the variable is token for the token.
    
###Testing:

For more information on how to test mooStripe go to [Stripe website testing page](https://stripe.com/docs/testing).

-------


Copyright (C) 2012 Jean-Nicolas Boulay Desjardins ([http://jean-nicolas.com/](http://jean-nicolas.com/))

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.