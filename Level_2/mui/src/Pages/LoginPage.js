import Login from "../components/LoginComponent/LoginComponnt.js";
import AuthButton from "../components/AuthComponent/AuthButton.js";
function LoginPage() {
  return (
    <Login>
    <AuthButton
    btnText="Sign in"
    belowText=" New to WebTech Practice?"
    linkText="Create an account"
    linkTo="/signup"/>
    </Login>
  );
}

export default LoginPage;