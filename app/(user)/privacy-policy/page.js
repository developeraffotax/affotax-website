import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Affotax",
  description:
    "Learn how Affotax collects, uses, and protects your personal data when you use our website and services.",
};

const sections = [
  { id: "who-we-are", title: "1. Who We Are" },
  { id: "data-we-collect", title: "2. Data We Collect" },
  { id: "how-we-use-data", title: "3. How We Use Your Data" },
  { id: "cookies", title: "4. Cookies" },
  { id: "sharing", title: "5. Sharing Your Data" },
  { id: "security", title: "6. Data Security & Retention" },
  { id: "rights", title: "7. Your Rights" },
  { id: "changes", title: "8. Changes to This Policy" },
  { id: "contact", title: "9. Contact Us" },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Hero */}
      <section className="border-b border-gray-100 ">
        <div className="mx-auto max-w-4xl px-6 py-12 max-md:pt-20">
          <p className="text-sm font-medium uppercase tracking-wide text-blue-600">
            Affotax
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 max-w-2xl text-base text-gray-600">
            Affotax ("we", "us", "our") respects your privacy and is
            committed to protecting your personal data. This policy explains
            what information we collect, how we use it, and the choices you
            have when you use affotax.com.
          </p>
          {/* <p className="mt-4 text-sm text-gray-500">
            Last updated:{" "}
            <span className="font-medium text-gray-700">1 July 2026</span>
          </p> */}
        </div>
      </section>

      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 px-6 py-12 sm:py-16 lg:grid-cols-[220px_1fr]">
        
        <nav className="hidden lg:block">
          <div className="sticky top-28">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">
              On this page
            </p>
            <ul className="space-y-2 border-l border-gray-200 pl-4 text-sm">
              {sections.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`#${s.id}`}
                    className="text-gray-500 transition hover:text-blue-600"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Content */}
        <article className="min-w-0 space-y-12 md:border-l md:border-gray-200 md:pl-12">
          <section id="who-we-are" className="scroll-mt-24">
            <h2 className="text-xl font-semibold text-gray-900">
              1. Who We Are
            </h2>
            <p className="mt-3 leading-relaxed text-gray-600">
              Affotax operates the website affotax.com. This policy applies
              to any personal data we collect through the website, regardless
              of where you access it from. If you have questions about this
              policy or how we handle your data, you can reach us using the
              details in the{" "}
              <Link  href="/contact-us" className="text-blue-600 underline underline-offset-2">
                Contact Us
              </Link>{" "}
            </p>
          </section>

          <section id="data-we-collect" className="scroll-mt-24">
            <h2 className="text-xl font-semibold text-gray-900">
              2. Data We Collect
            </h2>
            <p className="mt-3 leading-relaxed text-gray-600">
              We may collect and process the following categories of data:
            </p>
            <ul className="mt-4 space-y-2">
              {[
                ["Identity Data", "your name and similar identifiers."],
                ["Contact Data", "email address, phone number, and billing/postal address."],
                ["Financial & Transaction Data", "payment details and records of services purchased from us."],
                ["Technical Data", "IP address, browser type, device information, and time zone."],
                ["Usage Data", "how you interact with our website, pages viewed, and referral source."],
                ["Marketing Data", "your preferences in receiving communications from us."],
              ].map(([label, desc]) => (
                <li key={label} className="flex gap-3 rounded-lg bg-gray-100 p-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                  <span className="text-sm text-gray-600">
                    <span className="font-medium text-gray-900">{label}:</span>{" "}
                    {desc}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              We do not knowingly collect special category data (e.g. health,
              religion, or biometric data) or data relating to children.
            </p>
          </section>

          <section id="how-we-use-data" className="scroll-mt-24">
            <h2 className="text-xl font-semibold text-gray-900">
              3. How We Use Your Data
            </h2>
            <p className="mt-3 leading-relaxed text-gray-600">
              We use your data only where we have a lawful basis to do so,
              including to:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-gray-600">
              <li>Provide and manage the services you request from us.</li>
              <li>Respond to enquiries and provide customer support.</li>
              <li>Process payments and maintain business records.</li>
              <li>Improve, secure, and maintain our website.</li>
              <li>Send marketing communications, where you have consented.</li>
              <li>Comply with our legal and regulatory obligations.</li>
            </ul>
          </section>

          <section id="cookies" className="scroll-mt-24">
            <h2 className="text-xl font-semibold text-gray-900">
              4. Cookies
            </h2>
            <p className="mt-3 leading-relaxed text-gray-600">
              We use cookies and similar technologies to operate our website,
              understand how it is used, and improve your experience. You can
              control or disable cookies through your browser settings,
              though some parts of the site may not function properly as a
              result.
            </p>
          </section>

          <section id="sharing" className="scroll-mt-24">
            <h2 className="text-xl font-semibold text-gray-900">
              5. Sharing Your Data
            </h2>
            <p className="mt-3 leading-relaxed text-gray-600">
              We do not sell your personal data. We may share it with:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-gray-600">
              <li>Trusted service providers who help us run our website and services (e.g. hosting, payments, analytics).</li>
              <li>Regulators, law enforcement, or other authorities where required by law.</li>
              <li>A prospective buyer in the event of a business sale, merger, or restructuring.</li>
            </ul>
            <p className="mt-3 leading-relaxed text-gray-600">
              Any third parties we work with are required to protect your
              data and use it only for the purposes we specify.
            </p>
          </section>

          <section id="security" className="scroll-mt-24">
            <h2 className="text-xl font-semibold text-gray-900">
              6. Data Security & Retention
            </h2>
            <p className="mt-3 leading-relaxed text-gray-600">
              We use appropriate technical and organisational measures to
              protect your personal data against loss, misuse, or
              unauthorised access. We retain personal data only for as long
              as necessary to fulfil the purposes it was collected for,
              including to meet legal, accounting, or reporting requirements.
            </p>
          </section>

          <section id="rights" className="scroll-mt-24">
            <h2 className="text-xl font-semibold text-gray-900">
              7. Your Rights
            </h2>
            <p className="mt-3 leading-relaxed text-gray-600">
              Depending on your location, you may have the right to:
            </p>
            <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1.5 pl-5 text-gray-600 sm:grid-cols-2">
              <li className="list-disc">Access your personal data</li>
              <li className="list-disc">Correct inaccurate data</li>
              <li className="list-disc">Request erasure of your data</li>
              <li className="list-disc">Object to or restrict processing</li>
              <li className="list-disc">Request data portability</li>
              <li className="list-disc">Withdraw consent at any time</li>
            </ul>
            <p className="mt-4 leading-relaxed text-gray-600">
              To exercise any of these rights, please contact us using the
              details below. If you are unhappy with how we handle your
              data, you also have the right to lodge a complaint with your
              local data protection authority.
            </p>
          </section>

          <section id="changes" className="scroll-mt-24">
            <h2 className="text-xl font-semibold text-gray-900">
              8. Changes to This Policy
            </h2>
            <p className="mt-3 leading-relaxed text-gray-600">
              We may update this policy from time to time. Any changes will
              be posted on this page with an updated "last updated" date.
            </p>
          </section>




 





          <section
            id="contact"
            className="scroll-mt-24 rounded-2xl border border-gray-100 bg-gray-100 p-6 sm:p-8"
          >
            <h2 className="text-xl font-semibold text-gray-900">
              9. Contact Us
            </h2>
            <p className="mt-3 leading-relaxed text-gray-600">
              If you have any questions about this Privacy Policy or how we
              handle your data, please get in touch:
            </p>
            <p className="mt-4 text-sm text-gray-700">
              <span className="font-medium">Email:</span>{" "}
              <a
                href="mailto:info@affotax.com"
                className="text-blue-600 underline underline-offset-2"
              >
                info@affotax.com
              </a>
            </p>
            <p className="mt-1 text-sm text-gray-700">
              <span className="font-medium">Website:</span>{" "}
              <Link
                href="/"
                className="text-blue-600 underline underline-offset-2"
              >
                affotax.com
              </Link>
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}