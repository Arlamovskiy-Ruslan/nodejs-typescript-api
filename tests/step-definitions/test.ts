import {binding, given, then, when} from 'cucumber-tsflow';

const {assert} = require('chai');

@binding()
export class Test {
    private accountBalance: number = 0;
    private obj = {name: "@firstName"};

    @given(/A bank account with starting balance of \$(\d*)/)
    public givenAnAccountWithStartingBalance(amount: number) {
        this.accountBalance = amount;
    }

    @when(/\$(\d*) is deposited/)
    public deposit(amount: number) {
        this.accountBalance = Number(this.accountBalance) + Number(amount);
    }

    @then(/The bank account balance should be \$(\d*)/)
    public accountBalanceShouldEqual(expectedAmount: number) {
        assert.equal(this.accountBalance, expectedAmount);
    }
}
