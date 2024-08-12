import ButtonElement from "./Components/ButtonElement";
import React from "react";

//@ts-ignore
import { state$ } from "@base/utility";
import { IAppData } from "../types";

export default function Root(props) {
  const [data, setData] = React.useState<IAppData>({ app1: [], app2: [] });

  React.useEffect(() => {
    state$.subscribe((item: IAppData) => setData(item));
  });

  const triggerevent = () => {
    state$.subscribe((item) => console.log("click From App2", item));
    state$.next({ ...data, app1: [...data.app1, new Date().toString()] });
  };

  return (
    <section>
      <p>{props.name} is mounted!</p>
      <span>
        <ButtonElement type="input" onClick={triggerevent}>
          Send message to app 1
        </ButtonElement>
      </span>
      <ul>
        {data.app2.map((item, index) => (
          <li key={index}>Hello from App 1 - {item}</li>
        ))}
      </ul>
    </section>
  );
}
