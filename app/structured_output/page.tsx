import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden flex items-center justify-center">
      <h1 className="text-3xl md:text-4xl mb-4">
       Structured Output
      </h1>
      <ul>
        <li className="text-l">
            <a>
              ₿
            </a> 
          <span className="ml-2">
            This showcases structured responses so that we can integrate our live risk data models
            into your <code>Uberrimae Fidei wallet</code>.
          </span>
        </li>
        <li>
            <a>
              ₿
            </a> 
          <span className="ml-2">
            Langchain formats the input schema and passes it into an OpenAI
            Functions model, then parses the output.
          </span>
        </li>
        <li className="hidden text-l md:block">
            <a>
              ₿
            </a> 
          <span className="ml-2">
            It uses a lightweight, convenient, and powerful{" "}
            <a href="https://zod.dev/" target="_blank">
              schema validation library called Zod
            </a>{" "}
            to define schemas, but you can initialize the chain with JSON schema
            too.
          </span>
        </li>
        <li className="text-l">
            <a>
              ₿
            </a> 
          <span className="ml-2">
            Test it out by typing <code>How secure will my Bitcoin be in an Uberrimae Fidei wallet?</code> below.
          </span>
        </li>
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat/structured_output"
      emptyStateComponent={InfoCard}
      placeholder={`No matter what you type here, I'll always return the same JSON object with the same structure!`}
      emoji="₿"
      titleText="Your Bitcoin expert"
    ></ChatWindow>
  );
}
