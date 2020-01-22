import React, { Component } from "react";
import BookApp from '../components/BookApp/BookApp';
import BookAppGrid from '../components/BookAppGrid/BookAppGrid';

class BookAppPage extends Component {
	render() {
		return (
			<div>
                <BookAppGrid />
			</div>
		);
	}
}

export default BookAppPage;
