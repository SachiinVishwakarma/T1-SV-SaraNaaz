import SignupForm from "../components/SignupComponent/SignupForm.js";
import AuthButton from "../components/AuthComponent/AuthButton.js"
function SignupPage() {
  return (
  
    <SignupForm>
    <AuthButton
    btnText="Create Account"
    belowText="Already have account?"
    linkText="Sign in"
    linkTo="/login"
    />
    </SignupForm>
 

  );
}

export default SignupPage;