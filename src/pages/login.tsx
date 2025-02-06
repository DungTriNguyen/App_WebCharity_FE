// ** Import Next
import { NextPage } from "next";

// ** Import PageContentt
import LoginPage from "src/views/pages/login";



type Tprops = {}
const Login: NextPage<Tprops> = () => {
    return <LoginPage/>
}

export default Login