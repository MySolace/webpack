it("should receive a namespace object when importing commonjs", function(done) {
	import("./cjs.js").then(result => {
		result.should.be.eql({ default: { named: "named", default: "default" } });
		done();
	}).catch(done);
});

it("should receive a namespace object when importing commonjs with __esModule", function(done) {
	import("./cjs-esmodule.js").then(result => {
		result.should.be.eql({ default: { __esModule: true, named: "named", default: "default" } });
		done();
	}).catch(done);
});
