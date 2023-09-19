
import { LoginForm } from "./components/LoginForm";
import { SingupForm } from "./components/SignUpForm";

export default async function LoginPage() {

    return (
        <main className="h-screen flex bg-slate-50">
            <div className="m-auto">
                <SingupForm />
            </div>
        </main>
    );
}