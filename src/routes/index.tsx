import Counter from "~/components/Counter";
import "./index.css";

import * as S from "@effect/schema/Schema";
import {
  NonEmptyString1000,
  SqliteBoolean,
  id,
  table,
  database,
} from "@evolu/common";

import { createEvolu } from "@evolu/common-web";
 

export default function Home() {

  const TodoId = id("Todo");
  type TodoId = typeof TodoId.Type;
  
  const TodoTable = table({
    id: TodoId,
    title: NonEmptyString1000,
    isCompleted: SqliteBoolean,
  });
  type TodoTable = typeof TodoTable.Type;
  
  const Database = database({
    todo: TodoTable,
  });
  type Database = typeof Database.Type;
  
  const evolu = createEvolu(Database);
  return (
    <main>
      <h1>Hello world!</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://solidjs.com" target="_blank">
          solidjs.com
        </a>{" "}
        to learn how to build Solid apps.
      </p>
    </main>
  );
}
