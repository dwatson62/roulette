beforeEach(function() {
	wheel = new Wheel;
});
describe('Returns a number', function() {
	it('between 0 and 36', function() {
		wheel = new Wheel;
		wheel.spin();
		expect(wheel.number >= 0 && wheel.number < 37).toBeTruthy();
	});
});

// reds 1 3 5 7 9 12 13 16 18 19 21 23 25 27 30 32 34 36

describe('Return the correct colour', function() {
	it('when given 1', function() {
		spyOn(Math, 'random').and.returnValue(0.01);
		wheel.spin();
		expect(wheel.colour).toEqual('Red');
	});

	it('when given 2', function() {
		spyOn(Math, 'random').and.returnValue(0.03);
		wheel.spin();
		expect(wheel.colour).toEqual('Black');
	});

	it('when given 0', function() {
		// spyOn(Math, 'random').and.returnValue();
		// wheel.spin();
		wheel.number = 0;
		console.log(wheel.number);
		wheel.setColour();
		expect(wheel.colour).toEqual('Green');
	});
});