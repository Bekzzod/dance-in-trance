describe("Эльф должен делать простые движения", function() {
	it("поднять левую руку", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		}

		leftHandUp(elf).then((elf) => {
			expect(elf.stance).toEqual([1, 0, 0, 0]);
			done();
		})
	});
	
	it("опустить левую руку", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [1, 0, 0, 0],
		}

		leftHandDown(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 0, 0]);
			done();
		})
	});

	it("поднять правую руку", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		}

		rightHandUp(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 1, 0, 0]);
			done();
		})
	});

	it("опустить правую руку", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 1, 0, 0],
		}

		rightHandDown(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 0, 0]);
			done();
		})
	});

	it("поднять обе руки", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		}

		bothHandsUp(elf).then((elf) => {
			expect(elf.stance).toEqual([1, 1, 0, 0]);
			done();
		})
	});

	it("опустить обе руки", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [1, 1, 0, 0],
		}

		bothHandsDown(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 0, 0]);
			done();
		})
	});

	it("выставить левую ногу", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		}

		leftLegApart(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 1, 0]);
			done();
		})
	});

	it("собрать левую ногу", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		}

		leftLegGather(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 0, 0]);
			done();
		})
	});

	it("выставить правую ногу", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		}

		rightLegApart(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 0, 1]);
			done();
		})
	});

	it("собрать правую ногу", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		}

		rightLegGather(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 0, 0]);
			done();
		})
	});

	it("выставить обе ноги", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 0, 0],
		}

		bothLegsApart(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 1, 1]);
			done();
		})
	});

	it("собрать обе ноги", function(done) {
		let elf = {
			danceSpeed: 10,
			stance: [0, 0, 1, 1],
		}

		bothLegsGather(elf).then((elf) => {
			expect(elf.stance).toEqual([0, 0, 0, 0]);
			done();
		})
	});
});
