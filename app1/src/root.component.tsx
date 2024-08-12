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
    state$.next({ ...data, app2: [...data.app2, new Date().toString()] });
  };

  return (
    <section>
      <p>{props.name} is mounted!</p>
      <span>
        <ButtonElement type="input" onClick={triggerevent}>
          Send message to app 2
        </ButtonElement>
      </span>
      <ul>
        {data.app1.map((item, index) => (
          <li key={index}>Hello from App 2 - {item}</li>
        ))}
      </ul>
    </section>
  );
}
