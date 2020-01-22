import React, { Component } from 'react'
import styles from './book-app-grid.scss';

class BookAppGrid extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className={styles.appGridContainer}>
                <div className={styles.appGridHeader}></div>
                <div className={styles.appGridMainContent}></div>
                <div className={styles.appGridSidebar}></div>
                <div className={styles.appGridFooter}></div>
            </div>
        )
    }
}

export default BookAppGrid