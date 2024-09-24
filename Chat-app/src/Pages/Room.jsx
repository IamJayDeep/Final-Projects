import { useEffect, useState } from "react";
import client, { databases } from "../AppwriteConfig";
import config from "../Config/config";
import { ID, Query } from "appwrite";
import { GoTrash } from "react-icons/go";

function Room() {
  const [messages, setMessages] = useState([]);
  const [messageBody, setMessageBody] = useState("");
  useEffect(() => {
    getMessages();

    const unsubscribed = client.subscribe(
      `databases.${config.appWriteDatabaseId}.collections.${config.appWriteCollectionId}.documents`,
      (response) => {
        // console.log(response);

        if (
          response.events.includes(
            "databases.*.collections.*.documents.*.create"
          )
        ) {
          setMessages(() => [...messages, response.payload]);
        }
        if (
          response.events.includes(
            "databases.*.collections.*.documents.*.delete"
          )
        ) {
          setMessages(() =>
            messages.filter((message) => message.$id !== response.payload.$id)
          );
        }
      }
    );
    return () => {
      unsubscribed()
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(messages);

    let payload = {
      body: messageBody,
    };
    try {
      let response = await databases.createDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        ID.unique(),
        payload
      );
      // setMessages(() => [...messages, response]);
      setMessageBody("");
    } catch (error) {
      console.log(`CreateDocument Error: ${error}`);
    }
  };

  const getMessages = async () => {
    try {
      const response = await databases.listDocuments(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        [Query.limit(20)]
      );
      setMessages(response.documents);
    } catch (error) {
      console.log(`GetMessage Error: ${error}`);
    }
  };
  const deleteMessage = async (message_id) => {
    databases.deleteDocument(
      config.appWriteDatabaseId,
      config.appWriteCollectionId,
      message_id
    );
    // setMessages(() => messages.filter((message) => message.$id !== message_id));
  };
  return (
    <main>
      <div>
        <div>
          {messages.map((message) => (
            <div key={message.$id}>
              <div>
                <p>{message.$createdAt}</p>
                <GoTrash onClick={() => deleteMessage(message.$id)} />
              </div>
              <div>
                <span>{message.body}</span>
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <textarea
              required
              maxLength={1000}
              onChange={(e) => setMessageBody(e.target.value)}
              value={messageBody}
            ></textarea>
          </div>
          <div>
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>
    </main>
  );
}

export default Room;
