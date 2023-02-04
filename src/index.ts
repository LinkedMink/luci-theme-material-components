import { MDCTopAppBar } from "@material/top-app-bar";
import "./styles.scss";
import {MDCRipple} from '@material/ripple';

const buttonRipple = new MDCRipple(document.querySelector('.mdc-button')!);
const topAppBarElement = document.querySelector(".mdc-top-app-bar");
console.log(topAppBarElement);
const topAppBar = new MDCTopAppBar(topAppBarElement!);
console.log("Loaded");
