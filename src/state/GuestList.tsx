import { useState } from "react";
import styled from "styled-components";
import EventComponent from "../events/EventComponent";

const GuestListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1200px;
  width: 100%;
  flex-direction: column;

  /* margin: 25px; */
  padding: 20px 20px;
`;

const GuestList: React.FC = () => {
  // const [name, setName] = useState("");
  // const [nameOfGuest, setNameOfGuest] = useState<string[]>([]);

  // const onClick = () => {
  //   setName("");
  //   setNameOfGuest([...nameOfGuest, name]);
  // };

  return (
    <GuestListContainer>
      <EventComponent />
      {/* <GuestListInputContainer>
        <LabelWrapper>Guest List</LabelWrapper>
        <input
          placeholder="Enter Guest Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <ButtonWrapper>
          <button onClick={onClick}>Add Guest</button>
        </ButtonWrapper>
      </GuestListInputContainer> */}
      {/* <Spacer /> */}
    </GuestListContainer>
  );
};

export default GuestList;
