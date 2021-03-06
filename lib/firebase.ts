export const getApp = async () => {
	const { initializeApp, getApps, getApp } = await import("firebase/app");

	if (getApps().length < 1) {
		return initializeApp({
			apiKey: "AIzaSyAw7TXKG-XDr3fZl23z5H3JnFaZTpfVgWY",
			authDomain: "suyoinker.firebaseapp.com",
			projectId: "suyoinker",
			storageBucket: "suyoinker.appspot.com",
			messagingSenderId: "1018821610467",
			appId: "1:1018821610467:web:50fe7887c2b7a2c4f9aed6",
			measurementId: "G-32W9ZJLKL2",
		});
	} else {
		return await getApp();
	}
};

export const getDatabase = async (app: import("firebase/app").FirebaseApp) => {
	const { getFirestore } = await import("firebase/firestore");

	return getFirestore(app);
};
