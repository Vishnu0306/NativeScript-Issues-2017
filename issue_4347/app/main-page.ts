/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { HelloWorldModel } from './main-view-model';
import { android as androidApp } from "application";
declare var android: any;

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    let page = <Page>args.object;

    /*
    A page’s bindingContext is an object that should be used to perform
    data binding between XML markup and TypeScript code. Properties
    on the bindingContext can be accessed using the {{ }} syntax in XML.
    In this example, the {{ message }} and {{ onTap }} bindings are resolved
    against the object returned by createViewModel().

    You can learn more about data binding in NativeScript at
    https://docs.nativescript.org/core-concepts/data-binding.
    */
    page.bindingContext = new HelloWorldModel();
}

export function changeBrightness() {
    // var params = androidApp.foregroundActivity.getWindow().getAttributes();
    // params.screenBrightness = 50; // range from 0 - 255 as per docs
    // androidApp.foregroundActivity.getWindow().setAttributes(params);
    // androidApp.foregroundActivity.getWindow().addFlags(android.view.WindowManager.LayoutParams.FLAGS_CHANGED);

    android.provider.Settings.System.putInt(androidApp.context.getContentResolver(), android.provider.Settings.System.SCREEN_BRIGHTNESS_MODE, android.provider.Settings.System.SCREEN_BRIGHTNESS_MODE_MANUAL);  //this will set the manual mode (set the automatic mode off)
    android.provider.Settings.System.putInt(androidApp.context.getContentResolver(), android.provider.Settings.System.SCREEN_BRIGHTNESS, 255);  //this will set the brightness to maximum (255)

    //refreshes the screen
    var br = android.provider.Settings.System.getInt(androidApp.context.getContentResolver(), android.provider.Settings.System.SCREEN_BRIGHTNESS);
    var lp = androidApp.foregroundActivity.getWindow().getAttributes();
    console.log(br);
    lp.screenBrightness = br / 255;
    androidApp.foregroundActivity.getWindow().setAttributes(lp);
}

