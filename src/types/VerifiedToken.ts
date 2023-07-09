export default interface VerifiedUserToken {
    payload: {
        username: string,
        password: string,
    }
    protectedHeader: {
        alg: string,
    }
}