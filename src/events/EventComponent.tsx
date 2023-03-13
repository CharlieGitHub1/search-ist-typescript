import styled from "styled-components";

const GuestListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-width: 960px;
  width: 100%;
  flex-direction: column;
  /* margin: 25px; */
  /* padding: 15px 10px; */
`;
const GuestListInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
  max-width: 275px;
  width: 100%;
  padding: 5px auto;

  input {
    width: 350px;
    padding: 10px 10px;
    font-size: 1rem;
    margin: 5px 0;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 4px;
    background: transparent;

    &:focus {
      outline: none;
      border: 1px solid #0ff;
    }

    &::placeholder {
      color: #a0a0a0;
      opacity: 0.5;
    }
  }
`;

const Spacer = styled.div`
  height: 0.5rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  button {
    padding: 10px 20px;
    margin: 10px 0;
    border: 1px solid #fff;
    border-radius: 4px;
    background: transparent;
    cursor: pointer;
    color: #fff;

    &:hover {
      transform: scale(1.05);
      transition: all 0.3s ease;
      background: #0ff;
      color: #121127;
      border: none;
    }
  }
`;

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  font-size: 0.8rem;
  color: #fff;
  margin: 20px 0 0 0;
`;

const EventComponent: React.FC = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  const onDragStart = (event: React.DragEvent<HTMLButtonElement>) => {
    console.log(event);
  };

  return (
    <GuestListContainer>
      <GuestListInputContainer>
        <LabelWrapper>Guest List</LabelWrapper>

        <input placeholder="Enter Guest Name" onChange={onChange} />
        <ButtonWrapper>
          <Spacer />
          <button draggable onDragStart={onDragStart}>
            Search Guest
          </button>
        </ButtonWrapper>
      </GuestListInputContainer>
      {/* <Spacer /> */}
    </GuestListContainer>
  );
};

export default EventComponent;
