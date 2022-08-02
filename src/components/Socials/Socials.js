import React from 'react'
import LinkedinIcon from '../../../static/linkedin_icon.svg';
import GithubIcon from '../../../static/github_icon.svg';
import MailIcon from '../../../static/mail_icon.svg';
import * as styles from './Socials.module.scss';

export default function Socials() {
  return (
    <div className={styles.iconsWrapper}>
        <a target="_blank" href="https://www.linkedin.com/in/anirudh-basani-0954061b0/">
            <img alt="linkedin icon" src={LinkedinIcon}></img>
        </a>
        <a target="_blank" href="https://github.com/anirudh-99">
            <img alt="github icon" src={GithubIcon}></img>
        </a>
        <a target="_blank" href="mailto:anirudhreddybasani@gmail.com">
            <img alt="mail icon" src={MailIcon}></img>
        </a>
    </div>
  )
}
