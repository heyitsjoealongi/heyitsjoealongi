import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "heyitsjoealongi",
  description:
    "Leading end-to-end application development throughout the agile lifecycle.",
};

export default function Page() {
  return (
    <section>
      <h1 className="inline-block h-fit w-fit self-center uppercase text-xl min-[2000px]:text-3xl font-slab font-medium subpixel-antialiased">
        heyitsjoealongi
      </h1>
      <p className="my-3 min-[2000px]:my-6 text-xl min-[2000px]:text-3xl font-extralight subpixel-antialiased">
        Leading end-to-end application development throughout the agile
        lifecycle. Coding in JavaScript, TypeScript, Java, C#/.NET, Python, SQL,
        and NoSQL for cloud native applications and on-premises systems.
        Implementing containerized applications, microservices, data streaming
        solutions, and machine learning. Supporting cloud implementation,
        application modernization, and hybrid cloud transformation.
      </p>
    </section>
  );
}
