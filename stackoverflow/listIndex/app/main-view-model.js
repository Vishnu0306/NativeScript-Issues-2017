"use strict";
var observable_1 = require("data/observable");
var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        var _this = _super.call(this) || this;
        _this.items = [];
        for (var i = 0; i < 100; i++) {
            _this.items.push({ key: i });
        }
        return _this;
        // this.items = [{ key: 1 }, { key: 2 }, { key: 3 }, { key: 4 }, { key: 5 }, { key: 6 }, { key: 7 }, { key: 8 }, { key: 9 }, { key: 2 }, { key: 3 }, { key: 4 }, { key: 5 }, { key: 6 }, { key: 7 }, { key: 8 }, { key: 9 }, { key: 2 }, { key: 3 }, { key: 4 }, { key: 5 }, { key: 6 }, { key: 7 }, { key: 8 }, { key: 9 }, { key: 2 }, { key: 3 }, { key: 4 }, { key: 5 }, { key: 6 }, { key: 7 }, { key: 8 }, { key: 9 }, { key: 2 }, { key: 3 }, { key: 4 }, { key: 5 }, { key: 6 }, { key: 7 }, { key: 8 }, { key: 9 }, { key: 2 }, { key: 3 }, { key: 4 }, { key: 5 }, { key: 6 }, { key: 7 }, { key: 8 }, { key: 9 }, { key: 2 }, { key: 3 }, { key: 4 }, { key: 5 }, { key: 6 }, { key: 7 }, { key: 8 }, { key: 9 }, { key: 2 }, { key: 3 }, { key: 4 }, { key: 5 }, { key: 6 }, { key: 7 }, { key: 8 }, { key: 9 }, { key: 2 }, { key: 3 }, { key: 4 }, { key: 5 }, { key: 6 }, { key: 7 }, { key: 8 }, { key: 9 }, { key: 2 }, { key: 3 }, { key: 4 }, { key: 5 }, { key: 6 }, { key: 7 }, { key: 8 }, { key: 9 }];
    }
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw4Q0FBNkM7QUFFN0M7SUFBcUMsbUNBQVU7SUFJM0M7UUFBQSxZQUNJLGlCQUFPLFNBT1Y7UUFMRyxLQUFJLENBQUMsS0FBSyxHQUFDLEVBQUUsQ0FBQztRQUNkLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDekIsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUM3QixDQUFDOztRQUNELDY5QkFBNjlCO0lBQ2orQixDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLEFBYkQsQ0FBcUMsdUJBQVUsR0FhOUM7QUFiWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuXG5leHBvcnQgY2xhc3MgSGVsbG9Xb3JsZE1vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG5cbiAgICBwdWJsaWMgaXRlbXM6IEFycmF5PHsga2V5IH0+O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5pdGVtcz1bXTtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgMTAwOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaCh7a2V5Oml9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLml0ZW1zID0gW3sga2V5OiAxIH0sIHsga2V5OiAyIH0sIHsga2V5OiAzIH0sIHsga2V5OiA0IH0sIHsga2V5OiA1IH0sIHsga2V5OiA2IH0sIHsga2V5OiA3IH0sIHsga2V5OiA4IH0sIHsga2V5OiA5IH0sIHsga2V5OiAyIH0sIHsga2V5OiAzIH0sIHsga2V5OiA0IH0sIHsga2V5OiA1IH0sIHsga2V5OiA2IH0sIHsga2V5OiA3IH0sIHsga2V5OiA4IH0sIHsga2V5OiA5IH0sIHsga2V5OiAyIH0sIHsga2V5OiAzIH0sIHsga2V5OiA0IH0sIHsga2V5OiA1IH0sIHsga2V5OiA2IH0sIHsga2V5OiA3IH0sIHsga2V5OiA4IH0sIHsga2V5OiA5IH0sIHsga2V5OiAyIH0sIHsga2V5OiAzIH0sIHsga2V5OiA0IH0sIHsga2V5OiA1IH0sIHsga2V5OiA2IH0sIHsga2V5OiA3IH0sIHsga2V5OiA4IH0sIHsga2V5OiA5IH0sIHsga2V5OiAyIH0sIHsga2V5OiAzIH0sIHsga2V5OiA0IH0sIHsga2V5OiA1IH0sIHsga2V5OiA2IH0sIHsga2V5OiA3IH0sIHsga2V5OiA4IH0sIHsga2V5OiA5IH0sIHsga2V5OiAyIH0sIHsga2V5OiAzIH0sIHsga2V5OiA0IH0sIHsga2V5OiA1IH0sIHsga2V5OiA2IH0sIHsga2V5OiA3IH0sIHsga2V5OiA4IH0sIHsga2V5OiA5IH0sIHsga2V5OiAyIH0sIHsga2V5OiAzIH0sIHsga2V5OiA0IH0sIHsga2V5OiA1IH0sIHsga2V5OiA2IH0sIHsga2V5OiA3IH0sIHsga2V5OiA4IH0sIHsga2V5OiA5IH0sIHsga2V5OiAyIH0sIHsga2V5OiAzIH0sIHsga2V5OiA0IH0sIHsga2V5OiA1IH0sIHsga2V5OiA2IH0sIHsga2V5OiA3IH0sIHsga2V5OiA4IH0sIHsga2V5OiA5IH0sIHsga2V5OiAyIH0sIHsga2V5OiAzIH0sIHsga2V5OiA0IH0sIHsga2V5OiA1IH0sIHsga2V5OiA2IH0sIHsga2V5OiA3IH0sIHsga2V5OiA4IH0sIHsga2V5OiA5IH0sIHsga2V5OiAyIH0sIHsga2V5OiAzIH0sIHsga2V5OiA0IH0sIHsga2V5OiA1IH0sIHsga2V5OiA2IH0sIHsga2V5OiA3IH0sIHsga2V5OiA4IH0sIHsga2V5OiA5IH1dO1xuICAgIH1cbn0iXX0=