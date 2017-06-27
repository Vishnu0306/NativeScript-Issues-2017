"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_view_model_1 = require("./main-view-model");
var listview_1 = require("nativescript-telerik-ui-pro/listview");
function navigatingTo(args) {
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    var page = args.object;
    var container = page.getViewById("container");
    var radList = new listview_1.RadListView();
    radList.items = [1, 2, 3, 4, 5, 6.6];
    radList.selectionBehavior = "Press";
    radList.itemTemplate = "<label text='{{ $value }}' />";
    var linearLayout = new listview_1.ListViewLinearLayout();
    linearLayout.scrollDirection = "Horizontal";
    radList.listViewLayout = linearLayout;
    container.addChild(radList);
    page.bindingContext = new main_view_model_1.HelloWorldModel();
}
exports.navigatingTo = navigatingTo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBS0EscURBQW9EO0FBRXBELGlFQUFpSDtBQUVqSCxzQkFBNkIsSUFBZTtJQUN4Qzs7OztNQUlFO0lBQ0YsSUFBSSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUc3QixJQUFJLFNBQVMsR0FBZ0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUUzRCxJQUFJLE9BQU8sR0FBRyxJQUFJLHNCQUFXLEVBQUUsQ0FBQztJQUNoQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNyQyxPQUFPLENBQUMsaUJBQWlCLEdBQUcsT0FBTyxDQUFDO0lBQ3BDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsK0JBQStCLENBQUM7SUFFdkQsSUFBSSxZQUFZLEdBQUcsSUFBSSwrQkFBb0IsRUFBRSxDQUFDO0lBQzlDLFlBQVksQ0FBQyxlQUFlLEdBQUcsWUFBWSxDQUFDO0lBQzVDLE9BQU8sQ0FBQyxjQUFjLEdBQUcsWUFBWSxDQUFDO0lBRXRDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztBQUNoRCxDQUFDO0FBdkJELG9DQXVCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSAndWkvbGF5b3V0cy9zdGFjay1sYXlvdXQnO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICd1aS9sYWJlbCc7XG5pbXBvcnQgeyBIZWxsb1dvcmxkTW9kZWwgfSBmcm9tICcuL21haW4tdmlldy1tb2RlbCc7XG5cbmltcG9ydCB7IFJhZExpc3RWaWV3LCBMaXN0Vmlld0xpbmVhckxheW91dCwgTGlzdFZpZXdTY3JvbGxEaXJlY3Rpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWktcHJvL2xpc3R2aWV3XCJcblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpbmdUbyhhcmdzOiBFdmVudERhdGEpIHtcbiAgICAvKlxuICAgIFRoaXMgZ2V0cyBhIHJlZmVyZW5jZSB0aGlzIHBhZ2XigJlzIDxQYWdlPiBVSSBjb21wb25lbnQuIFlvdSBjYW5cbiAgICB2aWV3IHRoZSBBUEkgcmVmZXJlbmNlIG9mIHRoZSBQYWdlIHRvIHNlZSB3aGF04oCZcyBhdmFpbGFibGUgYXRcbiAgICBodHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hcGktcmVmZXJlbmNlL2NsYXNzZXMvX3VpX3BhZ2VfLnBhZ2UuaHRtbFxuICAgICovXG4gICAgbGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcblxuXG4gICAgbGV0IGNvbnRhaW5lciA9IDxTdGFja0xheW91dD5wYWdlLmdldFZpZXdCeUlkKFwiY29udGFpbmVyXCIpO1xuXG4gICAgbGV0IHJhZExpc3QgPSBuZXcgUmFkTGlzdFZpZXcoKTtcbiAgICByYWRMaXN0Lml0ZW1zID0gWzEsIDIsIDMsIDQsIDUsIDYuNl07XG4gICAgcmFkTGlzdC5zZWxlY3Rpb25CZWhhdmlvciA9IFwiUHJlc3NcIjtcbiAgICByYWRMaXN0Lml0ZW1UZW1wbGF0ZSA9IFwiPGxhYmVsIHRleHQ9J3t7ICR2YWx1ZSB9fScgLz5cIjtcblxuICAgIGxldCBsaW5lYXJMYXlvdXQgPSBuZXcgTGlzdFZpZXdMaW5lYXJMYXlvdXQoKTtcbiAgICBsaW5lYXJMYXlvdXQuc2Nyb2xsRGlyZWN0aW9uID0gXCJIb3Jpem9udGFsXCI7XG4gICAgcmFkTGlzdC5saXN0Vmlld0xheW91dCA9IGxpbmVhckxheW91dDtcblxuICAgIGNvbnRhaW5lci5hZGRDaGlsZChyYWRMaXN0KTtcblxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgSGVsbG9Xb3JsZE1vZGVsKCk7XG59Il19