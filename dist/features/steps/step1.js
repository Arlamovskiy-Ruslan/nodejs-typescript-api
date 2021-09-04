"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const cucumber_1 = require("cucumber");
cucumber_1.Given("a calculator", function () {
    this.calculator = {
        divide(n1, n2) {
            throw new Error("Not implemented");
        }
    };
});
cucumber_1.When("I divide {int} by {int}", function (n1, n2) {
    this.actual = this.calculator.divide(n1, n2);
});
cucumber_1.Then("the result is {int}", function (expected) {
    chai_1.expect(this.actual).to.be.equal(expected);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcDEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9mZWF0dXJlcy9zdGVwcy9zdGVwMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE4QjtBQUM5Qix1Q0FBNkM7QUFFN0MsZ0JBQUssQ0FBQyxjQUFjLEVBQUU7SUFDbEIsSUFBSSxDQUFDLFVBQVUsR0FBRztRQUNkLE1BQU0sQ0FBQyxFQUFVLEVBQUUsRUFBVTtZQUN6QixNQUFNLElBQUksS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDdkMsQ0FBQztLQUNKLENBQUM7QUFDTixDQUFDLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyx5QkFBeUIsRUFBRSxVQUFlLEVBQVUsRUFBRSxFQUFVO0lBQ2pFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ2pELENBQUMsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHFCQUFxQixFQUFFLFVBQWUsUUFBZ0I7SUFDdkQsYUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM5QyxDQUFDLENBQUMsQ0FBQyJ9