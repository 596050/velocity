import React, { useCallback, useEffect, useState } from "react";
import { Box } from "@rebass/grid";

import { createMessage } from "./api";
import {
  Card,
  Button,
  Icon,
  IconTypes,
  Main,
  TextArea,
  Wrapper,
  Navigation
} from "./components";
import { useReducerContext, SET_MESSAGES } from "./store";

import { theme } from "./theme";
import { Title } from "./App.styles";
import "./App.css";

const Nav = () => {
  return (
    <Navigation
      left={<Icon name={IconTypes.Logo} width="100px" height="60px" />}
      right={
        <Title>
          <Box mx={theme.spacers.size4}>Messages</Box>
        </Title>
      }
    ></Navigation>
  );
};

function App() {
  const { state = {}, dispatch } = useReducerContext();
  const [messageBody, setMessageBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const messages = localStorage.getItem("messages") || [];
    if (messages && messages.length) {
      dispatch({ type: SET_MESSAGES, payload: JSON.parse(messages) });
    }
  }, []);

  useEffect(() => {
    // this is unsecure and would need to be an issue which is resolved
    if (state && state.messages) {
      localStorage.setItem("messages", JSON.stringify(state.messages));
    }
  }, [state, state.messages]);

  const handleChange = useCallback(
    e => {
      if (e.target.value) {
        setMessageBody(e.target.value);
      }
    },
    [setMessageBody]
  );

  const handleClick = useCallback(() => {
    if (messageBody) {
      setIsLoading(true);
      createMessage({
        data: {
          message: messageBody,
          localId: "e177a69d-6258-44ec-a16f-4004042ba453"
        }
      })
        .then(messages => {
          dispatch({ type: SET_MESSAGES, payload: messages });

          setMessageBody("");
          setIsLoading(false);
        })
        .catch(e => {
          console.error("error", e);
          setIsLoading(false);
          alert("Message not submitted");
        });
    }
  }, [dispatch, messageBody, setIsLoading]);

  return (
    <>
      <Nav />
      <Main>
        <Wrapper>
          <TextArea
            value={messageBody}
            label="Please enter your message here:"
            onChange={e => handleChange(e)}
          ></TextArea>
          <Button disabled={isLoading} onClick={handleClick}>
            Send Message
          </Button>
          <Box my={theme.spacers.size40}>
            {(state.messages || []).map(messageObj => {
              return (
                <Box key={messageObj.id} mb={theme.spacers.size4}>
                  <Card>{messageObj.message}</Card>
                </Box>
              );
            })}
          </Box>
        </Wrapper>
      </Main>
    </>
  );
}

export default App;
