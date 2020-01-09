import React, {Component} from 'react';
import styles from './phone-header.scss';

class PhoneHeader extends Component{
    render(){
        
        return (
            <div className={styles.phoneHeaderContainer}>
                <div>{this.props.backButton && '⏪'}</div>
                <div className={styles.phoneHeaderText}>{this.props.text}</div>
                <div>{this.props.menuButton && '📶'}</div>
            </div>
        )
    }
}

export default PhoneHeader;