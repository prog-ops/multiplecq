export const doLogin = async (credential: {
    username: string;
    password: string;
}): Promise<void> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (credential.username === "admin" && credential.password === "password") {
                resolve();
            } else {
                reject();
            }
        }, 1000);
    });
};