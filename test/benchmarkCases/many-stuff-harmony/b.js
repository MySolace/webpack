module.exports = function() {
	let str = "";
	let sum = ["1"];
	const query = +this.query.substr(1);
	for(let i = 0; i < query; i++) {
		str += `import c${i} from "./c?${query}-${i}";\n`;
		sum.push(`c${i}`);
	}
	str += "export default " + sum.join(" + ");
	return str;
}
