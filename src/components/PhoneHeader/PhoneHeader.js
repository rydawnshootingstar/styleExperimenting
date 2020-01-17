import React, {Component} from 'react';
import styles from './phone-header.scss';
import {faArrowLeft, faBars} from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';

class PhoneHeader extends Component{
    render(){
        
        return (
            <div className={styles.phoneHeaderContainer}>
                <div>{this.props.backButton && <Button icon={faArrowLeft} />}</div>
                <div className={styles.phoneHeaderText}>{this.props.text}</div>
                <div>{this.props.menuButton && <Button icon={faBars}/>}</div>
            </div>
        )
    }
}

export default PhoneHeader;