// const Header = (function() {
// 	function Header() {}
	
// 	Header.prototype = {
// 		render: function() {
// 			return `
// 				<header>
// 					<h1>My App</h1>
// 					<nav>
// 						<ul>
// 							<li>Home</li>
// 						</ul>
// 					</nav>
// 				</header>
// 			`
// 		}
// 	}

// 	return Header
// })()

class Header {
	constructor() {}

	render() {
		return `
			<header>
				<h1>My App</h1>
				<nav>
					<ul>
						<li>Home</li>
					</ul>
				</nav>
			</header>
		`
	}
}

module.exports = {
	Header
}