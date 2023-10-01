import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden ">
      <h1 className="text-3xl md:text-4xl mb-4">
         Risk Agents
      </h1>
      <ul>

        <li>
           <a>
              ₿
            </a>
          <span className="ml-2">
            This is a risk agent that has memory and access to a search engine and calculator in order to assist with transaction caluclations and fees. 
          </span>
        </li>
        <li className="text-l">
            <a>
              ₿
            </a>
          <span className="ml-2">
            Try asking <code>How much in transaction fees have I spent in the last year?</code> below.
          </span>
        </li>
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat/agents"
      emptyStateComponent={InfoCard}
      placeholder="How much is the Uberrimae Fidei wallet saving me in transaction fees?"
      titleText="Your Bitcoin expert"
      emoji="₿"
      showIntermediateStepsToggle={true}
    ></ChatWindow>
  );
}
