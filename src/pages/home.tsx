// ** Import Next
import { NextPage } from "next";

// ** Import PageContentt
import HomePage from "src/views/pages/home"



type Tprops = {}
const Home: NextPage<Tprops> = () => {
    return <HomePage/>
}

export default Home