import Vue from 'vue'
import {
  	Style,
 	Button,
  	Dialog,
	TabBar,
  	Toast,
  	Popup,
	ScrollNav,
	ScrollNavBar,
} from 'cube-ui'

let arr = [Style, Button, Dialog, TabBar, Toast, Popup, ScrollNav, ScrollNavBar];
arr.forEach(item => {
  Vue.use(item)
});

