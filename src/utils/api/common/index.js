import service from "../service";
import interFace from "../interface";


export default {
	isLogin() {
		// console.log(...interFace.login.isLogin);
		return new Promise((resolve, reject) => {
			service({
				...interFace.login.isLogin,
				headers: {
					'Content-Type': 'application/json'
				},
				data: {
					"name": "wang"
				}
			}).then(res => {
				// console.log(res);
				resolve(res);
			})
		})
	},
	getSwipeList() {

	}

}
