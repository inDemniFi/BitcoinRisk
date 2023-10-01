import { ChatWindow } from "@/components/ChatWindow";

export default function Home() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden flex items-center justify-center">
      <h1 className="text-3xl md:text-4xl mb-2">
        Uberrimae Fidei <br /> AI 
        Risk Dashboard
      </h1>
      <ul>
        <li className="text-l">
            <a>
              ₿
            </a> 
          <span className="ml-2">
            This is a risk database and dashboard built using{" "}
            <a href="https://js.langchain.com/" target="_blank">
              LangChain.js, 
            </a>{" "}
            {" "}
            <a href="https://sdk.vercel.ai/docs" target="_blank">
              Vercel AI SDK,
            </a>{" "}
            {" "}
            <a href="https://openai.com/docs" target="_blank">
              OpenAI,
            </a>{" "}
            {" "}
            <a href="https://supabase.com/docs" target="_blank">
              Supabase,
            </a>{" "}
            and {" "}
            <a href="https://nextjs.org/" target="_blank">
              Next.js
            </a>{" "}
            .
          </span>
        </li>
        <li className="hidden text-l md:block">
            <a>
              ₿
            </a>
          <span className="ml-2">
            This  will be specifically curated only to those with an{" "}
            <code>Uberrimae Fidei wallet</code>.
          </span>
        </li>
        <li className="hidden text-l md:block">
            <a>
              ₿
            </a>
          <span className="ml-2">
           Over time this database will be filled by Bitcoin experts and{" "}
            <code>Uberrimae Fidei wallet holders</code>.
          </span>
        </li>
        <li className="text-l">
            <a>
              ₿
            </a>
          <span className="ml-2">
            This is open source - so you can verify any details behind the scenes as you like {" "}
            <a
              href="https://github.com/inDemniFi/BitcoinRisk"
              target="_blank"
            >
              at our GitHub repo
            </a>
            .
          </span>
        </li>
        <li className="hidden text-l md:block">
            <a>
              ₿
            </a>
          <span className="ml-2">
           Test this out by asking our in-house AI Bitcoin expert {" "}
            <code>How secure will my Bitcoin be in an Uberrimae Fidei wallet?</code> below.
          </span>
        </li>
        
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat"
      emoji="🏴"
      titleText="Your Bitcoin Risk Expert"
      placeholder="Ask me how to protect your Bitcoin assets"
      emptyStateComponent={InfoCard}
    ></ChatWindow>
  );
}
