export const load = async ({ cookies }) => {
	const token = cookies.get('token');
	return {
		username: token ? user.name : null
	};
};
