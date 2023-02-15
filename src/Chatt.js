import { useState } from "react";
import Button from '@mui/material/Button';
import ChattMessage from "./Chattmessage";
import { analyze } from "./utiles";

export function Chatt() {
  //   const steps=[
  //     {
  //       id:"greet",
  //       message:"hello,welcome to pet shop",
  //       trigger:"ask name"
  //     },{
  //       id:"ask name",
  //       message:"please enter the name",
  //       trigger:"waiting1"
  //     },{
  //       id:"waiting1",
  //       user:true,
  //       trigger:"name"
  //     },
  //     {
  //       id:"name",
  //       message:"hi{previousvalue},please select your issue",
  //       trigger:"issues"
  //     },
  //     {
  // id:"issuses",
  // Option:[
  //   {
  //     value:"react",label:"react",trigger:"react"
  //   },
  //   {
  //     value:"react",label:"angular",trigger:"react"
  //   }
  // ]
  //     },
  //     {
  //       id:"react",
  //       message:"thaks for telling your issues",
  //       end:true
  //     },{
  //       id:"angular",
  //       message:"thaks for telling your issues",
  //       end:true
  //     }
  //   ]
  const [message, setMessage] = useState([
    {
      message: 'hi welcome to pet shop your name'
    }
  ]);
  const [text, setText] = useState('');
  const onSend = () => {
    let list = [...message, { message: text, user: true }];
    if (list.length > 2) {
      const reply = analyze(text);
      list = [
        ...list, { message: reply }
      ];
    } else {
      list = [
        ...list,
        {
          message: `hi,${text}`,
        },
        {
          message: 'how can i help you?'
        }
      ];
    }
    setMessage(list);
    setText("");
    setTimeout(() => {
      document.querySelector('#copyright').scrollIntoView();
    }, 1);
  };
  return (
    <div className="victory">
      <h2>Chatt Bot</h2>
      <div className="chat-message">
        {message.length > 0 && message.map((data) => <ChattMessage {...data} />)}
        <div className="d-flex mt-2">
          <input type='text' className="form-control" value={text} onChange={(e) => setText(e.target.value)} />
          <Button type="primary" className="ms-2" onClick={onSend}>send</Button>
        </div>
        <div id="copyright">copyright reserverd content</div>
      </div>
    </div>
  );

}
