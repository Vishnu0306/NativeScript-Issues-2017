/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_view_model_1 = require("./main-view-model");
var application_1 = require("application");
// Event handler for Page "navigatingTo" event attached in main-page.xml
function navigatingTo(args) {
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    var page = args.object;
    /*
    A page’s bindingContext is an object that should be used to perform
    data binding between XML markup and TypeScript code. Properties
    on the bindingContext can be accessed using the {{ }} syntax in XML.
    In this example, the {{ message }} and {{ onTap }} bindings are resolved
    against the object returned by createViewModel().

    You can learn more about data binding in NativeScript at
    https://docs.nativescript.org/core-concepts/data-binding.
    */
    page.bindingContext = new main_view_model_1.HelloWorldModel();
}
exports.navigatingTo = navigatingTo;
function changeBrightness() {
    // var params = androidApp.foregroundActivity.getWindow().getAttributes();
    // params.screenBrightness = 50; // range from 0 - 255 as per docs
    // androidApp.foregroundActivity.getWindow().setAttributes(params);
    // androidApp.foregroundActivity.getWindow().addFlags(android.view.WindowManager.LayoutParams.FLAGS_CHANGED);
    android.provider.Settings.System.putInt(application_1.android.context.getContentResolver(), android.provider.Settings.System.SCREEN_BRIGHTNESS_MODE, android.provider.Settings.System.SCREEN_BRIGHTNESS_MODE_MANUAL); //this will set the manual mode (set the automatic mode off)
    android.provider.Settings.System.putInt(application_1.android.context.getContentResolver(), android.provider.Settings.System.SCREEN_BRIGHTNESS, 255); //this will set the brightness to maximum (255)
    //refreshes the screen
    var br = android.provider.Settings.System.getInt(application_1.android.context.getContentResolver(), android.provider.Settings.System.SCREEN_BRIGHTNESS);
    var lp = application_1.android.foregroundActivity.getWindow().getAttributes();
    console.log(br);
    lp.screenBrightness = br / 255;
    application_1.android.foregroundActivity.getWindow().setAttributes(lp);
}
exports.changeBrightness = changeBrightness;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0VBSUU7OztBQUlGLHFEQUFvRDtBQUNwRCwyQ0FBb0Q7QUFHcEQsd0VBQXdFO0FBQ3hFLHNCQUE2QixJQUFlO0lBQ3hDOzs7O01BSUU7SUFDRixJQUFJLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBRTdCOzs7Ozs7Ozs7TUFTRTtJQUNGLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxpQ0FBZSxFQUFFLENBQUM7QUFDaEQsQ0FBQztBQW5CRCxvQ0FtQkM7QUFFRDtJQUNJLDBFQUEwRTtJQUMxRSxrRUFBa0U7SUFDbEUsbUVBQW1FO0lBQ25FLDZHQUE2RztJQUU3RyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLHFCQUFVLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLHNCQUFzQixFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUUsNERBQTREO0lBQ3hRLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMscUJBQVUsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBRSwrQ0FBK0M7SUFFM0wsc0JBQXNCO0lBQ3RCLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMscUJBQVUsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUM5SSxJQUFJLEVBQUUsR0FBRyxxQkFBVSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ25FLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDaEIsRUFBRSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUM7SUFDL0IscUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDaEUsQ0FBQztBQWZELDRDQWVDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkluIE5hdGl2ZVNjcmlwdCwgYSBmaWxlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBhbiBYTUwgZmlsZSBpcyBrbm93biBhc1xuYSBjb2RlLWJlaGluZCBmaWxlLiBUaGUgY29kZS1iZWhpbmQgaXMgYSBncmVhdCBwbGFjZSB0byBwbGFjZSB5b3VyIHZpZXdcbmxvZ2ljLCBhbmQgdG8gc2V0IHVwIHlvdXIgcGFnZeKAmXMgZGF0YSBiaW5kaW5nLlxuKi9cblxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcbmltcG9ydCB7IEhlbGxvV29ybGRNb2RlbCB9IGZyb20gJy4vbWFpbi12aWV3LW1vZGVsJztcbmltcG9ydCB7IGFuZHJvaWQgYXMgYW5kcm9pZEFwcCB9IGZyb20gXCJhcHBsaWNhdGlvblwiO1xuZGVjbGFyZSB2YXIgYW5kcm9pZDogYW55O1xuXG4vLyBFdmVudCBoYW5kbGVyIGZvciBQYWdlIFwibmF2aWdhdGluZ1RvXCIgZXZlbnQgYXR0YWNoZWQgaW4gbWFpbi1wYWdlLnhtbFxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpbmdUbyhhcmdzOiBFdmVudERhdGEpIHtcbiAgICAvKlxuICAgIFRoaXMgZ2V0cyBhIHJlZmVyZW5jZSB0aGlzIHBhZ2XigJlzIDxQYWdlPiBVSSBjb21wb25lbnQuIFlvdSBjYW5cbiAgICB2aWV3IHRoZSBBUEkgcmVmZXJlbmNlIG9mIHRoZSBQYWdlIHRvIHNlZSB3aGF04oCZcyBhdmFpbGFibGUgYXRcbiAgICBodHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hcGktcmVmZXJlbmNlL2NsYXNzZXMvX3VpX3BhZ2VfLnBhZ2UuaHRtbFxuICAgICovXG4gICAgbGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcblxuICAgIC8qXG4gICAgQSBwYWdl4oCZcyBiaW5kaW5nQ29udGV4dCBpcyBhbiBvYmplY3QgdGhhdCBzaG91bGQgYmUgdXNlZCB0byBwZXJmb3JtXG4gICAgZGF0YSBiaW5kaW5nIGJldHdlZW4gWE1MIG1hcmt1cCBhbmQgVHlwZVNjcmlwdCBjb2RlLiBQcm9wZXJ0aWVzXG4gICAgb24gdGhlIGJpbmRpbmdDb250ZXh0IGNhbiBiZSBhY2Nlc3NlZCB1c2luZyB0aGUge3sgfX0gc3ludGF4IGluIFhNTC5cbiAgICBJbiB0aGlzIGV4YW1wbGUsIHRoZSB7eyBtZXNzYWdlIH19IGFuZCB7eyBvblRhcCB9fSBiaW5kaW5ncyBhcmUgcmVzb2x2ZWRcbiAgICBhZ2FpbnN0IHRoZSBvYmplY3QgcmV0dXJuZWQgYnkgY3JlYXRlVmlld01vZGVsKCkuXG5cbiAgICBZb3UgY2FuIGxlYXJuIG1vcmUgYWJvdXQgZGF0YSBiaW5kaW5nIGluIE5hdGl2ZVNjcmlwdCBhdFxuICAgIGh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2NvcmUtY29uY2VwdHMvZGF0YS1iaW5kaW5nLlxuICAgICovXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBIZWxsb1dvcmxkTW9kZWwoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUJyaWdodG5lc3MoKSB7XG4gICAgLy8gdmFyIHBhcmFtcyA9IGFuZHJvaWRBcHAuZm9yZWdyb3VuZEFjdGl2aXR5LmdldFdpbmRvdygpLmdldEF0dHJpYnV0ZXMoKTtcbiAgICAvLyBwYXJhbXMuc2NyZWVuQnJpZ2h0bmVzcyA9IDUwOyAvLyByYW5nZSBmcm9tIDAgLSAyNTUgYXMgcGVyIGRvY3NcbiAgICAvLyBhbmRyb2lkQXBwLmZvcmVncm91bmRBY3Rpdml0eS5nZXRXaW5kb3coKS5zZXRBdHRyaWJ1dGVzKHBhcmFtcyk7XG4gICAgLy8gYW5kcm9pZEFwcC5mb3JlZ3JvdW5kQWN0aXZpdHkuZ2V0V2luZG93KCkuYWRkRmxhZ3MoYW5kcm9pZC52aWV3LldpbmRvd01hbmFnZXIuTGF5b3V0UGFyYW1zLkZMQUdTX0NIQU5HRUQpO1xuXG4gICAgYW5kcm9pZC5wcm92aWRlci5TZXR0aW5ncy5TeXN0ZW0ucHV0SW50KGFuZHJvaWRBcHAuY29udGV4dC5nZXRDb250ZW50UmVzb2x2ZXIoKSwgYW5kcm9pZC5wcm92aWRlci5TZXR0aW5ncy5TeXN0ZW0uU0NSRUVOX0JSSUdIVE5FU1NfTU9ERSwgYW5kcm9pZC5wcm92aWRlci5TZXR0aW5ncy5TeXN0ZW0uU0NSRUVOX0JSSUdIVE5FU1NfTU9ERV9NQU5VQUwpOyAgLy90aGlzIHdpbGwgc2V0IHRoZSBtYW51YWwgbW9kZSAoc2V0IHRoZSBhdXRvbWF0aWMgbW9kZSBvZmYpXG4gICAgYW5kcm9pZC5wcm92aWRlci5TZXR0aW5ncy5TeXN0ZW0ucHV0SW50KGFuZHJvaWRBcHAuY29udGV4dC5nZXRDb250ZW50UmVzb2x2ZXIoKSwgYW5kcm9pZC5wcm92aWRlci5TZXR0aW5ncy5TeXN0ZW0uU0NSRUVOX0JSSUdIVE5FU1MsIDI1NSk7ICAvL3RoaXMgd2lsbCBzZXQgdGhlIGJyaWdodG5lc3MgdG8gbWF4aW11bSAoMjU1KVxuXG4gICAgLy9yZWZyZXNoZXMgdGhlIHNjcmVlblxuICAgIHZhciBiciA9IGFuZHJvaWQucHJvdmlkZXIuU2V0dGluZ3MuU3lzdGVtLmdldEludChhbmRyb2lkQXBwLmNvbnRleHQuZ2V0Q29udGVudFJlc29sdmVyKCksIGFuZHJvaWQucHJvdmlkZXIuU2V0dGluZ3MuU3lzdGVtLlNDUkVFTl9CUklHSFRORVNTKTtcbiAgICB2YXIgbHAgPSBhbmRyb2lkQXBwLmZvcmVncm91bmRBY3Rpdml0eS5nZXRXaW5kb3coKS5nZXRBdHRyaWJ1dGVzKCk7XG4gICAgY29uc29sZS5sb2coYnIpO1xuICAgIGxwLnNjcmVlbkJyaWdodG5lc3MgPSBiciAvIDI1NTtcbiAgICBhbmRyb2lkQXBwLmZvcmVncm91bmRBY3Rpdml0eS5nZXRXaW5kb3coKS5zZXRBdHRyaWJ1dGVzKGxwKTtcbn1cblxuIl19