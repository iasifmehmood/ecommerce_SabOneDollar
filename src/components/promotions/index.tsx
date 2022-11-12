import { MessageText, PromotionsContainer } from "../../styles/promotions";
import { Box } from "@mui/system";
import { useEffect, useState, useRef } from "react";
import { Slide } from "@mui/material";

const messages: string[] = [
  "20% off on your first order!",
  "30% off on more than one order ",
  "50% off plus free delivery on 5 or more orders",
];
export default function Promotions() {
  const containerRef: any = useRef();
  const [show, setShow]: [show: any, setShow: any] = useState<any>(true);
  const [messageIndex, setMessageIndex]: [
    messageIndex: number,
    setMessageIndex: any
  ] = useState<any>(0);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);
    const intervalId: any = setInterval(() => {
      // get next message

      setMessageIndex((i: any) => (i + 1) % messages.length); // modulate to dont overflow array of messages

      // slide the message in
      setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 3000);
    }, 4000); // run after every 4sec

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <PromotionsContainer ref={containerRef} overflow="hidden">
      <Slide
        direction={show ? "left" : "right"}
        in={show}
        container={containerRef.current}
        timeout={{
          enter: 500, //slides enter takes 0.5sec
          exit: 100, //slide leaving take  1ms
        }}
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <MessageText>{messages[messageIndex]}</MessageText>
        </Box>
      </Slide>
    </PromotionsContainer>
  );
}
