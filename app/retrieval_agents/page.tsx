import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
        Bitcoin Database Risk Retrieval Agent
      </h1>
      <ul>
        <li className="hidden text-l md:block">
            <a>
              ₿
            </a>
          <span className="ml-2">
            The is an AI retrieval agent that has access to a vector store retriever as a tool as well
            as a memory. It&apos;s particularly well suited to meta-questions
            about Bitcoin risk and security.
          </span>
        </li>
        <li className="text-l">
            <a>
              ₿
            </a>
          <span className="ml-2">
            Upload some text, then try asking e.g.{" "}
            <code>What are some of the ways of compunding my Bitcoin risk security with each transaction?</code>{" "}
            below.
          </span>
        </li>
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat/retrieval_agents"
      emptyStateComponent={InfoCard}
      showIngestForm={true}
      showIntermediateStepsToggle={true}
      placeholder={
        'How do I manage the amount of security knowledge needed to continuously protect my Bitcoin?'
      }
      emoji="₿"
      titleText="Your Bitcoin expert"
    ></ChatWindow>
  );
}
