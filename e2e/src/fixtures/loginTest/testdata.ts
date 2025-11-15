import { LoginTestSuite } from "./interface";

const LoginTestData: LoginTestSuite = {
    validCreds: {
        username: "standard_user",
        password: "secret_sauce"
    },
    invalidCreds: {
        username: "fvgbhn",
        password: "34567fvghb67"
    }
}

export default LoginTestData;