import React, {Component} from 'react';
import BookHeader from './BookHeader';
import BookMain from './BookMain';
import SideBar from './SideBar';
import styles from './book-app.scss';

class BookApp extends Component{
    state={
        sideBarOpen: false,
        hasNotifications: true
    }

    toggleSideBar = ()=> {
        console.log('changing bar')
        this.setState({
            sideBarOpen: !this.state.sideBarOpen
        });
    }

    render(){
        return (
<<<<<<< Updated upstream
<<<<<<< HEAD
            <div className={styles.bookAppContainer}>
=======
            <div>
>>>>>>> 355a11f... style links etc
=======
            <div className={styles.bookAppContainer}>
>>>>>>> Stashed changes
                <BookHeader hasNotifications={this.state.hasNotifications} />
                <BookMain sideBarOpen={this.state.sideBarOpen} toggleSideBar={this.toggleSideBar} closeSideBar={this.closeSideBar}/>
            </div>
        )
    }
}

export default BookApp; 