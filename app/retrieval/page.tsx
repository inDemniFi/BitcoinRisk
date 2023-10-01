import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
         Bitcoin Risk Retrieval Chain 
      </h1>
      <ul>
        <li className="hidden text-l md:block">
            <a>
              ₿
            </a>

          <span className="ml-2">The chain works in two steps:</span>
          <ul>
            <li className="ml-4">
              1️⃣
              <span className="ml-2">
                First, it rephrases the input question into a
                &quot;standalone&quot; question.
              </span>
            </li>
            <li className="ml-4">
              2️⃣
              <span className="ml-2">
                Then, it queries the retriever for documents similar to the
                dereferenced question and composes an answer.
              </span>
            </li>
          </ul>
            <a>
              ₿
            </a>
          <span className="ml-2">
            Upload some text, then try asking {" "}
            <code>What are some ways of improving my Bitcoin security?</code>{" "}
            below.
          </span>
        </li>
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat/retrieval"
      emptyStateComponent={InfoCard}
      showIngestForm={true}
      placeholder={
        'Find me relevant documents to a particular crypto exchange.'
      }
      emoji="₿"
      titleText="Your resident Bitcoin expert"
    ></ChatWindow>
  );
}
