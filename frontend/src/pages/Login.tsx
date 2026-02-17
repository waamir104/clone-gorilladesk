import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/app");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <img
          src="/login/logo.png"
          alt="GorillaDesk"
          className="login-logo-img"
        />

        <div className="login-social">
          <button type="button" className="login-btn-social">
            <span className="login-icon login-icon-fb">f</span>
            Continue with Facebook
          </button>
          <button type="button" className="login-btn-social">
            <span className="login-icon login-icon-google">G</span>
            Continue with Google
          </button>
        </div>

        <div className="login-divider">
          <span>Or</span>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username or Email"
            aria-label="Username or Email"
            className="login-input"
            autoComplete="username"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            aria-label="Password"
            className="login-input"
            autoComplete="current-password"
          />
          <button type="submit" className="login-btn-primary">
            Log In
          </button>
        </form>

        <div className="login-links">
          <p>
            Don&apos;t have an account? <Link to="/signup">Sign up</Link>
          </p>
          <Link to="/forgot-password" className="login-link-reset">
            Need to reset your password?
          </Link>
        </div>
      </div>
    </div>
  );
};
