import Script from "next/script";

const confirmationMessage =
  "Almost in. Check your inbox and confirm your email to join Ventures Crew Updates.";

const formOptions = JSON.stringify({
  settings: {
    after_subscribe: {
      action: "message",
      success_message: confirmationMessage,
      redirect_url: "",
    },
  },
  version: "5",
});

export function KitSignupEmbed() {
  return (
    <>
      <Script
        src="https://f.convertkit.com/ckjs/ck.5.js"
        strategy="afterInteractive"
      />
      <form
        action="https://app.kit.com/forms/10192676/subscriptions"
        className="kit-signup-form formkit-form w-full"
        method="post"
        data-sv-form="10192676"
        data-uid="3035c2dc1f"
        data-format="inline"
        data-version="5"
        data-options={formOptions}
      >
        <ul
          className="formkit-alert formkit-alert-error"
          data-element="errors"
          data-group="alert"
          aria-live="polite"
        />
        <div
          className="formkit-fields"
          data-element="fields"
          data-stacked="false"
        >
          <div className="formkit-field">
            <input
              className="formkit-input"
              name="email_address"
              aria-label="Email address"
              autoComplete="email"
              placeholder="Email address"
              required
              type="email"
            />
          </div>
          <button
            className="formkit-submit"
            data-element="submit"
            type="submit"
          >
            <span>Join the list</span>
          </button>
        </div>
        <div className="formkit-powered-by-convertkit-container">
          <a
            className="formkit-powered-by-convertkit"
            data-element="powered-by"
            data-variant="dark"
            href="https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic"
            target="_blank"
            rel="nofollow noopener"
          >
            Built with Kit
          </a>
        </div>
      </form>
    </>
  );
}
